# DevOpsCoin — $DEVOPS

Where pipelines meet protocols.

---

## Overview

**DevOpsCoin ($DEVOPS)** merges *Dev Culture with Degen Energy* — a transparent, fixed-supply token designed to fund open-source DevOps innovation through the **Ship-It Fund**.  
Every transaction contributes 0.5% toward sustaining real developers and real tools that keep modern infrastructure shipping.

> Transparency isn’t marketing — it’s infrastructure.

---

## Repository Structure

```
root/
├── apps/website/     → Public web DApp, documentation, and marketing
├── contracts/        → Solidity contracts and Hardhat deployment scripts
└── docs/             → Technical specifications, tokenomics, and governance
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
| **Smart Contracts** | Verified on BscScan |
| **Founder Vesting** | On-chain via `FounderVesting.sol` |
| **Ship-It Fund** | [![Ledger Integrity](https://github.com/DevOpsCoin/shipit-fund/actions/workflows/verify-ledger.yml/badge.svg)](https://github.com/DevOpsCoin/shipit-fund/actions/workflows/verify-ledger.yml) — see [DevOpsCoin/shipit-fund](https://github.com/DevOpsCoin/shipit-fund) |

The **Ship-It Fund** repository maintains transparent on-chain ledgers for all grants and token-health operations.  
Ledger verification runs automatically on every commit to ensure integrity and auditability.

---

## Documentation

Full project documentation lives in [`/docs`](./docs):

- [Project Overview](./docs/project/README.md)
- [Smart Contracts Reference](./docs/contracts/README.md)
- [Contributor Handbook](./docs/handbook/README.md)

---

## Maintainer

**RootSignal / DevOpsCoin LLC**  
Website: [https://devopscoin.ai](https://devopscoin.ai)
