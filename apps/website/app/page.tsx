import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative max-w-4xl mx-auto mt-12 p-8 rounded-xl overflow-hidden text-left shadow-lg">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900" />
          <img
            src="/home/hero.png"
            alt="DevOpsCoin Hero"
            className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
            aria-hidden="true"
          />
        </div>

        <div className="relative" style={{ zIndex: 3 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-cyan-400"
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
                strokeWidth="2"
                d="M8 4v4m8-4v4M3 10h18"
              />
            </svg>
            $DEVOPS
          </h1>

          <p className="text-gray-300 mb-1">
            ⚙️ Dev culture meets degen. 🚀 Pipelines meet moon missions.
          </p>
          <p className="text-gray-500 mb-6 uppercase text-sm tracking-wide">
            Built by DevOps. Fueled by Transparency.
          </p>

          <p className="text-gray-300 mb-4">
            <strong>$DEVOPS</strong> merges <strong>DevOps culture</strong> with
            meme-driven growth — where pipelines, automation, and builder energy
            meet crypto creativity.
          </p>

          <p className="text-gray-400 mb-6">
            We’re building a community of{' '}
            <strong>engineers, open-source maintainers, and builders</strong>{' '}
            who understand both automation and culture. Together we’re proving
            that DevOps can move markets — not just deployments.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/whitepaper"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              → Read the Whitepaper
            </Link>
            <a
              href="https://x.com/DevOpsCoin"
              target="_blank"
              className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              ✦ Follow on X
            </a>
            <a
              href="https://t.me/TheDevOpsCoin"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              📡 Join Telegram
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-2 italic">
            Telegram access is invite-only during the stealth phase.
          </p>
        </div>
      </section>

      {/* SHIP-IT FUND */}
      <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-left border border-cyan-700/40">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          The Ship-It Fund — Fueling Builders
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          The <strong>Ship-It Fund</strong> is a{' '}
          <strong>DEVOPS-denominated grant treasury</strong> dedicated to
          funding open-source DevOps innovation. It issues monthly grants to
          builders, toolmakers, and contributors — fully transparent on-chain.
          The fund never sells DEVOPS; it’s replenished through
          <strong> TreasuryOps-funded top-ups</strong> as creator rewards
          accumulate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/shipit"
            className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* STEALTH PHASE */}
      <section className="container max-w-4xl mx-auto mt-8 px-3 sm:px-6 py-4 bg-gray-800 rounded-lg text-left border border-cyan-700/40">
        <p className="text-gray-300 text-base sm:text-lg">
          <strong>$DEVOPS is currently in its stealth builder phase.</strong>
          <br />
          Early liquidity and NFT integrations will roll out gradually on{' '}
          <strong>Solana</strong>.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mt-2 italic">
          Builders, designers, and meme creators can request early access
          through the Telegram group.
        </p>
      </section>

      {/* TRANSPARENCY */}
      <section className="container max-w-4xl mx-auto mt-8 px-3 sm:px-6 py-6 bg-gray-900 rounded-lg text-left border border-cyan-700/40">
        <h2 className="text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
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
              d="M9 17v-6h6v6m2 0H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
            />
          </svg>
          Transparent by Design
        </h2>
        <p className="text-gray-300 text-base mb-3">
          $DEVOPS follows DevOps principles —{' '}
          <strong>visibility, accountability, and automation</strong>. All smart
          contracts, fund movements, and grant transactions are verifiable
          on-chain through the{' '}
          <a
            href="https://github.com/DevOpsCoin-LLC"
            target="_blank"
            className="underline text-cyan-400 hover:text-cyan-300"
          >
            DevOpsCoin-LLC
          </a>{' '}
          organization.
        </p>
        <p className="text-gray-500 text-xs italic">
          Transparency isn’t marketing — it’s infrastructure.
        </p>
      </section>

      {/* WALLET STRUCTURE */}
      <section className="container max-w-4xl mx-auto mt-12 mb-6 p-6 bg-gray-900 rounded-xl text-center border border-cyan-700/40">
        <h2 className="text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
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
              d="M12 8v4l3 3"
            />
          </svg>
          Wallet Structure
        </h2>
        <p className="text-gray-300 text-base mb-3 text-left">
          $DEVOPS maintains a transparent three-wallet model:
        </p>
        <ul className="text-gray-300 text-left list-disc pl-6 mb-3 space-y-1">
          <li>
            <strong>Founder Vesting:</strong> 10 % — 3-month cliff and 20-month
            linear release for long-term alignment.
          </li>
          <li>
            <strong>Ship-It Fund:</strong> 5 % DEVOPS — grant treasury for
            open-source builders, sustained through TreasuryOps top-ups.
          </li>
          <li>
            <strong>TreasuryOps:</strong> SOL-based — receives creator rewards
            and funds marketing, liquidity, and Ship-It replenishment.
          </li>
          <li>
            <strong>Public Supply:</strong> 85 % — circulating tokens for
            community ownership and Raydium liquidity.
          </li>
        </ul>
        <p className="text-gray-400 text-sm italic text-left">
          All wallets are public and verifiable on Solana explorers. Contract
          authority is renounced; no admin privileges remain. For complete
          tokenomics, see the{' '}
          <Link
            href="/whitepaper"
            className="underline text-cyan-400 hover:text-cyan-300"
          >
            whitepaper
          </Link>
          .
        </p>
      </section>
    </>
  );
}
