"use client";
import React from "react";
import Link from "next/link";

export default function WhitepaperPage() {
  return (
    <div className="container max-w-4xl mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-lg text-gray-100">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v4m8-4v4M3 10h18" />
        </svg>
        $DEVOPS <span className="text-lg font-normal text-gray-300">Whitepaper v0.3 — BNB Launch</span>
      </h1>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Introduction
        </h2>
        <p className="text-lg text-gray-200 mb-2"><strong>Dev culture meets degen.</strong><br /><strong>Pipelines meet moon missions.</strong></p>
        <p className="text-gray-300">
          $DEVOPS blends real DevOps culture with meme energy — where APIs, automation, and innovation collide with viral community momentum.
        </p>
        <p className="text-gray-400 text-sm italic mt-2">
          Originally launched on Solana, the project is now migrating to BNB Smart Chain to support better tooling, liquidity flexibility, and long-term growth.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
          </svg>
          Vision
        </h2>
        <p className="text-gray-300">
          $DEVOPS merges the creativity and speed of DevOps engineers with the viral power of memecoins — a space for builders, hackers, and innovators who live at the intersection of automation and culture.
        </p>
      </section>

      {/* Core Ideas */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z M8 8h8v8H8z" />
          </svg>
          Core Ideas
        </h2>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span><strong>Innovation First</strong> — Built by people who ship fast.</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span><strong>DevOps Culture</strong> — CI/CD, automation, and transparency are in our DNA.</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span><strong>Meme Momentum</strong> — Community energy and creativity are the fuel.</span>
          </li>
        </ul>
      </section>

      {/* Tokenomics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-gray-800"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Tokenomics (BNB Launch)
        </h2>
        <p className="text-gray-300 mb-4">
          $DEVOPS relaunches on <strong>BNB Smart Chain (BEP-20)</strong> with a fixed supply of <strong>1,000,000,000 tokens</strong>.  
          Distribution is transparent — no presale, no VC allocation, and no hidden minting.
        </p>
        <ul className="space-y-2 text-gray-300">
          <li><strong>10%</strong> — Founder Vesting (3-month cliff, 20-month linear vest)</li>
          <li><strong>10%</strong> — Treasury (Ops, Buybacks, Marketing)</li>
          <li><strong>15%</strong> — Community Wallet</li>
          <li><strong>5%</strong> — Ship-It Fund</li>
          <li><strong>10%</strong> — Reserve (locked ≥ 12 months via ReserveLock)</li>
          <li><strong>40%</strong> — Public Circulating Supply (LP + initial float)</li>
        </ul>
        <p className="text-gray-400 text-sm mt-2">Total allocation: 100% (fixed supply, no minting).</p>
      </section>

      {/* Wallet Structure & Transparency */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Wallet Structure & Transparency
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-cyan-700 rounded-lg overflow-hidden">
            <thead className="bg-cyan-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Wallet</th>
                <th className="py-2 px-4 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              <tr className="border-b border-cyan-700">
                <td className="py-2 px-4 font-semibold text-cyan-300">Founder Vesting Contract</td>
                <td className="py-2 px-4">10% founder allocation, 3-month cliff + 20-month linear vest.</td>
              </tr>
              <tr className="border-b border-cyan-700">
                <td className="py-2 px-4 font-semibold text-cyan-300">Treasury Wallet</td>
                <td className="py-2 px-4">10% allocation + 0.5% fee inflow for operations, listings, and marketing.</td>
              </tr>
              <tr className="border-b border-cyan-700">
                <td className="py-2 px-4 font-semibold text-cyan-300">Community Wallet</td>
                <td className="py-2 px-4">15% allocation for bounties, rewards, and ecosystem engagement.</td>
              </tr>
              <tr className="border-b border-cyan-700">
                <td className="py-2 px-4 font-semibold text-cyan-300">Ship-It Fund Wallet</td>
                <td className="py-2 px-4">5% allocation + 0.5% fee inflow to fund open-source innovation.</td>
              </tr>
              <tr className="border-b border-cyan-700">
                <td className="py-2 px-4 font-semibold text-cyan-300">Reserve (Locked)</td>
                <td className="py-2 px-4">10% supply locked via <strong>ReserveLock</strong> (≥ 12 months) to ensure transparency and long-term stability.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold text-cyan-300">Public Circulating Supply</td>
                <td className="py-2 px-4">40% available at launch for LP seeding and market circulation. LP tokens locked post-launch.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm"><strong>Total allocation:</strong> 100%. LP and Reserve tokens are locked for transparency.</p>
      </section>

      {/* Treasury, Fees & Burn */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
          </svg>
          Treasury, Fees & Burn
        </h2>
        <p className="text-gray-300 mb-3">
          $DEVOPS includes an adjustable transaction-fee system that sustains the ecosystem. Fees are disabled by default and can be toggled as needed.
        </p>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span><strong>0.5%</strong> → Treasury (operations, marketing, listings)</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span><strong>0.5%</strong> → Ship-It Fund (grants for open-source innovation)</span>
          </li>
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span><strong>0.5%</strong> → Burn (permanently reducing supply)</span>
          </li>
        </ul>
        <p className="text-gray-400 text-sm italic mt-2">
          Fees are collected in $DEVOPS (not BNB), capped at 3%, and excluded from owner transfers.
        </p>
      </section>

      {/* Technical Docs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Technical Documentation
        </h2>
        <p className="text-gray-300 mb-4">
          Full contract code, markdown documentation, and audit materials are available in the public repository:
        </p>
        <a href="https://github.com/DevOpsCoin/contracts" target="_blank"
           className="inline-block mt-2 px-5 py-2 bg-cyan-700 text-white font-semibold rounded-lg shadow hover:bg-cyan-500 transition">
           View Contracts Repo →
        </a>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Disclaimer
        </h2>
        <p className="text-gray-400">
          $DEVOPS is a community-driven memecoin project. This is not financial advice. Participation is at your own risk.
        </p>
      </section>

      {/* Back to Home */}
      <Link href="/" className="px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition inline-block mt-8 flex items-center gap-2 justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v4m8-4v4M3 10h18" />
        </svg>
        Back to Home
      </Link>
    </div>
  );
}