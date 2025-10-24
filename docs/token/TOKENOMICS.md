# TOKENOMICS — DevOpsCoin ($DEVOPS)

**Network:** Solana  
**Symbol:** DEVOPS  
**Total Supply:** 1,000,000,000 DEVOPS  
**Decimals:** 9  
**Launch Path:** Pump.fun → Raydium → Jupiter  
**Creator Authority:** Revoked post-launch (no adjustable parameters)

_Last updated: October 2025_

---

## 1) Design Principles

- **No transfer taxes / reflections.** DevOpsCoin does **not** impose transaction taxes or on-chain fees.
- **Single-purpose wallets.** Ship-It for grants, TreasuryOps for ops/liquidity, Founder under a vesting program.
- **Transparent by default.** All inflows/outflows are verifiable on Solana and mirrored in the repo ledgers.

---

## 2) Fixed Supply & Allocation

Total supply is **1,000,000,000 DEVOPS** and is fixed at deployment.

| Allocation                           | Percent | Amount (DEVOPS) | Purpose                                                                                               |
| ------------------------------------ | :-----: | --------------: | ----------------------------------------------------------------------------------------------------- |
| **Founder Vesting**                  |   10%   |     100,000,000 | Long-term alignment; 3-month cliff + 20-month linear vesting                                          |
| **Ship-It Fund**                     |   5%    |      50,000,000 | Dedicated grant treasury for open-source projects; never sells DEVOPS                                 |
| **TreasuryOps (bootstrap DEVOPS)**   |   2%    |      20,000,000 | Operational buffer for liquidity support and market operations; pairs with SOL creator-reward inflows |
| **Public Supply (circulating + LP)** |   83%   |     830,000,000 | Distributed via Pump.fun launch curve and subsequent Raydium/Jupiter liquidity                        |

> The Ship-It Fund holds DEVOPS only and does not perform market operations. Buybacks/liquidity are handled exclusively by **TreasuryOps**.

---

## 3) Wallet Model

- **Founder Vesting (10%)** — Trustless vesting with **3-month cliff** then **5%/mo** for **20 months**.
- **Ship-It Fund (5%)** — Single-purpose grants wallet; monthly grants when volume allows; defers and rolls forward otherwise.
- **TreasuryOps (2% DEVOPS + SOL inflows)** — Operations, liquidity support, marketing, and **buybacks when justified by volume**; also provides Ship-It top-ups.

See detailed structure: [Wallet Structure](./WALLET_STRUCTURE.md)

---

## 4) Vesting Parameters (Founder)

| Parameter   | Value                           |
| ----------- | ------------------------------- |
| Cliff       | 3 months                        |
| Linear      | 20 months at ~5%/month          |
| Network     | Solana                          |
| Beneficiary | RootSignal (DevOpsCoin Founder) |

> Tokens unlock trustlessly via the vesting program and are claimable only by the registered wallet.

---

## 5) Creator Rewards — Funding Mechanics

DevOpsCoin sustainability is funded by **creator rewards** from Pump.fun trading activity (in **SOL**), not by on-chain transfer taxes.

**Flow (conceptual):**

```
Pump.fun Creator Rewards (SOL)
           │
           ▼
      TreasuryOps (SOL + 2% DEVOPS)
      ├─ Ops, liquidity support, marketing
      ├─ Buybacks (as warranted)
      └─ Top-ups to Ship-It Fund (DEVOPS grants)
                │
                ▼
           Ship-It Fund (DEVOPS)
           ├─ Monthly open-source grants
           └─ Rolls forward when volume is low
```

**Split guidance:**

- Creator rewards are **currently targeted ~50/50** between TreasuryOps operations and DevOpsCoin LLC business activities.
- Adjustments **within 40–60% bands** may occur based on market conditions and are disclosed in the transparency ledger prior to implementation.
- No changes to total supply or vesting mechanics arise from these adjustments.

Policy link: [Treasury Refill Policy](../operations/TREASURY_REFILL_POLICY.md)

---

## 6) Liquidity & Launch

- **Pump.fun** bonding-curve launch provides fair initial distribution.
- Liquidity migrates to **Raydium**, with routing via **Jupiter** thereafter.
- TreasuryOps may deploy liquidity support and conduct buybacks when justified by observed volume and market health.

---

## 7) Transparency & Verification

All material movements are publicly auditable:

- **Ship-It Fund ledger (canonical):** [`/shipit-fund/ledger/`](../../shipit-fund/ledger/)
- **Ledger verification script:** [`verify-ledger.sh`](../../shipit-fund/scripts/verify-ledger.sh)
- **Transparency logs (repo):** `/docs/ledger/TRANSPARENCY_LOG.md`
- **Governance policy:** [Governance & Oversight](../operations/GOVERNANCE.md)
- **Ship-It Fund doc:** [SHIPIT_FUND.md](./SHIPIT_FUND.md)

Each ledger entry captures: date, purpose, amount, wallets, Solana tx hash, and signature.  
No private/off-ledger transfers are permitted.

---

## 8) Risk, Constraints, and Invariants

- **No transaction taxes.** Transfers of DEVOPS are not taxed or redirected.
- **No hidden/side wallets.** All wallets are publicly declared and verifiable.
- **No adjustable supply.** Fixed supply; no mint after initialization.
- **Operational discipline.** Ship-It never sells DEVOPS; market actions occur via TreasuryOps only.

---

## 9) Roadmap Alignment (high level)

- **Dev Onboarding:** Mid-November 2025
- **Stealth Phase:** December 2025
- **Public Launch:** January 1, 2026

These milestones do not alter tokenomics; they describe rollout timing for ecosystem growth.

---

## Appendix — Quick Math

- **1% of supply** = 10,000,000 DEVOPS
- **0.1% of supply** = 1,000,000 DEVOPS
- **5% Ship-It** = 50,000,000 DEVOPS
- **10% Founder** = 100,000,000 DEVOPS
- **2% TreasuryOps bootstrap** = 20,000,000 DEVOPS

---
