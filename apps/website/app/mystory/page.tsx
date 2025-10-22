'use client';
import React from 'react';
import Image from 'next/image';

export default function MyStoryPage() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-lg text-gray-100">
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
        I've been in software development for over 25 years, with the last 15
        spent deep in DevOps. When I look back, open source has been at the
        center of everything. Every deployment pipeline, every bit of
        automation, every tool that saved my sanity during late-night outages
        came from people who built something useful and decided to share it.
        Without open source, my career would have been a lot harder, and the
        internet as we know it wouldn't exist. It's not just about code, it's
        about the people who fix things they didn't break and improve things
        they don't even use, just because they can.
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
        A few years ago, I got into crypto. Like most, I started trading,
        learning, experimenting, and, of course, laughing at the chaos of the
        memecoin world. But after a while, the pattern started to show itself.
        Most of these “me me coins” really lived up to the name — everyone
        shouting me first, me richer, me out before the rug gets pulled. It was
        entertaining, sure, but hollow. I wanted to take that same energy and do
        something different with it. I wanted to prove a coin could still be fun
        and community-driven, while actually standing for something that
        matters. And let’s be honest, I’m not allergic to profit either. If I
        can build something that helps others and still makes some money along
        the way, that feels like the right kind of win.
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
        That's where DevOps Coin came from — now built on the{' '}
        <strong>Solana blockchain</strong>. It's part tribute, part experiment,
        and part reminder that giving back doesn't have to be boring. The idea
        was simple: if memecoins are about me me, then this one should be about
        we. The open source community built the tools that made my entire career
        possible, and I wanted to create a project that put something back into
        that ecosystem. That’s the purpose behind the{' '}
        <strong>Ship-It Fund</strong> — an active mechanism that channels a
        portion of every Solana trade directly into supporting open-source
        DevOps tools and maintainers. Every time someone trades or holds
        DevOpsCoin, they're helping the people who keep the internet running
        quietly behind the curtain.
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
        We're still early, still building, still figuring things out as we go.
        There's no big company here, no massive marketing team — just a belief
        that a token can have purpose. Over time, I hope this becomes more than
        just a coin — maybe a way to fund tools, recognize maintainers, or even
        inspire others to build projects that give back in their own way. If it
        stays small, that's fine. If it grows, even better. The point is to keep
        shipping and keep supporting the builders who make all of this possible.
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
        thank-you. It takes the same spirit that drives engineers to fix what’s
        broken and rebuild what’s better, and channels it into funding the next
        generation of open-source DevOps tools. If you’ve ever shipped something
        that failed, fixed it, and shipped again anyway, you already understand
        this project. It’s about shipping with purpose — and having a little fun
        along the way.
      </p>

      <p className="mb-4 text-gray-300 italic">
        The story’s still being written — one deploy, one trade, and one builder
        at a time.
      </p>

      <p className="mb-4">-- RootSignal</p>
    </div>
  );
}
