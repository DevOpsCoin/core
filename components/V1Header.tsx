"use client";
import Link from "next/link";
import NavMoreDropdown from "@/components/NavMoreDropdown";
import Image from "next/image";
import { useAccount, useBalance } from "wagmi";
import { useEffect, useState } from "react";
import WalletConnect from "@/components/WalletConnect";
import { useDevopsPrice } from "@/lib/hooks/useDevopsPrice";
import { DEVOPS_TOKEN } from "@/lib/constants";


export default function V1Header() {
  const { address, isConnected } = useAccount();
  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address,
    token: DEVOPS_TOKEN.address as `0x${string}`,
  });

  const { devopsUsd, isLoading: priceLoading } = useDevopsPrice();
  const [usdValue, setUsdValue] = useState<number | null>(null);

  useEffect(() => {
    if (!devopsUsd || !balanceData?.formatted) return;
    const value = parseFloat(balanceData.formatted) * devopsUsd;
    setUsdValue(value);
  }, [devopsUsd, balanceData]);

  return (
    <header className="relative w-full mt-4">
      {/* Sticky Mobile Header: logo + $DEVOPS + hamburger (always visible) */}
      <div className="md:hidden sticky top-0 z-50 bg-gray-950 flex items-center justify-between px-4 py-2 border-b border-cyan-800 shadow-lg">
        <div className="flex items-center gap-2">
          <Image src="/mobile_logo.png" alt="$DEVOPS Mobile Logo" width={36} height={36} className="h-9 w-9" />
          <span className="text-cyan-300 font-extrabold text-xl tracking-wide">$DEVOPS</span>
        </div>
        <MobileNav />
      </div>

      {/* Wallet + Balance (mobile only, below sticky header) */}
      <div className="md:hidden flex flex-col items-end gap-2 w-full px-4 pt-2 bg-gray-950 z-50">
        <WalletConnect />
        <div className="devops-balance-box">
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
      {/* Desktop Banner */}
      <div className="hidden md:block w-full max-w-5xl mx-auto">
        <Image
          src="/banner.png"
          alt="$DEVOPS Banner"
          width={1200}
          height={300}
          className="mx-auto rounded-lg shadow-lg w-full max-w-5xl h-auto transition-shadow duration-700 hover:shadow-cyan-400/60"
          priority
        />
      </div>

      {/* Launch Countdown */}
      <div
        id="launch-banner"
        className="max-w-4xl mx-auto mt-4 mb-2 p-4 bg-cyan-900/30 border border-cyan-700 text-cyan-100 rounded-lg text-center shadow-inner backdrop-blur-sm"
      >
        <p className="font-semibold text-lg mb-1">
          🚀 <span className="text-cyan-300">$DEVOPS</span> Launching <strong id="launch-date-label">Winter 2025–2026</strong>
        </p>
        <div className="mt-2">
          <span className="block text-base text-cyan-200 font-semibold">Current Phase:</span>
          <span className="inline-flex items-center gap-2 text-cyan-300 text-lg font-bold mt-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Phase 1 — Foundation
          </span>
        </div>
      </div>

      {/* Responsive Navigation Row (desktop only) */}
      <div className="hidden md:flex w-full max-w-5xl mx-auto flex-row items-start justify-between mt-6 px-2 gap-4 relative">
        {/* Desktop nav */}
        <nav className="flex gap-3 order-2 md:order-1 items-center">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition">Home</Link>
          <Link href="/shipit" className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white shadow-lg animate-pulse-slow justify-center">Ship-It Fund</Link>
          <Link href="/roadmap" className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition">Roadmap</Link>
          <Link href="/whitepaper" className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition">Whitepaper</Link>
          <NavMoreDropdown />
        </nav>
        {/* Wallet + Balance (always right, under banner) */}
        <div className="order-1 md:order-2 flex flex-col items-end gap-2 w-full md:w-auto">
          <WalletConnect />
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
      </div>
    </header>
  );
// MobileNav component for hamburger menu
function MobileNav() {
  const [open, setOpen] = useState(false);
  // Hide hamburger when menu is open
  return (
    <>
      {/* Hamburger button, only visible when menu is closed */}
      {!open && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded border border-cyan-400 bg-gray-900 text-cyan-200 hover:text-white hover:bg-cyan-700 focus:outline-none shadow-lg"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      {/* Overlay menu, full screen, with close button */}
      {open && (
        <>
          {/* Dimmed background */}
          <div className="fixed inset-0 bg-black bg-opacity-60 z-40 animate-fade-in" onClick={() => setOpen(false)} />
          <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-start pt-24 px-4 animate-fade-in">
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-cyan-800 text-white hover:bg-cyan-600 focus:outline-none shadow"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="w-full max-w-xs bg-gray-900 border border-cyan-700/40 rounded-xl shadow-lg flex flex-col gap-3 p-6 mt-2">
              <Link href="/" className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/shipit" className="block px-4 py-3 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 text-white font-semibold text-lg hover:from-cyan-400 hover:to-teal-300 transition" onClick={() => setOpen(false)}>Ship-It Fund</Link>
              <Link href="/roadmap" className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition" onClick={() => setOpen(false)}>Roadmap</Link>
              <Link href="/whitepaper" className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition" onClick={() => setOpen(false)}>Whitepaper</Link>
              <NavMoreDropdown />
            </nav>
          </div>
        </>
      )}
    </>
  );
}
}
