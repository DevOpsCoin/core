"use client";
import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import ComingSoonComponent from "@/components/ComingSoon";
import { parseEther } from "viem";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;
const ABI = [
  { name: "mintBadge", type: "function", stateMutability: "payable", inputs: [], outputs: [] }
] as const;

export default function MintPage() {
  const { address, isConnected } = useAccount();
  const [status, setStatus] = useState<string>("");

  const { writeContract, isPending } = useWriteContract();

  const TRADING_LIVE = process.env.NEXT_PUBLIC_TRADING_LIVE === "true" || process.env.NODE_ENV !== "production";

  // shared component
  const ComingSoon = <ComingSoonComponent />;

  const onMint = async () => {
    try {
      setStatus("Minting... confirm in wallet");
      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: ABI as any,
        functionName: "mintBadge",
        args: [],
        value: parseEther(process.env.NEXT_PUBLIC_MINT_PRICE_ETH || "0.0833"),
      });
      setStatus("Mint submitted. Waiting for confirmation...");
    } catch (e: any) {
      setStatus("Transaction failed: " + (e?.shortMessage || e?.message || "unknown error"));
    }
  };

  if (!TRADING_LIVE) return ComingSoon;

  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-3">Ship-It Badge NFT</h1>
      <p className="text-gray-300 mb-6">
        Each mint funds open-source DevOps projects via the Ship-It Fund.
      </p>
      {!isConnected ? (
        <p className="text-cyan-300">Connect your wallet in the header to mint.</p>
      ) : (
        <button className="btn" onClick={onMint} disabled={isPending}>
          {isPending ? "Minting..." : "Mint Ship-It Badge"}
        </button>
      )}
      <p className="text-cyan-300 mt-4">{status}</p>
    </section>
  );
}
