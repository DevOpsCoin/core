# DevOpsCoin — $DEVOPS

**Where pipelines meet protocols.**

---

## Overview

**DevOpsCoin ($DEVOPS)** merges _Dev culture with degen energy_ — a transparent, fixed-supply **Solana SPL token** that celebrates the builders who keep the internet running.  
It funds open-source DevOps innovation through a transparent two-wallet model designed for clarity, sustainability, and long-term community trust.

> Transparency isn’t marketing — it’s infrastructure.

---

## Funding Model

DevOpsCoin operates without embedded transaction taxes or hidden fees.  
Instead, the ecosystem is powered by **creator rewards** earned from Pump.fun and PumpSwap trading activity.  
Those rewards flow into two clearly defined wallets with distinct purposes:

### **1. Ship-It Fund Wallet (5% DEVOPS)**

- Dedicated solely to open-source DevOps grants and ecosystem support.  
- Issues **monthly grants** as long as trading volume supports it.  
- If volume falls short, the grant **rolls over** to the following month.  
- Periodically **topped up** from the TreasuryOps wallet to maintain reserves.  
- **Never sells DEVOPS** — it only distributes tokens as grants.

### **2. TreasuryOps Wallet (SOL-based)**

- Holds SOL from redeemed creator rewards.  
- Funds operations, marketing, liquidity management, and buybacks.  
- Replenishes the Ship-It Fund when reserves run low.  
- Acts as the operational engine sustaining the ecosystem.

This structure ensures grants remain purely token-based while financial operations remain strictly in SOL — maintaining clean accounting, tax transparency, and a simple audit trail.

---

## Token Allocation

| Wallet                   | Allocation | Notes                                                    |
| ------------------------- | ---------- | -------------------------------------------------------- |
| **Founder Vesting Wallet** | **10 %**   | 3-month cliff, 5 % monthly linear release (20 months)    |
| **Ship-It Fund Wallet**    | **5 %**    | Open-source DevOps grants (monthly with rollover)        |
| **TreasuryOps Wallet**     | **—**      | Funded dynamically in SOL from creator rewards           |
| **Public / Circulating**   | **85 %**   | Public ownership and Raydium liquidity                   |

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

| Component            | Verification                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **Token Contract**   | Verified SPL deployment (Solana mainnet)                                                 |
| **Founder Vesting**  | On-chain linear release (immutable contract)                                             |
| **Ship-It Fund**     | [Transparency Ledger →](https://github.com/DevOpsCoin-LLC/shipit-fund) (tracked monthly) |
| **TreasuryOps**      | On-chain SOL inflow/outflow logs (auditable)                                             |

Automated ledger workflows validate every grant, transfer, and top-up — ensuring accuracy and full on-chain accountability.

---

## Documentation

Full project documentation lives in [`/docs`](./docs):

- [Tokenomics](./docs/TOKENOMICS.md)
- [Wallet Structure](./docs/WALLET_STRUCTURE.md)
- [Treasury Refill Policy](./docs/TREASURY_REFILL_POLICY.md)
- [Ship-It Fund Policy](./docs/SHIPIT_FUND.md)
- [Founder Vesting](./docs/FOUNDER_VESTING.md)

---

## Maintainer

**RootSignal — DevOpsCoin LLC**  
Website: [https://devopscoin.ai](https://devopscoin.ai)  
Telegram: [https://t.me/TheDevOpsCoin](https://t.me/TheDevOpsCoin)

---

_“Built by DevOps. Fueled by transparency.”_
