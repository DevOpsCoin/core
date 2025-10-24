# Governance & Community Oversight

DevOpsCoin is governed by **DevOpsCoin LLC**, operating on the belief that  
**transparency is infrastructure** — and governance should be automated, observable, and verifiable.

This document defines how the **Ship-It Fund**, **TreasuryOps Wallet**, and **Founder Vesting Program** are managed, verified, and publicly auditable.

---

## 🧭 Governance Philosophy

DevOpsCoin applies DevOps principles to crypto governance:

- **Automation > Discretion** — deterministic smart contracts replace manual control
- **Verification > Assumption** — every transfer is observable on-chain
- **Transparency > Hype** — all key actions are logged and verifiable in this repository

Governance is treated like infrastructure: predictable, testable, and open.

---

## 💰 Core Funds

| Fund                      | Purpose                                                                                                                                                    | Controlled By                              | Transparency Mechanism                                   |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| **Ship-It Fund (DEVOPS)** | Dedicated to open-source grants and community sponsorships. Issues monthly grants as long as volume supports it; rolls over otherwise. Never sells DEVOPS. | DevOpsCoin LLC (custodial until DAO-ready) | Public Solana wallet + verifiable on-chain distributions |
| **TreasuryOps (SOL)**     | Receives Pump.fun creator rewards in SOL. Funds marketing, exchange liquidity, operations, and buybacks. Tops up the Ship-It Fund when reserves run low.   | DevOpsCoin LLC                             | On-chain SOL transactions + monthly ledger entries       |
| **Founder Vesting**       | Founder allocation (10%) with 3-month cliff and 20-month linear vesting.                                                                                   | Smart-contract vesting program             | On-chain vesting record + verified repo source           |

> All prior combined “Ship-It / Operations” or “Community” wallets have been **deprecated** in favor of this three-wallet model for clearer accounting and transparent grant governance.

---

## ⚙️ Decision Process

All operational changes and fund movements follow a **Ship → Show → Verify** workflow:

1. **Ship** — propose or execute the change via pull request or on-chain transaction
2. **Show** — document and publish the action in `/docs/ledger/TRANSPARENCY_LOG.md`
3. **Verify** — validate on Solscan or through signed transaction hashes

Every governance event leaves a traceable record both on-chain and in-repo.

---

## 🪙 Ship-It Fund Governance

The **Ship-It Fund** operates as a transparent grant treasury focused solely on **open-source and creative projects** that contribute to the broader DevOps, software, or open-internet ecosystem.

- Grants are issued **monthly**, contingent on trading volume and available reserves.
- If volume drops below the operational threshold, the grant is **deferred and rolled forward** to the following month.
- The fund holds **DEVOPS only** and never performs sales, swaps, or buybacks.
- When reserves decline, the **TreasuryOps wallet** provides SOL transfers to sustain future grant issuance.

The Ship-It Fund’s balance, allocations, and disbursements are fully visible on Solana explorers and published monthly in the [Transparency Log](../docs/ledger/TRANSPARENCY_LOG.md).

---

## 🧾 TreasuryOps Oversight

The **TreasuryOps wallet** manages all SOL-based ecosystem operations:

- Receives **creator rewards** in SOL from Pump.fun and PumpSwap trading activity
- Funds **marketing, liquidity provisioning, operations, and buybacks**
- Periodically **tops up the Ship-It Fund** when reserves run low
- **Holds an initial 2% DEVOPS allocation** for bootstrap operations and early airdrops

> **Creator Reward Policy:** 50% of all creator rewards are directed to TreasuryOps by default, with the remainder retained by DevOpsCoin LLC for business operations.  
> This split may vary modestly in the future (±10%) based on operational and market conditions but will always be transparently reported in the monthly ledger and legal disclosures.

All SOL inflows and outflows are logged monthly in the transparency ledger and subject to on-chain verification.

---

## 🔒 Founder Vesting Program

The **Founder Vesting Program** ensures long-term alignment and prevents early supply dilution:

| Parameter    | Value                           |
| ------------ | ------------------------------- |
| Allocation   | 10% (100M DEVOPS)               |
| Cliff        | 3 months                        |
| Vesting Rate | 5% per month (20 months linear) |
| Network      | Solana                          |
| Beneficiary  | RootSignal (DevOpsCoin Founder) |

Tokens unlock trustlessly through the vesting contract and can be claimed only by the founder’s registered wallet.

---

## 🚀 Governance Roadmap

| Phase                               | Description                                                                       | Status         |
| ----------------------------------- | --------------------------------------------------------------------------------- | -------------- |
| **Phase 1 — Maintainer Governance** | DevOpsCoin LLC manages Ship-It and TreasuryOps wallets + enforces Founder Vesting | ✅ Active      |
| **Phase 2 — Smart Governance**      | Introduce multi-sig automation + time-locked disbursements                        | 🧪 In progress |
| **Phase 3 — Community Input**       | Evaluate contributor-weighted advisory voting on Ship-It allocations              | 🧩 Planned     |

---

## 📢 Community Participation

- **Contribute** — open PRs, code, or docs to strengthen the ecosystem
- **Verify** — audit Ship-It and TreasuryOps transactions directly on Solscan
- **Support** — build, share, or collaborate on open-source projects funded by the Ship-It Fund
- **Discuss** — join GitHub Discussions or Telegram for roadmap feedback

---

## 🪙 Funding Transparency

The **Ship-It Fund** and **TreasuryOps Wallet** are powered by creator rewards generated from the [$DEVOPS token on Pump.fun](https://pump.fun/).  
There are **no transaction taxes or embedded fees** in the token contract.

Grant issuance depends on ecosystem volume — when activity slows, the next grant cycle is **rolled forward** until reserves recover, ensuring fiscal stability and transparent accounting.  
TreasuryOps top-ups and allocations are published monthly for full community visibility.

For detailed governance, funding cycles, and verified disbursements, see:  
➡ [Ship-It Fund Documentation →](../docs/SHIPIT_FUND.md)  
➡ [Treasury Refill Policy →](../docs/TREASURY_REFILL_POLICY.md)

---

## 🧱 Foundation for Open Trust

DevOpsCoin’s governance is not political — it’s procedural.  
Every wallet, contract, and transaction is designed for immutable verification.

> **Pipelines, not politics.**

---

**Maintainer:** RootSignal (DevOpsCoin LLC)  
**Last Updated:** October 2025
