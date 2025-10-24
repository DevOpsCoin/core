# DevOpsCoin — $DEVOPS

[![Network](https://img.shields.io/badge/Network-Solana-14a1c0?logo=solana&logoColor=white)](https://solana.com)
[![Supply](https://img.shields.io/badge/Total_Supply-1B_DEVOPS-00b7b3)](./docs/token/TOKENOMICS.md)
[![Transparency](https://img.shields.io/badge/Transparency-On--Chain-00b7b3)](./docs/operations/TRANSPARENCY.md)
[![Creator_Rewards](https://img.shields.io/badge/Funding-Creator_Rewards_Only-9cf)](./docs/token/CREATOR_REWARDS.md)
[![Ledger_Verification](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml/badge.svg)](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml)
[![License](https://img.shields.io/badge/License-MIT-gray)](./LICENSE)

**Ship it. Don’t shill it.**

> A memecoin built by engineers — not marketers.

---

## Overview

**DevOpsCoin ($DEVOPS)** merges _Dev culture_ with _transparent on-chain systems_.  
It’s a fixed-supply **Solana SPL token** that funds maintainers, automators, and open-source engineers — the people who keep the ecosystem moving.

All operations live in this monorepo:  
a public ledger, automated grants, and the **Ship-It Fund** — a transparent pool that funds work, not hype.

> Transparency isn’t a feature. It’s the foundation.

---

## Wallet Model

DevOpsCoin runs without embedded taxes or hidden fees.  
Funding originates from **creator rewards** earned via [Pump.fun](https://pump.fun) and moves through three public wallets.

### 1. Ship-It Fund Wallet — 5%

- Used only for open-source DevOps grants.
- Issues monthly grants when supported by volume.
- Rolls over automatically when needed.
- Never sells DEVOPS.
- Refilled periodically by TreasuryOps.

### 2. TreasuryOps Wallet — SOL + 2% DEVOPS

- Holds SOL from redeemed creator rewards.
- Covers operations, liquidity, and buybacks when justified.
- Refills the Ship-It Fund as needed.
- Managed under the [Treasury Refill Policy](./docs/token/TREASURY_REFILL_POLICY.md).

### 3. Founder Vesting Wallet — 10%

- 3-month cliff, 20-month linear vesting (5% monthly).
- Immutable on-chain contract for transparency and alignment.

> DEVOPS funds the community. SOL runs operations.  
> Separation keeps intent and accounting clear.

---

## Token Allocation

| Wallet / Purpose            | Allocation | Description                                              |
| --------------------------- | ---------- | -------------------------------------------------------- |
| **Founder Vesting**         | 10%        | 3-month cliff, 5% monthly vesting over 20 months         |
| **Ship-It Fund**            | 5%         | Open-source DevOps grants (monthly, rollover enabled)    |
| **TreasuryOps (Bootstrap)** | 2% DEVOPS  | Operational liquidity + SOL inflows from creator rewards |
| **Public / Circulating**    | 83%        | Public ownership and Raydium liquidity                   |

All wallets are verifiable on Solscan and mirrored under [`/shipit-fund/ledger`](./shipit-fund/ledger/).

---

## Repository Structure

```
root/
├── apps/website/      → Public dApp + website (Next.js)
├── contracts/         → Solana programs and deployment scripts
├── docs/              → Tokenomics, vesting, and transparency policies
└── shipit-fund/       → Ledger, scripts, automation, and grant tracking
```

> The `/shipit-fund` directory replaces the standalone fund repo.  
> All ledgers, workflows, and policies now live here for unified visibility.

---

## Automation & CI

- **Ledger Verification**  
  [`verify-ledger.yml`](.github/workflows/verify-ledger.yml) checks every ledger entry on each push.

- **Funding Submissions**  
  Ship-It Fund proposals use  
  [`project_submission.yml`](./.github/ISSUE_TEMPLATE/shipit_fund_project_submission.yml) and route to the funding board via GitHub Actions.

[![Ledger Verification](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml/badge.svg)](https://github.com/DevOpsCoin/core/actions/workflows/verify-ledger.yml)

---

## Developer Quick Start

### Prerequisites

- Node.js v22+
- pnpm v10+
- macOS / Linux / WSL

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

| Component           | Verification Method                                               |
| ------------------- | ----------------------------------------------------------------- |
| **Token Contract**  | Verified SPL deployment on Solana mainnet                         |
| **Founder Vesting** | Immutable on-chain vesting contract                               |
| **Ship-It Fund**    | [Ledger Records](./shipit-fund/ledger/) auto-verified via CI      |
| **TreasuryOps**     | On-chain SOL inflow/outflow + `/docs/ledger` transparency reports |

---

## Documentation Index

- [Tokenomics](./docs/token/TOKENOMICS.md)
- [Wallet Structure](./docs/token/WALLET_STRUCTURE.md)
- [Treasury Refill Policy](./docs/token/TREASURY_REFILL_POLICY.md)
- [Ship-It Fund Policy](./docs/token/SHIPIT_FUND.md)
- [Founder Vesting](./docs/token/FOUNDER_VESTING.md)
- [Transparency Framework](./docs/operations/TRANSPARENCY.md)

---

## Roadmap

Track development milestones:  
➡ [DevOpsCoin Roadmap →](https://github.com/orgs/DevOpsCoin/projects/3)

Feature ideas and proposals:  
[Submit Idea →](https://github.com/DevOpsCoin/core/issues/new?template=feature_proposal.yml)

---

## Maintainer

**RootSignal — DevOpsCoin LLC**  
[https://devopscoin.ai](https://devopscoin.ai)  
[https://t.me/TheDevOpsCoin](https://t.me/TheDevOpsCoin)

---

_**Built. Not begged.**_  
_Fund work — not hype._
