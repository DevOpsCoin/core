'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="relative max-w-5xl mx-auto mt-10 px-6 py-12 text-center rounded-xl shadow-lg overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-950" />
        <img
          src="/home/hero_bg.png"
          alt="DevOpsCoin Background"
          className="absolute right-0 top-0 max-w-[60%] w-auto h-auto object-contain opacity-20 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Image
          src="/logo.png"
          alt="DevOpsCoin Logo"
          width={180}
          height={180}
          className="mx-auto mb-6 opacity-90"
          priority
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-300 mb-4">
          $DEVOPS — Where Pipelines Meet Protocols
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Where Dev culture meets crypto — fueling open-source builders who
          ship.
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
            <strong>$DEVOPS</strong> bridges the world of developer culture and
            decentralized finance. Built on <strong>Solana</strong>, it powers a
            transparent ecosystem of community-funded innovation. Every
            transaction supports open-source creation through the{' '}
            <Link
              href="/shipit"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              Ship-It Fund
            </Link>
            — a dedicated grant pool for projects that make technology more
            open, automated, and creative.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            Culture Meets Utility
          </h2>
          <p className="text-gray-300 mb-6">
            DevOpsCoin started as a meme with a mission — to turn the builder
            mindset into a self-sustaining force for the open-source world. It’s
            not just a token; it’s a movement to reward the people who automate,
            ship, and improve the infrastructure everyone relies on.
          </p>

          <h2 className="text-2xl font-bold text-cyan-400 mb-3">
            Transparent by Design
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
            <li>All wallets and contracts are public and verified.</li>
            <li>No presale, no private allocations, no VC rounds.</li>
            <li>Grants and disbursements are fully on-chain and auditable.</li>
          </ul>

          <p className="text-gray-400 italic border-t border-cyan-900 pt-6 mt-10">
            <strong>$DEVOPS</strong> — a cultural experiment in funding
            open-source builders through transparency, automation, and trust.
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
    </section>
  );
}
