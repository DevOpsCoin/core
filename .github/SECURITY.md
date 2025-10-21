# SECURITY.md

# Security Policy

The DevOpsCoin project takes security seriously.  
We encourage responsible disclosure of any vulnerabilities or concerns affecting our smart contracts, website, or connected infrastructure.

---

## 🔒 Reporting a Vulnerability

If you believe you’ve discovered a security issue:

- **Do not open a public GitHub issue.**
- Instead, contact us directly via:
  - **Email:** [security@devopscoin.ai](mailto:security@devopscoin.ai)
  - **Disclosure form:** [https://devopscoin.ai/security](https://devopscoin.ai/security)

We’ll acknowledge receipt within **48 hours** and aim to provide a resolution or mitigation plan within **7 business days**.

---

## 🚫 What Not to Report

The following do **not** qualify as vulnerabilities:

- Missing or misconfigured environment variables (`NEXT_PUBLIC_*`)
- UI, content, or layout issues
- Public contract addresses or metadata visible on-chain
- Known test deployments on Solana devnet

---

## 🧰 Security Practices

DevOpsCoin follows strict operational and code-security standards:

- **No private keys or secrets** are ever committed to repositories
- **Client-side only** wallet interactions — all transactions require explicit user signature
- All **contracts are verified** and publicly viewable via **Solana Explorer** or **Solscan**
- **Only two wallets exist:** the **Ship-It Fund** and **Founder Vesting Program** — both publicly documented and auditable

---

## 🧩 Smart Contract Scope

This policy covers all smart contracts and associated programs deployed under the **DevOpsCoin namespace**, including:

- SPL token contract for `$DEVOPS`
- Founder Vesting Program (3-month cliff + 20-month linear vesting)
- Ship-It Fund wallet operations and associated automation programs (when active)

All smart contracts are open-source, auditable, and designed for immutability once deployed.

---

**Thank you for helping keep DevOpsCoin and the broader Web3 ecosystem secure.**  
_Where pipelines meet protocols._
