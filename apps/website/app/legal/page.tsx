import React from 'react';
import Link from 'next/link';
import MainContent from '../components/MainContent';

export default function LegalPage() {
  return (
    <MainContent className="max-w-3xl p-8 text-white">
      <main>
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              className="fill-gray-800"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 4v4m8-4v4M3 10h18"
            />
          </svg>
          Legal & Disclosures
        </h1>

        {/* Business Entity */}
        <section className="mb-8 text-gray-300">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Business Entity Information
          </h2>
          <p>
            <strong>DevOpsCoin LLC</strong>
          </p>
          <p>Domestic Limited Liability Company</p>
          <p>State of Formation: New Mexico, USA</p>
          <p>Entity ID / Record #: 0008053527</p>
          <p>Effective Date: October 3, 2025</p>
          <p className="mt-2">
            DevOpsCoin LLC is a registered business entity under the New Mexico
            Limited Liability Company Act (Chapter 53, Article 19, NMSA 1978).
            It operates transparently as the organizing entity behind the
            <strong> $DEVOPS</strong> token and the{' '}
            <strong>Ship-It Fund</strong>.
          </p>
        </section>

        {/* Certificate PDF */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Certificate of Organization
          </h2>
          <p className="text-gray-300 mb-4">
            The official Certificate of Organization issued by the New Mexico
            Secretary of State is available below. All documents within the{' '}
            <code>/assets</code> directory are authentic files hosted directly
            by DevOpsCoin LLC.
          </p>
          <a
            href="/assets/devopscoin_llc.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            View DevOpsCoin LLC Certificate (PDF)
          </a>
        </section>

        {/* Disclaimers */}
        <section className="mt-10 text-sm text-gray-400 border-t border-gray-700 pt-4 leading-relaxed">
          <h2 className="text-lg font-semibold text-cyan-400 mb-2">
            Legal Disclaimers
          </h2>
          <p>
            The information provided on this website and in linked documentation
            is for informational and educational purposes only. Nothing
            contained herein constitutes financial, investment, legal, or tax
            advice.
          </p>
          <p className="mt-3">
            The <strong>$DEVOPS</strong> token is a fixed-supply Solana SPL
            token. It does not represent equity, ownership, voting rights,
            profit-sharing arrangements, or any financial interest in DevOpsCoin
            LLC or its affiliates. Tokens are a utility and cultural asset used
            to support the open-source <strong>Ship-It Fund</strong>.
          </p>
          <p className="mt-3">
            The <strong>Ship-It Fund</strong> and <strong>TreasuryOps</strong>{' '}
            wallets are operational accounts used to distribute transparent
            community grants, marketing resources, and liquidity support. They
            are not custodial, pooled investment vehicles, or yield-bearing
            accounts.
          </p>
          <p className="mt-3">
            DevOpsCoin LLC is not a financial institution, broker, or investment
            advisor. No regulatory agency has reviewed or endorsed any part of
            this project or documentation.
          </p>
          <p className="mt-3">
            By using this website or interacting with the $DEVOPS token, you
            agree to these terms and acknowledge that blockchain transactions
            are immutable and non-reversible.
          </p>
          <p className="mt-3 italic text-yellow-300">
            The official network for $DEVOPS is currently{' '}
            <strong>Solana (SPL)</strong>. A future cross-chain deployment to{' '}
            <strong>BNB Smart Chain</strong> may occur for liquidity expansion,
            but the Solana contract remains the primary and authoritative
            version.
          </p>
        </section>

        {/* Trademarks */}
        <section className="mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
          <h2 className="text-lg font-semibold text-cyan-400 mb-2">
            Trademarks & Intellectual Property
          </h2>
          <p>
            “$DEVOPS,” “DevOpsCoin,” “Ship-It Fund,” and associated logos,
            wordmarks, and taglines (“Dev Culture Meets Degen,” “Where Pipelines
            Meet Protocols”) are trademarks of DevOpsCoin LLC. Unauthorized use
            or misrepresentation of these materials is prohibited.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
          <h2 className="text-lg font-semibold text-cyan-400 mb-2">
            Contact & Verification
          </h2>
          <p>
            To verify any official materials or wallet addresses, contact
            DevOpsCoin LLC via our{' '}
            <a
              href="https://x.com/DevOpsCoin"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              official X account
            </a>{' '}
            or through our{' '}
            <a
              href="https://github.com/DevOpsCoin-LLC"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              GitHub organization
            </a>
            . You may also open a verification issue at{' '}
            <a
              href="https://github.com/DevOpsCoin-LLC/devopscoin/issues"
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              github.com/DevOpsCoin-LLC/devopscoin
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-gray-500 mt-6 text-center">
          Last Updated: October 2025 · Jurisdiction: State of New Mexico, USA
        </p>

        {/* Back to Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition inline-flex items-center gap-2 justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="16"
                rx="2"
                className="fill-gray-800"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 4v4m8-4v4M3 10h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    </MainContent>
  );
}
