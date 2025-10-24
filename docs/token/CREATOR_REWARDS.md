# DevOpsCoin Creator Rewards Allocation

**Network:** Solana  
**Launch Platform:** [pump.fun](https://pump.fun/)  
**Maintained by:** DevOpsCoin LLC  
**Last Updated:** October 2025 — Three-Wallet Model + 2 % TreasuryOps Bootstrap Revision

---

## Overview

DevOpsCoin does **not** use transaction taxes or embedded fees.  
All operational funding originates from **creator rewards** earned on [pump.fun](https://pump.fun/) and flows transparently through the project’s **three-wallet model**:

1. **Founder Vesting Wallet (10 %)** — trustless vesting contract with 3-month cliff and 20-month linear release.
2. **TreasuryOps Wallet (2 % DEVOPS + SOL)** — holds a 2 % bootstrap allocation and redeems SOL-based creator rewards for operations, marketing, and Ship-It Fund top-ups.
3. **Ship-It Fund Wallet (5 % DEVOPS)** — transparent grant treasury supporting open-source DevOps initiatives.

This model connects DevOpsCoin’s sustainability directly to verified trading activity — not speculation or arbitrary fees.

---

## Reward Flow

```text
Pump.fun Creator Rewards (SOL)
        │
        ▼
TreasuryOps Wallet (SOL + 2 % DEVOPS)
├─ Funds marketing, liquidity, operations, and buybacks
├─ Provides Ship-It Fund top-ups when required
└─ Allocates ~50 % of creator rewards to TreasuryOps operations
        and ~50 % to DevOpsCoin LLC business activities
        │
        ▼
Ship-It Fund (DEVOPS)
├─ Issues monthly open-source grants
└─ Rolls forward when volume is low
```

---

## Allocation Breakdown

| Source                        | Portion / Type          | Destination           | Purpose                                                    |
| ----------------------------- | ----------------------- | --------------------- | ---------------------------------------------------------- |
| **Creator Reward (pump.fun)** | Variable (SOL)          | TreasuryOps Wallet    | Receives SOL creator rewards from pump.fun                 |
| **Treasury Bootstrap**        | 2 % (20 M DEVOPS)       | TreasuryOps Wallet    | Initial reserve for liquidity and operations               |
| **Treasury Top-Up**           | Periodic (volume-based) | Ship-It Fund (DEVOPS) | Transfers reserves to sustain monthly grants               |
| **Ship-It Fund Grants**       | 5 % (50 M DEVOPS)       | Public Recipients     | Monthly open-source grants; rolls forward when volume dips |
| **Founder Vesting**           | 10 % (100 M DEVOPS)     | Founder Program       | Long-term vesting to align incentives and accountability   |

> The Ship-It Fund never sells DEVOPS.  
> All buybacks, liquidity, and market operations occur exclusively through the TreasuryOps wallet.

---

## Verification & Ledger Standards

Every creator-reward transaction is traceable through:

- Date, purpose, and transaction direction
- Amount and participating wallets
- Solana transaction hash
- Verification signature and timestamp

Records are auditable via:

- `/docs/ledger/TRANSPARENCY_LOG.md` — monthly summaries
- [`/shipit-fund/ledger`](../../shipit-fund/ledger/) — DEVOPS-based grants
- [`/docs/ledger/TREASURY_LOG.md`](../ledger/TREASURY_LOG.md) — SOL inflows and top-ups

No hidden transfers.  
No off-ledger movements.  
Every record verifiable both on-chain and in-repo.

---

## Principle

DevOpsCoin funds work — not noise.  
Creator rewards exist to **build real tools and projects**, not to fuel hype.

---

**Maintainer:** RootSignal (DevOpsCoin LLC)  
**Last Updated:** October 2025 — Creator Reward Verification Alignment
