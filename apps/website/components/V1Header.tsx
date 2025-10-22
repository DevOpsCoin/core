'use client';
import Link from 'next/link';
import NavMoreDropdown from '@/components/NavMoreDropdown';
import NavInvestorsDropdown from '@/components/NavInvestorsDropdown';
import Image from 'next/image';
import { useState } from 'react';

export default function V1Header() {
  const [_usdValue, _setUsdValue] = useState<number | null>(null);

  return (
    <header className="relative w-full mt-4">
      {/* Sticky Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 bg-gray-950 flex items-center justify-between pl-16 pr-4 py-2 border-b border-cyan-800 shadow-lg">
        <div className="flex items-center">
          <img
            src="/mobile_logo.png"
            alt="$DEVOPS Mobile Logo"
            className="h-8 w-auto max-w-[150px] object-contain"
            loading="lazy"
          />
        </div>
        <MobileNav />
      </div>

      {/* Desktop Banner */}
      <div className="hidden md:block w-full max-w-5xl mx-auto relative">
        <Image
          src="/banner.png"
          alt="$DEVOPS Banner"
          width={1200}
          height={300}
          className="mx-auto rounded-lg shadow-lg w-full max-w-5xl h-auto transition-shadow duration-700 hover:shadow-cyan-400/60"
          priority
        />
      </div>

      {/* Launch Banner / Phase Notice */}
      <div
        id="launch-banner"
        className="max-w-4xl mx-auto mt-4 mb-2 p-4 bg-cyan-900/30 border border-cyan-700 text-cyan-100 rounded-lg text-center shadow-inner backdrop-blur-sm"
      >
        <p className="font-semibold text-lg mb-1">
          <span className="text-cyan-300">$DEVOPS</span> — Relaunching on{' '}
          <strong className="text-cyan-200">Solana Q1 2026</strong>
        </p>
        <div className="mt-2">
          <span className="block text-base text-cyan-200 font-semibold">
            Current Phase:
          </span>
          <span className="inline-flex items-center gap-2 text-cyan-300 text-lg font-bold mt-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Stealth Build → DevNet Testing
          </span>
        </div>
      </div>

      {/* Main Navigation (desktop) */}
      <div className="hidden md:flex w-full max-w-5xl mx-auto flex-row items-start justify-center mt-6 px-2 gap-4 relative">
        <nav className="flex gap-3 items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition"
          >
            Home
          </Link>
          <Link
            href="/shipit"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-white shadow-lg animate-pulse-slow justify-center"
          >
            Ship-It Fund
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition"
          >
            Roadmap
          </Link>
          <Link
            href="/whitepaper"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition"
          >
            Whitepaper
          </Link>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition"
          >
            Join
          </Link>
          <NavInvestorsDropdown />
          <NavMoreDropdown />
        </nav>
      </div>
    </header>
  );

  // Mobile Navigation
  function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
      <>
        {!open && (
          <button
            className="md:hidden fixed top-4 left-4 z-50 p-2 rounded border border-cyan-400 bg-gray-900 text-cyan-200 hover:text-white hover:bg-cyan-700 focus:outline-none shadow-lg"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {open && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-60 z-40 animate-fade-in"
              onClick={() => setOpen(false)}
            />
            <div
              className="fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-start pt-24 px-4 animate-fade-in overflow-y-auto"
              style={{ maxHeight: '100vh' }}
            >
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-cyan-800 text-white hover:bg-cyan-600 focus:outline-none shadow"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className="w-full max-w-xs bg-gray-900 border border-cyan-700/40 rounded-xl shadow-lg flex flex-col gap-3 p-6 mt-2 pb-8">
                <Link
                  href="/"
                  className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/shipit"
                  className="block px-4 py-3 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 text-white font-semibold text-lg hover:from-cyan-400 hover:to-teal-300 transition"
                  onClick={() => setOpen(false)}
                >
                  Ship-It Fund
                </Link>
                <Link
                  href="/roadmap"
                  className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Roadmap
                </Link>
                <Link
                  href="/whitepaper"
                  className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Whitepaper
                </Link>
                <Link
                  href="/join"
                  className="block px-4 py-3 rounded-lg bg-cyan-700 text-white font-semibold text-lg hover:bg-cyan-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Join
                </Link>

                {/* Investors Section */}
                <div className="w-full mt-2 p-3 rounded-xl border border-cyan-700/40 bg-gradient-to-r from-cyan-900 to-cyan-800 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 font-bold">Investors</span>
                    <span className="text-xs text-cyan-200/80">
                      Quick links
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/how-to-buy"
                      className="block px-3 py-2 rounded-lg bg-cyan-700 text-white font-semibold hover:bg-cyan-500 transition"
                      onClick={() => setOpen(false)}
                    >
                      How to Buy
                    </Link>
                    <Link
                      href="/updates"
                      className="block px-3 py-2 rounded-lg bg-cyan-700 text-white font-semibold hover:bg-cyan-500 transition"
                      onClick={() => setOpen(false)}
                    >
                      Updates
                    </Link>
                  </div>
                </div>

                <NavMoreDropdown />
              </nav>
            </div>
          </>
        )}
      </>
    );
  }
}
