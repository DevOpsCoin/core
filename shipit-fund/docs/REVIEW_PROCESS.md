# Ship-It Fund Review Process

This document defines how **Ship-It Fund project submissions** are reviewed, approved, and recorded from proposal to final disbursement.  
It ensures consistent evaluation, transparent decision-making, and accurate ledger logging.

---

## Review Stages

| Stage                       | Description                                                                                                      | Reviewer Action                                     |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **1. Submission**           | Builder opens an issue using the [Project Submission Template](../.github/ISSUE_TEMPLATE/project_submission.yml) | Verify format, tag `review:pending`                 |
| **2. Initial Triage**       | Maintainers validate repository access, license, and open-source eligibility                                     | Add `review:eligible` or `review:needs-info`        |
| **3. Technical Evaluation** | Reviewer examines code quality, roadmap, and deliverables                                                        | Add `review:approved` or `review:changes-requested` |
| **4. Final Sign-Off**       | Lead maintainer (RootSignal) or LLC reviewer confirms funding decision                                           | Add `funding:approved` or `funding:rejected`        |
| **5. Ledger Entry**         | Approved projects are recorded in `/ledger` and announced publicly                                               | Include amount, transaction hash, and date          |

All review labels are managed through the GitHub issue workflow for full public traceability.

---

## Review Criteria

| Category           | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| **Code Quality**   | Readable, maintainable, and secure implementation           |
| **Transparency**   | Public repo, clear license, active commits, visible roadmap |
| **Impact**         | Provides measurable developer or community value            |
| **Sustainability** | Remains useful beyond a single release or funding cycle     |
| **Community Fit**  | Aligns with DevOps, open-source, or builder culture         |

> The Ship-It Fund supports any impactful open-source project — not only DevOps tooling.

---

## Reviewer Guidelines

- Provide **constructive technical feedback** — focus on clarity and improvement.
- Comment publicly in the submission issue thread.
- Encourage iteration or small adjustments before a decision if the proposal is promising.
- Maintain neutrality — avoid bias, favoritism, or conflicts of interest.
- Use consistent tags and sign-offs for traceability.

---

## Ledger Logging

Once approved, add the project entry to `/ledger/YYYYQX.yml`:

```yaml
- project: Open Source Dashboard
  repo: https://github.com/example/dashboard
  description: 'Cross-provider CI/CD dashboard for build metrics and release tracking.'
  applicant: '@exampledev'
  amount: 12_500
  token: DEVOPS
  wallet: <Ship-It Fund Wallet Address>
  tx_hash: null
  status: pending
  reviewed_by: RootSignal
  approved_on: 2025-10-20
```

When the transaction completes, update:

```yaml
status: complete
tx_hash: '<on-chain Solana transaction hash>'
```

All disbursements are made in **DEVOPS tokens** from the **Ship-It Fund wallet**.  
The **TreasuryOps wallet (SOL)** is used only for operations, liquidity, marketing, and top-ups — never for grant payouts.

---

## Verification & Transparency

Every funded project must appear in:

- `/ledger` — immutable record of the transaction
- [Project Board](https://github.com/orgs/DevOpsCoin/projects/1) — active and completed grants
- [Solana Explorer (Solscan)](https://solscan.io) — transaction-level confirmation

Verification occurs through the `verify-ledger.sh` script and public on-chain visibility.

---

## Principles

| Principle          | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| **Fairness**       | Equal review and consideration for all eligible submissions                 |
| **Transparency**   | All review discussions, approvals, and ledgers are public                   |
| **Accountability** | Reviewers sign each approved entry with their name and hash                 |
| **Verification**   | Ledger signatures and Solana transaction hashes serve as proof of integrity |
| **Automation**     | Future ledgers will sync automatically with on-chain data for verification  |

---

**Maintainer:** RootSignal (DevOpsCoin LLC)  
**Last Updated:** October 2025 — Three-Wallet Model Alignment
