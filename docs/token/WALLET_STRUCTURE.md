# DevOpsCoin Wallet Structure

**Token Name:** DevOpsCoin  
**Symbol:** DEVOPS  
**Network:** Solana  
**Total Supply:** 1,000,000,000 DEVOPS  
**Ownership:** Creator authority revoked post-launch (pump.fun graduation)

---

## Overview

DevOpsCoin follows a **three-wallet architecture** designed for maximum transparency, accountability, and simplicity.  
All wallets and allocations are publicly verifiable on-chain.  
There are **no multisig treasuries**, **no hidden developer wallets**, and **no adjustable parameters** once creator authority is revoked.

The project operates with three distinct wallets, each with a single purpose:

1. **Founder Vesting Wallet (10%)** — Trustless vesting with a 3-month cliff and 20-month linear release.
2. **Ship-It Fund Wallet (5%)** — Dedicated grant treasury supporting open-source projects and community initiatives.
3. **TreasuryOps Wallet (2 % DEVOPS + SOL)** — Operations wallet for liquidity, marketing, and buybacks; also funds Ship-It top-ups.

---

## Wallet Allocations

| Wallet Type                           | Address                             | Allocation | Amount (DEVOPS) | Description                                                                                                                                       |
| ------------------------------------- | ----------------------------------- | ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Founder Vesting Wallet**            | _(to be published post-deployment)_ | **10 %**   | 100,000,000     | Founder allocation (RootSignal). Locked with a 3-month cliff and 5 % monthly vesting over 20 months.                                              |
| **Ship-It Fund Wallet**               | _(to be published post-deployment)_ | **5 %**    | 50,000,000      | Bootstrap DEVOPS treasury for open-source grants. Never sells tokens. Monthly disbursements with rollover if volume is low.                       |
| **TreasuryOps Wallet (DEVOPS + SOL)** | _(to be published post-deployment)_ | **2 %**    | 20,000,000      | Bootstrap DEVOPS reserve for liquidity and operations + SOL creator-reward inflows from pump.fun. Funds marketing, buybacks, and Ship-It top-ups. |
| **Public Supply (Circulating + LP)**  | _pump.fun + Raydium liquidity_      | **83 %**   | 830,000,000     | Distributed to the public through the pump.fun launch and subsequent Raydium market liquidity.                                                    |

All wallet addresses will be published and verified via **Solscan** upon token deployment.

---

## Vesting Contracts

| Contract                        | Purpose      | Description                                                                                                        |
| ------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Founder Vesting Program**     | Founder      | Enforces a 3-month cliff and 5 % monthly vesting thereafter (20-month linear release). Immutable once deployed.    |
| _(Future Option)_ Grant Vesting | Contributors | Optional Solana-based time-locked programs may be introduced for recurring contributors or long-term grant cycles. |

All vesting implementations will be published and verified in this repository once deployed.

---

## Ownership & Control

| Category            | Description                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Renounce Policy** | Creator authority is permanently revoked after launch; no admin keys or variable controls remain.                                    |
| **Liquidity**       | LP tokens are locked automatically through the pump.fun → Raydium graduation process.                                                |
| **Transparency**    | All wallet addresses, contract sources, and fund movements are logged in `/docs/ledger/TRANSPARENCY_LOG.md` for public verification. |

---

## TreasuryOps Overview

The **TreasuryOps wallet** acts as the project’s **operational and liquidity engine**:

- Begins with a **2 % DEVOPS bootstrap allocation (20 M tokens)** for initial liquidity and buyback capacity
- Receives **≈ 50 % of creator rewards** in SOL from [pump.fun](https://pump.fun/); the remaining ≈ 50 % supports DevOpsCoin LLC operations and development
- Funds marketing, exchange liquidity, and ecosystem operations
- Executes buybacks and manages community bounties as approved
- Provides **top-ups** to the Ship-It Fund when grant reserves fall below target
- Maintains an **operational flexibility of ± 10 %**, with all changes disclosed in monthly transparency reports

All TreasuryOps activity is publicly logged and auditable on Solscan and in the transparency ledger.

---

## Ship-It Fund Transparency

The **Ship-It Fund** begins with a **5 % DEVOPS bootstrap allocation**, then continues to grow through top-ups provided by TreasuryOps.  
It supports open-source grants exclusively and never performs token sales or swaps.  
When trading volume slows, grant cycles are **deferred and rolled forward** to maintain fiscal stability and transparency.

See the full breakdown here:  
➡ [Ship-It Fund Documentation →](./SHIPIT_FUND.md)

### 🔍 Ledger & Verification

All Ship-It Fund disbursements and grant cycles are recorded in the canonical  
[**Ship-It Fund Ledger →**](../../shipit-fund/ledger/)

Each YAML ledger entry includes the project name, allocation amount, recipient wallet, Solana transaction hash, and signature.  
Integrity can be verified using the companion  
[`verify-ledger.sh`](../../shipit-fund/ledger/verify-ledger.sh) script, which checks SHA256 signatures, duplicate transaction hashes, and declared sign-offs.

> The ledger in the `shipit-fund` directory within the core repo is the **single source of truth** for all grant movements.  
> TreasuryOps and vesting records remain logged here under `/docs/ledger/`.

---

## Summary

| Wallet              | Allocation                                | Purpose                                          |
| ------------------- | ----------------------------------------- | ------------------------------------------------ |
| **Founder Vesting** | 10 %                                      | Long-term alignment and accountability           |
| **Ship-It Fund**    | 5 %                                       | Grants and open-source ecosystem funding         |
| **TreasuryOps**     | 2 % DEVOPS + ≈ 50 % creator rewards (SOL) | Operational, liquidity, and marketing management |
| **LLC Operations**  | ≈ 50 % creator rewards (SOL)              | Business operations and ongoing development      |
| **Public Supply**   | 83 %                                      | Circulating supply and Raydium liquidity         |

---

_Last updated: October 2025 — Three-Wallet Alignment + Ledger Cross-Reference Integration_  
_Maintainer: RootSignal (DevOpsCoin LLC)_
