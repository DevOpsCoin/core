/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  webpack: (config) => {
    // Ignore React Native module from MetaMask SDK
    config.resolve.alias['@react-native-async-storage/async-storage'] = false;
    return config;
  },
};
module.exports = nextConfig;
