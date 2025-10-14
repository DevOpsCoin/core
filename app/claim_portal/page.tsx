// app/claim_portal/page.tsx - Ported from v1site/claim_portal.html, using wagmi for wallet connection
"use client";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function ClaimPortalPage() {
  const { address, isConnected } = useAccount();
  // Placeholder for vesting/claim logic integration
  // You would use wagmi's useContractRead/useContractWrite for real contract calls

  return (
    <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center">
      <div className="max-w-xl mx-auto p-0">
      <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">$DEVOPS Claim / Vesting Portal</h1>

      {!isConnected ? (
        <div className="w-full mb-4">
          <p className="text-center text-cyan-300 mb-2">Connect your wallet to continue</p>
          {/* The wallet connect button is in the header globally */}
        </div>
      ) : (
        <div className="text-center mb-6">
          <p className="text-gray-300">Connected Wallet:</p>
          <p className="font-mono text-teal-400">{address}</p>
        </div>
      )}

      {/* Vesting info and claim button would go here, using wagmi contract hooks */}
      <div className="mt-8 text-center text-gray-400 italic">
        Vesting and claim functionality coming soon.<br />
        (This will use your connected wallet and on-chain data.)
      </div>
      </div>
    </section>
  );
}
