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

      <p className="mb-4">
        <Image
          src="/mystory/p1.png"
          alt="early devops photo"
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

      <p className="mb-4">
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
        became clear: most “me me coins” lived up to the name. Everyone shouted
        *me first, me richer, me out before the rug*. It was entertaining but
        hollow. I wanted to take that same creative energy and build something
        that actually stood for something — something that could still be fun,
        community-driven, and transparent. And let’s be honest — if it helps
        people and still makes money, that’s the right kind of win.
      </p>

      <p className="mb-4">
        <Image
          src="/mystory/p3.png"
          alt="DevOps Coin origin and Ship-It Fund"
          width={112}
          height={112}
          className="object-cover rounded-lg shadow-md border border-cyan-800 mt-1 ml-4 float-right flex-shrink-0"
          style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}
        />
        That’s where <strong>DevOpsCoin</strong> came from — now rebuilt on the{' '}
        <strong>Solana blockchain</strong>. It’s part tribute, part experiment,
        and part proof that giving back doesn’t have to be boring. The idea was
        simple: if most coins are about *me*, this one should be about *we*. The
        open-source community built the tools that made my entire career
        possible. DevOpsCoin exists to give something back. That’s the purpose
        behind the <strong>Ship-It Fund</strong> — a transparent mechanism that
        channels creator rewards from trading volume (through the{' '}
        <strong>TreasuryOps wallet</strong>) into grants for open-source
        builders, maintainers, and contributors. Every trade helps fund the
        people who keep the internet running quietly behind the curtain.
      </p>

      <p className="mb-4">
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
        open-source culture alive. If it stays small, that’s fine. If it scales,
        that’s even better. The goal is simple: keep shipping, keep improving,
        and keep supporting the builders who make all of this possible.
      </p>

      <p className="mb-4">
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
        what’s broken and rebuild what’s better, and channels that into funding
        the next generation of open-source tools, contributors, and creative
        projects. If you’ve ever shipped something that failed, fixed it, and
        shipped again anyway, you already understand this project. It’s about
        shipping with purpose — and having some fun along the way.
      </p>

      <p className="mb-4 text-gray-300 italic">
        The story’s still being written — one deploy, one trade, and one builder
        at a time.
      </p>

      <p className="mb-4">— RootSignal</p>
    </MainContent>
  );
}
