import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <section className="relative max-w-4xl mx-auto mt-12 p-8 rounded-xl overflow-hidden text-left shadow-lg">
        {/* Background layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900" />
          <img
            src="/home/hero.png"
            alt="DevOps Coin Hero"
            className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
            aria-hidden="true"
          />
        </div>

        {/* Foreground text content */}
        <div className="relative" style={{ zIndex: 3 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800" />
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
            Built by DevOps. Fueled by Memes.
          </p>

          <p className="text-gray-300 mb-4">
            $DEVOPS brings <strong>DevOps culture</strong> to the memecoin world, combining
            pipelines, automation, and hacker energy with meme-driven growth.
          </p>

          <p className="text-gray-400 mb-6">
            We're assembling builders, hackers, and creators who understand both{" "}
            <strong>pipelines and meme culture</strong>. Join us to help shape something the degen
            world hasn’t seen before.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
              → Join the Movement
            </button>
            <button className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
              ✦ Follow on X
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
              📡 Join Telegram
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-2 italic">
            Telegram access is invite only at this time.
          </p>
        </div>
      </section>

      {/* Ship It Fund Section */}
      <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-left border border-cyan-700/40">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          The Ship-It Fund — Powering Open-Source Innovation
        </h2>
        <p className="text-gray-300 text-lg mb-6 text-left">
          The <strong>Ship-It Fund</strong> fuels{" "}
          <strong>fun, useful, and innovative open-source projects</strong>. Every transaction in
          the $DEVOPS ecosystem contributes to grants for creators, hackers, and builders who ship
          cool things at the intersection of automation, culture, and creativity.
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

      {/* Stealth Launch Section */}
      <section className="container max-w-4xl mx-auto mt-8 px-3 sm:px-6 py-4 bg-gray-800 rounded-lg text-left border border-cyan-700/40">
        <p className="text-gray-300 text-base sm:text-lg">
          <strong>$DEVOPS is currently in a stealth builder phase.</strong>
          <br />
          Public launch and trading will begin post-audit on BNB Smart Chain.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mt-2 italic">
          Early contributors have informational access during this phase. Marketing will ramp up
          closer to TGE.
        </p>
      </section>

      {/* Transparency Section */}
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
          DevOpsCoin follows the same principles that drive modern DevOps —{" "}
          <strong>visibility, accountability, and automation</strong>. All smart contracts will be
          verified on BscScan, and both the front-end and vesting code will be made public after
          launch.
        </p>
        <p className="text-gray-400 text-sm mb-2">
          Until launch, repositories remain private to protect against impersonation or pre-launch
          clones. Once mainnet deployment is live, everything will be open-source under the{" "}
          <Link
            href="https://github.com/devopscoin-llc"
            target="_blank"
            className="underline text-cyan-400 hover:text-cyan-300"
          >
            devopscoin-llc
          </Link>{" "}
          GitHub organization.
        </p>
        <p className="text-gray-500 text-xs italic">
          Transparency isn't a marketing line — it's part of our engineering culture.
        </p>
      </section>

      {/* Wallet Structure Intro */}
      <section className="container max-w-4xl mx-auto mt-12 mb-6 p-6 bg-gray-900 rounded-xl text-center border border-cyan-700/40">
        <h2 className="text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
          </svg>
          Wallet Structure
        </h2>
        <p className="text-gray-300 text-base mb-3 text-left">
          $DEVOPS maintains a transparent, multi-wallet setup: Founder (10%), Treasury (10%),
          Community (10%), Ship-It Fund (15%), and Public Supply (55%). Wallet addresses will be
          published after deployment.
        </p>
        <p className="text-gray-400 text-sm italic text-left">
          For full tokenomics and fee structure, see the{" "}
          <Link href="/whitepaper" className="underline text-cyan-400 hover:text-cyan-300">
            whitepaper
          </Link>
          .
        </p>
      </section>

      {/* ...rest of your sections unchanged... */}
    </>
  )
}
