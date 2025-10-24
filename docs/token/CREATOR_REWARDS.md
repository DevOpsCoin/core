# DevOpsCoin Creator Rewards Allocation

**Network:** Solana  
**Launch Platform:** [pump.fun](https://pump.fun/)  
**Maintained by:** DevOpsCoin LLC  
**Last Updated:** October 2025 — Three-Wallet Model + 2 % TreasuryOps Bootstrap Revision

---

## Overview

DevOpsCoin does **not** use transaction taxes or on-chain fees.  
Ecosystem sustainability comes from **creator rewards** earned on **pump.fun**, which are then distributed through a three-wallet system:

1. **Founder Vesting Wallet (10 %)** — trustless vesting contract with 3-month cliff and 20-month linear release.
2. **TreasuryOps Wallet (2 % DEVOPS + SOL)** — holds a 2 % bootstrap allocation in DEVOPS and redeems creator rewards in SOL for operations, marketing, and Ship-It top-ups.
3. **Ship-It Fund Wallet (5 % DEVOPS)** — grant treasury funded by TreasuryOps top-ups for open-source projects.

This ties DevOpsCoin’s sustainability directly to community engagement and trading activity — not on-chain fees.

---

## Reward Flow

```text
Pump.fun Creator Rewards (SOL)
        │
        ▼
TreasuryOps Wallet (SOL + 2 % DEVOPS)
├─ Funds marketing, liquidity, ops, and buybacks
├─ Provides Ship-It Fund top-ups as needed
└─ Allocates ≈ 50 % of creator rewards to TreasuryOps operations and ≈ 50 % to DevOpsCoin LLC business activities
        │
        ▼
Ship-It Fund (DEVOPS)
├─ Issues monthly open-source grants
└─ Rolls over when volume is low
```

---

## Allocation Breakdown

| Source                        | Portion / Type          | Destination           | Purpose                                                     |
| ----------------------------- | ----------------------- | --------------------- | ----------------------------------------------------------- |
| **Creator Reward (pump.fun)** | Variable (SOL)          | TreasuryOps Wallet    | Receives SOL creator rewards from pump.fun                  |
| **Treasury Bootstrap**        | 2 % (20 M DEVOPS)       | TreasuryOps Wallet    | Initial reserve for liquidity and operations                |
| **Treasury Top-Up**           | Periodic (volume-based) | Ship-It Fund (DEVOPS) | Transfers reserves to support grant issuance                |
| **Ship-It Fund Grants**       | 5 % (50 M DEVOPS)       | Public Recipients     | Monthly open-source grants with rollover when volume is low |
| **Founder Vesting**           | 10 % (100 M DEVOPS)     | Founder Program       | Long-term vesting to align incentives and credibility       |

> The Ship-It Fund never sells DEVOPS. All buybacks and market operations occur exclusively through the TreasuryOps wallet.

---

## Transparency & Verification

Each creator-reward transaction record includes:

- Date and purpose
- Amount and direction
- Wallets involved
- Solana transaction hash
- Verification signature

Records are auditable via:

- `/docs/ledger/TRANSPARENCY_LOG.md` — monthly summaries
- [`shipit-fund`](../../shipit-fund/) — grant ledger
- [`treasury-ledger`](https://github.com/DevOpsCoin/treasury-ledger) — SOL inflows and top-ups

---

**Maintainer:** RootSignal (DevOpsCoin LLC)
