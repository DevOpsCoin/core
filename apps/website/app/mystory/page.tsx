'use client';
import React from 'react';
import Image from 'next/image';
import MainContent from '../components/MainContent';

export default function MyStoryPage() {
  return (
    <MainContent className="max-w-4xl p-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-cyan-300">
        My Story{' '}
        <span className="text-gray-400 text-lg font-normal">
          (and the start of Our Story)
        </span>
      </h1>

      <p className="mb-6 leading-relaxed text-gray-200 text-left">
        <Image
          src="/mystory/p1.png"
          alt="early DevOps photo"
          width={112}
          height={112}
          className="object-cover rounded-lg shadow-md border border-cyan-800 mt-1 ml-4 float-right flex-shrink-0"
          style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}
        />
        I've been in software development for over 25 years — the last 15 spent
        deep in DevOps. Looking back, open source has been at the center of it
        all. Every deployment pipeline, every bit of automation, every tool that
        saved my sanity during 2 a.m. outages was built by someone who decided
        to share their work with the world. Without open source, my career
        wouldn’t exist in the same way — and honestly, neither would the modern
        internet. It’s not just about code; it’s about people who fix things
        they didn’t break and improve things they don’t even use, simply because
        they can.
      </p>

      <p className="mb-6 leading-relaxed text-gray-200 text-left">
        <Image
          src="/mystory/p2.png"
          alt="crypto and memecoin chaos"
          width={112}
          height={112}
          className="object-cover rounded-lg shadow-md border border-cyan-800 mt-1 mr-4 float-left flex-shrink-0"
          style={{ marginRight: '1rem', marginBottom: '0.5rem' }}
        />
        A few years ago, I started exploring crypto — trading, experimenting,
        laughing at the chaos of the memecoin world. But eventually, the pattern
        became clear: most “me me coins” lived up to the name. Everyone shouted,
        <em> me first, me richer, me out before the rug</em>. It was
        entertaining but hollow. Everyone talked about community, but most of it
        was noise — vapor, promises, and rinse-and-repeat hype. I got tired of
        the bullshit. If every token’s going to shout “me me,” then this one
        should finally stand for <strong>we</strong>. Something fun, something
        transparent, something real.
      </p>

      <p className="mb-6 leading-relaxed text-gray-200 text-left">
        <Image
          src="/mystory/p3.png"
          alt="DevOpsCoin origin and Ship-It Fund"
          width={112}
          height={112}
          className="object-cover rounded-lg shadow-md border border-cyan-800 mt-1 ml-4 float-right flex-shrink-0"
          style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}
        />
        That’s where <strong>DevOpsCoin</strong> came from — now rebuilt on the{' '}
        <strong>Solana blockchain</strong>. It’s part tribute, part experiment,
        and part proof that giving back doesn’t have to be boring. The idea was
        simple: if most coins are about <em>me</em>, this one should be about{' '}
        <em>we</em>. The open-source community built the tools that made my
        entire career possible. DevOpsCoin exists to give something back. That’s
        the purpose behind the <strong>Ship-It Fund</strong> — a transparent
        grant treasury that channels a portion of{' '}
        <strong>creator rewards</strong> (collected in SOL within the{' '}
        <strong>TreasuryOps wallet</strong>) into grants for open-source
        builders, maintainers, and contributors. TreasuryOps starts as a
        SOL-based operations fund bootstrapped with a small DEVOPS portion,
        using roughly 50 % of creator rewards to sustain Ship-It grants and
        operations. Every disbursement is logged in the public ledger and
        verifiable on-chain — every trade helps fund the people who keep the
        internet running quietly behind the curtain.
      </p>

      <p className="mb-6 leading-relaxed text-gray-200 text-left">
        <Image
          src="/mystory/p4.png"
          alt="builders and community support"
          width={112}
          height={112}
          className="object-cover rounded-lg shadow-md border border-cyan-800 mt-1 mr-4 float-left flex-shrink-0"
          style={{ marginRight: '1rem', marginBottom: '0.5rem' }}
        />
        We’re still early, still building, still figuring it out. There’s no big
        company, no marketing machine — just a belief that a token can have
        purpose. Over time, I hope this grows into more than a coin: a
        self-sustaining fund for tools, contributors, and new projects that keep
        open-source culture alive. The <strong>Ship-It Fund</strong> began with
        a 5 % grant allocation, but its growth and cadence are variable —
        maintained transparently through TreasuryOps top-ups as volume allows.
        If it stays small, that’s fine. If it scales, that’s even better. The
        goal is simple: keep shipping, keep improving, and keep supporting the
        builders who make all of this possible.
      </p>

      <p className="mb-6 leading-relaxed text-gray-200 text-left">
        <Image
          src="/mystory/p5.png"
          alt="shipping with purpose and fun"
          width={112}
          height={112}
          className="object-cover rounded-lg shadow-md border border-cyan-800 mt-1 ml-4 float-right flex-shrink-0"
          style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}
        />
        DevOpsCoin isn’t about chasing hype — it’s about turning a joke into a
        thank-you. It carries the same mindset that drives engineers to fix
        what’s broken and rebuild what’s better, channeling that energy into
        funding the next generation of open-source tools, contributors, and
        creative projects. If you’ve ever shipped something that failed, fixed
        it, and shipped again anyway — you already understand this project. It’s
        about shipping with purpose, and having some fun along the way.
      </p>

      <p className="mb-4 text-gray-300 italic">
        The story’s still being written — one deploy, one trade, and one builder
        at a time.
      </p>

      <p className="mb-4 text-gray-500 text-sm italic">
        Built to fund work — not hype.
      </p>

      <p className="mb-2 text-gray-400 font-semibold">— RootSignal</p>
    </MainContent>
  );
}
