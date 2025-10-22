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

      {/* Foreground text content */}
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

        <p className="mb-8 text-lg text-gray-300">
          We’re assembling a collective of builders, meme engineers, and
          open-source contributors defining the future of DevOps culture on the{' '}
          <strong>Solana blockchain</strong>. If you can ship code, design
          memes, or craft systems that scale — this is where you belong.
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
              <strong>DevOps Engineers</strong> — experts in CI/CD, automation,
              or observability who want to apply real DevOps principles to
              decentralized ecosystems.
            </li>
            <li>
              <strong>Solana Developers</strong> — builders fluent in Rust,
              Anchor, and TypeScript SDKs to extend our smart programs, bots,
              and telemetry tooling.
            </li>
            <li>
              <strong>Marketing & Growth Strategists</strong> — storytellers who
              can grow communities and shape a sustainable ecosystem with data,
              integrity, and authenticity.
            </li>
            <li>
              <strong>Technical Copywriters</strong> — writers who can merge
              engineering precision with meme-driven storytelling.
            </li>
            <li>
              <strong>Strategic Builders</strong> — people who understand both
              open-source culture and tokenized ecosystems, helping guide the{' '}
              <strong>Ship-It Fund</strong> toward long-term community impact.
            </li>
            <li>
              <strong>Community Builders</strong> — moderators, curators, and
              contributors who can maintain high-signal, low-noise communities
              rooted in trust and transparency.
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
            The Ship-It Fund & Open-Source Grants
          </h2>
          <p className="text-gray-300">
            A portion of <strong>creator rewards</strong> from Pump.fun and
            Raydium trading flows into the <strong>TreasuryOps wallet</strong>.
            TreasuryOps periodically tops up the <strong>Ship-It Fund</strong> —
            the DEVOPS grant treasury supporting open-source tools, maintainers,
            and contributors. Grants are distributed monthly (or rolled forward)
            as volume allows, with all disbursements transparently logged
            on-chain.
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
            <li>People chasing short-term profits or hype cycles.</li>
            <li>Low-effort meme farming or airdrop hunters.</li>
            <li>
              Speculators focused solely on token price, not the open-source
              mission or culture.
            </li>
            <li>
              Anyone unwilling to work transparently or collaborate in open
              repositories and public discussions.
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
            shape a token that fuels real open-source innovation. Join early.
            Build transparently. Ship constantly.
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
      </main>
    </MainContent>
  );
}
