'use client';
import React from 'react';
import MainContent from '../components/MainContent';

export default function UpdatesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <MainContent className="text-center max-w-4xl p-6">
        <h1 className="text-3xl font-bold text-cyan-400 mb-2">
          $DEVOPS Updates
        </h1>
        <p className="text-gray-300 mb-4">
          News, dev logs, and announcements from the DevOpsCoin project.
        </p>
        <p className="text-gray-400 text-sm italic">
          Built in public — where shipping is culture and transparency is how we
          build.
        </p>
      </MainContent>

      {/* POSTS WRAPPER */}
      <MainContent className="max-w-4xl mx-auto mt-10 mb-16 p-6 space-y-10">
        <main>
          {/* POST 0 - Wallet Structure Clarification */}
          <article className="border-b border-cyan-700/30 pb-6 mb-6">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
              <a href="#" className="hover:underline">
                🧩 Clarifying the Wallet Model: Ship-It Fund vs TreasuryOps
              </a>
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              Posted <time dateTime="2025-10-19">October 19, 2025</time> by{' '}
              <span className="text-cyan-400">RootSignal</span>
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              Recent updates to the <strong>$DEVOPS</strong> wallet structure
              introduced clearer boundaries between community and operational
              funding. The <strong>Ship-It Fund</strong> is now confirmed as a
              single-purpose pool dedicated to{' '}
              <strong>open-source grants and community sponsorships</strong> —
              supporting builders, maintainers, and creators across the
              ecosystem.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              The <strong>TreasuryOps</strong> wallet handles liquidity,
              marketing, and operational activities that keep the ecosystem
              running. Separating these functions preserves transparency and
              makes each wallet’s purpose measurable on-chain.
            </p>
            <p className="text-gray-400 italic">
              Two wallets, two missions — Ship-It Fund for builders, TreasuryOps
              for operations.
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
              A few weeks ago, we started this journey on{' '}
              <strong>Solana</strong>, testing early liquidity setups and
              getting initial wallets funded. Later, we experimented on{' '}
              <strong>BNB Smart Chain</strong> to refine contract mechanics and
              fee structures. Those tests paid off — the return to{' '}
              <strong>Solana</strong> locks in scalability, performance, and
              transparency.
            </p>
            <p className="text-gray-400 italic">
              A portion of creator rewards from the Solana relaunch will reseed
              the <strong>Ship-It Fund</strong> — iteration breeds resilience.
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
              We’re entering the stealth build phase for $DEVOPS — finalizing
              vesting contracts, refining the deployment workflow, and prepping
              the Ship-It Fund for first-round grant testing.
            </p>
          </article>

          {/* POST 3 - Ship-It Fund Original Post */}
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
              The Ship-It Fund is the backbone of $DEVOPS — a transparent,
              community-driven wallet that fuels{' '}
              <strong>open-source innovation</strong>. Powered by a fixed
              allocation and periodic TreasuryOps top-ups, every grant is
              traceable and every payout verifiable on-chain.
            </p>
          </article>

          {/* POST 4 - Branding Update */}
          <article className="border-b border-cyan-700/30 pb-6 mb-6">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
              <a href="#" className="hover:underline">
                🧠 Brand Alignment: Dev Culture Meets Degen
              </a>
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              Posted <time dateTime="2025-10-24">October 24, 2025</time> by{' '}
              <span className="text-cyan-400">RootSignal</span>
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              As we move toward public launch, the $DEVOPS brand is solidifying
              into what it was always meant to be — proof that{' '}
              <strong>dev culture</strong> and <strong>degen energy</strong> can
              coexist. The new messaging emphasizes clarity, contribution, and
              credibility — not hype. Every asset, line, and phrase now points
              back to one truth:{' '}
              <strong>we ship, we fund, we build in public</strong>.
            </p>
            <p className="text-gray-400 italic">
              The brand isn’t just visuals — it’s a framework for
              accountability.
            </p>
          </article>

          {/* FUTURE POSTS PLACEHOLDER */}
          <div className="text-center mt-10">
            <p className="text-gray-400 italic">More updates coming soon…</p>
            <p className="text-gray-500 text-xs mt-6 italic">
              Built to fund work — not hype.
            </p>
          </div>
        </main>
      </MainContent>
    </>
  );
}
