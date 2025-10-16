import Link from "next/link";

export default function HowToBuyPage() {
  return (
    <section className="container max-w-3xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-left">
      <h1 className="text-3xl font-bold text-teal-400 mb-6 text-center">
        How to Buy $DEVOPS (Coming Soon)
      </h1>

      <p className="text-gray-300 mb-8">
        Once trading is live, you’ll be able to buy $DEVOPS directly on{" "}
        <span className="text-cyan-400 font-semibold">PancakeSwap</span> — the
        leading decentralized exchange on the BNB Smart Chain (BSC). PancakeSwap
        will be the easiest and recommended way to buy at launch, but after the
        first swap you’ll be able to trade through your wallet’s built-in swap
        feature or other decentralized exchanges as well.
      </p>

      <ol className="list-decimal list-inside space-y-5 text-gray-300">
        <li>
          <span className="font-semibold text-teal-400">Set Up a Wallet:</span>{" "}
          You’ll need a wallet compatible with the BNB Smart Chain (BSC). The{" "}
          <strong>Connect Wallet</strong> button on this site supports the
          following options:
          <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
            <li>
              <strong className="text-teal-300">
                MetaMask (Recommended)
              </strong>{" "}
              — easiest option for most users.  
              Install MetaMask and open{" "}
              <em>Settings → Networks → Add Network Manually</em>, then enter:
              <div className="mt-2 ml-4 text-sm text-gray-400">
                <p><strong>Network Name:</strong> BNB Smart Chain</p>
                <p><strong>RPC URL:</strong> https://bsc-dataseed.binance.org/</p>
                <p><strong>Chain ID:</strong> 56</p>
                <p><strong>Currency Symbol:</strong> BNB</p>
                <p>
                  <strong>Block Explorer:</strong>{" "}
                  <a
                    href="https://bscscan.com"
                    target="_blank"
                    className="text-cyan-400 underline"
                  >
                    https://bscscan.com
                  </a>
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-1 italic">
                (Recommended for most users — quick setup, desktop and mobile
                support, no QR scanning required.)
              </p>
            </li>

            <li>
              <strong>Rainbow Wallet:</strong>  
              A clean, mobile-first wallet that connects easily via WalletConnect.  
              When you click “Connect Wallet” on this site, choose{" "}
              <strong>WalletConnect</strong> and scan the QR code from the
              Rainbow app.
            </li>

            <li>
              <strong>Base Account (Coinbase Wallet):</strong>  
              Coinbase’s Base L2 wallet supports BNB Smart Chain through
              WalletConnect. Choose “Base Account” or “WalletConnect” to connect
              your Coinbase or Base extension wallet.
            </li>

            <li>
              <strong>WalletConnect (Universal Option):</strong>  
              Works with nearly all other mobile wallets such as{" "}
              <strong>Trust Wallet</strong>, <strong>SafePal</strong>, or{" "}
              <strong>OKX Wallet</strong>. Select “WalletConnect” → scan the QR
              code → approve the connection.
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold text-teal-400">Fund Your Wallet:</span>{" "}
          Add a small amount of <strong>BNB</strong> to your wallet. This covers
          both the token purchase and gas fees. You can buy BNB on Binance,
          Kraken, or Coinbase, then withdraw it to your wallet address.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Prepare for Launch:</span>{" "}
          When $DEVOPS trading goes live, visit{" "}
          <a
            href="https://pancakeswap.finance/swap"
            target="_blank"
            className="text-cyan-400 underline"
          >
            PancakeSwap
          </a>{" "}
          and click “Connect Wallet.” Confirm you’re on{" "}
          <code>https://pancakeswap.finance</code> — avoid unofficial clones or
          pop-up links.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Import the Official Token:</span>{" "}
          On launch day, the verified $DEVOPS contract address will be announced
          here and on{" "}
          <Link href="/" className="text-cyan-400 underline">
            devopscoin.ai
          </Link>
          . You’ll paste it into PancakeSwap’s “Select Token” field to import
          the correct asset before trading.
          <p className="mt-2 text-sm text-gray-400 italic">
            (The official contract address will appear here after launch.)
          </p>
        </li>

        <li>
          <span className="font-semibold text-teal-400">Swap BNB for $DEVOPS:</span>{" "}
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Enter the amount of BNB you want to trade.</li>
            <li>Set “From” to BNB and “To” to $DEVOPS.</li>
            <li>Adjust slippage to around <strong>0.5% – 1%</strong>.</li>
            <li>Click “Swap” and confirm the transaction in your wallet.</li>
          </ul>
          <p className="mt-3 text-gray-400 italic">
            After your first transaction, your wallet will automatically
            recognize $DEVOPS. You can then buy or sell directly within your
            wallet’s swap feature or continue using PancakeSwap — both use the
            same liquidity pool.
          </p>
        </li>

        <li>
          <span className="font-semibold text-teal-400">Verify Your Purchase:</span>{" "}
          Once your swap is complete, your wallet balance will update. You can
          also check{" "}
          <a
            href="https://bscscan.com"
            target="_blank"
            className="text-cyan-400 underline"
          >
            BscScan
          </a>{" "}
          using your wallet address to confirm your token balance and
          transaction details.
        </li>

        <li>
          <span className="font-semibold text-teal-400">Security Tips:</span>{" "}
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Never share your seed phrase or private key with anyone.</li>
            <li>Bookmark official URLs (devopscoin.ai, pancakeswap.finance).</li>
            <li>Use a hardware wallet for large holdings.</li>
            <li>Always verify the contract address before swapping.</li>
          </ul>
        </li>
      </ol>

      <div className="mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">
          Troubleshooting & FAQ
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              I don’t see $DEVOPS in my wallet after buying
            </h3>
            <p>
              That’s normal before it’s officially added. You’ll simply need to
              import the token once the contract address is announced. After the
              first import, $DEVOPS will remain visible in your wallet.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              Can I buy or sell directly from my wallet after that?
            </h3>
            <p>
              Yes. Once you’ve completed your first PancakeSwap transaction, your
              wallet will automatically recognize $DEVOPS. You can then buy or
              sell directly within your wallet’s built-in swap interface or keep
              using PancakeSwap — both routes use the same underlying liquidity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              What wallets are supported?
            </h3>
            <p>
              The site currently supports{" "}
              <strong>MetaMask (recommended)</strong>,{" "}
              <strong>Rainbow</strong>, <strong>Base Account</strong>, and{" "}
              <strong>WalletConnect</strong>. WalletConnect allows you to use
              almost any mobile wallet such as Trust Wallet, SafePal, or OKX
              Wallet. All connect safely and non-custodially.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              Is PancakeSwap the only place to buy?
            </h3>
            <p>
              It’s the easiest and official launch route, but not the only one.
              Once liquidity is live, most wallets and DEX aggregators (like
              MetaMask Swap, Rainbow, or 1inch) will automatically route trades
              through the same PancakeSwap liquidity pool.
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
