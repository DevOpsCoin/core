# Security Policy

The DevOpsCoin project takes security seriously.  
We encourage responsible disclosure of any vulnerabilities or concerns affecting our smart contracts, frontend DApp, or infrastructure.

---

## 🔒 Reporting a Vulnerability

If you believe you’ve discovered a security issue:

- **Do not open a public GitHub issue.**
- Instead, contact us directly via:
  - **Email:** [security@devopscoin.ai](mailto:security@devopscoin.ai)
  - **Disclosure form:** [https://devopscoin.ai/security](https://devopscoin.ai/security)

We’ll acknowledge receipt within **48 hours** and aim to provide a resolution timeline within **7 business days**.

---

## 🚫 What Not to Report

The following do **not** qualify as vulnerabilities:

- Missing or incorrect environment variables (e.g. `NEXT_PUBLIC_*`)
- UI or text/content issues
- Smart contract verification already published on **BscScan**
- Non-sensitive metadata visible in public API responses

---

## 🧰 Security Practices

DevOpsCoin follows strict operational security and transparency principles:

- **No private keys or secrets** are committed to any repository
- **Client-side only** blockchain interactions, unless a user explicitly signs a transaction
- All **contracts are verified** and publicly viewable on **BscScan**
- All main wallets (Treasury, Founder, Ship-It Fund, Reserve) are listed in documentation for transparency

---

## 🧩 Smart Contract Scope

This policy applies to:

- `DevOpsCoin.sol` and related vesting/lock contracts
- Any contracts deployed under the DevOpsCoin namespace on **BNB Smart Chain**
- Public infrastructure directly interacting with DevOpsCoin assets

---

**Thank you for helping keep DevOpsCoin and the Web3 ecosystem secure.**  
_Where pipelines meet protocols._
