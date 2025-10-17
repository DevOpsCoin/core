// app/about/page.tsx - Ported from v1site/about.html
"use client"
import Image from "next/image"
// Link unused here

export default function AboutPage() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="team"
        className="max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center"
      >
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
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3 inline-block">RootSignal</h2>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          DevOps engineer, system architect, and founder of <strong>DevOpsCoin</strong>.<br />
          Operating under the pseudonym <strong>RootSignal</strong>, I build at the intersection of
          automation, cloud infrastructure, and crypto culture — where pipelines meet protocols and
          code fuels community.
        </p>
        <a
          href="https://github.com/rootsignal"
          target="_blank"
          rel="noopener"
          className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          GitHub Profile
        </a>
      </section>

      {/* SOCIALS SECTION */}
      <section
        id="community"
        className="max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg"
      >
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
          Connect with the DevOpsCoin community and follow project updates across our official
          channels.
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
            href="https://github.com/DevOpsCoin-LLC"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300"
          >
            GitHub Org
          </a>
        </div>
      </section>

      {/* LEGAL SECTION */}
      <section
        id="legal"
        className="max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg mb-16"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-cyan-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" className="fill-gray-800" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8h8v8H8z" />
          </svg>
          Legal & Disclaimers
        </h2>
        <p className="text-gray-300 mb-4">
          DevOpsCoin is a community-driven project built for experimentation, education, and
          entertainment. It is <strong>not a registered security</strong>, investment vehicle, or
          financial product. Participation in this ecosystem is voluntary and at your own risk.
        </p>
        <p className="text-gray-400 mb-4">
          Always verify contract addresses and ensure you are interacting with official links. The
          DevOpsCoin project and its contributors provide no guarantees, and smart contracts are
          immutable once deployed.
        </p>
        <p className="text-gray-400 italic text-sm">
          © 2025 DevOpsCoin LLC. All rights reserved. Licensed under MIT.
        </p>
      </section>
    </>
  )
}
