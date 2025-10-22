# DevOpsCoin Creator Rewards Allocation

**Network:** Solana  
**Launch Platform:** [pump.fun](https://pump.fun/)  
**Maintained by:** DevOpsCoin LLC  
**Last Updated:** October 2025 — Three-Wallet Model Revision

---

## Overview

DevOpsCoin does **not** use transaction taxes or on-chain fee mechanics.  
Instead, ecosystem sustainability comes from **creator rewards** earned on **pump.fun** — the incentive model that rewards token creators for market volume.

All creator rewards are distributed through a **three-wallet system**:

1. **Founder Vesting Wallet (10%)** — trustless vesting contract with a 3-month cliff and 20-month linear release.
2. **TreasuryOps Wallet (SOL)** — receives and manages all creator rewards redeemed in SOL.
3. **Ship-It Fund Wallet (5% DEVOPS)** — receives DEVOPS top-ups from TreasuryOps to fund open-source grants.

This approach ties DevOpsCoin’s sustainability to community engagement and trading activity, rather than perpetual on-chain fees.

---

## Reward Flow

```text
Pump.fun Creator Rewards (SOL)
            │
            ▼
   TreasuryOps Wallet (SOL)
   ├─ Funds marketing, liquidity, ops, and buybacks
   └─ Periodically tops up Ship-It Fund (DEVOPS)
            │
            ▼
     Ship-It Fund (DEVOPS)
   ├─ Issues monthly open-source grants
   └─ Rolls over when volume is low
```

---

## Allocation Breakdown

| Source                        | Portion / Type              | Destination              | Purpose                                                             |
| ----------------------------- | --------------------------- | ------------------------ | ------------------------------------------------------------------- |
| **Creator Reward (pump.fun)** | Variable per trading volume | TreasuryOps Wallet (SOL) | Receives SOL creator rewards from pump.fun                          |
| **Treasury Top-Up**           | Periodic, volume-dependent  | Ship-It Fund (DEVOPS)    | Converts or transfers reserves to support grant issuance            |
| **Ship-It Fund Grants**       | 5% of total token supply    | Public Recipients        | Monthly open-source DevOps grants, with rollover when volume is low |
| **Founder Vesting**           | 10% of total token supply   | Founder Vesting Program  | Long-term linear vesting to align incentives and credibility        |

> The Ship-It Fund never sells DEVOPS. All buybacks, liquidity adjustments, and market operations occur exclusively from the TreasuryOps wallet.

---

## Transparency & Verification

All creator-reward inflows and redistributions are publicly verifiable.

Each transaction record includes:

- Date and purpose
- Amount and direction
- Wallets involved
- Solana transaction hash
- Verification signature

Records are published and auditable through:

- `/docs/ledger/TRANSPARENCY_LOG.md` — monthly transaction summaries
- [`shipit-fund`](https://github.com/DevOpsCoin/shipit-fund) — on-chain grant ledger
- [`treasury-ledger`](https://github.com/DevOpsCoin/treasury-ledger) — SOL inflow and top-up records

---

**Maintainer:** RootSignal (DevOpsCoin LLC)
