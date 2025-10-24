# DevOpsCoin — $DEVOPS

[![Network](https://img.shields.io/badge/Network-Solana-14a1c0?logo=solana&logoColor=white)](https://solana.com)
[![Supply](https://img.shields.io/badge/Total_Supply-1B_DEVOPS-00b7b3)](./docs/token/TOKENOMICS.md)
[![Transparency](https://img.shields.io/badge/Transparency-On--Chain-00b7b3)](./docs/operations/TRANSPARENCY.md)
[![Creator_Rewards](https://img.shields.io/badge/Funding-Creator_Rewards_Only-9cf)](./docs/token/CREATOR_REWARDS.md)
[![Ledger_Verification](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml/badge.svg)](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml)
[![License](https://img.shields.io/badge/License-MIT-gray)](./LICENSE)

**Where pipelines meet protocols.**

---

## Overview

**DevOpsCoin ($DEVOPS)** merges _Dev culture_ with _degen energy_ — a transparent, fixed-supply **Solana SPL token** that celebrates the builders who keep the internet running.  
It funds open-source DevOps innovation through a transparent **three-wallet model** and a publicly auditable **Ship-It Fund**, all maintained within this monorepo.

> Transparency isn’t marketing — it’s infrastructure.

---

## Wallet Model & Ecosystem

DevOpsCoin operates without embedded taxes or hidden fees.  
Ecosystem funding originates entirely from **creator rewards** earned via [Pump.fun](https://pump.fun) and flows through three verifiable wallets:

### 🪙 1. **Ship-It Fund Wallet (5 % DEVOPS)**

- Dedicated exclusively to open-source DevOps grants.
- Issues monthly grants as long as trading volume supports it.
- Rolls over automatically when volume falls short.
- **Never sells DEVOPS.**
- Periodically topped up from the TreasuryOps wallet.

### 💧 2. **TreasuryOps Wallet (SOL + 2 % DEVOPS)**

- Holds SOL from redeemed creator rewards.
- Funds operations, marketing, liquidity, and buybacks.
- Replenishes the Ship-It Fund when reserves run low.
- Operates under the [Treasury Refill Policy](./docs/token/TREASURY_REFILL_POLICY.md).

### 🔒 3. **Founder Vesting Wallet (10 %)**

- 3-month cliff, 20-month linear vesting (5 % per month).
- Immutable on-chain contract ensuring long-term alignment.

This separation keeps **DEVOPS** purely for community grants and **SOL** purely for operational execution — ensuring tax clarity, security, and auditability.

---

## Token Allocation

| Wallet / Purpose            | Allocation | Description                                              |
| --------------------------- | ---------- | -------------------------------------------------------- |
| **Founder Vesting**         | 10 %       | 3-month cliff, 5 % monthly vesting over 20 months        |
| **Ship-It Fund**            | 5 %        | Open-source DevOps grants (monthly, rollover enabled)    |
| **TreasuryOps (Bootstrap)** | 2 % DEVOPS | Operational liquidity + SOL inflows from creator rewards |
| **Public / Circulating**    | 83 %       | Public ownership and Raydium liquidity                   |

All wallets are verifiable via Solscan and mirrored here under [`/shipit-fund/ledger`](./shipit-fund/ledger/).

---

## Monorepo Structure

```
root/
├── apps/website/      → Public dApp + marketing site (Next.js)
├── contracts/         → Solana programs and deployment scripts
├── docs/              → Tokenomics, vesting, and transparency policies
└── shipit-fund/       → Ledger, scripts, automation, and grant tracking
```

> The `/shipit-fund` directory replaces the standalone Ship-It Fund repository — all ledgers, workflows, and policies now live here for unified transparency.

---

## CI / Automation

- **Ledger Verification**  
  Automated via [`verify-ledger.yml`](.github/workflows/verify-ledger.yml) on each push to `/shipit-fund/ledger/**`.

- **Labels & Templates**  
  Ship-It Fund submissions use  
  [`project_submission.yml`](./.github/ISSUE_TEMPLATE/project_submission.yml) and automatically route to the funding board.

[![Ledger Verification](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml/badge.svg)](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml)

---

## Quick Start (Developers)

### Prerequisites

- Node.js v22+
- pnpm v10+
- macOS / Linux / WSL environment

### Run Locally

```bash
git clone https://github.com/DevOpsCoin/core.git
cd core
pnpm install
cd apps/website
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview the site.

---

## Transparency & Verification

| Component           | Verification Method                                                       |
| ------------------- | ------------------------------------------------------------------------- |
| **Token Contract**  | Verified SPL deployment on Solana mainnet                                 |
| **Founder Vesting** | On-chain immutable vesting contract                                       |
| **Ship-It Fund**    | [Ledger Records →](./shipit-fund/ledger/) (auto-verified via CI)          |
| **TreasuryOps**     | On-chain SOL inflow/outflow logs + transparency reports in `/docs/ledger` |

---

## Documentation Index

- [Tokenomics](./docs/token/TOKENOMICS.md)
- [Wallet Structure](./docs/token/WALLET_STRUCTURE.md)
- [Treasury Refill Policy](./docs/token/TREASURY_REFILL_POLICY.md)
- [Ship-It Fund Policy](./docs/token/SHIPIT_FUND.md)
- [Founder Vesting](./docs/token/FOUNDER_VESTING.md)
- [Transparency Framework](./docs/operations/TRANSPARENCY.md)

---

## 📍 Roadmap

Follow planned & in-progress milestones here:  
➡ [DevOpsCoin Roadmap →](https://github.com/orgs/DevOpsCoin/projects/roadmap)  
Publicly viewable for transparency.  
Community ideas can be submitted via [Feature Proposals](https://github.com/DevOpsCoin/core/issues/new?template=feature_proposal.yml).

---

## Maintainer

**RootSignal — DevOpsCoin LLC**  
🌐 [https://devopscoin.ai](https://devopscoin.ai)  
💬 [https://t.me/TheDevOpsCoin](https://t.me/TheDevOpsCoin)

---

_“Built by DevOps. Fueled by transparency.”_
