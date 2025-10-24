# Ship-It Fund

The **Ship-It Fund** is the beating heart of the **DevOpsCoin ($DEVOPS)** ecosystem — a transparent grant program that transforms community momentum into real support for open-source builders.

It funds automators, creators, and open-source maintainers who embody the spirit of **“Ship it, don’t hype it.”**

---

## 💡 Overview

The Ship-It Fund operates as a **dedicated DEVOPS grant treasury**, powered by creator rewards earned from the [$DEVOPS token on Pump.fun](https://pump.fun/).  
There are **no transaction taxes or embedded fees** in the token contract — instead, the Fund receives periodic top-ups from the **TreasuryOps wallet**, which collects SOL from creator reward inflows.

Each monthly funding cycle supports one clear mission:

1. **Open-Source Grants** — Tools, dashboards, scripts, bots, educational content, creative software, or infrastructure projects that advance the open-source ecosystem.

The Ship-It Fund **never sells DEVOPS** or performs liquidity operations.  
All market, buyback, and operational activity is handled separately by the **TreasuryOps wallet** to maintain clean accounting boundaries.

Funding activity depends on trading volume.  
If volume or creator rewards are low in a given month, grant disbursements are **deferred and rolled forward** to the next active period — ensuring long-term sustainability without forced selling or dilution.

> **Creator Reward Context:**  
> TreasuryOps receives roughly **50 % of creator rewards** in SOL to fund operations and Ship-It top-ups.  
> The remaining 50 % supports DevOpsCoin LLC operations and development, ensuring both ecosystem and business sustainability.  
> Any variation (±10 %) is disclosed monthly in the transparency ledger.

---

## 📊 Transparency

Every Ship-It Fund disbursement is **publicly logged and verifiable**.

| Channel                 | Purpose                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| **Ledger**              | All allocations recorded in YAML under [`/shipit-fund/ledger/`](../../shipit-fund/ledger/)      |
| **Verification Script** | [`verify-ledger.sh`](../../shipit-fund/scripts/verify-ledger.sh) validates integrity and hashes |
| **Project Board**       | [View Funded Projects →](https://github.com/orgs/DevOpsCoin/projects/1)                         |
| **Public Repo**         | [Core Repository →](https://github.com/DevOpsCoin/core)                                         |

Each ledger entry includes:

- Project name and purpose
- Amount of $DEVOPS allocated
- Recipient Solana wallet
- Transaction hash
- Verification signature

No private disbursements or off-chain accounting are ever performed.

### 🔍 Verification & Ledger Access

All grants and fund transfers are permanently recorded in the  
[**Ship-It Fund Ledger →**](../../shipit-fund/ledger/).

Each ledger file can be locally verified using the  
[`verify-ledger.sh`](../../shipit-fund/scripts/verify-ledger.sh) script, which checks for SHA256 integrity, duplicate transaction hashes, and missing entries.

> Transparency isn’t optional — it’s infrastructure.

---

## 🧰 How to Apply

1. Open a new issue in the [DevOpsCoin/core repository](https://github.com/DevOpsCoin/core/issues/new?assignees=&labels=shipit-fund,submission&template=project_submission.yml).
2. Provide project details, roadmap, and contact information.
3. Review occurs publicly in the issue thread.
4. Approved projects are added to the [DevOpsCoin Roadmap](https://github.com/orgs/DevOpsCoin/projects/1).

👉 **Submit a Project:**  
[Create Submission →](https://github.com/DevOpsCoin/core/issues/new?assignees=&labels=shipit-fund,submission&template=project_submission.yml)

---

## ⚙️ Governance & Oversight

The Ship-It Fund operates under **DevOpsCoin LLC** governance and adheres to the project’s core DevOps principle:

> **Ship → Show → Verify**

1. **Ship** — Prepare the proposal or transaction
2. **Show** — Publish rationale and record in the ledger
3. **Verify** — Execute on-chain and confirm transaction hash

All activity aligns with the broader [Governance Framework](../operations/GOVERNANCE.md) and [Transparency Policy](../operations/TRANSPARENCY.md).

---

## 💰 Relationship to TreasuryOps

The **TreasuryOps wallet (SOL)** funds the Ship-It Fund when grant reserves decline.  
It manages creator reward inflows, marketing, liquidity, and operational costs — keeping the Ship-It Fund focused exclusively on open-source grants.

> TreasuryOps = SOL operations  
> Ship-It Fund = DEVOPS grants

This separation ensures clarity for tax reporting, governance, and on-chain verification.

---

## 🧭 Key Links

| Resource                                                          | Description                                 |
| ----------------------------------------------------------------- | ------------------------------------------- |
| 🌐 [Ship-It Fund Website](https://devopscoin.ai/)                 | Public-facing overview                      |
| 🧠 [Core DevOpsCoin Docs](../README.md)                           | Tokenomics, governance, and technical specs |
| 📜 [Ship-It Fund Directory](../../shipit-fund/)                   | Grant management and ledger                 |
| 📊 [Project Board](https://github.com/orgs/DevOpsCoin/projects/1) | Active and past grants                      |
| 🪙 [Transparency Ledger](../../shipit-fund/ledger/)               | Funding records (canonical source)          |
| 🧩 [Review Process](../../shipit-fund/REVIEW_PROCESS.md)          | Maintainer review flow                      |

---

## 🪙 Summary

The Ship-It Fund represents **the cultural and operational backbone** of $DEVOPS — funding the people who keep the internet running.  
It’s transparent, data-driven, and sustainable by design.

> **No taxes. No games. Just shipping.**

---

_Last updated: October 2025 — Integrated into `/core/shipit-fund` directory for unified governance and transparency._  
_Maintainer: RootSignal (DevOpsCoin LLC)_
