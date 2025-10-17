import React from "react"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <section className="relative max-w-4xl mx-auto mt-8 p-8 rounded-xl overflow-hidden text-left shadow-lg">
      {/* Background layer */}
      <div className="absolute inset-0">
        {/* Solid background color at base layer */}
        <div className="absolute inset-0 bg-gray-900" />
        {/* Background image in upper right corner */}
        <img
          src="/roadmap/image1.png"
          alt="Roadmap Hero"
          className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground text content */}
      <div className="relative" style={{ zIndex: 3 }}>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Project Roadmap
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          Unlike most memecoins, <strong>$DEVOPS</strong> is structured like a true software project
          — with tasks, accountability, and iteration. Every milestone is tracked publicly on GitHub
          using a <strong>Kanban-style project board</strong>, where anyone can follow along or
          contribute.
        </p>

        {/* How We're Building */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            How We Build
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Treating $DEVOPS like a real DevOps product — with scoped tasks, commits, and
              releases.
            </li>
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4"
                />
              </svg>
              All work items are tracked transparently on GitHub Projects — visible to the entire
              community.
            </li>
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3"
                />
              </svg>
              Phased roadmap: Foundation → Stealth Build → Public Launch → Growth & Integration.
            </li>
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7 7 7-7m-9 9V5"
                />
              </svg>
              Tasks move through planning → development → test → ship — just like any CI/CD
              pipeline.
            </li>
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-cyan-400 flex-shrink-0"
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
              Open-source ethos: the roadmap evolves with community input and Ship-It Fund
              contributions.
            </li>
          </ul>
        </section>

        {/* Phases */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
            Roadmap Phases
          </h2>
          <div className="space-y-5 text-gray-300">
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">Phase 1 — Foundation</h3>
              <p>
                Core branding, token contract design, and early community formation. Originated on
                Solana, migrated to BNB Smart Chain for scalability and ecosystem support.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 2 — Stealth Builder Period
              </h3>
              <p>
                Refining tokenomics, testing automation, and aligning long-term governance before
                public exposure. Invite-only early community with internal GitHub coordination.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 3 — Public Launch (Winter 2025-2026)
              </h3>
              <p>
                Deployment and verification of the $DEVOPS BNB contracts. Public liquidity event,
                community expansion, and active marketing rollout.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 4 — Ship-It Fund Activation
              </h3>
              <p>
                Open submissions for microgrants to support fun, useful, and innovative open-source
                projects. Funded through dedicated Ship-It Fund wallet and on-chain allocations.
              </p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-semibold text-lg mb-1">
                Phase 5 — Growth & Integration
              </h3>
              <p>
                Tooling, dashboards, and ecosystem integrations. Cross-chain considerations and
                potential future DAO evolution. Continued funding of community-driven innovation.
              </p>
            </div>
          </div>
        </section>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/orgs/DevOpsCoin/projects/2"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" className="fill-gray-800" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9z" />
            </svg>
            View the Live Roadmap on GitHub
          </a>
          <p className="text-gray-500 text-sm mt-4 italic">
            Updated October 2025 — Roadmap reflects BNB migration and Ship-It Fund integration.
          </p>
        </div>

        {/* Back */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" className="fill-gray-800" />
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
      </div>
    </section>
  )
}
