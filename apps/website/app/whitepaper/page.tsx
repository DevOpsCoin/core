'use client';
import React from 'react';
import Link from 'next/link';
import MainContent from '../components/MainContent';

export default function WhitepaperPage() {
  return (
    <MainContent className="text-left">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent" />
        <img
          src="/whitepaper/image1.png"
          alt="DevOpsCoin Background"
          className="absolute right-0 top-0 max-w-[60%] w-auto h-auto object-contain opacity-25 pointer-events-none select-none"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-cyan-300 mb-6">
          DevOpsCoin Whitepaper
        </h1>

        <p className="text-gray-400 italic mb-4">
          DevOpsCoin isn’t another “me me” coin — it’s what happens when dev
          culture meets degen energy. Built for builders, not hype.
        </p>

        <p className="text-gray-300 mb-8 leading-relaxed">
          <strong>$DEVOPS</strong> is where <strong>DevOps culture</strong> and
          <strong> open-source collaboration</strong> meet tokenized
          transparency. It fuses the pragmatism of engineering with the creative
          chaos of crypto — a project built to channel funding toward real,
          open-source work.
        </p>

        {/* PURPOSE */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-3">Purpose</h2>
        <p className="text-gray-300 mb-6">
          DevOpsCoin is more than a memecoin — it’s a cultural token for the
          people who build and automate. Built on <strong>Solana</strong>, it
          supports open-source maintainers, developers, creators, and innovators
          across all domains. Each transaction and initiative contributes to a
          broader effort to sustain open-source development through transparent,
          community-driven funding.
        </p>

        {/* TOKEN OVERVIEW */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-3">
          Token Overview
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            <strong>Symbol:</strong> DEVOPS
          </li>
          <li>
            <strong>Network:</strong> Solana
          </li>
          <li>
            <strong>Total Supply:</strong> 1,000,000,000 DEVOPS
          </li>
          <li>
            <strong>Decimals:</strong> 9
          </li>
          <li>
            <strong>Launch Path:</strong> Pump.fun → Raydium → Jupiter
          </li>
        </ul>

        {/* WALLET STRUCTURE */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-3">
          Wallet Structure
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
          <li>
            <strong>Founder Wallet (10%):</strong> Locked under a vesting
            contract with a 3-month cliff and 20-month linear release. Ensures
            long-term alignment and transparent on-chain accountability.
          </li>

          <li>
            <strong>Ship-It Fund Wallet (5%):</strong> A dedicated,
            single-purpose grant pool used exclusively for{' '}
            <strong>open-source grants</strong> — spanning DevOps tools,
            creative software, AI utilities, and educational projects. It begins
            with a 5% bootstrap allocation (50 M DEVOPS) and may be replenished
            periodically by the TreasuryOps wallet. All grants and disbursements
            are recorded in the{' '}
            <a
              href="https://github.com/DevOpsCoin/core/tree/main/shipit-fund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Ship-It Fund directory
            </a>{' '}
            under the <code>/ledger</code> path.
          </li>

          <li>
            <strong>TreasuryOps Wallet (SOL-based, 2 % allocation):</strong>{' '}
            Initially funded with <strong>2 % of total supply in DEVOPS</strong>{' '}
            for operational stability. TreasuryOps manages operations,
            marketing, and liquidity support, and may conduct limited buybacks
            when sustainable market conditions allow. It can also top up the
            Ship-It Fund to help maintain grant cadence. TreasuryOps never holds
            pre-allocated $DEVOPS beyond its bootstrap — any future balance
            growth comes from creator-reward inflows or buybacks. All SOL
            movements are tracked publicly under a refill-when-needed model.
          </li>

          <li>
            <strong>Creator Reward Flow:</strong> Creator rewards from trading
            activity are shared between the TreasuryOps wallet and the Ship-It
            Fund. The current distribution target is a{' '}
            <strong>50 / 50 split</strong>, adjustable only within a{' '}
            <strong>40 – 60 %</strong> range. Any adjustment must be disclosed
            and documented in the public{' '}
            <a
              href="https://github.com/DevOpsCoin/core/tree/main/shipit-fund/ledger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              TreasuryOps ledger
            </a>{' '}
            before implementation. These updates never affect total token supply
            or vesting mechanics.
          </li>

          <li>
            <strong>Public Supply (83 %):</strong> Distributed through the
            Pump.fun launch curve and subsequent Raydium liquidity migration.
          </li>
        </ul>

        {/* SHIP-IT FUND */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-3">
          Ship-It Fund
        </h2>
        <p className="text-gray-300 mb-6">
          The <strong>Ship-It Fund</strong> supports open-source innovation —
          from automation frameworks and DevOps tooling to AI utilities,
          creative applications, and educational resources. It operates entirely
          on-chain, with all inflows and disbursements publicly recorded.
        </p>

        <p className="text-gray-300 mb-6">
          Grants are reviewed and issued on a monthly cadence when trading
          volume and TreasuryOps reserves permit. If inflows fall below target,
          payouts are deferred and rolled forward transparently to preserve
          sustainability.
        </p>

        <p className="text-gray-300 mb-6">
          Ship-It Fund tokens are never sold or used for liquidity.{' '}
          <strong>
            Buybacks or market operations are performed only through
            TreasuryOps.
          </strong>{' '}
          The Ship-It Fund remains focused on open-source grants and community
          programs.
        </p>

        {/* LAUNCH PLAN */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-3">
          Launch Plan
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            <strong>Dev Onboarding:</strong> Mid-November 2025
          </li>
          <li>
            <strong>Stealth Phase:</strong> December 2025
          </li>
          <li>
            <strong>Public Launch:</strong> January 1 2026
          </li>
        </ul>

        <p className="text-gray-300 mb-6">
          The Pump.fun launch provides a fair, transparent bonding-curve entry
          where early liquidity transitions into Raydium trading. Once migrated,
          $DEVOPS becomes tradable through <strong>Jupiter</strong> and other
          Solana DEXs.
        </p>

        {/* TRANSPARENCY */}
        <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-3">
          Transparency
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            All core wallet addresses are published on the DevOpsCoin website.
          </li>
          <li>
            All programs and contracts are verified on Solana explorers and
            open-sourced on GitHub.
          </li>
          <li>No presale. No VC allocations. No private rounds.</li>
        </ul>

        <p className="text-gray-400 mt-8 italic border-t border-cyan-900 pt-6">
          DevOpsCoin merges humor, discipline, and transparency — not a promise
          of riches, but a framework to support the builders who actually ship.
          <br />
          <span className="text-cyan-300 font-semibold">
            “Ship it. Don’t hype it.”
          </span>
          <br />
          <span className="text-gray-500 text-xs italic">
            Built to fund work — not hype.
          </span>
        </p>

        <div className="text-center mt-8">
          <Link
            href="/shipit"
            className="inline-block bg-cyan-700 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 transition font-semibold"
          >
            Explore Ship-It Fund →
          </Link>
        </div>
      </div>
    </MainContent>
  );
}
