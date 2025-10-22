# DevOpsCoin Contracts (Solana Migration — Work in Progress)

This directory previously contained the **BNB Smart Chain** Solidity contracts and Hardhat deployment scripts for $DEVOPS.  
As of **October 2025**, the project has **migrated to Solana**, and all Ethereum-compatible scripts are archived for transparency.

---

## 📦 Current Status

- BNB-based contracts (`.sol`, `deploy_*.js`, etc.) are **deprecated** and retained only for historical reference.  
- The project is transitioning to **Solana** using **Anchor** as the on-chain framework.  
- New Solana programs will replicate and improve upon prior functionality:

  - **SPL Token Contract** for `$DEVOPS` (immutable, fixed-supply token)  
  - **Ship-It Fund Program** for transparent on-chain grant management  
  - **TreasuryOps Program** for SOL-based operational logic (buybacks, liquidity, top-ups)  
  - **Founder Vesting Program** implementing linear vesting logic on Solana  
  - _(Optional)_ NFT program for future “Ship-It Badges”  

---

## 🧱 Next Steps

1. **Initialize the new Anchor workspace**

   ```bash
   anchor init devopscoin --javascript
   ```

2. **Implement programs incrementally**

   - **Token Mint Management** → SPL deployment + metadata  
   - **Ship-It Fund Logic** → grant creation, approval, and distribution  
   - **TreasuryOps Logic** → SOL inflow tracking, Ship-It top-ups, and buybacks  
   - **Vesting Program** → enforce 3-month cliff + 20-month linear release  
   - **Transparency Hooks** → write disbursement events to an on-chain ledger for explorer integration  

3. **Integrate with the website**

   Link on-chain data (fund balances, grant transactions, vesting events) to  
   [`devopscoin.ai`](https://devopscoin.ai) for public visibility.

---

## 🗃️ Archived Artifacts

- `scripts/` – Hardhat deploy and verification scripts  
- `contracts/` – Solidity sources (`DevOpsCoinV2.sol`, `FounderVesting.sol`, etc.)  
- `deployments/` – JSON deployment logs (testnet / mainnet)  
- `docs/` – Reference material retained for transparency  

You can safely move this entire directory into a `/legacy/` folder to keep the Solana tree clean while preserving history.

---

## 🧭 Future Solana Structure (Planned)

```
contracts/
 ├── Anchor.toml
 ├── programs/
 │   ├── devopscoin_token/
 │   │   └── src/lib.rs
 │   ├── shipit_fund/
 │   │   └── src/lib.rs
 │   ├── treasury_ops/
 │   │   └── src/lib.rs
 │   └── founder_vesting/
 │       └── src/lib.rs
 ├── migrations/
 ├── app/                # JavaScript / TypeScript client bindings
 └── tests/
```

---

## ⚙️ Implementation Notes

- The Solana version uses **Anchor CLI** (`anchor build`, `anchor deploy`) — Hardhat and EVM tooling are retired.  
- The **three-wallet model** defines clear separation of roles:

  | Wallet / Program        | Purpose                                                |
  | ------------------------ | ------------------------------------------------------ |
  | **Founder Vesting**      | Enforces long-term founder alignment (10 %)           |
  | **Ship-It Fund**         | DEVOPS-based grants for open-source projects and builders |
  | **TreasuryOps (SOL)**    | SOL inflows from Pump.fun; handles ops & top-ups      |

- All program events will emit standardized logs for ingestion by off-chain indexers and the transparency dashboard.  
- Legacy Solidity and Hardhat instructions are no longer valid beyond archival reference.

---

_Last updated: October 2025 — Three-Wallet Model Alignment_
