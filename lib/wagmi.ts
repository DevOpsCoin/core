"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiConfig, createConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { http } from "wagmi";
import React from "react";

const chains = [bsc, bscTestnet] as const;
const transports: Record<number, ReturnType<typeof http>> = {
  [bsc.id]: http(),
  [bscTestnet.id]: http()
};

const { connectors } = getDefaultWallets({
  appName: "DevOpsCoin DApp",
  projectId: "walletconnect-project",
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  transports,
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} theme={darkTheme({ overlayBlur: "small" })}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
