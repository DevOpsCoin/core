'use client';
import React, { useEffect, useState } from 'react';

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
    <section className="max-w-lg mx-auto mt-10 text-center p-8 rounded-2xl bg-gray-900 shadow-lg border border-cyan-800">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4">$DEVOPS</h2>

      {isListed ? (
        <>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            $DEVOPS has graduated from Pump.fun and is now trading on{' '}
            <span className="text-cyan-400 font-semibold">Raydium</span>. You
            can buy or swap directly using the Jupiter interface below.
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
            <span className="text-cyan-400 font-semibold">Pump.fun</span> during
            its initial launch phase. A small portion of creator rewards from
            early trading activity helps seed the{' '}
            <span className="text-cyan-400 font-semibold">Ship-It Fund</span> —
            a grant pool supporting open-source DevOps tools. Once $DEVOPS
            graduates to Raydium, this page will automatically update with a
            direct swap interface.
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
    </section>
  );
}
