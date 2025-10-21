'use client';
import React from 'react';

export default function UpdatesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-cyan-400 mb-2">
          $DEVOPS Updates
        </h1>
        <p className="text-gray-300">
          News, dev logs, and announcements from the DevOpsCoin project.
        </p>
      </section>

      {/* POSTS WRAPPER */}
      <main className="max-w-4xl mx-auto mt-10 mb-16 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg space-y-10">
        {/* POST 0 - Dual-Purpose Ship-It Fund Announcement */}
        <article className="border-b border-cyan-700/30 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            <a href="#" className="hover:underline">
              🔁 Simplified Token Model: The Dual-Purpose Ship-It Fund
            </a>
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Posted <time dateTime="2025-10-19">October 19, 2025</time> by{' '}
            <span className="text-cyan-400">RootSignal</span>
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            As $DEVOPS transitions back to <strong>Solana</strong>, the token
            model has been streamlined for clarity and sustainability. The{' '}
            <strong>Treasury</strong> and <strong>Reserve</strong> wallets have
            been merged into a single dual-purpose wallet — the{' '}
            <strong>Ship-It Fund</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            This fund now serves two roles: sustaining open-source DevOps
            initiatives and reinforcing the overall health of the $DEVOPS token
            economy. It’s a unified system where builder culture and project
            longevity work hand in hand.
          </p>
          <p className="text-gray-400 italic">
            One wallet, two missions — fund open source, sustain $DEVOPS.
          </p>
        </article>

        {/* POST 1 - Solana Return Update */}
        <article className="border-b border-cyan-700/30 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            <a href="#" className="hover:underline">
              🔄 Back to Solana: Finding Our Footing
            </a>
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Posted <time dateTime="2025-10-19">October 19, 2025</time> by{' '}
            <span className="text-cyan-400">RootSignal</span>
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            A few weeks ago, I started this journey on <strong>Solana</strong>,
            testing the early liquidity setup and getting the initial wallet
            funded. Shortly after, I shifted to <strong>BNB Smart Chain</strong>{' '}
            — mainly to experiment with adjustable fees and lower-cost
            deployments while the project was still in development.
          </p>
          <p className="text-gray-300 leading-relaxed mb-3">
            That detour served its purpose. It helped refine token mechanics,
            vesting, and fund logic. But the heart of <strong>$DEVOPS</strong>{' '}
            has always been accessibility, open collaboration, and DevOps
            culture. Returning to <strong>Solana</strong> aligns perfectly with
            those goals.
          </p>
          <p className="text-gray-400 italic">
            A portion of creator rewards from the Solana relaunch will go toward
            reseeding the
            <strong> Ship-It Fund</strong> — proof that iteration and
            transparency build resilience.
          </p>
        </article>

        {/* POST 2 - Stealth Build Phase */}
        <article className="border-b border-cyan-700/30 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            <a href="#" className="hover:underline">
              🚀 Stealth Build Phase Begins
            </a>
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Posted <time dateTime="2025-10-09">October 9, 2025</time> by{' '}
            <span className="text-cyan-400">Team DevOpsCoin</span>
          </p>
          <p className="text-gray-300 leading-relaxed">
            We're kicking off the stealth build phase for $DEVOPS. Over the next
            few weeks, we'll refine the deployment flow, complete the vesting
            contracts, and prepare the Ship-It Fund for early testing.
          </p>
        </article>

        {/* POST 3 - Ship-It Fund Original Post (updated wording) */}
        <article className="border-b border-cyan-700/30 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            <a href="#" className="hover:underline">
              💡 Ship-It Fund: Supporting Open Source
            </a>
          </h2>
          <p className="text-sm text-gray-400 mb-3">
            Posted <time dateTime="2025-10-01">October 1, 2025</time> by{' '}
            <span className="text-cyan-400">Team DevOpsCoin</span>
          </p>
          <p className="text-gray-300 leading-relaxed">
            The Ship-It Fund is the foundation of $DEVOPS — a transparent,
            community-driven wallet that fuels open-source DevOps innovation.
            Instead of relying on complex fee models, it’s powered by a fixed
            allocation and periodic creator-reward top-ups. Every grant is
            traceable, every payout on-chain.
          </p>
        </article>

        {/* FUTURE POSTS PLACEHOLDER */}
        <div className="text-center mt-10">
          <p className="text-gray-400 italic">More updates coming soon…</p>
        </div>
      </main>
    </>
  );
}
