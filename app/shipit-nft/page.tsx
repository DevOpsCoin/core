"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransactionReceipt,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ComingSoon from "@/components/ComingSoon";

const CONTRACT_ADDRESS = "0xYOUR_DEPLOYED_NFT_CONTRACT";
const ABI = [
  {
    inputs: [],
    name: "mintPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintBadge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

export default function ShipItNFTPage() {
  const { address, isConnected } = useAccount();
  const [mintStatus, setMintStatus] = useState("");
  const [gallery, setGallery] = useState<any[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(false);

  const { data: mintPriceData } = useContractRead({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: "mintPrice",
    query: { enabled: isConnected },
  });
  const mintPrice = mintPriceData ? (Number(mintPriceData) / 1e18).toString() : null;

  const {
    data: mintTxData,
    isPending: isMinting,
    writeContract: mintBadge,
    error: mintError,
  } = useContractWrite();

  const { data: txReceipt, isSuccess: txSuccess, isError: txError } =
    useWaitForTransactionReceipt({
      hash: mintTxData,
      query: { enabled: Boolean(mintTxData) },
    });

  useEffect(() => {
    if (txSuccess) {
      setMintStatus("✅ Mint successful! Refreshing gallery...");
      loadOwnedNFTs();
    } else if (txError) {
      setMintStatus("❌ Mint failed or canceled.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txSuccess, txError]);

  const loadOwnedNFTs = useCallback(async () => {
    if (!isConnected || !address) return;
    setLoadingGallery(true);
    try {
      const balanceResult = await fetch(`/api/nft-balance?address=${address}`).then((r) =>
        r.json()
      );
      const balance = balanceResult.balance;
      if (!balance || balance === 0) {
        setGallery([]);
        setLoadingGallery(false);
        return;
      }
      const nfts = [];
      for (let i = 0; i < balance; i++) {
        const tokenIdResult = await fetch(
          `/api/nft-tokenid?address=${address}&index=${i}`
        ).then((r) => r.json());
        const tokenId = tokenIdResult.tokenId;
        const tokenURIResult = await fetch(
          `/api/nft-tokenuri?tokenId=${tokenId}`
        ).then((r) => r.json());
        const uri = tokenURIResult.tokenURI;
        const meta = await fetch(uri).then((r) => r.json());
        nfts.push({ tokenId, ...meta });
      }
      setGallery(nfts);
    } catch {
      setGallery([]);
    }
    setLoadingGallery(false);
  }, [isConnected, address]);

  useEffect(() => {
    if (isConnected) loadOwnedNFTs();
  }, [isConnected, address, loadOwnedNFTs]);

  const TRADING_LIVE = process.env.NEXT_PUBLIC_TRADING_LIVE === "true" || process.env.NODE_ENV !== "production";

  const comingSoonEl = (
    <ComingSoon />
  );

  if (!TRADING_LIVE) return comingSoonEl;

  return (
    <section className="container max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Ship-It Badge — The First Commit</h1>
      <p className="text-gray-300 mb-6">
        Mint your limited-edition <strong>The First Commit</strong> badge — the very first entry
        in the <strong>Ship-It Badge</strong> series. Each mint supports the{" "}
        <Link href="/shipit" className="text-cyan-400 underline">
          Ship-It Fund
        </Link>{" "}
        to back open-source DevOps projects and independent builders.
      </p>

      <div className="bg-gray-800 border border-cyan-700/40 rounded-lg shadow-inner p-6 text-left mb-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/metadata/images/shipit1.png"
            alt="Ship-It Badge — The First Commit"
            className="rounded-lg w-64 shadow-lg border border-cyan-700/50"
          />
          <div>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
              The First Commit — Limited Edition
            </h2>
            <p className="text-gray-300 mb-3">
              This badge marks the <strong>founding supporters</strong> of DevOpsCoin — those who
              believed in the mission from the start. Only a limited number will ever be minted.
            </p>
            <p className="text-gray-400 mb-3">
              Each on-chain mint is an immutable proof of early contribution to the DevOps culture
              and the Ship-It Fund. A digital artifact for the engineers who <em>ship first</em>.
            </p>
            <p className="text-gray-400 italic text-sm">
              “Every deploy deserves a badge.” — RootSignal
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#mint-section" className="nav-btn glow-cyan text-lg px-6 py-3 inline-block">
            Mint Yours — Fund Open DevOps
          </a>
        </div>
      </div>

      <div className="mb-4 flex flex-col items-center gap-2">
        <ConnectButton />
        <div className="text-cyan-400">
          {isConnected ? `Connected: ${address}` : "Not connected"}
        </div>
      </div>

      <div id="mint-section" className={isConnected ? "mt-8" : "hidden mt-8"}>
        <p className="text-gray-300 mb-2">
          Mint Price: <span>{mintPrice ?? "Loading..."}</span> BNB
        </p>
        <button
          onClick={() => {
            setMintStatus("");
            mintBadge?.({
              abi: ABI,
              address: CONTRACT_ADDRESS,
              functionName: "mintBadge",
              value: mintPriceData ? BigInt(mintPriceData as string) : undefined,
            });
          }}
          className="nav-btn glow-cyan"
          disabled={isMinting || !mintBadge}
        >
          {isMinting ? "Minting..." : "Mint The First Commit"}
        </button>
        <p className="mt-4 text-cyan-300">{mintStatus}</p>
        {mintError && <p className="text-red-400 text-sm mt-2">{mintError.message}</p>}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loadingGallery ? (
          <p className="text-gray-400 col-span-full">Loading your badges...</p>
        ) : gallery.length === 0 ? (
          <p className="text-gray-400 col-span-full">
            You don’t own any Ship-It Badges yet.
          </p>
        ) : (
          gallery.map((nft) => (
            <div
              key={nft.tokenId}
              className="bg-gray-800 border border-cyan-700/40 rounded-lg shadow-md p-3 text-center"
            >
              <img
                src={nft.image}
                alt={nft.name}
                className="rounded-lg mb-3 glow-cyan"
              />
              <h3 className="text-cyan-300 font-semibold">{nft.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{nft.description}</p>
              <p className="text-xs text-gray-500">Token ID: {nft.tokenId}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
