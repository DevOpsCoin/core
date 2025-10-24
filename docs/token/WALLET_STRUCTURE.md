# DevOpsCoin Wallet Structure

**Token Name:** DevOpsCoin  
**Symbol:** DEVOPS  
**Network:** Solana  
**Total Supply:** 1,000,000,000 DEVOPS  
**Ownership:** Creator authority revoked post-launch (Pump.fun graduation)

---

## Overview

DevOpsCoin uses a **three-wallet model** designed for transparency, simplicity, and traceability.  
All wallets and allocations are public and verifiable on-chain.  
There are **no multisigs**, **no hidden developer wallets**, and **no adjustable parameters** once creator authority is revoked.

Each wallet has one specific, non-overlapping purpose:

1. **Founder Vesting Wallet (10%)** — Enforces a 3-month cliff and 20-month linear release through an immutable vesting program.
2. **Ship-It Fund Wallet (5%)** — Dedicated DEVOPS grant treasury for open-source initiatives.
3. **TreasuryOps Wallet (2% DEVOPS + SOL inflows)** — Operations, liquidity, and buybacks; also provides Ship-It Fund top-ups.

---

## Wallet Allocations

| Wallet Type                           | Address                             | Allocation | Amount (DEVOPS) | Description                                                                                                    |
| ------------------------------------- | ----------------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Founder Vesting Wallet**            | _(to be published post-deployment)_ | **10%**    | 100,000,000     | Founder allocation (RootSignal). 3-month cliff, 5% monthly vesting for 20 months.                              |
| **Ship-It Fund Wallet**               | _(to be published post-deployment)_ | **5%**     | 50,000,000      | DEVOPS grant treasury. Never sells tokens. Monthly grants with rollover when volume is low.                    |
| **TreasuryOps Wallet (DEVOPS + SOL)** | _(to be published post-deployment)_ | **2%**     | 20,000,000      | Operational reserve for liquidity, buybacks, and marketing. Receives SOL creator-reward inflows from Pump.fun. |
| **Public Supply (Circulating + LP)**  | _Pump.fun + Raydium liquidity_      | **83%**    | 830,000,000     | Public allocation through the Pump.fun launch and Raydium liquidity pools.                                     |

All addresses will be published and verified on **Solscan** after mainnet deployment.

---

## Vesting Contracts

| Contract                     | Purpose     | Description                                                                 |
| ---------------------------- | ----------- | --------------------------------------------------------------------------- |
| **Founder Vesting Program**  | Founder     | 3-month cliff + 5% monthly release over 20 months. Immutable once deployed. |
| _(Future Option)_ Grant Lock | Contributor | Optional Solana-based time-locked grants for recurring contributors.        |

All vesting contracts will be published and verified within this repository after deployment.

---

## Ownership & Control

| Category            | Description                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| **Renounce Policy** | Creator authority permanently revoked after launch — no admin keys or modifiable parameters remain.      |
| **Liquidity**       | LP tokens locked automatically via the Pump.fun → Raydium migration process.                             |
| **Transparency**    | All wallet addresses, source contracts, and fund movements logged in `/docs/ledger/TRANSPARENCY_LOG.md`. |

---

## TreasuryOps Policy

The **TreasuryOps wallet** manages liquidity, buybacks, and Ship-It Fund top-ups.

- Begins with a **2% DEVOPS bootstrap allocation (20M)** for liquidity and buyback capacity.
- Receives **≈50% of creator rewards** in SOL from [Pump.fun](https://pump.fun/); the remainder supports DevOpsCoin LLC operations.
- Funds marketing, ecosystem development, and community initiatives as logged in the transparency ledger.
- Executes buybacks when justified by reserves and volume.
- Provides **Ship-It Fund top-ups** when reserves fall below target.
- Operates within a **±10% reserve management band**, disclosed through monthly ledger reports.

All TreasuryOps actions are verifiable on-chain and mirrored in the transparency ledger.

---

## Ship-It Fund Ledger

The **Ship-It Fund** starts with a **5% DEVOPS allocation** and grows through TreasuryOps top-ups.  
It funds open-source grants only and performs no market operations.  
When trading volume slows, disbursements roll forward to the next funding cycle.

Reference: [Ship-It Fund Documentation](./SHIPIT_FUND.md)

### Ledger Verification

All Ship-It Fund entries are maintained under  
[`/shipit-fund/ledger/`](../../shipit-fund/ledger/)

Each YAML record includes project name, grant amount, recipient wallet, Solana transaction hash, and verification signature.  
Ledger integrity can be verified using  
[`verify-ledger.sh`](../../shipit-fund/ledger/verify-ledger.sh), which validates file hashes, checks for duplicates, and confirms declared signatures.

The `shipit-fund` ledger directory is the **canonical record** for all grants.  
TreasuryOps and vesting logs are stored under `/docs/ledger/` for unified visibility.

---

## Summary

| Wallet              | Allocation                             | Function                                      |
| ------------------- | -------------------------------------- | --------------------------------------------- |
| **Founder Vesting** | 10%                                    | Long-term alignment and immutability          |
| **Ship-It Fund**    | 5%                                     | Open-source and community grants              |
| **TreasuryOps**     | 2% DEVOPS + ~50% creator rewards (SOL) | Liquidity, marketing, and operational funding |
| **LLC Operations**  | ~50% creator rewards (SOL)             | Business and ongoing development              |
| **Public Supply**   | 83%                                    | Circulating tokens and Raydium liquidity      |

---

## Principle

Every wallet has one purpose and a public audit trail.  
No hidden flows. No abstractions.  
**Fund work — not hype.**

---

_Last Updated: October 2025 — Three-Wallet Alignment + Ledger Cross-Reference Integration_  
_Maintainer: RootSignal (DevOpsCoin LLC)_
