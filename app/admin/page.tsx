"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAccount, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";

export default function AdminPage() {
  const { data: session } = useSession();
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState("");
  const [actionStatus, setActionStatus] = useState("");

  // === WALLET VERIFICATION ===
  async function verifyWallet() {
    if (!isConnected) {
      setStatus("Please connect your wallet first.");
      return;
    }

    try {
      setStatus("Requesting nonce...");
      const nonceRes = await fetch("/api/siwe/nonce");
      const { nonce } = await nonceRes.json();

      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Verify ownership to access admin panel.",
        uri: window.location.origin,
        version: "1",
        chainId: 56, // BNB Smart Chain
        nonce,
      });

      const signature = await signMessageAsync({ message: message.prepareMessage() });
      const verifyRes = await fetch("/api/siwe/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, signature }),
      });

      const result = await verifyRes.json();
      if (result.success) {
        setVerified(true);
        setStatus(`✅ Wallet verified: ${address}`);
        localStorage.setItem("siweMessage", JSON.stringify(message));
        localStorage.setItem("siweSignature", signature);
      } else {
        setStatus("❌ Verification failed.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error verifying wallet.");
    }
  }

  // === ADMIN ACTION ===
  async function runAdminAction() {
    setActionStatus("Running admin action...");
    try {
      const message = localStorage.getItem("siweMessage");
      const signature = localStorage.getItem("siweSignature");
      if (!message || !signature) {
        setActionStatus("Please verify wallet first.");
        return;
      }

      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: JSON.parse(message),
          signature,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setActionStatus(`✅ Admin action executed for wallet: ${data.address}`);
      } else {
        setActionStatus(`❌ Action failed: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setActionStatus("⚠️ Network or server error.");
    }
  }

  return (
  <section className="max-w-4xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl border border-cyan-700/40 shadow-lg text-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Admin Dashboard</h1>

      {/* GitHub Auth */}
      <div className="mb-6">
        {session ? (
          <div>
            <span className="text-cyan-300 mr-2">
              Signed in as {session.user?.email}
            </span>
            <button onClick={() => signOut()} className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300">
              Sign out
            </button>
          </div>
        ) : (
          <button onClick={() => signIn("github")} className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300">
            Sign in with GitHub
          </button>
        )}
      </div>

      {/* Wallet Verification and Admin Actions */}
      {!verified ? (
        <>
          <p className="text-gray-400 mb-4">
            Please verify ownership of your admin wallet to continue.
          </p>
          <button onClick={verifyWallet} className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300">
            Verify Wallet
          </button>
          <p className="mt-3 text-cyan-300">{status}</p>
        </>
      ) : (
        <>
          <p className="text-cyan-300 mb-4">{status}</p>
          <div className="bg-gray-800 p-4 rounded-lg border border-cyan-700/40">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">
              Authorized Actions
            </h2>
            <ul className="text-gray-200 text-left list-disc list-inside mb-4">
              <li>Manage Ship-It Fund payouts</li>
              <li>Review verified mints</li>
              <li>Post announcements to X / Telegram (coming soon)</li>
            </ul>
            <button onClick={runAdminAction} className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition ring-2 ring-cyan-400/40 hover:ring-cyan-300">
              Run Admin Action
            </button>
            <p className="mt-3 text-cyan-300">{actionStatus}</p>
          </div>
        </>
      )}
    </section>
  );
}
