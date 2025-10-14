import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero / Intro Section */}
  <section className="max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-3 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4v4m8-4v4M3 10h18" />
          </svg>
          $DEVOPS
        </h1>
        <span className="text-base md:text-lg text-gray-200 text-center block flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" />
          </svg>
          Dev culture meets degen.
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3" />
          </svg>
          Pipelines meet moon missions.
        </span>
        <p className="text-gray-400 mb-6 text-sm uppercase tracking-wide">
          Built by DevOps. Fueled by memes.
        </p>
        <p className="text-lg text-gray-200 mb-6">
          $DEVOPS brings <strong>DevOps culture</strong> to the memecoin world — combining pipelines, automation, and hacker energy with meme-driven growth.
        </p>
        <p className="text-gray-300 mb-8">
          We're assembling builders, hackers, and creators who understand both <strong>pipelines and meme culture</strong>.
          Join us to help shape something the degen world hasn’t seen before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/join" className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Join the Movement
          </Link>
          <a href="https://x.com/DevOpsCoin" target="_blank" rel="noopener" className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.53 7.47a.75.75 0 00-1.06 0l-7 7a.75.75 0 001.06 1.06l7-7a.75.75 0 000-1.06z" />
            </svg>
            Follow on X
          </a>
          <a href="https://t.me/TheDevOpsCoin" target="_blank" rel="noopener" className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.04 14.86l-.38 5.38c.54 0 .78-.23 1.06-.5l2.55-2.43 5.29 3.88c.97.53 1.66.25 1.91-.9l3.46-16.2h.01c.31-1.43-.51-2-.9-2.2-.38-.19-1.12-.41-2.06.15l-20.14 7.8c-1.37.54-1.35 1.31-.23 1.66l5.16 1.6L19.11 6.1c.45-.27.86-.12.52.15"/>
            </svg>
            Join Telegram
          </a>
        </div>
        <p className="text-gray-400 text-xs text-center mt-2 italic">
          Telegram access is invite only at this time.
        </p>
      </section>

      {/* Ship It Fund Section */}
      <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center border border-cyan-700/40">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          The Ship-It Fund — Powering Open-Source Innovation
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          The <strong>Ship-It Fund</strong> fuels <strong>fun, useful, and innovative open-source projects</strong>.  
          Every transaction in the $DEVOPS ecosystem contributes to grants for creators, hackers, and builders who ship cool things at the intersection of automation, culture, and creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shipit" className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* Stealth Launch Section */}
      <section className="container max-w-4xl mx-auto mt-8 px-3 sm:px-6 py-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
        <p className="text-gray-300 text-base sm:text-lg">
          <strong>$DEVOPS is currently in a stealth builder phase.</strong><br />
          Public launch and trading will begin post-audit on BNB Smart Chain. Reserve (10%) and liquidity (40%) pools will be partially locked at TGE for transparency and trust.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mt-2 italic">
          Early contributors have informational access during this phase. Marketing will ramp up closer to TGE.
        </p>
      </section>

      {/* Wallet Structure Intro */}
      <section className="container max-w-4xl mx-auto mt-12 mb-6 p-6 bg-gray-900 rounded-xl text-center border border-cyan-700/40">
        <h2 className="text-2xl font-bold text-cyan-300 mb-3 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
          </svg>
          Wallet Structure
        </h2>
        <p className="text-gray-300 text-base mb-3">
          $DEVOPS maintains a transparent, multi-wallet setup: Founder (10%), Treasury (10%), Community (15%), Ship-It Fund (5%), Reserve (10%, locked), and Public Supply (40%).  
          Wallet addresses will be published after deployment.
        </p>
        <p className="text-gray-400 text-sm italic">
          For full tokenomics and fee structure, see the <Link href="/whitepaper" className="underline text-cyan-400 hover:text-cyan-300">whitepaper</Link>.
        </p>
      </section>

      {/* Founder Wallet */}
      <section className="container max-w-4xl mx-auto mt-6 p-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Founder Vesting Wallet
        </h2>
        <p className="text-gray-300 mb-3 text-base">
          The <strong>Founder allocation (10%)</strong> is locked with a <strong>3-month cliff</strong> and <strong>20-month linear vest</strong>.  
          All transactions are visible on-chain.
        </p>
      </section>

      {/* Treasury Wallet */}
      <section className="container max-w-4xl mx-auto mt-8 p-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
          </svg>
          Treasury Wallet
        </h2>
        <p className="text-gray-300 mb-3">
          Used for LP seeding, marketing, listings, and ecosystem growth.  
          Also funds <strong>open-source innovation</strong> through the 
          <Link href="/shipit" className="underline text-cyan-400 hover:text-cyan-300">Ship-It Fund</Link>.  
          All activity is public post-launch.
        </p>
      </section>

      {/* Community Wallet */}
      <section className="container max-w-4xl mx-auto mt-6 p-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9 6 9-6" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7" />
          </svg>
          Community Distribution Wallet
        </h2>
        <p className="text-gray-300 mb-3">
          Holds the <strong>15% Community allocation</strong> for bounties, airdrops, and ecosystem rewards.  
          Transparent on-chain activity once live on BNB Smart Chain.
        </p>
      </section>

      {/* Buyback Wallet */}
      <section className="container max-w-4xl mx-auto mt-6 p-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" className="fill-gray-800"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
          </svg>
          Buyback Wallet
        </h2>
        <p className="text-gray-300 mb-3">
          Funded by the Treasury to execute open-market $DEVOPS buys supporting price stability.  
          Purchased tokens may be burned or cycled back into Treasury by governance vote.
        </p>
      </section>

      {/* Docs Link */}
      <section className="container max-w-4xl mx-auto mt-10 mb-12 text-center">
        <Link href="/whitepaper" className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-700 text-white rounded-lg font-semibold hover:bg-cyan-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Read Full Whitepaper →
        </Link>
      </section>
    </>
  );
}
