'use client';

import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Defer importing rainbowkit/wagmi to runtime to avoid server/build-time access
// of browser-only APIs (indexedDB/localStorage) which can cause build errors.

// ---------------------------------------------
// BNB Smart Chain mainnet & testnet configs
// ---------------------------------------------
const bsc = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://bsc-dataseed.binance.org/'] },
    public: { http: ['https://bsc-dataseed.binance.org/'] },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
  contracts: {},
} as const;

const bscTestnet = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    name: 'tBNB',
    symbol: 'tBNB',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://data-seed-prebsc-1-s1.binance.org:8545/'] },
    public: { http: ['https://data-seed-prebsc-1-s1.binance.org:8545/'] },
  },
  blockExplorers: {
    default: { name: 'BscScan Testnet', url: 'https://testnet.bscscan.com' },
  },
  contracts: {},
} as const;

const queryClient = new QueryClient();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [providersEl, setProvidersEl] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        const rawProjectId =
          process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';
        const projectId = rawProjectId.replace(/[^a-fA-F0-9]/g, '');

        if (!projectId || projectId.length !== 32) {
          console.warn(
            'Invalid or missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID; skipping wallet providers.'
          );
          if (mounted) setReady(true);
          return;
        }

        // Dynamically import RainbowKit + wagmi modules and RainbowKit CSS on client.
        const [rainbowkitMod, wagmiMod] = await Promise.all([
          import('@rainbow-me/rainbowkit'),
          import('wagmi'),
        ]);

        // Load RainbowKit stylesheet at runtime to ensure styles are present when ConnectButton mounts.
        // Some bundlers or server builds may omit CSS imports executed at module scope, so load dynamically.
        try {
          await import('@rainbow-me/rainbowkit/styles.css');
        } catch (cssErr) {
          // Non-fatal — if CSS fails to load, layout may be degraded but app remains functional.
          console.warn('Unable to load RainbowKit CSS dynamically:', cssErr);
        }

        /* eslint-disable @typescript-eslint/no-explicit-any */
        const rk = rainbowkitMod as unknown as any;
        const wg = wagmiMod as unknown as any;
        const { getDefaultConfig, RainbowKitProvider, darkTheme } = rk;
        const WagmiProvider = wg.WagmiProvider;
        /* eslint-enable @typescript-eslint/no-explicit-any */

        const config = getDefaultConfig({
          appName: 'DevOpsCoin DApp',
          projectId,
          chains: [bsc, bscTestnet],
          ssr: true,
        });

        if (!mounted) return;

        setProvidersEl(
          <WagmiProvider config={config}>
            <RainbowKitProvider theme={darkTheme({ overlayBlur: 'small' })}>
              {children}
            </RainbowKitProvider>
          </WagmiProvider>
        );

        setReady(true);
      } catch (err) {
        console.error('Failed to initialize wallet providers', err);
        if (mounted) setReady(true);
      }
    }

    init();
    return () => {
      mounted = false;
    };
  }, [children]);

  return (
    <QueryClientProvider client={queryClient}>
      {/*
        Don't render children until providers are ready. Rendering children early
        can cause components that use wagmi hooks to run without a WagmiProvider,
        which throws (WagmiProviderNotFoundError) during prerender or initial
        client render. We wait for dynamic provider initialization and then
        mount the real UI.
      */}
      {ready ? (providersEl ?? children) : null}
    </QueryClientProvider>
  );
}
