// app/roadmap/page.tsx — Public Overview for Solana Relaunch & Three-Wallet Model
'use client';
import React from 'react';
import Link from 'next/link';
import MainContent from '../components/MainContent';

export default function RoadmapPage() {
  return (
    <MainContent className="text-left relative">
      {/* Background layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent" />
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

        {/* Preface */}
        <p className="text-gray-300 mb-3 text-base">
          The roadmap isn’t a pitch — it’s an engineering plan tied to real
          GitHub milestones, commits, and ledger entries.
        </p>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          <strong>$DEVOPS</strong> isn’t another flash-launch token — it’s
          structured like a DevOps product. Each phase is iterative and
          versioned, following the same discipline used in production
          engineering. The live, canonical roadmap is maintained publicly on{' '}
          <a
            href="https://github.com/orgs/DevOpsCoin/projects/3"
            target="_blank"
            className="text-cyan-400 hover:underline font-semibold"
          >
            GitHub Projects
          </a>{' '}
          — where anyone can track commits, raise issues, or contribute.
        </p>

        {/* How We Build */}
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
          <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
            <li>
              Built on <strong>Solana</strong> for scalability, low fees, and
              transparent on-chain visibility.
            </li>
            <li>
              <strong>Roadmap managed on GitHub</strong> — all milestones
              tracked in public repositories.
            </li>
            <li>
              <strong>Iterative lifecycle:</strong> Concept → Testnet → Launch →
              Fund Activation → Governance.
            </li>
            <li>
              <strong>CI/CD mindset:</strong> plan → build → test → ship →
              measure → iterate.
            </li>
            <li>
              <strong>Ship-It Fund</strong> and <strong>TreasuryOps</strong>{' '}
              wallets operate transparently with verifiable on-chain records.
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
            Roadmap Phases (Summary)
          </h2>

          <div className="bg-gray-900/40 border border-cyan-800 rounded-xl p-6 space-y-5 text-gray-300 shadow-inner leading-relaxed">
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 1 — Foundation (Q3 – Q4 2025)
              </h3>
              <p>
                Establish brand identity, token contracts, and initial Solana
                launch via <strong>Pump.fun</strong>. Deploy the transparent
                wallet structure and <strong>Founder Vesting</strong> contract.
                Begin contributor onboarding and repository setup.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 2 — Stealth Builder Period (Late 2025)
              </h3>
              <p>
                Recruit contributors and align technical direction. Deploy the{' '}
                <strong>TreasuryOps</strong> and <strong>Ship-It Fund</strong>{' '}
                wallets. The TreasuryOps wallet (2 % DEVOPS + SOL) manages
                liquidity and operations; the Ship-It Fund (5 % DEVOPS) issues
                monthly grants funded by TreasuryOps top-ups.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 3 — Public Launch (January 2026)
              </h3>
              <p>
                Token graduates from <strong>Pump.fun</strong> to Solana DEXs (
                <strong>Raydium</strong>, <strong>Jupiter</strong>). Public
                roadmap and contributor programs go live. Ecosystem outreach
                begins.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 4 — Ship-It Fund Activation (Q1 2026)
              </h3>
              <p>
                The <strong>Ship-It Fund</strong> begins issuing open-source
                micro-grants. TreasuryOps provides top-ups based on trading
                volume and creator reward inflows. Public dashboards display
                historical funding and wallet movement.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 5 — Growth & Governance (Mid – Late 2026)
              </h3>
              <p>
                <strong>Ship-It Badge NFTs</strong> launch as proof-of-impact
                collectibles for contributors. A lightweight governance model
                and proposal system emerge. Cross-chain deployment to{' '}
                <strong>BNB Smart Chain</strong> is evaluated for liquidity
                expansion and new grant pathways.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3 italic">
            This summary is informational. The canonical roadmap lives in the{' '}
            <a
              href="https://github.com/orgs/DevOpsCoin/projects/3"
              target="_blank"
              className="text-cyan-400 underline"
            >
              GitHub Projects board
            </a>
            , reflecting real progress, priorities, and version tags.
          </p>
        </section>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/orgs/DevOpsCoin/projects/3"
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
          <p className="text-gray-500 text-sm italic mt-2">
            Built to fund work — not hype.
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
    </MainContent>
  );
}
