'use client';
import React from 'react';
import Link from 'next/link';

export default function RoadmapPage() {
  return (
    <section className="relative max-w-4xl mx-auto mt-8 p-8 rounded-xl overflow-hidden text-left shadow-lg">
      {/* Background layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900" />
        <img
          src="/roadmap/image1.png"
          alt="Roadmap Hero"
          className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

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
              d="M12 8v4l3 3"
            />
          </svg>
          Project Roadmap
        </h1>

        <p className="text-gray-300 mb-6 text-lg">
          <strong>$DEVOPS</strong> isn’t another flash-launch token — it’s
          structured like a real DevOps product. Every phase follows the same
          versioned, incremental discipline used in production engineering.
          Progress is tracked publicly on{' '}
          <a
            href="https://github.com/orgs/DevOpsCoin-LLC/projects/2"
            target="_blank"
            className="text-cyan-400 hover:underline"
          >
            GitHub Projects
          </a>
          , so anyone can follow commits, raise issues, or contribute.
        </p>

        {/* How We're Building */}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            How We Build
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Built on <strong>Solana</strong> for scalability, low fees, and
              transparent on-chain visibility.
            </li>
            <li>
              <strong>Roadmap managed on GitHub</strong> — community can propose
              milestones, PRs, or grants.
            </li>
            <li>
              <strong>Iterative lifecycle:</strong> Concept → Testnet → Launch →
              Fund Activation → Governance.
            </li>
            <li>
              <strong>CI/CD-inspired delivery:</strong> plan → build → test →
              ship → measure → iterate.
            </li>
            <li>
              <strong>Ship-It Fund</strong> and <strong>TreasuryOps</strong>{' '}
              wallets operate transparently, with periodic reporting and
              verifiable transactions.
            </li>
          </ul>
        </section>

        {/* Phases */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
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
            Roadmap Phases
          </h2>

          <div className="space-y-5 text-gray-300">
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 1 — Foundation (Q3–Q4 2025)
              </h3>
              <p>
                Brand identity, contract creation, and initial Solana launch via{' '}
                <strong>Pump.fun</strong>. Establish base liquidity, community
                wallet transparency, and founder vesting schedule. Begin
                internal builder onboarding and repo setup.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 2 — Stealth Builder Period (Late 2025)
              </h3>
              <p>
                Private contributor recruitment and alignment. Deployment of the{' '}
                <strong>TreasuryOps</strong> and <strong>Ship-It Fund</strong>{' '}
                wallets. Website v2 release with live buy/swap interface and
                transparency dashboard prototype.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 3 — Public Launch (January 2026)
              </h3>
              <p>
                Token graduates from Pump.fun to Solana DEXs (
                <strong>Raydium</strong>, <strong>Jupiter</strong>). Public
                roadmap and contributor programs go live. Ecosystem partnerships
                and awareness campaigns begin.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 4 — Ship-It Fund Activation (Q1 2026)
              </h3>
              <p>
                The <strong>Ship-It Fund</strong> officially launches, issuing
                its first open-source micro-grants. TreasuryOps wallet begins
                periodic refills based on trading volume. Public dashboards
                display wallet flow and funding history.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 5 — Growth & Governance (Mid–Late 2026)
              </h3>
              <p>
                NFT-based <strong>Ship-It Badges</strong> debut as reputation
                and reward tokens. Community proposal system and lightweight
                governance model tested. Future cross-chain expansion to{' '}
                <strong>BNB Smart Chain</strong> evaluated for liquidity scaling
                and additional grant channels.
              </p>
            </div>
          </div>
        </section>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/orgs/DevOpsCoin-LLC/projects/2"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                className="fill-gray-800"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 9h6v6H9z"
              />
            </svg>
            View the Live Roadmap on GitHub
          </a>
          <p className="text-gray-500 text-sm mt-4 italic">
            Updated October 2025 · Solana mainline build · Ship-It Fund +
            TreasuryOps rollout
          </p>
        </div>

        {/* Back */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition"
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
        </div>
      </div>
    </section>
  );
}
