"use client";
import React from "react";

export default function UpdatesPage() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="container max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center">
        <h1 className="text-3xl font-bold text-cyan-400 mb-2">$DEVOPS Updates</h1>
        <p className="text-gray-300">News, dev logs, and announcements from the DevOpsCoin project.</p>
      </section>

      {/* POSTS WRAPPER */}
      <main className="container max-w-4xl mx-auto mt-10 mb-16 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg space-y-10">
        {/* POST 1 */}
        <article className="border-b border-cyan-700/30 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            <a href="#" className="hover:underline">🚀 Stealth Build Phase Begins</a>
          </h2>
          <p className="text-sm text-gray-400 mb-3">Posted <time dateTime="2025-10-09">October 9, 2025</time> by <span className="text-cyan-400">Team DevOpsCoin</span></p>
          <p className="text-gray-300 leading-relaxed">
            We're kicking off the stealth build phase for $DEVOPS. Over the next few weeks, 
            we'll refine the BNB deployment, finalize tokenomics, and begin internal testing for the 
            Ship-It Fund smart contract module. 
          </p>
        </article>

        {/* POST 2 */}
        <article className="border-b border-cyan-700/30 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            <a href="#" className="hover:underline">💡 Ship-It Fund: Supporting Open Source</a>
          </h2>
          <p className="text-sm text-gray-400 mb-3">Posted <time dateTime="2025-10-01">October 1, 2025</time> by <span className="text-cyan-400">Team DevOpsCoin</span></p>
          <p className="text-gray-300 leading-relaxed">
            The Ship-It Fund is our commitment to supporting open-source DevOps projects. 
            A portion of each transaction fee will flow directly to community grants — 
            fueling innovation where automation meets creativity.
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