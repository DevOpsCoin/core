"use client"

import React from "react"

export default function SecurityPage() {
  return (
    <section className="relative max-w-4xl mx-auto mt-10 p-8 rounded-xl text-left bg-gray-900/80 shadow-lg border border-cyan-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-80 -z-10" />

      <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-6">
        Responsible Disclosure
      </h1>

      <p className="text-gray-300 leading-relaxed mb-8">
        DevOpsCoin welcomes responsible disclosure of security vulnerabilities. We value
        collaboration with researchers and engineers who help keep our ecosystem secure and
        transparent.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">🧩 Scope</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li>
          The DevOpsCoin DApp and website (<code>https://devopscoin.ai</code>)
        </li>
        <li>
          Smart contracts deployed under the <strong>DevOpsCoin</strong> namespace on the BNB Smart
          Chain
        </li>
        <li>Official APIs, web services, and hosted domains</li>
      </ul>

      <p className="text-gray-400 mb-6">
        <strong>Out of scope:</strong> third-party wallets, RPC nodes, exchanges, or issues
        unrelated to security (UI bugs, text errors, or public
        <code> NEXT_PUBLIC_* </code> variables).
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">🔒 How to Report</h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
        <li>Do not post vulnerabilities publicly.</li>
        <li>
          Email:{" "}
          <a href="mailto:security@devopscoin.ai" className="text-cyan-400 underline">
            security@devopscoin.ai
          </a>
        </li>
        <li>
          Or submit via:{" "}
          <a
            href="https://devopscoin.ai/security"
            className="text-cyan-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            devopscoin.ai/security
          </a>
        </li>
      </ol>

      <p className="text-gray-300 mb-6">
        Include a clear description, reproduction steps, impact summary, and any suggested
        mitigations or patches.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">⚖️ Our Commitment</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li>Acknowledge reports within 48 hours</li>
        <li>Validate and investigate findings</li>
        <li>Provide an estimated resolution timeline</li>
        <li>Credit researchers publicly (if desired)</li>
        <li>No legal action for good-faith, policy-compliant research</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">💰 Recognition & DEVOPS Grants</h2>
      <p className="text-gray-300 mb-4">
        DevOpsCoin does not operate a traditional bug bounty program. Instead, impactful disclosures
        and ecosystem improvements may qualify for recognition through the{" "}
        <strong>DEVOPS Grants</strong> program or <strong>Ship-It Fund</strong> rewards.
      </p>
      <p className="text-gray-300 mb-6">
        Grants are discretionary and based on the clarity, reproducibility, and severity of your
        findings. Rewards may include DEVOPS tokens, Ship-It NFT badges, or acknowledgment in
        transparency reports.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">
        🌐 Transparency & Security Ethos
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        DevOpsCoin practices <strong>open security</strong> — merging DevOps culture with blockchain
        transparency. All smart contracts are verified on{" "}
        <a
          href="https://bscscan.com"
          className="text-cyan-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          BscScan
        </a>
        , and the DApp frontend is open-source for public review.
      </p>

      <hr className="my-8 border-cyan-900" />

      <p className="text-gray-400 italic text-sm">
        Thank you for helping secure the future of DevOps on-chain.
        <br />
        <span className="text-cyan-300">“Where pipelines meet protocols.”</span>
      </p>
    </section>
  )
}
