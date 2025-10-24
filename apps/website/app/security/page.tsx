'use client';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import React from 'react';
import MainContent from '../components/MainContent';

export default function SecurityPage() {
  return (
    <MainContent className="text-center px-6 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 opacity-80 -z-10" />

      <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-6">
        Responsible Disclosure
      </h1>

      <p className="text-gray-300 leading-relaxed mb-8">
        DevOpsCoin welcomes responsible disclosure of security vulnerabilities.
        We value collaboration with engineers and researchers who help keep our
        ecosystem secure, auditable, and transparent.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">Scope</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li>
          The official website and dApp (<code>https://devopscoin.ai</code>)
        </li>
        <li>
          Smart contracts, Solana programs, and associated wallet logic under
          the <strong>DevOpsCoin</strong> namespace
        </li>
        <li>
          APIs, hosted services, and GitHub automation under DevOpsCoin LLC
        </li>
      </ul>

      <p className="text-gray-400 mb-6">
        <strong>Out of scope:</strong> third-party exchanges, RPC nodes,
        pump.fun infrastructure, or wallet providers not operated by DevOpsCoin.
        Cosmetic issues, text typos, or public <code>NEXT_PUBLIC_*</code>{' '}
        variables are also excluded.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">
        How to Report
      </h2>
      <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
        <li>Do not publicly disclose vulnerabilities before coordination.</li>
        <li>
          Email:{' '}
          <a
            href="mailto:security@devopscoin.ai"
            className="text-cyan-400 underline"
          >
            security@devopscoin.ai
          </a>
        </li>
        <li>
          Or submit privately through{' '}
          <a
            href="https://github.com/DevOpsCoin/core/security/advisories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            GitHub Security Advisories
          </a>
          .
        </li>
      </ol>

      <p className="text-gray-300 mb-6">
        Include a clear description, reproduction steps, estimated impact, and
        suggested mitigation or patch. Anonymous reports are accepted but
        credited only if identity is verified.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">
        Our Commitment
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        <li>Acknowledge valid reports within 48 hours</li>
        <li>Investigate and confirm findings quickly</li>
        <li>Provide estimated remediation or patch timelines</li>
        <li>Credit researchers publicly (opt-in)</li>
        <li>No legal action for good-faith, policy-compliant research</li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">
        Recognition & DEVOPS Grants
      </h2>
      <p className="text-gray-300 mb-4">
        DevOpsCoin does not run a traditional bug bounty. Instead, meaningful
        disclosures and technical improvements may receive recognition through
        the <strong>DEVOPS Grants</strong> program or rewards from the{' '}
        <strong>Ship-It Fund</strong>.
      </p>
      <p className="text-gray-300 mb-6">
        The <strong>Ship-It Fund</strong> is initially bootstrapped with{' '}
        <strong>5% of total supply (50 million DEVOPS)</strong> and becomes
        variable post-launch depending on TreasuryOps top-ups and market
        conditions. The <strong>TreasuryOps wallet</strong> is SOL-based and
        initially funded with <strong>2% DEVOPS</strong> for operations,
        liquidity, and marketing. TreasuryOps sustains the Ship-It Fund and
        other open-source initiatives using 50% of ongoing creator rewards,
        while the remaining 50% supports operational expenses. Funding supports
        open-source tools, audits, and community security contributions. In
        months where trading activity falls below target thresholds, grants may
        be <strong>deferred and rolled forward</strong> to maintain fiscal
        transparency.
      </p>

      <p className="text-gray-300 mb-6">
        All grants, transactions, and ledger entries are published publicly in
        the{' '}
        <a
          href="https://github.com/DevOpsCoin/core/tree/main/shipit-fund"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline"
        >
          Ship-It Fund directory
        </a>{' '}
        and its{' '}
        <a
          href="https://github.com/DevOpsCoin/core/tree/main/shipit-fund/ledger"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline"
        >
          funding ledger
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-3">
        Transparency & Security Ethos
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        DevOpsCoin practices <strong>open security</strong> — merging DevOps
        culture with blockchain transparency. All Solana programs are verified
        and auditable via{' '}
        <a
          href="https://solscan.io"
          className="text-cyan-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solscan
        </a>
        , and the dApp frontend is fully open-source for review. Security
        patches and contract verifications are announced publicly in the
        <code> #security-updates </code> channel and GitHub changelogs.
      </p>

      <p className="text-gray-400 italic text-sm border-t border-cyan-900 pt-6">
        All production contracts are non-upgradeable or secured by multisig
        governance with 24-hour time-locks. Deployment keys are hardware-backed
        and never reused across environments.
        <br />
        <span className="text-cyan-300">“Where pipelines meet protocols.”</span>
      </p>
    </MainContent>
  );
}
