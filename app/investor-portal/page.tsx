"use client";
import { useEffect, useState } from "react";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  usePublicClient,
  useBalance,
  useChainId,
} from "wagmi";
import { formatUnits } from "viem";

import WalletConnect from "@/components/WalletConnect";
import ComingSoon from "@/components/ComingSoon";
import { useDevopsPrice } from "@/lib/hooks/useDevopsPrice";
import { useDevopsTokenAddress } from "@/lib/useDevopsTokenAddress";
import { useDevopsVestingAddress } from "@/lib/useDevopsVestingAddress";

const vestingAbi = [
  {
    name: "getVestingCount",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "contributor", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "vestings",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "contributor", type: "address" },
      { name: "vestingId", type: "uint256" },
    ],
    outputs: [
      { name: "totalAmount", type: "uint256" },
      { name: "released", type: "uint256" },
      { name: "start", type: "uint64" },
      { name: "cliff", type: "uint64" },
      { name: "duration", type: "uint64" },
      { name: "revoked", type: "bool" },
    ],
  },
  {
    name: "releasable",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "contributor", type: "address" },
      { name: "vestingId", type: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "release",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "vestingId", type: "uint256" }],
    outputs: [],
  },
] as const;

function BalanceDisplay() {
  const { address } = useAccount();
  const tokenAddress = useDevopsTokenAddress();
  const { devopsUsd, refetch: refetchPrice } = useDevopsPrice();

  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address,
    token: tokenAddress,
  });

  const formatted = balanceData?.formatted ? parseFloat(balanceData.formatted) : 0;
  const usd = devopsUsd && formatted ? formatted * devopsUsd : null;

  return (
    <div className="flex items-center gap-3">
      {balanceLoading ? (
        <div className="h-4 w-24 bg-cyan-700/30 rounded shimmer" />
      ) : (
        <>
          <span className="font-semibold">
            {formatted.toLocaleString(undefined, { maximumFractionDigits: 2 })} DEVOPS
          </span>
          {devopsUsd ? (
            <span className="text-gray-400 text-xs">
              ≈ ${usd?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          ) : (
            <button
              onClick={() => refetchPrice()}
              className="text-xs text-cyan-300 underline"
            >
              Refresh price
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default function InvestorPortalPage() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();
  const chainId = useChainId();

  const tokenAddress = useDevopsTokenAddress();
  const vestingAddress = useDevopsVestingAddress();

  const [vestingCount, setVestingCount] = useState(0);
  const [vestingData, setVestingData] = useState<any[]>([]);
  const [releasableData, setReleasableData] = useState<Record<number, bigint>>({});
  const [pendingIds, setPendingIds] = useState<Record<number, boolean>>({});
  const [claimedIds, setClaimedIds] = useState<Record<number, boolean>>({});

  const { data: countData } = useReadContract({
    abi: vestingAbi,
    address: vestingAddress,
    functionName: "getVestingCount",
    args: address ? [address] : undefined,
    query: { enabled: !!address && !!vestingAddress },
  });

  useEffect(() => {
    if (!address || !countData) return;
    setVestingCount(Number(countData));
  }, [countData, address]);

  useEffect(() => {
    const fetchData = async () => {
      if (!publicClient || !address || vestingCount === 0 || !vestingAddress) return;

      const vestingCalls = [];
      const releasableCalls = [];
      for (let i = 0; i < vestingCount; i++) {
        vestingCalls.push({
          address: vestingAddress,
          abi: vestingAbi,
          functionName: "vestings" as const,
          args: [address, BigInt(i)],
        });
        releasableCalls.push({
          address: vestingAddress,
          abi: vestingAbi,
          functionName: "releasable" as const,
          args: [address, BigInt(i)],
        });
      }

      try {
        const supportsMulticall = !!publicClient.chain?.contracts?.multicall3?.address;
        let vestingResults: any[] = [];
        let releasableResults: any[] = [];

        if (supportsMulticall) {
          const [vRes, rRes] = await Promise.all([
            publicClient.multicall({ contracts: vestingCalls as any }),
            publicClient.multicall({ contracts: releasableCalls as any }),
          ]);
          vestingResults = [...vRes];
          releasableResults = [...rRes];
        } else {
          console.warn("Multicall not supported — sequential fallback.");
          vestingResults = await Promise.allSettled(
            vestingCalls.map((c) => publicClient.readContract(c as any).catch(() => null))
          );
          releasableResults = await Promise.allSettled(
            releasableCalls.map((c) => publicClient.readContract(c as any).catch(() => null))
          );
        }

        const vestingCleaned: any[] = [];
        const releasablesCleaned: Record<number, bigint> = {};

        vestingResults.forEach((r: any, i: number) => {
          const result = r?.result ?? r?.value ?? null;
          if (result) vestingCleaned.push({ id: i, v: result });
        });

        releasableResults.forEach((r: any, i: number) => {
          const result = (r?.result ?? r?.value ?? 0n) as bigint;
          releasablesCleaned[i] = result;
        });

        setVestingData(vestingCleaned);
        setReleasableData(releasablesCleaned);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, [publicClient, address, vestingCount, vestingAddress]);

  const handleClaim = async (id: number) => {
    try {
      setPendingIds((prev) => ({ ...prev, [id]: true }));

      const txHash = await writeContractAsync({
        abi: vestingAbi,
        address: vestingAddress,
        functionName: "release",
        args: [BigInt(id)],
      });

      console.log(`Transaction sent for vesting ${id}:`, txHash);

      if (!publicClient) throw new Error("Public client not initialized");

      const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });
      if (receipt.status === "success") {
        setClaimedIds((prev) => ({ ...prev, [id]: true }));
        alert(`Claim for vesting #${id} confirmed!`);
      } else {
        alert(`Claim for vesting #${id} failed or reverted.`);
      }
    } catch (err: any) {
      console.error(`Claim error for vesting ${id}:`, err);
      alert(`Claim for vesting #${id} failed: ${err?.message || err}`);
    } finally {
      setPendingIds((prev) => ({ ...prev, [id]: false }));
    }
  };

  const TRADING_LIVE =
    process.env.NEXT_PUBLIC_TRADING_LIVE === "true" ||
    process.env.NODE_ENV !== "production";

  const comingSoonEl = <ComingSoon />;

  return (
    <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">$DEVOPS Investor Portal</h1>

      <div className="mb-6 bg-gray-800 border border-cyan-700/40 text-gray-300 rounded-lg p-4 text-sm text-left shadow-sm">
        <p className="text-cyan-300 font-semibold mb-1">
          Security Notice — Connecting Your Wallet
        </p>
        <p>
          Connecting your wallet allows this site to read your public blockchain address and
          display your balances, vesting schedules, and eligibility for claims or NFT mints. The
          connection itself is <strong>read-only</strong> — it does <strong>not</strong> give this
          site access to move or withdraw your funds.
        </p>
        <p className="mt-2">
          When you perform an action (such as claiming vested tokens), your wallet will prompt you
          to confirm before anything is sent to the blockchain.
        </p>
      </div>

      <div className="mb-4 flex flex-col items-center gap-3">
        <WalletConnect />
        {isConnected && (
          <div className="bg-gray-800 text-cyan-300 rounded-lg px-4 py-2 text-sm shadow border border-cyan-700/40 flex items-center gap-3">
            <BalanceDisplay />
          </div>
        )}
      </div>

      {!TRADING_LIVE ? (
        comingSoonEl
      ) : !isConnected ? (
        <p className="text-cyan-300">Connect your wallet to continue</p>
      ) : vestingCount === 0 ? (
        <p className="text-gray-400">No vesting schedules found for this wallet.</p>
      ) : (
        <div className="space-y-6">
          {vestingData.map((entry) => {
            const v = entry.v;
            const id = entry.id;
            const total = Array.isArray(v) ? v[0] : v.totalAmount;
            const released = Array.isArray(v) ? v[1] : v.released;
            const cliff = Array.isArray(v) ? v[3] : v.cliff;
            const duration = Array.isArray(v) ? v[4] : v.duration;
            const revoked = Array.isArray(v) ? v[5] : v.revoked;
            const releasable = releasableData[id] ?? 0n;
            const endDate = (Number(cliff) + Number(duration)) * 1000;

            return (
              <div
                key={id}
                className="border border-teal-600 p-5 rounded-lg bg-gray-800 text-left"
              >
                <h2 className="text-teal-400 font-semibold text-lg mb-2">
                  Vesting ID #{id}
                </h2>
                <p>
                  <span className="font-semibold">Total:</span>{" "}
                  {formatUnits(total ?? 0n, 18)} DEVOPS
                </p>
                <p>
                  <span className="font-semibold">Released:</span>{" "}
                  {formatUnits(released ?? 0n, 18)} DEVOPS
                </p>
                <p>
                  <span className="font-semibold">Releasable:</span>{" "}
                  {formatUnits(releasable, 18)} DEVOPS
                </p>
                <p>
                  <span className="font-semibold">Cliff Date:</span>{" "}
                  {new Date(Number(cliff) * 1000).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">End Date:</span>{" "}
                  {new Date(endDate).toLocaleDateString()}
                </p>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => handleClaim(id)}
                    disabled={pendingIds[id] || releasable === 0n || revoked}
                    className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded"
                  >
                    {pendingIds[id] ? "Processing..." : "Claim Available Tokens"}
                  </button>
                  {claimedIds[id] && (
                    <p className="text-green-400 mt-2">
                      ✅ Claim successful! Balances updated.
                    </p>
                  )}
                  {revoked && (
                    <p className="text-red-400 mt-2">
                      ⚠️ This vesting has been revoked.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
