"use client";
import React from "react";
import Link from "next/link";

export default function ShipItFundPage() {
  return (
    <div className="container max-w-4xl mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-lg text-gray-100">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Ship It Fund
      </h1>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Mission & Philosophy
        </h2>
        <p className="text-gray-300 text-lg">
          The <strong>Ship-It Fund</strong> is the heart of $DEVOPS — a community-driven movement that empowers builders, meme hackers, and open-source creators.
          It fuels <strong>fun, useful, and innovative open-source projects</strong> across all domains — not just DevOps tooling — to push culture, creativity, and code forward.
        </p>
      </section>

      {/* Funding Model */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
          </svg>
          Funding Model
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li><strong>Automatic funding:</strong> 5% of total token supply + 0.5% of all taxed transactions (when enabled) flow to the Ship-It Fund wallet.</li>
          <li>Grants may be distributed on a <strong>rolling basis</strong> or through themed <strong>funding rounds</strong>.</li>
          <li>Fund activity is <strong>public and on-chain</strong>, ensuring transparency.</li>
          <li>Builders are encouraged to ship fast, iterate, and have fun.</li>
        </ul>
        <p className="text-gray-400 text-sm italic">
          The Ship-It Fund is personally bootstrapped in its early stages. Initial grants will be modest and scale with Treasury growth.
        </p>
      </section>

      {/* Eligibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4 -4" />
          </svg>
          Who & What We Fund
        </h2>
        <p className="text-gray-300 mb-4">
          The Ship-It Fund supports individuals and small teams building open-source projects that embody DevOps culture, creativity, and community energy.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Developer tooling and automation frameworks</li>
          <li>Community infrastructure and integrations</li>
          <li>Open-source creative tools, experiments, and meme-tech hybrids</li>
          <li>Educational resources, OSS learning labs, and cultural content</li>
          <li>Any innovative, impactful open-source project — serious or playful</li>
        </ul>
      </section>

      {/* Transparency */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4" />
          </svg>
          Transparency & Tracking
        </h2>
        <p className="text-gray-300 mb-4">
          Every funded project, grant transaction, and voting round will be published publicly on-chain and mirrored to GitHub for full transparency.
          All fund movements are traceable through the Ship-It Fund wallet on BscScan.
        </p>
      </section>

      {/* How to Apply */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Submit Your Project
        </h2>
        <p className="text-gray-300 mb-4">
          Have something cool in the works? We’d love to see it.
          Submissions are open — we review on a rolling basis and highlight promising projects publicly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://github.com/DevOpsCoin/shipit-fund/issues/new?assignees=&labels=submission&template=project_submission.yml" target="_blank" 
            className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition">
            Submit via GitHub →
          </a>
          <a href="https://t.me/YOUR_TELEGRAM" target="_blank" 
            className="inline-block px-6 py-3 bg-gray-800 text-cyan-300 font-semibold rounded-lg border border-cyan-700 hover:bg-gray-700 transition">
            Chat with the Team (Coming Soon)
          </a>
        </div>
      </section>

      {/* Funding Wallet Info */}
      <section className="container max-w-4xl mx-auto mt-8 p-4 bg-gray-800 rounded-lg text-center border border-cyan-700/40">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l-3-3m3 3l3-3" />
          </svg>
          Funding & Wallets
        </h2>
        <p className="text-gray-300">
          Ship-It Fund grants are distributed in <strong>$DEVOPS (BNB Smart Chain — BEP-20)</strong>. 
          Recipients will need a compatible wallet such as 
          <a href="https://metamask.io" target="_blank" className="underline text-cyan-400 hover:text-cyan-300">MetaMask</a> or 
          <a href="https://trustwallet.com" target="_blank" className="underline text-cyan-400 hover:text-cyan-300">Trust Wallet</a>.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Early distributions will be modest while the Treasury and community fund grow — early support is about building the ecosystem together.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="mb-10 mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Disclaimer
        </h2>
        <p className="text-gray-400 text-sm">
          The Ship-It Fund is a community initiative, not an investment vehicle. 
          All support is discretionary and focused on advancing open-source innovation. 
          Early grants will be small and experimental as the Treasury expands sustainably.
        </p>
      </section>

      {/* Nav Links */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link href="/" className="inline-flex items-center px-6 py-3 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v4m8-4v4M3 10h18" />
          </svg>
          Back to Home
        </Link>
        <Link href="/whitepaper" className="inline-flex items-center px-6 py-3 bg-gray-800 text-cyan-300 font-semibold rounded-lg border border-cyan-700 hover:bg-gray-700 transition">
          View Whitepaper →
        </Link>
      </div>
    </div>
  );
}