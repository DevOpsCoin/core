import React from "react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-lg text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v4m8-4v4M3 10h18" />
        </svg>
        Legal & Disclosures
      </h1>

      {/* Business Entity */}
      <section className="mb-8 text-gray-300">
        <h2 className="text-xl font-semibold text-cyan-400 mb-2">Business Entity Information</h2>
        <p><strong>DevOpsCoin LLC</strong></p>
        <p>Domestic Limited Liability Company</p>
        <p>State of Formation: New Mexico, USA</p>
        <p>Entity ID / Record #: 0008053527</p>
        <p>Effective Date: October 3, 2025</p>
        <p className="mt-2">
          DevOpsCoin LLC is a legally registered business entity under the New Mexico Limited Liability Company Act (Chapter 53, Article 19, NMSA 1978).
        </p>
      </section>

      {/* Certificate PDF */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-cyan-400 mb-2">Certificate of Organization</h2>
        <p className="text-gray-300 mb-4">
          The official Certificate of Organization issued by the New Mexico Secretary of State is available for verification below.  
          All materials in the <code>/assets</code> directory are official documents hosted directly by DevOpsCoin LLC.
        </p>
        <a href="/assets/devopscoin_llc.pdf" target="_blank" className="inline-flex items-center px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          View DevOpsCoin LLC Certificate (PDF)
        </a>
      </section>

      {/* Disclaimers */}
      <section className="mt-10 text-sm text-gray-400 border-t border-gray-700 pt-4 leading-relaxed">
        <h2 className="text-lg font-semibold text-cyan-400 mb-2">Legal Disclaimers</h2>
        <p>
          The information provided on this website, including any linked documents, is for informational purposes only and does not constitute financial, investment, legal, or tax advice. DevOpsCoin LLC makes no representations or warranties of any kind, express or implied, regarding the accuracy or completeness of this information.
        </p>
        <p className="mt-3">
          The DevOpsCoin ($DEVOPS) token does not represent equity, ownership, voting rights, or financial interest in DevOpsCoin LLC or any affiliated entity. Tokens are not investment contracts and should not be considered securities. Participation in the $DEVOPS ecosystem is entirely at your own risk.
        </p>
        <p className="mt-3">
          DevOpsCoin LLC is not a financial institution, broker, or investment advisor. No regulatory body has reviewed or approved any content on this site or related documentation.
        </p>
        <p className="mt-3">
          By accessing or using this website, you agree to the terms outlined in this Legal & Disclosures page.
        </p>
        <p className="mt-3 italic text-yellow-300">
          Any previous token deployments on Solana were experimental and are no longer active.  
          The official $DEVOPS token will launch on the BNB Smart Chain in January 2026.
        </p>
      </section>

      {/* Trademarks */}
      <section className="mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
        <h2 className="text-lg font-semibold text-cyan-400 mb-2">Trademarks & Intellectual Property</h2>
        <p>
          "$DEVOPS," "DevOpsCoin," and associated brand marks, logos, and taglines (including “Dev Culture Meets Degen” and “Ship It To The Moon”) are trademarks of DevOpsCoin LLC.  
          Unauthorized use, reproduction, or misrepresentation of these materials is prohibited.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4">
        <h2 className="text-lg font-semibold text-cyan-400 mb-2">Contact & Verification</h2>
        <p>
          To verify any official materials, filings, or third-party listings, please contact DevOpsCoin LLC through our official GitHub organization or via our {" "}
          <a href="https://x.com/DevOpsCoin" target="_blank" className="text-cyan-400 hover:underline">X account</a>.  
          You may also open a verification issue at  
          <a href="https://github.com/DevOpsCoin/DevOpsCoin/issues" target="_blank" className="text-cyan-400 hover:underline">github.com/DevOpsCoin/DevOpsCoin</a>.
        </p>
      </section>

      <p className="text-xs text-gray-500 mt-6 text-center">
        Last Updated: October 2025 · Jurisdiction: State of New Mexico, USA
      </p>

      {/* Back to Home */}
      <div className="mt-8">
        <Link href="/" className="px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition inline-flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v4m8-4v4M3 10h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}