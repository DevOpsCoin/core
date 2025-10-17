"use client"
// ...existing code...
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"

export default function NavMoreDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-lg bg-cyan-700 text-white shadow hover:bg-cyan-400 transition">
          More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-gray-900 border border-cyan-700/40 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about"
                  className={`block px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-800/40 ${active ? "bg-cyan-800/40" : ""}`}
                >
                  About
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/mystory"
                  className={`block px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-800/40 ${active ? "bg-cyan-800/40" : ""}`}
                >
                  My Story
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/updates"
                  className={`block px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-800/40 ${active ? "bg-cyan-800/40" : ""}`}
                >
                  Updates
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/legal"
                  className={`block px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-800/40 ${active ? "bg-cyan-800/40" : ""}`}
                >
                  Legal
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/security"
                  className={`block px-4 py-2 text-sm text-cyan-200 hover:bg-cyan-800/40 ${active ? "bg-cyan-800/40" : ""}`}
                >
                  Security
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
