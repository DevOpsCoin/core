"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

import React from "react";



// BNB Smart Chain (BSC) mainnet and testnet definitions for wagmi v2+
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
} as const;

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
} as const;

export const config = getDefaultConfig({
  appName: "DevOpsCoin DApp",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID || "demo",
  chains: [bsc, bscTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider theme={darkTheme({ overlayBlur: "small" })}>
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
