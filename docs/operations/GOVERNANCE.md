# Governance & Community Oversight

DevOpsCoin is governed by **DevOpsCoin LLC**, founded on a simple principle:  
**transparency is built into the system** — governance must be automated, observable, and verifiable.

This document defines how the **Ship-It Fund**, **TreasuryOps Wallet**, and **Founder Vesting Program** are managed, verified, and made publicly auditable.

---

## Governance Philosophy

DevOpsCoin applies DevOps discipline to governance — automation replaces assumption.

- **Automation over discretion** — deterministic contracts replace manual control.
- **Verification over trust** — every transaction is observable on-chain.
- **Transparency over hype** — governance lives in code, not marketing.

Governance is treated as **infrastructure**: predictable, testable, and open.  
No committees. No promises. Just process and proof.

---

## Core Funds

| Fund                      | Purpose                                                                                                                                        | Controlled By                              | Transparency Mechanism                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| **Ship-It Fund (DEVOPS)** | Dedicated to open-source grants and sponsorships. Issues monthly grants while volume supports it; rolls forward otherwise. Never sells DEVOPS. | DevOpsCoin LLC (custodial until DAO-ready) | Public Solana wallet and verifiable on-chain disbursements |
| **TreasuryOps (SOL)**     | Receives creator rewards in SOL. Funds marketing, liquidity, operations, and buybacks. Tops up the Ship-It Fund when reserves run low.         | DevOpsCoin LLC                             | On-chain SOL logs and monthly ledger entries               |
| **Founder Vesting**       | Founder allocation (10%) with a 3-month cliff and 20-month linear vesting.                                                                     | Smart-contract vesting program             | On-chain vesting record and verified repo source           |

> Previous combined “Ship-It / Operations” or “Community” wallets were deprecated in favor of this three-wallet model for clear accounting and verifiable oversight.

---

## Decision Process

All fund movements follow the **Ship → Show → Verify** pattern:

1. **Ship** — execute via on-chain transaction or pull request.
2. **Show** — document in `/docs/ledger/TRANSPARENCY_LOG.md`.
3. **Verify** — confirm through Solscan or signed transaction hashes.

Every action leaves a public, reproducible trace.

---

## Ship-It Fund Governance

The **Ship-It Fund** functions as an on-chain treasury for open-source grants and creative projects that align with DevOps and open-internet principles.

- Grants issued monthly when trading volume supports it.
- Deferred (rolled forward) if volume is insufficient.
- Fund holds DEVOPS only — never sold, swapped, or used for liquidity.
- **TreasuryOps** provides SOL top-ups when needed.

Balances and disbursements are visible on-chain and summarized monthly in the [Transparency Log](../ledger/TRANSPARENCY_LOG.md).

---

## TreasuryOps Oversight

The **TreasuryOps wallet** manages SOL-based operations with minimal manual intervention.

- Receives SOL creator rewards from Pump.fun and PumpSwap.
- Funds liquidity provisioning, operations, and buybacks.
- Periodically refills the Ship-It Fund as volume allows.
- Initially seeded with a 2% DEVOPS bootstrap allocation.

**Creator Reward Policy:**  
50% of creator rewards go to TreasuryOps by default, with the remainder covering operational costs.  
This split may flex ±10% based on market conditions but is always documented in the monthly ledger.

Every SOL inflow and outflow is logged and verifiable on-chain.

---

## Founder Vesting Program

The **Founder Vesting Program** ensures alignment and transparency — no shortcuts, no early unlocks.

| Parameter    | Value                           |
| ------------ | ------------------------------- |
| Allocation   | 10% (100M DEVOPS)               |
| Cliff        | 3 months                        |
| Vesting Rate | 5% per month (20 months total)  |
| Network      | Solana                          |
| Beneficiary  | RootSignal (DevOpsCoin Founder) |

Tokens unlock automatically through a smart-contract vesting schedule.  
All vesting activity is viewable through Solana explorers.

---

## Governance Roadmap

| Phase                               | Description                                                                       | Status      |
| ----------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| **Phase 1 — Maintainer Governance** | DevOpsCoin LLC manages Ship-It and TreasuryOps wallets, enforcing Founder Vesting | Active      |
| **Phase 2 — Smart Governance**      | Multi-sig automation and time-locked disbursements                                | In progress |
| **Phase 3 — Community Input**       | Introduce contributor-weighted advisory voting on Ship-It allocations             | Planned     |

---

## Community Participation

- **Contribute:** Submit PRs, fix docs, or propose improvements.
- **Verify:** Audit Ship-It and TreasuryOps transactions directly on Solscan.
- **Support:** Build or contribute to open-source projects funded by Ship-It.
- **Discuss:** Use GitHub Discussions or Telegram for proposals and reviews.

Community participation is encouraged — governance grows with contribution, not speculation.

---

## Funding Transparency

The **Ship-It Fund** and **TreasuryOps Wallet** are powered by creator rewards from the [$DEVOPS token on Pump.fun](https://pump.fun/).  
There are **no transaction taxes or embedded fees** in the token contract.

Grants depend on ecosystem health — when volume slows, payouts defer until sustainable.  
TreasuryOps top-ups and transfers are documented monthly in the ledger.

For further reference:

- [Ship-It Fund Documentation](../token/SHIPIT_FUND.md)
- [Treasury Refill Policy](../token/TREASURY_REFILL_POLICY.md)

---

## Foundation for Open Trust

DevOpsCoin governance is **procedural, not political**.  
Every wallet, contract, and log is verifiable — nothing depends on promises or personality.

If it can’t be proven, it doesn’t count.

---

**Maintainer:** RootSignal (DevOpsCoin LLC)  
**Last Updated:** October 2025 — Governance & Transparency Revision
