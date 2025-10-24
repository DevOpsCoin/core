'use client';
import React, { useEffect, useState } from 'react';
import MainContent from '../components/MainContent';

const TOKEN_MINT = process.env.NEXT_PUBLIC_DEVOPS_TOKEN_PUMPFUN!;
const PUMPFUN_URL = `https://pump.fun/${TOKEN_MINT}`;
const JUPITER_IFRAME_URL = `https://jup.ag/swap/SOL-${TOKEN_MINT}?darkMode=true`;

export default function DevOpsBuyCard() {
  const [isListed, setIsListed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkGraduation() {
      try {
        const res = await fetch(
          'https://quote-api.jup.ag/v6/indexed-route-map'
        );
        const data = await res.json();
        const listed = Object.keys(data.tokens || {}).includes(TOKEN_MINT);
        setIsListed(listed);
      } catch (err) {
        console.error('Error checking Jupiter listing:', err);
        setIsListed(false);
      } finally {
        setLoading(false);
      }
    }
    checkGraduation();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-400 text-sm">Checking token status...</p>
      </div>
    );
  }

  return (
    <MainContent className="text-center">
      <div className="max-w-lg mx-auto p-8 rounded-2xl border border-cyan-800">
        <h2 className="text-2xl font-bold text-cyan-300 mb-4">$DEVOPS</h2>

        {isListed ? (
          <>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              $DEVOPS has graduated from Pump.fun and is now trading on{' '}
              <span className="text-cyan-400 font-semibold">Raydium</span>. You
              can buy or swap directly using the embedded Jupiter interface
              below.
            </p>
            <div className="h-[460px] overflow-hidden rounded-xl border border-cyan-800 shadow-inner">
              <iframe
                src={JUPITER_IFRAME_URL}
                title="Jupiter Swap"
                className="w-full h-full border-0 rounded-xl"
                allow="clipboard-read; clipboard-write; web-share; accelerometer; gyroscope; payment"
              />
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              $DEVOPS is currently live on{' '}
              <span className="text-cyan-400 font-semibold">Pump.fun</span>{' '}
              during its launch phase. Trading volume from early supporters
              generates <strong>creator rewards</strong> that flow into the{' '}
              <strong>TreasuryOps wallet</strong> — a SOL-based operations fund
              initially bootstrapped with 2% DEVOPS and SOL for airdrops,
              marketing, and liquidity operations. TreasuryOps does not hold
              $DEVOPS long-term and only accumulates tokens from{' '}
              <strong>buybacks or purchases</strong> used for community
              programs.
              <br />
              <br />
              50% of creator rewards remain in TreasuryOps to sustain operations
              and Ship-It Fund top-ups, while the remaining 50% are withdrawn
              for business operations and real-world expenses.
              <br />
              <br />
              The{' '}
              <span className="text-cyan-400 font-semibold">
                Ship-It Fund
              </span>{' '}
              distributes <strong>monthly open-source grants</strong> to DevOps
              builders and contributors. If volume dips, grants simply roll over
              to the next active month.
            </p>
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg"
            >
              Buy on Pump.fun
            </a>
          </>
        )}
      </div>
    </MainContent>
  );
}
