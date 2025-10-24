// app/about/page.tsx — Updated for Solana Relaunch & Three-Wallet Model
'use client';
import Image from 'next/image';
import MainContent from '../components/MainContent';

export default function AboutPage() {
  return (
    <>
      {/* ABOUT SECTION */}
      <MainContent id="team" className="text-center max-w-4xl p-6">
        <h1 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Meet the Devs
        </h1>

        <Image
          src="/rootsignal.png"
          alt="RootSignal"
          width={192}
          height={192}
          className="mx-auto mb-4 rounded-full border border-cyan-700 shadow-lg w-48 h-48 object-cover"
        />

        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3 inline-block">
            RootSignal
          </h2>
        </div>

        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          DevOps engineer, system architect, and founder of{' '}
          <strong>DevOpsCoin ($DEVOPS)</strong>.<br />
          Operating under the pseudonym <strong>RootSignal</strong>, I build at
          the intersection of automation, open source, and on-chain culture —
          where <strong>pipelines meet protocols</strong> and transparency is
          infrastructure.
          <br />
          <br />
          The project runs on the <strong>Solana blockchain</strong> and uses a{' '}
          <strong>three-wallet model</strong> for sustainable transparency:
          <br />
          <br />
          <ul className="text-left list-disc pl-8 text-gray-400 space-y-1">
            <li>
              <strong>Founder Vesting:</strong> 10% of supply, time-locked with
              a 3-month cliff and 20-month linear release.
            </li>
            <li>
              <strong>Ship-It Fund:</strong> 5% bootstrap allocation for
              open-source grants and DevOps tooling. Post-launch, this wallet
              remains dedicated entirely to grants and may receive periodic
              top-ups from TreasuryOps based on available resources.
            </li>
            <li>
              <strong>TreasuryOps:</strong> Initially funded with 2% DEVOPS and
              SOL to support airdrops, marketing, liquidity, and operational
              costs (including founder compensation). Post-launch, this wallet’s
              balance will vary based on buybacks, creator reward inflows, and
              market conditions.
            </li>
          </ul>
          <br />
          Creator rewards earned from <strong>pump.fun</strong> flow into
          TreasuryOps, where 50% are retained to sustain operations and fund
          Ship-It top-ups, while the remaining 50% are withdrawn for business
          operations.
        </p>

        <a
          href="https://github.com/rootsignal"
          target="_blank"
          rel="noopener"
          className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          GitHub Profile
        </a>
      </MainContent>

      {/* SOCIALS SECTION */}
      <MainContent id="community" className="max-w-4xl p-6 mt-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center flex items-center justify-center gap-2">
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
              strokeWidth="2"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4a4 4 0 10-8 0 4 4 0 008 0zm6 4v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a6 6 0 0112 0z"
            />
          </svg>
          Community & Socials
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Connect with the DevOpsCoin community and follow project updates
          across our official channels. We welcome engineers, open-source
          maintainers, and contributors to get involved early.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://x.com/DevOpsCoin"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300"
          >
            Follow on X
          </a>
          <a
            href="https://t.me/TheDevOpsCoin"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300"
          >
            Join Telegram
          </a>
          <a
            href="https://github.com/DevOpsCoin"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300"
          >
            GitHub Org
          </a>
        </div>
      </MainContent>

      {/* LEGAL SECTION */}
      <MainContent id="legal" className="max-w-4xl p-6 mt-12 mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-cyan-300"
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
              strokeWidth="2"
              d="M8 8h8v8H8z"
            />
          </svg>
          Legal & Disclaimers
        </h2>

        <p className="text-gray-300 mb-4 leading-relaxed">
          DevOpsCoin is a transparent, community-driven project exploring how
          DevOps culture and open-source collaboration can extend onto the
          Solana blockchain. It is not a registered security or investment
          instrument and carries no financial guarantees or obligations.
        </p>

        <p className="text-gray-400 mb-4 leading-relaxed">
          Always verify official mint addresses and wallet links published by
          the DevOpsCoin team. Smart contracts are immutable once deployed, and
          all wallet activity is visible on-chain.
        </p>

        <p className="text-gray-400 italic text-sm">
          © 2025 DevOpsCoin. Open source under MIT License. <br />
          Built where pipelines meet protocols.
        </p>
      </MainContent>
    </>
  );
}
