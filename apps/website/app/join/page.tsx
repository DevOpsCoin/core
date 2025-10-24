'use client';
import React from 'react';
import Link from 'next/link';
import MainContent from '../components/MainContent';

export default function JoinPage() {
  return (
    <MainContent className="relative max-w-4xl p-8 overflow-hidden text-left">
      {/* Background layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent" />
        <img
          src="/join/image1.png"
          alt="Join Hero"
          className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

      <main
        className="max-w-2xl mx-auto px-4 py-12 text-gray-100 text-left relative"
        style={{ zIndex: 3 }}
      >
        <h1 className="text-4xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
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
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"
            />
          </svg>
          Join the DevOpsCoin Builder Collective
        </h1>

        <p className="mb-8 text-lg text-gray-300 leading-relaxed">
          We’re assembling a collective of builders, engineers, and open-source
          contributors shaping the next chapter of DevOps culture on the{' '}
          <strong>Solana blockchain</strong>. If you can ship code, design
          systems, or automate what others overcomplicate — this is where you
          belong.
        </p>

        {/* What We Need */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"
              />
            </svg>
            What We Need
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>DevOps Engineers</strong> — specialists in CI/CD,
              automation, and observability who can bring DevOps discipline to
              decentralized ecosystems.
            </li>
            <li>
              <strong>Solana Developers</strong> — fluent in Rust, Anchor, and
              TypeScript SDKs to extend our smart programs, bots, and telemetry
              tooling.
            </li>
            <li>
              <strong>Marketing &amp; Growth Strategists</strong> — storytellers
              who can grow communities with data, integrity, and authenticity.
            </li>
            <li>
              <strong>Technical Copywriters</strong> — writers who merge
              engineering precision with clear, human communication.
            </li>
            <li>
              <strong>Strategic Builders</strong> — people who understand both
              open-source culture and tokenized ecosystems, helping guide the{' '}
              <strong>Ship-It Fund</strong> toward measurable impact.
            </li>
            <li>
              <strong>Community Builders</strong> — moderators and contributors
              who maintain high-signal, low-noise spaces built on trust and
              transparency.
            </li>
          </ul>
        </section>

        {/* Ship-It Fund */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
              />
            </svg>
            The Ship-It Fund &amp; Open-Source Grants
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The <strong>Ship-It Fund</strong> is a 5% DEVOPS grant treasury
            dedicated to open-source projects and DevOps tooling. Its reserves
            are sustained through periodic top-ups from the{' '}
            <strong>TreasuryOps wallet</strong>, a SOL-based operations wallet
            seeded with 2% DEVOPS and SOL for liquidity, marketing, and
            operational support.
            <br />
            <br />
            TreasuryOps receives continuous inflows from{' '}
            <strong>creator rewards</strong>: roughly half fund operations and
            Ship-It grants, while the other half supports DevOpsCoin LLC’s
            business operations. Every transaction is published in the public
            transparency ledger and verifiable on-chain.
            <br />
            <br />
            Grants are issued monthly — or rolled forward — based on ecosystem
            activity and available reserves.
          </p>
        </section>

        {/* What We're NOT Looking For */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            What We’re Not Looking For
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Short-term speculators or hype chasers.</li>
            <li>Low-effort meme farming or engagement baiting.</li>
            <li>
              Anyone focused purely on price action instead of progress and
              open-source value.
            </li>
            <li>
              Contributors unwilling to build transparently or collaborate in
              public discussions.
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"
              />
            </svg>
            Ready to Join?
          </h2>
          <p className="text-gray-300 mb-4">
            Whether you’re an engineer, creative, or strategist, you can help
            build a transparent token economy that funds real open-source
            innovation. Join early. Build openly. Ship it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://x.com/DevOpsCoin"
              target="_blank"
              className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center"
            >
              Contact Us on X
            </a>
            <a
              href="https://github.com/orgs/DevOpsCoin-LLC/discussions/47"
              target="_blank"
              className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center"
            >
              Join the GitHub Discussion
            </a>
          </div>
        </section>

        <Link
          href="/"
          className="px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition inline-block mt-8 flex items-center gap-2 justify-center"
        >
          Back to Home
        </Link>

        <p className="text-gray-500 text-xs mt-6 text-center italic">
          Built to fund work — not hype.
        </p>
      </main>
    </MainContent>
  );
}
