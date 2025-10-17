import React from "react"
import Link from "next/link"
export default function JoinPage() {
  return (
    <section className="relative max-w-4xl mx-auto mt-12 p-8 rounded-xl overflow-hidden text-left shadow-lg">
      {/* Background layer */}
      <div className="absolute inset-0">
        {/* Solid background color at base layer */}
        <div className="absolute inset-0 bg-gray-900" />
        {/* Background image in upper right corner */}
        <img
          src="/join/image1.png"
          alt="Join Hero"
          className="absolute right-0 top-0 max-w-[50%] w-auto h-auto object-contain opacity-30 pointer-events-none select-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground text content */}
      <main
        className="max-w-2xl mx-auto px-4 py-12 text-gray-100 text-left relative"
        style={{ zIndex: 3 }}
      >
        <h1 className="text-4xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"
            />
          </svg>
          Join the DevOpsCoin Builder Collective
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          We’re assembling a collective of builders, meme lords, and community leaders to help shape
          the future of DevOpsCoin. If you want to help us build, meme, and ship, read on!
        </p>

        {/* What We Need */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"
              />
            </svg>
            What We Need
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-cyan-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4h16v16H4z M8 8h8v8H8z"
                />
              </svg>
              <strong>DevOps Engineers</strong> — People who understand CI/CD, infrastructure, and
              automation, and want to bring those skills into the memecoin space.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-cyan-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" className="fill-gray-800" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 9h6v6H9z"
                />
              </svg>
              <strong>Developers</strong> — Frontend, backend, and smart contract devs who can build
              fast and clean.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-yellow-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 8v8l5 3V5l-5 3zM4 10v4h4l5 5V5l-5 5H4z"
                />
              </svg>
              <strong>Marketing Experts</strong> — People who understand how to build hype, grow
              communities, and execute strategies in the crypto/meme landscape.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-pink-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20h9M3 4v16a2 2 0 002 2h14a2 2 0 002-2V4"
                />
              </svg>
              <strong>Copywriters</strong> — Writers who can blend tech precision with meme wit to
              craft compelling narratives and content.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-yellow-300 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1"
                />
              </svg>
              <strong>Strategic Thinkers</strong> — People who see both the cultural and technical
              sides of the space, and want to shape something that lasts.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-green-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
              <strong>Community Builders</strong> — Moderators, organizers, and contributors who
              know how to cultivate strong, authentic communities.
            </li>
          </ul>
        </section>

        {/* What We're NOT Looking For */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            What We’re Not Looking For
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-yellow-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
                />
              </svg>
              People looking for a <strong>quick buck</strong> without contributing real value.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-cyan-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              People pushing to <strong>launch before we’re ready</strong> — we’re here to build
              something durable, not just chase quick hype.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-green-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 17l6-6 4 4 8-8"
                />
              </svg>
              Speculators only interested in token price, not the culture or the project.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline w-5 h-5 text-red-400 align-text-bottom mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Anyone who doesn’t respect open collaboration, transparency, or community-driven
              building.
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v10l6 3"
              />
            </svg>
            Ready to Join?
          </h2>
          <p className="text-gray-300 mb-4">
            Whether you’re a DevOps pro, a meme master, or a creative marketer, this is your chance
            to help shape something new. Let’s bring DevOps culture to the memecoin world — and ship
            it to the moon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-5 h-5 text-yellow-300 align-text-bottom"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" className="fill-gray-800" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://x.com/DevOpsCoin"
              target="_blank"
              className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.53 7.47a.75.75 0 00-1.06 0l-7 7a.75.75 0 001.06 1.06l7-7a.75.75 0 000-1.06z" />
              </svg>
              Contact Us on X
            </a>
            <a
              href="https://github.com/orgs/DevOpsCoin/discussions/47"
              target="_blank"
              className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-400 transition flex items-center gap-2 justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" className="fill-gray-800" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 9h6v6H9z"
                />
              </svg>
              Reply to our Github Recruitment Discussion
            </a>
          </div>
        </section>
        <Link
          href="/"
          className="px-4 py-2 bg-cyan-700 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition inline-block mt-8 flex items-center gap-2 justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
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
      </main>
    </section>
  )
}
