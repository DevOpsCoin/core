'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function V1Footer() {
  useEffect(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  }, []);

  return (
    <footer className="mt-16 border-t border-gray-800 py-6 text-sm text-gray-400 text-center relative overflow-hidden">
      {/* Cyan gradient line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600" />

      {/* Phase Notice */}
      <div
        id="footer-launch"
        className="mb-3 text-cyan-300 font-medium flex justify-center items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3"
          />
        </svg>
        <span id="footer-countdown">Stealth Build → Public Launch Q1 2026</span>
      </div>

      {/* Core Footer Text */}
      <p className="mb-1">
        © <span id="year"></span> DevOpsCoin&nbsp;·{' '}
        <Link href="/legal" className="text-cyan-400 hover:underline">
          Legal
        </Link>{' '}
        ·{' '}
        <a
          href="mailto:team@devopscoin.ai"
          className="text-cyan-400 hover:underline"
        >
          team@devopscoin.ai
        </a>
      </p>

      {/* Tagline */}
      <p className="text-xs text-gray-500 italic mb-2">
        Where pipelines meet protocols.&nbsp;Built on Solana.&nbsp;Sustained by
        TreasuryOps and the Ship-It Fund.
      </p>

      {/* Transparency Links */}
      <div className="text-xs text-gray-500 mt-2">
        <span className="font-semibold text-cyan-300">
          Transparency & Ledger:
        </span>{' '}
        <a
          href="https://github.com/DevOpsCoin/core/tree/main/shipit-fund/ledger"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-400 hover:text-cyan-300"
        >
          Ship-It Fund Ledger
        </a>{' '}
        &nbsp;·&nbsp;
        <a
          href="https://github.com/DevOpsCoin/core/blob/main/docs/ledger/TRANSPARENCY_LOG.md"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-cyan-400 hover:text-cyan-300"
        >
          TreasuryOps Log
        </a>
      </div>
    </footer>
  );
}
