"use client";
import Link from "next/link";
import NavMoreDropdown from "@/components/NavMoreDropdown";
import Image from "next/image";
import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";
import WalletConnect from "@/components/WalletConnect";
import { useDevopsPrice } from "@/lib/hooks/useDevopsPrice";
import { DEVOPS_TOKEN } from "@/lib/constants";
import banner from "/public/banner.png";

export default function V1Header() {
  const { address, isConnected } = useAccount();
  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address,
    token: DEVOPS_TOKEN.address as `0x${string}`,
    watch: true,
  });

  const { devopsUsd, isLoading: priceLoading } = useDevopsPrice();
  const [usdValue, setUsdValue] = useState<number | null>(null);

  useEffect(() => {
    if (!devopsUsd || !balanceData?.formatted) return;
    const value = parseFloat(balanceData.formatted) * devopsUsd;
    setUsdValue(value);
  }, [devopsUsd, balanceData]);

  return (
    <header className="relative text-center mt-4">
      {/* Wallet + Balance container */}
      <div className="absolute right-0 top-0 mt-4 mr-8 z-20 flex flex-col items-end gap-2">
        <WalletConnect />

        {/* Balance display */}
        <div className="bg-gray-800 text-cyan-300 rounded-lg px-3 py-1 text-sm shadow border border-cyan-700/40 flex items-center justify-end gap-2 whitespace-nowrap min-w-[13rem]">
          {balanceLoading ? (
            <div className="h-4 w-24 bg-cyan-700/30 rounded shimmer"></div>
          ) : (
            <>
              <span className="font-semibold">
                {parseFloat(balanceData?.formatted || "0").toLocaleString(
                  undefined,
                  { maximumFractionDigits: 2 }
                )}{" "}
                {DEVOPS_TOKEN.symbol}
              </span>
              {priceLoading ? (
                <span className="h-3 w-10 bg-cyan-700/20 rounded shimmer"></span>
              ) : (
                usdValue !== null && (
                  <span className="text-gray-400 text-xs ml-1">
                    ≈ $
                    {usdValue.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                )
              )}
            </>
          )}
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <Image
          src={banner}
          alt="$DEVOPS Banner"
          className="mx-auto rounded-lg shadow-lg banner-glow w-full max-w-5xl h-auto"
          priority
        />
      </div>

      {/* Launch Countdown */}
      <div
        id="launch-banner"
        className="container max-w-4xl mx-auto mt-4 mb-2 p-4 bg-cyan-900/30 border border-cyan-700 text-cyan-100 rounded-lg text-center shadow-inner backdrop-blur-sm"
      >
        <p className="font-semibold text-lg mb-1">
          🚀 <span className="text-cyan-300">$DEVOPS</span> Launching{" "}
          <strong id="launch-date-label">Winter 2025–2026</strong>
        </p>
        <p
          id="countdown"
          className="text-2xl font-bold text-cyan-400 tracking-wider mb-1"
        >
          Coming Soon
        </p>
        <p className="mt-1 text-sm text-cyan-300">
          <span id="launch-status" className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Build Phase
          </span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-3 md:gap-4 my-6 px-3 items-center">
        <Link href="/" className="nav-btn">Home</Link>
        <Link href="/shipit" className="nav-btn bg-gradient-to-br from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white shadow-lg font-semibold px-4 py-2 rounded-lg flex items-center gap-2 justify-center animate-pulse-slow">Ship-It Fund</Link>
  {/* <Link href="/about" className="nav-btn">About</Link> */}
        <Link href="/roadmap" className="nav-btn">Roadmap</Link>
        <Link href="/whitepaper" className="nav-btn">Whitepaper</Link>
  {/* <Link href="/updates" className="nav-btn">Updates</Link> */}
        <NavMoreDropdown />
      </nav>
    </header>
  );
}
