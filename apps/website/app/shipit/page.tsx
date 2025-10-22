'use client';
import React from 'react';
import Link from 'next/link';

export default function ShipItFundPage() {
  return (
    <section className="relative max-w-4xl mx-auto mt-8 p-8 rounded-xl overflow-hidden text-left shadow-lg">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900" />
        <img
          src="/shipit/image1.png"
          alt="Ship It Fund Hero"
          className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground */}
      <div className="relative" style={{ zIndex: 3 }}>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Ship-It Fund
        </h1>

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3"
              />
            </svg>
            Mission & Purpose
          </h2>
          <p className="text-gray-300 text-lg mb-2">
            The <strong>Ship-It Fund</strong> is a community-driven grant pool
            that fuels open-source innovation across all domains — from DevOps
            automation and developer tools to creative software, AI utilities,
            and educational projects. It exists solely to provide{' '}
            <strong>micro-grants and sponsorships</strong> to builders who make
            the open internet better.
          </p>
          <p className="text-gray-400 italic">
            One fund. One purpose — empower the open-source builders who ship.
          </p>
        </section>

        {/* Funding Model */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16M4 12h16"
              />
            </svg>
            Funding Model
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li>
              <strong>Bootstrap allocation:</strong> 5% of total supply (50 M
              DEVOPS) permanently allocated to the Ship-It Fund wallet.
            </li>
            <li>
              <strong>Refills:</strong> When needed, the{' '}
              <strong>TreasuryOps wallet</strong> can top up this fund to
              sustain consistent grant cycles.
            </li>
            <li>
              <strong>Grant cadence:</strong> Grants are reviewed monthly,
              rolling forward transparently if market volume or inflows don’t
              meet sustainability targets.
            </li>
            <li>
              <strong>Transparency:</strong> All inflows, disbursements, and
              approvals are recorded publicly in the{' '}
              <a
                href="https://github.com/DevOpsCoin-LLC/shipit-fund/tree/main/ledger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline"
              >
                ledger repository
              </a>{' '}
              and verifiable on Solscan.
            </li>
          </ul>
        </section>

        {/* Eligibility */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2l4 -4"
              />
            </svg>
            Who & What We Fund
          </h2>
          <p className="text-gray-300 mb-4">
            The Ship-It Fund supports individuals and small teams building
            meaningful open-source projects — improving automation, creating
            developer and creative tools, advancing AI, or producing educational
            and cultural projects that strengthen the open internet.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Developer tools, frameworks, and automation systems</li>
            <li>Creative and AI-driven open-source software</li>
            <li>Educational content and open knowledge platforms</li>
            <li>
              Community, cultural, or meme-inspired open-source initiatives
            </li>
          </ul>
        </section>

        {/* Transparency */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2l4-4"
              />
            </svg>
            Transparency & Tracking
          </h2>
          <p className="text-gray-300 mb-4">
            Every grant, nomination, and payout is <strong>on-chain</strong> and
            publicly auditable. The{' '}
            <a
              href="https://github.com/DevOpsCoin-LLC/shipit-fund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Ship-It Fund repository
            </a>{' '}
            maintains detailed transaction logs, submission templates, and
            funding round archives.
          </p>
          <p className="text-gray-400 text-sm">
            One transparent wallet. No staking. No liquidity management. 100%
            focused on open-source grants.
          </p>
        </section>

        {/* Apply */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3"
              />
            </svg>
            Submit a Project
          </h2>
          <p className="text-gray-300 mb-4">
            Have something worth funding? Submit your open-source project
            proposal via GitHub. Reviews and approvals happen transparently — in
            public, for everyone to see.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/DevOpsCoin-LLC/shipit-fund/issues/new?assignees=&labels=submission&template=project_submission.yml"
              target="_blank"
              className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
            >
              Submit via GitHub →
            </a>
            <a
              href="https://t.me/TheDevOpsCoin"
              target="_blank"
              className="inline-block px-6 py-3 bg-gray-800 text-cyan-300 font-semibold rounded-lg border border-cyan-700 hover:bg-gray-700 transition"
            >
              Chat with the Team
            </a>
          </div>
        </section>

        {/* Wallet Info */}
        <section className="container max-w-4xl mx-auto mt-8 p-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v8m0 0l-3-3m3 3l3-3"
              />
            </svg>
            Fund Wallet
          </h2>
          <p className="text-gray-300">
            All grants are distributed in{' '}
            <strong>$DEVOPS (Solana SPL token)</strong>. Use a Solana-compatible
            wallet such as{' '}
            <a
              href="https://phantom.app"
              target="_blank"
              className="underline text-cyan-400 hover:text-cyan-300"
            >
              Phantom
            </a>{' '}
            or{' '}
            <a
              href="https://solflare.com"
              target="_blank"
              className="underline text-cyan-400 hover:text-cyan-300"
            >
              Solflare
            </a>
            .
          </p>
          <p className="text-gray-400 text-sm mt-2">
            The official Ship-It Fund address will be published at or before
            launch and mirrored in the public ledger.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Disclaimer
          </h2>
          <p className="text-gray-400 text-sm">
            The Ship-It Fund is for open-source grants only. It does not engage
            in trading, buybacks, or liquidity operations. All funding is
            discretionary and depends on available allocations and TreasuryOps
            top-ups. No investment contracts — just transparent support for
            builders who ship.
          </p>
        </section>

        {/* Nav */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                className="fill-gray-800"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 4v4m8-4v4M3 10h18"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/whitepaper"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-cyan-300 font-semibold rounded-lg border border-cyan-700 hover:bg-gray-700 transition"
          >
            View Whitepaper →
          </Link>
        </div>
      </div>
    </section>
  );
}
