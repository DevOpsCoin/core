import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@rainbow-me/rainbowkit", "wagmi", "viem"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "devopscoin.ai" },
      { protocol: "https", hostname: "bscscan.com" },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@react-native-async-storage/async-storage"] = false
    config.ignoreWarnings = [/@react-native-async-storage\/async-storage/]
    return config
  },

  // 👇 Add this to silence the root warning
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
