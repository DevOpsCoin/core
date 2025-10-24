# Ship-It Fund

The **Ship-It Fund** is the operational grant engine of **DevOpsCoin ($DEVOPS)** — a transparent, ledger-driven program that turns real trading activity into measurable support for open-source builders.

It funds automators, engineers, and maintainers who live by one principle: **Ship it, don’t hype it.**

---

## Overview

The Ship-It Fund operates as a **dedicated DEVOPS grant treasury**, powered entirely by creator rewards earned from the [$DEVOPS token on Pump.fun](https://pump.fun/).  
There are **no transaction taxes or embedded fees** in the token contract — instead, the Fund receives periodic top-ups from the **TreasuryOps wallet**, which collects SOL from creator reward inflows.

Each monthly funding cycle focuses on one core purpose:

1. **Open-Source Grants** — tools, dashboards, automation frameworks, bots, or educational and infrastructure projects that strengthen the DevOps and open-internet ecosystem.

The Ship-It Fund **never sells DEVOPS** or participates in liquidity operations.  
All market, buyback, and operational activity runs through the **TreasuryOps wallet**, maintaining clear boundaries between funding and market functions.

Funding cadence follows volume.  
If activity or reward inflows are low, disbursements are **rolled forward** to the next cycle — ensuring long-term continuity without token dilution or unnecessary selling.

> **Creator Reward Context:**  
> TreasuryOps receives roughly **50% of creator rewards** in SOL for operations and Ship-It top-ups.  
> The remaining portion supports DevOpsCoin LLC business activities.  
> Any variation (±10%) is documented in the monthly transparency ledger.

---

## Transparency

Every Ship-It Fund disbursement is **publicly logged and verifiable**.

| Channel                 | Purpose                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| **Ledger**              | Allocations recorded in YAML under [`/shipit-fund/ledger/`](../../shipit-fund/ledger/)      |
| **Verification Script** | [`verify-ledger.sh`](../../shipit-fund/ledger/verify-ledger.sh) checks integrity and hashes |
| **Project Board**       | [Funded Projects →](https://github.com/orgs/DevOpsCoin/projects/1)                          |
| **Public Repo**         | [Core Repository →](https://github.com/DevOpsCoin/core)                                     |

Each ledger entry includes:

- Project name and purpose
- Amount of $DEVOPS allocated
- Recipient Solana wallet
- Transaction hash
- Verification signature

No private transfers.  
No off-chain accounting.

### Ledger Verification

All grants and fund transfers are permanently recorded in the  
[**Ship-It Fund Ledger →**](../../shipit-fund/ledger/).

Each ledger file can be verified locally using the  
[`verify-ledger.sh`](../../shipit-fund/ledger/verify-ledger.sh) script, which checks:

- SHA256 integrity of all entries
- Duplicate or missing transaction hashes
- Signature validity

> Accountability is proven, not promised.

---

## Application Process

1. Open a new issue in the [DevOpsCoin/core repository](https://github.com/DevOpsCoin/core/issues/new?assignees=&labels=shipit-fund,submission&template=shipit_fund_project_submission.yml).
2. Provide project description, roadmap, and contact details.
3. Review occurs publicly within the issue thread.
4. Approved projects are tracked on the [DevOpsCoin Project Board](https://github.com/orgs/DevOpsCoin/projects/1).

**Submit a Project:**  
[Create Submission →](https://github.com/DevOpsCoin/core/issues/new?assignees=&labels=shipit-fund,submission&template=project_submission.yml)

---

## Governance & Oversight

The Ship-It Fund operates under **DevOpsCoin LLC** governance and follows the project’s verification workflow:

> **Ship → Show → Verify**

1. **Ship** — prepare the proposal or transaction
2. **Show** — document and record in the ledger
3. **Verify** — confirm on-chain and cross-reference transaction hash

All activity adheres to the [Governance Framework](../operations/GOVERNANCE.md) and [Transparency Policy](../operations/TRANSPARENCY.md).

---

## Relationship to TreasuryOps

The **TreasuryOps wallet (SOL)** refills the Ship-It Fund when reserves decline.  
It manages creator reward inflows, liquidity, and operational costs — allowing the Ship-It Fund to stay focused solely on DEVOPS-denominated grants.

> TreasuryOps = SOL operations  
> Ship-It Fund = DEVOPS grants

This clear separation simplifies governance, accounting, and public verification.

---

## Reference Links

| Resource                                                       | Description                                 |
| -------------------------------------------------------------- | ------------------------------------------- |
| [Ship-It Fund Directory](../../shipit-fund/)                   | Grant management and ledger                 |
| [Core DevOpsCoin Docs](../README.md)                           | Tokenomics, governance, and technical specs |
| [Transparency Ledger](../../shipit-fund/ledger/)               | Canonical funding records                   |
| [Review Process](../../shipit-fund/docs/REVIEW_PROCESS.md)     | Maintainer review flow                      |
| [Project Board](https://github.com/orgs/DevOpsCoin/projects/1) | Active and historical grants                |

---

## Summary

The Ship-It Fund converts measurable community participation into verifiable funding for open-source work.  
It’s transparent, disciplined, and traceable by design.

> **Fund work — not hype.**

---

_Last Updated: October 2025 — Integrated into `/core/shipit-fund` directory for unified transparency._  
_Maintainer: RootSignal (DevOpsCoin LLC)_
