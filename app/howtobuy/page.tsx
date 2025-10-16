import Link from "next/link";

export default function HowToBuyPage() {
  return (
    <section className="container max-w-3xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-left">
      <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
        How to Buy $DEVOPS
      </h1>

      <p className="text-gray-300 mb-8">
        You can now purchase $DEVOPS directly through our{" "}
        <Link href="/buy" className="text-cyan-400 underline font-semibold">
          official Buy Portal
        </Link>
        , or follow the step-by-step manual instructions below if you prefer
        using PancakeSwap directly. Both methods perform the same on-chain swap
        using PancakeSwap liquidity.
      </p>

      <div className="bg-gray-800 border border-cyan-700/40 rounded-lg p-5 mb-10">
        <h2 className="text-teal-400 font-semibold mb-2">
          ✅ Recommended — Buy $DEVOPS on Our Site
        </h2>
        <p className="text-gray-300 mb-3">
          The fastest and most secure way to purchase is through our integrated{" "}
          <Link href="/buy" className="text-cyan-300 underline">
            /buy
          </Link>{" "}
          page. It connects directly to PancakeSwap and lets you swap BNB → $DEVOPS
          without leaving the site.
        </p>
        <p className="text-gray-400 text-sm">
          You’ll confirm each transaction in your wallet (MetaMask, Trust Wallet,
          etc.). After your first swap, you can add the token to your wallet so your
          balance appears automatically.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
        Manual Instructions (Optional)
      </h2>

      <ol className="list-decimal list-inside space-y-5 text-gray-300">
        <li>
          <span className="font-semibold text-teal-400">Set Up a Wallet:</span>{" "}
          You’ll need a wallet compatible with the BNB Smart Chain (BSC). The{" "}
          <strong>Connect Wallet</strong> button on this site supports:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>
              <strong className="text-teal-300">MetaMask (Recommended)</strong> — easiest for most users.  
              Add the BNB Smart Chain manually under{" "}
              <em>Settings → Networks → Add Network</em>:
              <div className="mt-2 ml-4 text-sm text-gray-400">
                <p><strong>Network Name:</strong> BNB Smart Chain</p>
                <p><strong>RPC URL:</strong> https://bsc-dataseed.binance.org/</p>
                <p><strong>Chain ID:</strong> 56</p>
                <p><strong>Currency Symbol:</strong> BNB</p>
                <p>
                  <strong>Block Explorer:</strong>{" "}
                  <a href="https://bscscan.com" target="_blank" className="text-cyan-400 underline">
                    https://bscscan.com
                  </a>
                </p>
              </div>
            </li>
            <li><strong>Rainbow Wallet:</strong> Mobile wallet via WalletConnect.</li>
            <li><strong>Coinbase / Base Wallet:</strong> Works via WalletConnect as well.</li>
            <li><strong>WalletConnect (Universal):</strong> Supports Trust Wallet, SafePal, OKX, etc.</li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-teal-400">Fund Your Wallet:</span>{" "}
          Add some <strong>BNB</strong> to cover your swap and gas fees.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Buy via PancakeSwap:</span>{" "}
          Visit{" "}
          <a href="https://pancakeswap.finance/swap" target="_blank" className="text-cyan-400 underline">
            pancakeswap.finance/swap
          </a>{" "}
          and connect your wallet. Verify you’re on the official site before swapping.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Import the $DEVOPS Token:</span>{" "}
          Paste the official contract address into PancakeSwap’s “Select Token” field:
          <pre className="bg-gray-800 text-cyan-300 p-3 rounded-lg text-sm mt-2">
            {process.env.NEXT_PUBLIC_DEVOPS_TOKEN || "0xYOUR_TOKEN_ADDRESS"}
          </pre>
          <p className="mt-2 text-sm text-gray-400 italic">
            (The official address is displayed above and on{" "}
            <Link href="/" className="text-cyan-400 underline">devopscoin.ai</Link>.)
          </p>
        </li>

        <li>
          <span className="font-semibold text-teal-400">Swap BNB for $DEVOPS:</span>{" "}
          Enter the amount of BNB, set “To” as $DEVOPS, adjust slippage to ~0.5–1%,
          click “Swap,” and confirm in your wallet.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Make $DEVOPS Visible:</span>{" "}
          If your wallet doesn’t automatically show the token, click{" "}
          <strong>“Import Tokens”</strong> and paste the same contract address above.
          MetaMask will detect <code>DEVOPS</code> and 18 decimals automatically.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Verify Your Balance:</span>{" "}
          Check your wallet or{" "}
          <a href="https://bscscan.com" target="_blank" className="text-cyan-400 underline">
            bscscan.com
          </a>{" "}
          using your wallet address to confirm the transaction.
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
              That’s normal the first time. Use the “Add $DEVOPS to MetaMask” button
              on the <Link href="/buy" className="text-cyan-300 underline">Buy page</Link> or manually import the contract address.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              Can I buy directly from my wallet later?
            </h3>
            <p>
              Yes. Once you’ve swapped once, most wallets will automatically route future
              swaps through PancakeSwap’s $DEVOPS liquidity pool.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              What wallets are supported?
            </h3>
            <p>
              The site supports <strong>MetaMask (recommended)</strong>, Rainbow,
              Base/CB Wallet, and any WalletConnect-compatible option.
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
