# Founder Vesting Schedule

**Token Name:** DevOpsCoin  
**Symbol:** DEVOPS  
**Network:** Solana  
**Maintained by:** DevOpsCoin LLC  
**Last Updated:** October 2025 — Vesting Parameters + Transparency Alignment

---

## Overview

The **Founder Vesting Schedule** enforces long-term alignment between the project founder and the DevOpsCoin ecosystem.  
The founder allocation is **locked and released gradually** through an on-chain vesting program after deployment.

This structure prevents early liquidation and ensures the founder’s incentives remain tied to measurable ecosystem health and the sustainability of the **Ship-It Fund**.

---

## Vesting Parameters

| Parameter                  | Value                                       | Description                                             |
| -------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| **Total Allocation**       | 100,000,000 DEVOPS (10 % of total supply)   | Founder share                                           |
| **Cliff Period**           | 3 months                                    | No tokens released during the cliff period              |
| **Vesting Rate**           | 5 % per month (of total founder allocation) | Begins after cliff; continues for 20 months             |
| **Total Vesting Duration** | 23 months (3 + 20)                          | Complete distribution cycle                             |
| **Start Time**             | Token launch date                           | Vesting clock begins immediately at TGE                 |
| **Beneficiary**            | RootSignal (Founder)                        | Founder wallet; on-chain Solana address to be published |
| **Contract Status**        | Pending deployment                          | Solana program to be implemented post-launch            |

---

## Vesting Logic (planned implementation)

The Solana vesting program will release tokens in equal monthly portions after the cliff period.  
Tokens remain locked within the vesting account until claimed by the founder wallet.

_Pseudocode reference:_

```rust
// Simplified pseudocode for vesting release
fn claim(ctx: Context<Claim>) -> Result<()> {
    let current_time = Clock::get()?.unix_timestamp;
    require!(current_time >= start_time + cliff_duration, ErrorCode::CliffNotReached);

    let months_elapsed = ((current_time - (start_time + cliff_duration)) / SECONDS_PER_MONTH) as u8;
    let vested = (total_allocation * min(months_elapsed, 20) as u64 * 5) / 100;
    let claimable = vested.saturating_sub(claimed);
    require!(claimable > 0, ErrorCode::NothingToClaim);

    claimed += claimable;
    token::transfer(ctx.accounts.from, ctx.accounts.to, claimable)?;
    Ok(())
}
```

---

## Example Release Timeline

| Month | Event                      | % of Founder Allocation Released | Tokens Claimable (Cumulative) |
| ----- | -------------------------- | -------------------------------- | ----------------------------- |
| 0     | Launch / Deployment        | 0 %                              | 0                             |
| 1–3   | Cliff period               | 0 %                              | 0                             |
| 4     | Cliff ends; vesting begins | 5 %                              | 5 M DEVOPS                    |
| 5     | Month 2 of vesting         | 5 %                              | 10 M                          |
| 6     | Month 3 of vesting         | 5 %                              | 15 M                          |
| …     | …                          | 5 % each month                   | …                             |
| 23    | Final month of vesting     | 5 %                              | 100 M (total released)        |

---

## Verification & Transparency

Once deployed, the vesting contract and its parameters will be publicly verifiable through:

- **Solana explorer (Solscan)** — contract address, release events, and claim history
- **`/docs/ledger/VESTING_LOG.md`** — quarterly summaries of vesting and claim activity
- **Signed GitHub commits** documenting deployment, configuration, and verification

The contract source will be published under the **`/contracts`** repository upon deployment.

---

## Key Principles

- **Immutable:** Once deployed, parameters cannot be changed, paused, or revoked.
- **Transparent:** Code, address, and all transactions are publicly accessible.
- **Trustless:** Only the founder wallet can claim vested tokens — no admin privileges.
- **Aligned:** Vesting aligns founder rewards with long-term project integrity and delivery.

---

## Principle

DevOpsCoin funds **work, not hype.**  
The vesting contract makes that measurable — every month, every block.

---

**Maintainer:** RootSignal (DevOpsCoin LLC)  
**Last Updated:** October 2025 — Vesting Implementation Alignment
