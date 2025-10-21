'use client';

import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';
import { useCallback, useState } from 'react';

type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};
import { useDevopsTokenAddress } from '@/lib/useDevopsTokenAddress';

// Environment-based config
const TARGET_CHAIN_ID = Number(process.env.NEXT_PUBLIC_BSC_CHAIN_ID || 56);

// Global flag controlling whether trading is live
const TRADING_LIVE =
  process.env.NEXT_PUBLIC_TRADING_LIVE === 'true' ||
  process.env.NODE_ENV !== 'production'; // auto true in local dev

export default function BuyPage() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [adding, setAdding] = useState(false);

  const isOnTargetChain = chainId === TARGET_CHAIN_ID;
  const isTestnet = chainId === 97;
  const TOKEN_ADDRESS = useDevopsTokenAddress();

  // 🧩 Add + Switch to BSC (Mainnet/Testnet)
  const addBscNetwork = useCallback(async () => {
    const eth =
      typeof window !== 'undefined'
        ? (window as unknown as { ethereum?: EthereumProvider }).ethereum
        : undefined;
    if (!eth) return alert('MetaMask not detected.');

    const params = isTestnet
      ? {
          chainId: '0x61',
          chainName: 'BNB Smart Chain Testnet',
          nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          blockExplorerUrls: ['https://testnet.bscscan.com'],
        }
      : {
          chainId: '0x38',
          chainName: 'BNB Smart Chain',
          nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
          rpcUrls: ['https://bsc-dataseed.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com/'],
        };

    try {
      await eth.request({
        method: 'wallet_addEthereumChain',
        params: [params],
      });
      await eth.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: params.chainId }],
      });
      alert(`${params.chainName} added and selected in MetaMask.`);
    } catch (err) {
      const e = err as { message?: string } | undefined;
      console.error('Failed to add/switch network:', err);
      alert(e?.message ?? 'Failed to add BNB Smart Chain.');
    }
  }, [isTestnet]);

  // 🧩 Add DEVOPS token to MetaMask
  const addTokenToMetaMask = useCallback(async () => {
    if (!TOKEN_ADDRESS) {
      alert('Token address is not configured. Please set your env vars.');
      return;
    }
    const eth =
      typeof window !== 'undefined'
        ? (window as unknown as { ethereum?: EthereumProvider }).ethereum
        : undefined;
    if (!eth) {
      alert(
        'MetaMask (or a compatible wallet) was not detected in this browser.'
      );
      return;
    }
    try {
      setAdding(true);
      const watchParams: unknown[] = [
        {
          type: 'ERC20',
          options: {
            address: TOKEN_ADDRESS,
            symbol: 'DEVOPS',
            decimals: 18,
          },
        },
      ];

      await eth.request({ method: 'wallet_watchAsset', params: watchParams });
    } catch (err) {
      const e = err as { message?: string } | undefined;
      console.error('Failed to add token:', err);
      alert(e?.message ?? 'Failed to add token to MetaMask.');
    } finally {
      setAdding(false);
    }
  }, [TOKEN_ADDRESS]);

  return (
    <section className="container max-w-3xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">$DEVOPS — Buy</h1>

      {/* Connection / Network status */}
      <div className="mb-6 space-y-3">
        {!isConnected ? (
          <p className="text-cyan-300">
            Connect your wallet (top-right) to get started.
          </p>
        ) : !isOnTargetChain ? (
          <div className="flex flex-col items-center gap-3">
            <p className="text-yellow-300 text-sm">
              You’re on the wrong network. Please switch to{' '}
              {isTestnet ? 'BSC Testnet' : 'BNB Smart Chain'}.
            </p>
            <button
              onClick={() => switchChain?.({ chainId: TARGET_CHAIN_ID })}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded"
            >
              Switch Network
            </button>
            <button
              onClick={addBscNetwork}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded"
            >
              Add & Switch to {isTestnet ? 'BSC Testnet' : 'BNB Smart Chain'}
            </button>
          </div>
        ) : (
          <p className="text-green-300">
            Wallet connected on {isTestnet ? 'BSC Testnet' : 'BNB Smart Chain'}{' '}
            ✅
          </p>
        )}
      </div>

      {/* Buy Section */}
      <div className="text-left space-y-6">
        {TRADING_LIVE ? (
          // ✅ Embedded PancakeSwap Widget
          <div className="bg-gray-800 border border-cyan-700/40 rounded-lg p-5">
            <h2 className="text-teal-400 font-semibold mb-2">
              Buy via PancakeSwap (Recommended)
            </h2>
            <p className="text-gray-300 mb-4">
              Use the embedded PancakeSwap widget below to swap BNB → $DEVOPS
              directly on this page. Confirm your wallet is connected to{' '}
              {isTestnet ? 'BSC Testnet' : 'BNB Smart Chain'} before swapping.
            </p>

            <iframe
              src={`https://pancakeswap.finance/swap?chain=${
                isTestnet ? 'bscTestnet' : 'bsc'
              }&outputCurrency=${TOKEN_ADDRESS ?? '0xYOUR_TOKEN_ADDRESS'}`}
              width="100%"
              height="680"
              style={{
                border: '1px solid rgba(34,211,238,0.3)',
                borderRadius: '12px',
                background: '#0f172a',
              }}
              allow="clipboard-write; payment; fullscreen"
            />

            <p className="text-xs text-gray-400 mt-3">
              Tip: You’ll need a little BNB for gas. If your swap fails, try
              slightly higher slippage (0.5–1%).
            </p>
          </div>
        ) : (
          <ComingSoon>
            <p className="text-sm text-gray-500">
              Stay tuned to{' '}
              <Link href="/" className="text-cyan-300 underline">
                devopscoin.ai
              </Link>{' '}
              and the{' '}
              <Link href="/investor-portal" className="text-cyan-300 underline">
                Investor Portal
              </Link>{' '}
              for the official launch announcement.
            </p>
          </ComingSoon>
        )}

        {/* Add token to wallet */}
        <div className="bg-gray-800 border border-cyan-700/40 rounded-lg p-5">
          <h3 className="text-teal-400 font-semibold mb-2">
            Make $DEVOPS visible in your wallet
          </h3>
          <p className="text-gray-300">
            After your first purchase, add the token to your wallet so your
            balance shows up.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={addTokenToMetaMask}
              className="px-4 py-2 bg-indigo-400 hover:bg-indigo-300 text-black font-semibold rounded disabled:opacity-60"
              disabled={adding}
            >
              {adding ? 'Adding…' : 'Add $DEVOPS to MetaMask'}
            </button>
            <code className="bg-gray-900 text-cyan-300 px-3 py-2 rounded text-sm">
              {TOKEN_ADDRESS ?? '0xYOUR_TOKEN_ADDRESS'}
            </code>
          </div>
          {!TOKEN_ADDRESS && (
            <p className="text-red-400 text-xs mt-2">
              Token address not configured — check your environment variables.
            </p>
          )}
        </div>

        {/* Manual flow link */}
        <div className="text-gray-300">
          Prefer a step-by-step guide?{' '}
          <Link href="/how-to-buy" className="text-cyan-300 underline">
            See manual instructions
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
