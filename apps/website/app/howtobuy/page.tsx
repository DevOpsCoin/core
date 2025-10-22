'use client';

import Link from 'next/link';

export default function HowToBuyPage() {
  const tokenAddress =
    process.env.NEXT_PUBLIC_DEVOPS_TOKEN_PUMPFUN ||
    '7EwFPVX1PPYzyrNZ4fPsZDZ8LuePinHCrWx5jPCxpump';

  const jupiterUrl =
    typeof window !== 'undefined'
      ? `https://jup.ag/swap/SOL-${tokenAddress}`
      : null;

  const hasGraduated = false; // toggle true after launch

  return (
    <section className="container max-w-3xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-left">
      <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
        How to Buy $DEVOPS
      </h1>

      <p className="text-gray-300 mb-8">
        $DEVOPS runs on the <strong>Solana blockchain</strong>. During its early
        phase, the token can only be purchased through{' '}
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline font-semibold"
        >
          Pump.fun
        </a>
        . Once the bonding curve completes, the token automatically graduates to{' '}
        <strong>Raydium</strong> and becomes tradable through{' '}
        <strong>Jupiter</strong>, Solana’s main DEX aggregator. Our{' '}
        <Link href="/buy" className="text-cyan-400 underline font-semibold">
          /buy
        </Link>{' '}
        page updates automatically once that happens.
      </p>

      <div className="bg-gray-800 border border-cyan-700/40 rounded-lg p-5 mb-10">
        <h2 className="text-teal-400 font-semibold mb-2">
          ✅ Recommended — Buy $DEVOPS on Our Site
        </h2>
        <p className="text-gray-300 mb-3">
          The easiest way to purchase $DEVOPS is through our integrated{' '}
          <Link href="/buy" className="text-cyan-300 underline">
            Buy page
          </Link>
          . While the token is still on Pump.fun, this button will redirect you
          to the official listing. Once it graduates, it will automatically
          switch to a live Jupiter swap widget for direct SOL → $DEVOPS trades.
        </p>
        <p className="text-gray-400 text-sm">
          You’ll confirm each transaction in your connected Solana wallet
          (Phantom, Solflare, Backpack, etc.). A small portion of creator
          rewards from trading volume helps seed the{' '}
          <span className="text-cyan-400 font-semibold">Ship-It Fund</span> to
          support open-source DevOps projects.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
        Manual Instructions (Optional)
      </h2>

      <ol className="list-decimal list-inside space-y-5 text-gray-300">
        <li>
          <span className="font-semibold text-teal-400">
            Set Up a Solana Wallet:
          </span>{' '}
          You’ll need a wallet compatible with Solana. The{' '}
          <strong>Connect Wallet</strong> button on this site supports:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>
              <strong className="text-teal-300">Phantom (Recommended)</strong> —{' '}
              Available as a browser extension and mobile app.{' '}
              <a
                href="https://phantom.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline"
              >
                Download Phantom
              </a>
            </li>
            <li>
              <strong>Solflare:</strong> Web and mobile wallet supporting Ledger
              and staking.
            </li>
            <li>
              <strong>Backpack:</strong> Wallet + app platform built for Solana
              power users.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-teal-400">
            Fund Your Wallet with SOL:
          </span>{' '}
          Buy SOL (the Solana network token) from an exchange like Coinbase,
          Kraken, or Binance. Transfer it to your wallet address — you’ll need a
          small amount for gas fees and your swap.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Buy via Pump.fun:</span>{' '}
          Visit the official Pump.fun page for $DEVOPS:
          <pre className="bg-gray-800 text-cyan-300 p-3 rounded-lg text-sm mt-2">
            https://pump.fun/
            {tokenAddress}
          </pre>
          Connect your wallet, choose how much SOL you want to spend, and
          approve the transaction in your wallet. Your $DEVOPS tokens will
          appear automatically once confirmed.
        </li>

        <li>
          <span className="font-semibold text-teal-400">
            Verify the Token Mint:
          </span>{' '}
          Always confirm the mint address before buying:
          <pre className="bg-gray-800 text-cyan-300 p-3 rounded-lg text-sm mt-2">
            {tokenAddress}
          </pre>
        </li>

        <li>
          <span className="font-semibold text-teal-400">After Graduation:</span>{' '}
          Once the bonding curve completes, the token automatically migrates to
          Raydium. You’ll be able to trade through our integrated{' '}
          <Link href="/buy" className="text-cyan-400 underline">
            Buy page
          </Link>{' '}
          or directly via{' '}
          {hasGraduated && jupiterUrl ? (
            <a
              href={jupiterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Jupiter
            </a>
          ) : (
            <span className="text-gray-500 italic">
              (Jupiter link will be available after launch)
            </span>
          )}
          .
        </li>
      </ol>

      <div className="mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
          Troubleshooting & FAQ
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              I don’t see $DEVOPS in my wallet
            </h3>
            <p>
              That’s normal the first time. Pump.fun automatically sends the
              tokens to your Solana wallet once the transaction settles. Phantom
              usually displays them automatically — if not, use “Manage Tokens”
              and paste the mint address above.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              What happens after graduation?
            </h3>
            <p>
              Once the bonding curve finishes, liquidity is migrated to Raydium.
              The token becomes tradable through Jupiter and your existing
              Phantom or Solflare wallet. No action is required — your holdings
              remain valid.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              What wallets are supported?
            </h3>
            <p>
              The site supports <strong>Phantom (recommended)</strong>,
              Solflare, Backpack, and any wallet compatible with Solana’s{' '}
              <code>wallet-adapter</code> framework.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-cyan-300 underline">
          Return Home
        </Link>
      </div>
    </section>
  );
}
