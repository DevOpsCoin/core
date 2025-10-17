"use client"

import React, { useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// Defer importing rainbowkit/wagmi to runtime to avoid server/build-time access
// of browser-only APIs (indexedDB/localStorage) which can cause build errors.

// ---------------------------------------------
// BNB Smart Chain mainnet & testnet configs
// ---------------------------------------------
const bsc = {
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://bsc-dataseed.binance.org/"] },
    public: { http: ["https://bsc-dataseed.binance.org/"] },
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://bscscan.com" },
  },
  contracts: {},
} as const

const bscTestnet = {
  id: 97,
  name: "BNB Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    name: "tBNB",
    symbol: "tBNB",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.binance.org:8545/"] },
    public: { http: ["https://data-seed-prebsc-1-s1.binance.org:8545/"] },
  },
  blockExplorers: {
    default: { name: "BscScan Testnet", url: "https://testnet.bscscan.com" },
  },
  contracts: {},
} as const

const queryClient = new QueryClient()

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const [providersEl, setProvidersEl] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    let mounted = true

    async function init() {
      try {
        const rawProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ""
        const projectId = rawProjectId.replace(/[^a-fA-F0-9]/g, "")

        if (!projectId || projectId.length !== 32) {
          // Don't throw at module evaluation time; warn and skip wallet providers.
          // This keeps builds from failing while allowing the site to render.
          // The maintainers should set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to a
          // valid 32-char id for full wallet functionality.
          console.warn(
            "Invalid or missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID; skipping wallet providers.",
          )
          if (mounted) setReady(true)
          return
        }

        const results = await Promise.all([import("@rainbow-me/rainbowkit"), import("wagmi")])
        type RainbowKitModule = {
          getDefaultConfig: (opts: unknown) => unknown
          // allow unknown props (theme, children, etc.)
          RainbowKitProvider: React.ComponentType<Record<string, unknown>>
          darkTheme: (opts?: unknown) => unknown
        }
        type WagmiModule = { WagmiProvider: React.ComponentType<Record<string, unknown>> }

        const { getDefaultConfig, RainbowKitProvider, darkTheme } =
          results[0] as unknown as RainbowKitModule
        const wagmiModule = results[1] as unknown as WagmiModule

        const config = getDefaultConfig({
          appName: "DevOpsCoin DApp",
          projectId,
          chains: [bsc, bscTestnet],
          ssr: true,
        })

        const WagmiProvider = wagmiModule.WagmiProvider

        if (!mounted) return

        setProvidersEl(
          <WagmiProvider config={config}>
            <RainbowKitProvider theme={darkTheme({ overlayBlur: "small" })}>
              {children}
            </RainbowKitProvider>
          </WagmiProvider>,
        )

        setReady(true)
      } catch (err) {
        console.error("Failed to initialize wallet providers", err)
        if (mounted) setReady(true)
      }
    }

    init()
    return () => {
      mounted = false
    }
  }, [children])

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
  )
}
