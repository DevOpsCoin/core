# DevOpsCoin Contracts — Solana Migration (Work in Progress)

This directory previously contained the **BNB Smart Chain** Solidity contracts and Hardhat deployment scripts for **$DEVOPS**.  
As of **October 2025**, the project has migrated to **Solana**, and all EVM-compatible sources are retained only for historical transparency.

---

## Current Status

- All **BNB-based contracts** (`.sol`, `deploy_*.js`, etc.) are deprecated and archived.
- Migration to **Solana** is underway using **Anchor** as the framework.
- The new program suite replicates and improves on prior functionality:
  - **SPL Token Program** — immutable, fixed-supply `$DEVOPS` token
  - **Ship-It Fund Program** — on-chain grant treasury with transparent disbursements
  - **TreasuryOps Program** — SOL-based operational logic (buybacks, liquidity, top-ups)
  - **Founder Vesting Program** — linear vesting logic enforcing cliff and release periods
  - _(Optional)_ **NFT Program** — future “Ship-It Badge” minting for contributors

---

## Next Steps

1. **Initialize the Anchor workspace**

   ```bash
   anchor init devopscoin --javascript
   ```

2. **Implement programs incrementally**
   - **Token Mint Management** → SPL deployment and metadata
   - **Ship-It Fund Logic** → grant creation, approval, distribution
   - **TreasuryOps Logic** → SOL inflow tracking, Ship-It top-ups, and buybacks
   - **Vesting Program** → 3-month cliff + 20-month linear release
   - **Transparency Hooks** → on-chain event logging for explorer integration

3. **Integrate with the website**
   - Expose on-chain data (fund balances, grants, vesting events) to  
     [`devopscoin.ai`](https://devopscoin.ai) for public verification.

---

## Archived Artifacts

| Directory      | Purpose                                                           |
| -------------- | ----------------------------------------------------------------- |
| `scripts/`     | Hardhat deployment and verification scripts                       |
| `contracts/`   | Solidity sources (`DevOpsCoinV2.sol`, `FounderVesting.sol`, etc.) |
| `deployments/` | JSON deployment logs (testnet / mainnet)                          |
| `docs/`        | Reference material preserved for transparency                     |

All legacy artifacts should be moved into a `/legacy/` folder to maintain a clean Solana workspace while preserving historical context.

---

## Planned Solana Structure

```text
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

## Implementation Notes

- Uses **Anchor CLI** (`anchor build`, `anchor deploy`).  
  Hardhat and other EVM tooling are retired.
- The **three-wallet model** remains intact:

  | Wallet / Program      | Purpose                                      |
  | --------------------- | -------------------------------------------- |
  | **Founder Vesting**   | Enforces long-term founder alignment (10%)   |
  | **Ship-It Fund**      | DEVOPS-based open-source grants for builders |
  | **TreasuryOps (SOL)** | Manages SOL inflows, operations, and top-ups |

- All Solana programs emit structured events for off-chain indexing and transparency dashboards.
- Legacy Solidity and Hardhat assets are no longer valid for deployment beyond archival reference.

---

_Last Updated: October 2025 — Solana Migration Alignment_
