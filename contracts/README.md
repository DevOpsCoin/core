# DevOpsCoin Contracts (Solana Migration — Work in Progress)

This directory previously contained the **BNB Smart Chain** Solidity contracts and Hardhat deployment scripts for $DEVOPS.  
As of **October 2025**, the project has **migrated to Solana**, and all Ethereum-compatible scripts have been archived.

---

## 📦 Current Status

- BNB-based contracts (`.sol`, `deploy_*.js`, etc.) are **deprecated** and retained only for historical reference.
- The project is moving to **Solana** with **Anchor** as the framework of record.
- New programs will replace previous Solidity functionality:
  - SPL token contract for `$DEVOPS`
  - Dual-purpose **Ship-It Fund** program (funding open-source + liquidity operations)
  - Optional NFT module for future Ship-It Badges
- **Founder vesting** and **contributor vesting** are postponed until the Solana token is stable.

---

## 🧱 Next Steps

1. **Initialize the new Anchor workspace** (once Rust + Solana toolchains are stable):

   ```bash
   anchor init devopscoin --javascript
   ```

2. Implement program logic incrementally:
   - Token mint management (SPL)
   - Ship-It Fund treasury logic
   - Grant payouts and on-chain transparency tracking
3. Link on-chain data to the `devopscoin.ai` website for transparency and explorer visibility.

---

## 🗃️ Archived Artifacts

- `scripts/` – Hardhat deploy and verification scripts  
- `contracts/` – Solidity sources (`DevOpsCoinV2.sol`, `FounderVesting.sol`, etc.)  
- `deployments/` – JSON deployment logs (testnet/mainnet)  
- `docs/` – Reference documents retained for transparency  

You can safely archive this entire directory (`contracts/`) into a `/legacy/` folder if you want to keep the history clean.

---

## 🧭 Future Solana Structure (Planned)

```
contracts/
 ├── Anchor.toml
 ├── programs/
 │   └── devopscoin/
 │       ├── src/lib.rs
 │       ├── Cargo.toml
 │       └── target/deploy/
 ├── migrations/
 ├── app/ (for client JS bindings)
 └── tests/
```

---

## ⚙️ Notes

- The Solana version will **not** use BNB or Hardhat — only `anchor build` / `anchor deploy`.  
- The **Ship-It Fund** will serve both as:
  - A **community grant wallet** for open-source DevOps projects.
  - A **stabilization fund** for buybacks, liquidity, and ecosystem health.
- Legacy Solidity and Hardhat instructions are no longer valid.

---

_Last updated: October 2025_
