# Founder Vesting Schedule

**Token Name:** DevOpsCoin  
**Symbol:** DEVOPS  
**Network:** Solana  
**Maintained by:** DevOpsCoin LLC  
**Updated:** October 2025

---

## Overview

The **Founder Vesting Schedule** guarantees long-term alignment between the project founder and the DevOpsCoin community.  
The founder allocation is **locked and released gradually** according to a transparent, on-chain vesting program once deployed.

The vesting model prevents premature sell-pressure and ensures the founder’s incentives remain tied directly to the token’s growth and the success of the **Ship-It Fund**.

---

## Vesting Parameters

| Parameter                  | Value                                       | Description                                             |
| -------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| **Total Allocation**       | 100,000,000 DEVOPS (10 % of total supply)   | Founder share                                           |
| **Cliff Period**           | 3 months                                    | No tokens are released during the cliff period          |
| **Vesting Rate**           | 5 % per month (of total founder allocation) | Begins after the cliff, continues for 20 months         |
| **Total Vesting Duration** | 23 months (3 + 20)                          | Complete distribution cycle                             |
| **Start Time**             | Token launch date                           | Vesting clock starts immediately at TGE                 |
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

## Key Principles

- **Immutable:** Once deployed, no parameters can be changed, paused, or revoked.
- **Transparent:** Vesting contract code and deployment address will be published publicly.
- **Trustless:** Only the founder wallet may claim vested tokens; no admin control exists.
- **Aligned:** Vesting ensures the founder’s incentives are tied to long-term community growth and token health.
