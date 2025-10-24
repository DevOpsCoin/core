# 🧾 Ship-It Fund Ledger

This directory contains all **funding records** for the **DevOpsCoin Ship-It Fund**.  
Each YAML file represents one fiscal quarter and includes every approved project, grant amount, and Solana transaction hash.

> _Transparency is infrastructure._

---

## 🪙 Purpose

The ledger provides an immutable public record of how **$DEVOPS** tokens are distributed to open-source DevOps projects.  
Each entry corresponds to an on-chain transaction once executed from the **Ship-It Fund wallet**.

---

## 📂 Structure

Each ledger file follows this pattern:

```
ledger/
 ├── 2025Q4.yml
 ├── 2026Q1.yml
 ├── ...
```

Each YAML file contains:

| Section   | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `meta`    | Quarter metadata, fund wallet, reviewer, and network context |
| `grants`  | List of approved project grants (pending or complete)        |
| `summary` | Aggregated totals for transparency                           |
| `signoff` | Maintainer signature and file integrity proof                |

---

## 🧩 Example Entry

```yaml
- project: 'Pipeline Generator'
  repo: 'https://github.com/example/pipeline-generator'
  amount: 12_500
  token: 'DEVOPS'
  wallet: 'ExampleRecipientWallet'
  tx_hash: '3d3r9f...A1z'
  status: 'complete'
  approved_on: '2025-10-19'
  reviewed_by: 'RootSignal'
  notes: 'Initial grant; verified on Solana mainnet.'
```

### Status Values

| Status     | Meaning                           |
| ---------- | --------------------------------- |
| `pending`  | Approved, awaiting distribution   |
| `complete` | Transaction executed and verified |
| `rejected` | Reviewed but not funded           |

---

## 🔐 Integrity Verification

Each ledger is cryptographically sealed using a **SHA256 signature hash**.

### Steps

1. After finalizing a quarterly ledger, run:
   ```bash
   shasum -a 256 ledger/2025Q4.yml
   ```
2. Copy the resulting hash and paste it into the `signoff.signature_hash` field.
3. Commit the file with a signed Git commit (GPG or SSH preferred).

This allows anyone to verify that the ledger on GitHub matches the version signed by **DevOpsCoin LLC**.

---

## 🔗 On-Chain Verification

Each `tx_hash` links to a **Solana mainnet transaction** once the Ship-It Fund is active.  
Reviewers can independently verify all disbursements using:

```
https://solscan.io/tx/<tx_hash>
```

---

## 🧠 Governance Context

Ledger entries correspond to **approved project submissions** from the Ship-It Fund’s [Project Submission form](../../.github/ISSUE_TEMPLATE/project_submission.yml).

The evaluation and approval process is defined in:

- [Funding Guide](../docs/FUNDING_GUIDE.md)
- [Review Process](../docs/REVIEW_PROCESS.md)

All grants are discretionary, transparent, and recorded under the governance of **DevOpsCoin LLC**.

---

## 🧮 Quarterly Workflow

1. **Review phase:** assess proposals, tag approved issues
2. **Funding phase:** execute token disbursements from the Ship-It Fund wallet
3. **Ledger update:** log entries, include `tx_hash`, and compute `signature_hash`
4. **Sign-off:** RootSignal or maintainer commits signed ledger to main branch

Each file is immutable once finalized. Revisions must be made in a new file (e.g., `2025Q4R1.yml`).

---

**Maintained by:**  
RootSignal / DevOpsCoin LLC  
_Last Updated: October 2025_
