# Ship-It Fund — Open Source Grants

The **Ship-It Fund** is the $DEVOPS ecosystem’s community-driven initiative to support **open-source builders** — from automation tools and dashboards to creative software, AI utilities, and experiments that make the internet better.

It’s where **builder culture meets crypto transparency**, transforming creator-reward inflows and **TreasuryOps top-ups** from the [$DEVOPS token](https://devopscoin.ai) into direct grants that help people ship faster and smarter.

---

## Overview

The Ship-It Fund operates under **DevOpsCoin LLC** as part of a transparent, three-wallet architecture:

1. **Founder Vesting Wallet (10%)** — Long-term trustless vesting with a 3-month cliff and 20-month linear release.
2. **TreasuryOps Wallet (SOL-based + 2% DEVOPS bootstrap)** — Receives creator rewards from Pump.fun in SOL; funds operations, liquidity, marketing, and periodic Ship-It Fund top-ups.
3. **Ship-It Fund Wallet (5% DEVOPS)** — Dedicated exclusively to open-source grants, sponsorships, and community bounties.

The Ship-It Fund never sells DEVOPS or engages in liquidity management. It exists solely to distribute verified grants and support open-source innovation.

If market activity or creator-reward inflows slow, grants are **deferred and rolled forward** transparently to the next cycle — maintaining fiscal discipline and avoiding unnecessary dilution.

---

## Mission

> To fund and celebrate the builders who automate, create, and share — turning memecoin energy into open-source impact.

The Ship-It Fund reflects the philosophy that **transparency is infrastructure** — every allocation, grant, and transaction is recorded publicly and verifiable on-chain.

---

## What We Fund

The Ship-It Fund supports **open-source projects** that embody DevOps culture, creativity, and community collaboration.

Examples include:

- Developer tooling, CLIs, bots, and workflow automation
- Dashboards, frameworks, and infrastructure utilities
- Open-source AI or data-driven projects
- Educational or documentation efforts that teach and empower others
- Creative or meme-driven open-source experiments that strengthen digital culture

All funded projects must be **open source**, publicly accessible, and verifiable on GitHub or an equivalent platform.

---

## Funding Policy

| Principle              | Description                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Source of Funds**    | Creator rewards (via TreasuryOps) and the 5% DEVOPS Ship-It bootstrap allocation                               |
| **Treasury Bootstrap** | TreasuryOps begins with a 2% DEVOPS allocation, used strictly for early ecosystem liquidity and sustainability |
| **Use of Funds**       | Open-source grants, contributor rewards, and community sponsorships only                                       |
| **Deferrals**          | If creator rewards or market activity are low, grants roll to the next cycle                                   |
| **Transparency**       | Every disbursement logged in `/ledger` with a verifiable Solana transaction hash                               |
| **Network**            | Solana — native $DEVOPS SPL token                                                                              |

No grants are ever made off-ledger. All actions are traceable through signed commits and on-chain data.

---

## Transparency & Verification

The Ship-It Fund maintains full transparency across both **DEVOPS** and **SOL** flows using a public ledger system.

- Each transaction (grant, top-up, or transfer) is recorded in the [`/ledger/`](./ledger) directory.
- The [`verify-ledger.sh`](./verify-ledger.sh) script validates both **DEVOPS** and **SOL** entries via hash integrity checks.
- All transactions include:
  - Date and purpose
  - Amount and token type (DEVOPS or SOL)
  - Recipient wallet
  - Solana transaction hash
  - Verification signature

Ledger entries are immutable, publicly reviewable, and cross-referenced with Solana explorers such as **[Solscan](https://solscan.io/)** for validation.

Transparency is also reinforced by the [core project’s policy](https://github.com/DevOpsCoin/core/blob/main/docs/operations/TRANSPARENCY.md), which defines shared verification standards across all wallets.

---

## How to Apply

1. **Star or watch** this repository to follow updates.
2. Open a [New Project Submission](../../issues/new?assignees=&labels=submission&template=project_submission.yml).
3. Complete the form (project details, repo link, roadmap, contact info).
4. Submissions are reviewed publicly via issue discussions.
5. Approved projects are labeled `funded` and added to the [Project Board](https://github.com/orgs/DevOpsCoin/projects/1).

👉 **Live Board:** [View Funded Projects](https://github.com/orgs/DevOpsCoin/projects/1)

---

## Grant Lifecycle

| Stage            | Description                                        |
| ---------------- | -------------------------------------------------- |
| **Proposal**     | Submit via GitHub issue template                   |
| **Review**       | Maintainers evaluate eligibility and impact        |
| **Approval**     | Project labeled `funded`                           |
| **Ledger Entry** | Disbursement recorded with Solana transaction hash |
| **Verification** | Entry validated via `verify-ledger.sh` and Solscan |

Each stage is traceable, open to public review, and permanently recorded in both this repository and the on-chain ledger.

---

## Governance

The Ship-It Fund operates under **DevOpsCoin LLC** using the governance model:  
**Ship → Show → Verify**

1. **Ship** — Propose or execute a change (grant, transfer, or top-up)
2. **Show** — Record and publish it in the transparency ledger
3. **Verify** — Confirm on-chain via Solana transaction hash and hash verification

Governance references and alignment:

- [Core Governance Documentation](https://github.com/DevOpsCoin/core/blob/main/docs/operations/GOVERNANCE.md)
- [Treasury Refill Policy](https://github.com/DevOpsCoin/core/blob/main/docs/token/TREASURY_REFILL_POLICY.md)

---

## Repository Structure

```text
shipit-fund/
├── ledger/               # Public transaction and grant records
├── scripts/              # Verification utilities (verify-ledger.sh)
├── docs/                 # Internal fund documentation
└── .github/
    └── ISSUE_TEMPLATE/
        └── project_submission.yml
```

---

## Resources

| Resource                                                                                          | Description                            |
| ------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [DevOpsCoin Website](https://devopscoin.ai)                                                       | Core project and ecosystem overview    |
| [Core Repository](https://github.com/DevOpsCoin/core)                                             | Tokenomics, governance, and operations |
| [Ledger Directory](./ledger)                                                                      | All verified disbursements and grants  |
| [Project Board](https://github.com/orgs/DevOpsCoin/projects/1)                                    | Active and completed grants            |
| [Submit a Project](../../issues/new?assignees=&labels=submission&template=project_submission.yml) | Apply for Ship-It Fund support         |

---

## License

MIT License © 2025 DevOpsCoin LLC  
**Where pipelines meet protocols.**
