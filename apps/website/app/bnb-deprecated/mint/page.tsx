'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import ComingSoonComponent from '@/components/ComingSoon';
import { parseEther } from 'viem';

const CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_MINT_CONTRACT_ADDRESS as `0x${string}`;

const ABI = [
  {
    name: 'mintBadge',
    type: 'function',
    stateMutability: 'payable',
    inputs: [],
    outputs: [],
  },
] as const;

export default function MintPage() {
  const { isConnected } = useAccount();
  const [status, setStatus] = useState<string>('');
  const { writeContractAsync, isPending } = useWriteContract();

  const TRADING_LIVE =
    process.env.NEXT_PUBLIC_TRADING_LIVE === 'true' ||
    process.env.NODE_ENV !== 'production';

  const mintPrice = process.env.NEXT_PUBLIC_MINT_PRICE_ETH || '0.01';

  const onMint = async () => {
    if (!CONTRACT_ADDRESS) {
      alert('Mint contract address is not configured.');
      return;
    }
    try {
      setStatus('Minting... confirm in wallet');
      await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: ABI as any,
        functionName: 'mintBadge',
        args: [],
        value: parseEther(mintPrice),
      });
      setStatus('Mint submitted. Waiting for confirmation...');
    } catch (e) {
      const err = e as { shortMessage?: string; message?: string } | undefined;
      setStatus(
        'Transaction failed: ' +
          (err?.shortMessage || err?.message || 'unknown error')
      );
    }
  };

  if (!TRADING_LIVE) return <ComingSoonComponent />;

  return (
    <section className="max-w-2xl mx-auto mt-10 p-8 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-3">
        Ship-It Badge NFT
      </h1>
      <p className="text-gray-300 mb-2">
        Each mint funds open-source DevOps projects via the Ship-It Fund.
      </p>
      <p className="text-gray-400 text-sm mb-6">Mint Price: {mintPrice} BNB</p>

      {!isConnected ? (
        <p className="text-cyan-300">
          Connect your wallet in the header to mint.
        </p>
      ) : (
        <button
          className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg shadow disabled:opacity-70"
          onClick={onMint}
          disabled={isPending}
        >
          {isPending ? 'Minting...' : 'Mint Ship-It Badge'}
        </button>
      )}

      {status && <p className="text-cyan-300 mt-4">{status}</p>}
    </section>
  );
}
