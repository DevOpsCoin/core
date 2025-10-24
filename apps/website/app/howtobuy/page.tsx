'use client';

import Link from 'next/link';
import MainContent from '../components/MainContent';

export default function HowToBuyPage() {
  const tokenAddress =
    process.env.NEXT_PUBLIC_DEVOPS_TOKEN_PUMPFUN ||
    '7EwFPVX1PPYzyrNZ4fPsZDZ8LuePinHCrWx5jPCxpump';

  const jupiterUrl =
    typeof window !== 'undefined'
      ? `https://jup.ag/swap/SOL-${tokenAddress}`
      : null;

  const hasGraduated = false; // toggle true after Raydium listing

  return (
    <MainContent className="container max-w-3xl mx-auto mt-12 p-8 text-left">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
        How to Buy $DEVOPS
      </h1>

      <p className="text-gray-300 mb-8">
        <strong>$DEVOPS</strong> runs on the <strong>Solana blockchain</strong>.
        Initially, it’s available through{' '}
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline font-semibold"
        >
          Pump.fun
        </a>
        . Once the bonding curve completes, the token automatically graduates to{' '}
        <strong>Raydium</strong> and becomes tradable on{' '}
        <strong>Jupiter</strong>, Solana’s DEX aggregator. Our{' '}
        <Link href="/buy" className="text-cyan-400 underline font-semibold">
          /buy
        </Link>{' '}
        page updates automatically when this transition occurs.
      </p>

      {/* RECOMMENDED METHOD */}
      <div className="bg-gray-800 border border-cyan-700/40 rounded-lg p-5 mb-10">
        <h2 className="text-cyan-400 font-semibold mb-2">
          ✅ Recommended — Buy $DEVOPS on This Site
        </h2>

        <p className="text-gray-300 mb-3">
          The simplest way to purchase $DEVOPS is through our integrated{' '}
          <Link href="/buy" className="text-cyan-300 underline">
            Buy page
          </Link>
          . While the token remains on Pump.fun, this button redirects to the
          official listing. After graduation, it automatically switches to a
          live Jupiter swap widget for direct SOL → $DEVOPS swaps.
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">
          Each trade generates <strong>creator rewards</strong> that flow into
          the <strong>TreasuryOps wallet</strong> — a SOL-based operations fund
          seeded with 2% DEVOPS and SOL for liquidity, marketing, and
          operational support. The wallet holds DEVOPS only temporarily for{' '}
          <strong>buybacks or Ship-It Fund top-ups</strong>, with all activity
          recorded in the public transparency ledger.
          <br />
          <br />
          TreasuryOps sustains ongoing operations and refills the{' '}
          <span className="text-cyan-400 font-semibold">Ship-It Fund</span> — a
          5% DEVOPS grant treasury supporting open-source builders and
          maintainers. All fund movements are logged on-chain and mirrored in
          the ledger for full auditability.
        </p>
      </div>

      {/* MANUAL INSTRUCTIONS */}
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
        Manual Instructions (Optional)
      </h2>

      <ol className="list-decimal list-inside space-y-5 text-gray-300">
        <li>
          <span className="font-semibold text-cyan-400">
            Set Up a Solana Wallet:
          </span>{' '}
          You’ll need a wallet compatible with Solana. The{' '}
          <strong>Connect Wallet</strong> button on this site supports:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>
              <strong className="text-teal-300">Phantom (Recommended)</strong> —{' '}
              Browser extension and mobile app.{' '}
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
              <strong>Solflare:</strong> Web and mobile wallet with Ledger
              support.
            </li>
            <li>
              <strong>Backpack:</strong> Wallet and app platform for advanced
              Solana users.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-cyan-400">
            Fund Your Wallet with SOL:
          </span>{' '}
          Purchase SOL (the Solana network token) from Coinbase, Kraken, or
          Binance. Transfer it to your wallet — you’ll need a small balance for
          swaps and gas fees.
        </li>

        <li>
          <span className="font-semibold text-cyan-400">Buy via Pump.fun:</span>{' '}
          Visit the official Pump.fun page for $DEVOPS:
          <pre className="bg-gray-800 text-cyan-300 p-3 rounded-lg text-sm mt-2">
            https://pump.fun/{tokenAddress}
          </pre>
          Connect your wallet, choose how much SOL you want to spend, and
          approve the transaction. Tokens appear automatically after
          confirmation.
        </li>

        <li>
          <span className="font-semibold text-cyan-400">
            Verify the Token Mint:
          </span>{' '}
          Always confirm the mint address before buying:
          <pre className="bg-gray-800 text-cyan-300 p-3 rounded-lg text-sm mt-2">
            {tokenAddress}
          </pre>
        </li>

        <li>
          <span className="font-semibold text-cyan-400">After Graduation:</span>{' '}
          Once the bonding curve closes, liquidity locks on Raydium and $DEVOPS
          becomes tradable through{' '}
          <Link href="/buy" className="text-cyan-400 underline">
            our Buy page
          </Link>{' '}
          or directly on{' '}
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
              (link available post-launch)
            </span>
          )}
          .
        </li>
      </ol>

      {/* FAQ SECTION */}
      <div className="mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
          Troubleshooting & FAQ
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              I don’t see $DEVOPS in my wallet
            </h3>
            <p>
              That’s normal right after purchase. Pump.fun sends tokens to your
              Solana wallet upon confirmation. If Phantom doesn’t display them,
              open “Manage Tokens” and paste the mint address shown above.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              What happens after graduation?
            </h3>
            <p>
              Once the bonding curve closes, liquidity is locked on Raydium and
              tradable through Jupiter. Your holdings remain valid — no
              migration or manual steps required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              How does trading support open source?
            </h3>
            <p>
              Creator rewards from trading volume are collected in SOL within
              TreasuryOps. Roughly 50% fund operations and Ship-It top-ups,
              while 50% support DevOpsCoin LLC business operations. All
              allocations are logged publicly in the transparency ledger. The
              Ship-It Fund issues verified monthly grants to open-source
              developers and contributors.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-cyan-300 underline">
          Return Home
        </Link>
        <p className="text-gray-500 text-xs mt-4 italic">
          Built to fund work — not hype.
        </p>
      </div>
    </MainContent>
  );
}
