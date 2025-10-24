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
        <p className="text-gray-400 text-sm">
          Verifying token listing on Jupiter...
        </p>
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
              $DEVOPS has graduated from Pump.fun and is now actively trading on{' '}
              <span className="text-cyan-400 font-semibold">Raydium</span>. You
              can buy or swap directly through the embedded Jupiter interface
              below.
            </p>

            <div className="overflow-hidden rounded-xl border border-cyan-800 shadow-inner aspect-[5/6] max-h-[480px]">
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
              seeded with 2% DEVOPS and SOL for liquidity, marketing, and
              operational support.
              <br />
              <br />
              The TreasuryOps wallet holds DEVOPS temporarily only for{' '}
              <strong>buybacks or Ship-It top-ups</strong>. It manages
              liquidity, executes buybacks, and funds ecosystem growth — all
              publicly logged in the transparency ledger.
              <br />
              <br />
              Creator rewards from <strong>Pump.fun</strong> are allocated
              approximately 50/50: half retained by TreasuryOps to sustain
              operations and Ship-It top-ups, and half directed to DevOpsCoin
              LLC for business operations. Every transaction is disclosed in the
              public transparency ledger.
              <br />
              <br />
              The{' '}
              <span className="text-cyan-400 font-semibold">
                Ship-It Fund
              </span>{' '}
              issues <strong>monthly open-source grants</strong> to DevOps
              builders and contributors. When volume slows, grants roll forward
              automatically — no forced sales or dilution.
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
