# DevOpsCoin DApp

Next.js + Tailwind + Wagmi/RainbowKit + Vercel Postgres starter for the DevOpsCoin ecosystem.

## Quickstart

pnpm i
cp .env.local.example .env.local
pnpm dev

## Configure

- NEXT_PUBLIC_CONTRACT_ADDRESS — your deployed ShipItBadgeNFT address
- NEXT_PUBLIC_MINT_PRICE_ETH — price in BNB (ether units), e.g. 0.0833
- POSTGRES_URL — Vercel Postgres URL

## Routes
- / — Home
- /mint — Mint the Ship-It Badge NFT
- /api/link-twitter — link a wallet to a Twitter handle (stub DB included)
- /api/post-x — stub for server-side post to X
- /api/webhook-mint — stub webhook receiver
