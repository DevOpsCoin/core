'use client';
import React from 'react';
import Link from 'next/link';
import MainContent from './components/MainContent';

export default function HomePage() {
  return (
    <MainContent className="text-left">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent" />
        <img
          src="/home/hero.png"
          alt="DevOpsCoin Background"
          className="absolute right-0 top-0 max-w-[60%] w-auto h-auto object-contain opacity-20 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-300 mb-4">
          $DEVOPS — Built for Builders, Not Hype
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Where <strong>dev culture meets degen energy</strong>. A transparent,
          open-source token funding the people who actually ship.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            href="/buy"
            className="inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-500 transition"
          >
            Buy $DEVOPS
          </Link>
          <Link
            href="/whitepaper"
            className="inline-block px-8 py-3 bg-gray-800 text-cyan-300 font-semibold rounded-lg border border-cyan-700 hover:bg-gray-700 transition"
          >
            Read Whitepaper
          </Link>
          <Link
            href="/shipit"
            className="inline-block px-8 py-3 bg-gradient-to-br from-cyan-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:from-cyan-400 hover:to-teal-300 transition"
          >
            Explore Ship-It Fund
          </Link>
        </div>

        {/* Mission */}
        <section className="mt-16 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            A Token for Builders
          </h2>
          <p className="text-gray-300 mb-6">
            <strong>$DEVOPS</strong> bridges developer culture and decentralized
            finance. Built on <strong>Solana</strong>, it powers a transparent
            ecosystem where every transaction helps fund open-source work
            through the{' '}
            <Link
              href="/shipit"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              Ship-It Fund
            </Link>
            — a grant pool dedicated to automators, creators, and maintainers.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            Ship It. Don’t Hype It.
          </h2>
          <p className="text-gray-300 mb-6">
            DevOpsCoin began as a reaction to the noise — a statement that memes
            can have meaning when they’re backed by builders. It’s not about
            speculation; it’s about sustaining the people who make the internet
            work.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            Transparent by Design
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
            <li>All wallets and contracts are public and verified.</li>
            <li>No presale. No private allocations. No VC rounds.</li>
            <li>All grants and disbursements are on-chain and auditable.</li>
          </ul>

          <p className="text-gray-400 italic border-t border-cyan-900 pt-6 mt-10">
            <strong>$DEVOPS</strong> — the no-bullshit token for open-source
            builders. Where transparency funds creativity and community replaces
            speculation.
            <br />
            <span className="text-gray-500 text-xs italic">
              Built to fund work — not hype.
            </span>
          </p>
        </section>

        {/* CTA Section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/whitepaper"
            className="inline-block px-8 py-3 bg-cyan-700 text-white font-semibold rounded-lg shadow hover:bg-cyan-500 transition"
          >
            View Whitepaper
          </Link>
          <Link
            href="/shipit"
            className="inline-block px-8 py-3 bg-gray-800 text-cyan-300 font-semibold rounded-lg border border-cyan-700 hover:bg-gray-700 transition"
          >
            Apply for Funding
          </Link>
        </div>
      </div>
    </MainContent>
  );
}
