"use client";
import Link from "next/link";
import WalletConnect from "./WalletConnect";

export default function Header() {
  return (
    <header className="w-full">
      <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-cyan-400 font-bold text-xl">$DEVOPS</Link>
        <nav className="flex items-center gap-4">
          <Link href="/mint" className="text-gray-200 hover:text-cyan-300">Mint</Link>
          <WalletConnect />
        </nav>
      </div>
      <hr className="border-cyan-800/40 max-w-5xl mx-auto" />
    </header>
  );
}
