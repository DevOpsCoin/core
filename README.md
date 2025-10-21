# DevOpsCoin — $DEVOPS

**Where pipelines meet protocols.**

---

## Overview

**DevOpsCoin ($DEVOPS)** merges *Dev culture with degen energy* — a transparent, fixed-supply **Solana SPL token** that celebrates the builders who keep the internet running.  
It funds open-source DevOps innovation through the **Ship-It / Operations Wallet**, sustained long-term by **creator rewards** earned from on-chain volume.

> Transparency isn’t marketing — it’s infrastructure.

---

## Funding Model

Unlike traditional tokens with embedded transaction fees, DevOpsCoin relies on **creator rewards** from Pump.fun and PumpSwap trading activity.  
A portion of those creator rewards continuously replenishes the **Ship-It / Operations Wallet**, which supports:

- Open-source DevOps project grants  
- Ecosystem growth and liquidity operations  
- Transparency tooling and on-chain reporting  

The fund is **bootstrapped with 5% (50M $DEVOPS)** plus **≈ $2,000 in SOL** to provide early operational liquidity.  
No additional token fees or taxes are imposed.

---

## Token Allocation

| Wallet | Allocation | Notes |
|---------|-------------|-------|
| **Founder Vesting Wallet** | **10 %** | 3-month cliff, 5 % monthly linear release (20 months) |
| **Ship-It / Operations Wallet** | **5 %** | Open-source grants, liquidity ops, creator reward cycles |
| **Public / Circulating Supply** | **85 %** | Public ownership and Raydium liquidity |

> All wallet addresses and activity are publicly viewable on Solana explorers and mirrored to the transparency ledger.

---

## Repository Structure

```
root/
├── apps/website/     → Public DApp, docs, and marketing site
├── contracts/        → Solana/Anchor programs and token scripts
└── docs/             → Tokenomics, vesting, and transparency policies
```

---

## Quick Start

### Prerequisites

- Node.js v22.x (via nvm)
- pnpm v10+
- macOS, Linux, or WSL environment

### Install & Run

```bash
# Clone the repository
git clone https://github.com/DevOpsCoin/core.git
cd core

# Install dependencies
pnpm install

# Start the website
cd apps/website
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview the site.

---

## Transparency & Verification

| Component | Verification |
|------------|--------------|
| **Token Contract** | Verified SPL deployment (Solana mainnet) |
| **Founder Vesting** | On-chain linear release (immutable contract) |
| **Ship-It / Operations** | [Transparency Ledger →](https://github.com/DevOpsCoin-LLC/shipit-fund) (tracked monthly) |

Ledger verification workflows run automatically to ensure accuracy of all Ship-It distributions and fund inflows.

---

## Documentation

Full project documentation lives in [`/docs`](./docs):

- [Tokenomics](./docs/TOKENOMICS.md)  
- [Wallet Structure](./docs/WALLET_STRUCTURE.md)  
- [Founder Vesting](./docs/FOUNDER_VESTING.md)  
- [Ship-It Fund Policy](./docs/SHIPIT_FUND.md)  

---

## Maintainer

**RootSignal — DevOpsCoin LLC**  
Website: [https://devopscoin.ai](https://devopscoin.ai)  
Telegram: [https://t.me/TheDevOpsCoin](https://t.me/TheDevOpsCoin)

---

*“Built by DevOps. Fueled by transparency.”*

