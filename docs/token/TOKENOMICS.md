# TOKENOMICS — DevOpsCoin ($DEVOPS)

**Network:** Solana  
**Symbol:** DEVOPS  
**Total Supply:** 1,000,000,000 DEVOPS  
**Decimals:** 9  
**Launch Path:** Pump.fun → Raydium → Jupiter  
**Creator Authority:** Revoked post-launch (no adjustable parameters)

_Last Updated: October 2025 — Ledger & Three-Wallet Integration_

---

## 1) Design Principles

- **No transaction taxes or reflections.** $DEVOPS imposes no embedded fees or hidden redirections.
- **Dedicated wallets with clear purpose.** Ship-It for grants, TreasuryOps for operations and liquidity, Founder under immutable vesting.
- **Transparency by default.** Every inflow and outflow is verifiable on-chain and mirrored in public ledgers.

---

## 2) Fixed Supply & Allocation

The total supply of **1,000,000,000 DEVOPS** is permanently fixed at deployment.

| Allocation                           | Percent | Amount (DEVOPS) | Purpose                                                                                        |
| ------------------------------------ | :-----: | --------------: | ---------------------------------------------------------------------------------------------- |
| **Founder Vesting**                  |   10%   |     100,000,000 | Long-term alignment — 3-month cliff + 20-month linear vesting                                  |
| **Ship-It Fund**                     |   5%    |      50,000,000 | Transparent grant treasury for open-source projects; never sells DEVOPS                        |
| **TreasuryOps (bootstrap DEVOPS)**   |   2%    |      20,000,000 | Operational buffer for liquidity support and market stability; paired with SOL creator inflows |
| **Public Supply (circulating + LP)** |   83%   |     830,000,000 | Distributed via Pump.fun launch curve and subsequent Raydium/Jupiter liquidity                 |

> The Ship-It Fund holds DEVOPS only and performs no market operations.  
> All liquidity and buyback activity occurs exclusively through **TreasuryOps**.

---

## 3) Wallet Model

- **Founder Vesting (10%)** — Trustless vesting with a 3-month cliff, releasing 5% monthly over 20 months.
- **Ship-It Fund (5%)** — DEVOPS grant treasury disbursing monthly awards when volume supports it; rolls forward otherwise.
- **TreasuryOps (2% DEVOPS + SOL inflows)** — Operates in SOL, managing liquidity, buybacks, and marketing; tops up Ship-It as required.

Detailed structure: [Wallet Structure](./WALLET_STRUCTURE.md)

---

## 4) Vesting Parameters (Founder)

| Parameter   | Value                  |
| ----------- | ---------------------- |
| Cliff       | 3 months               |
| Linear      | 20 months at ~5%/month |
| Network     | Solana                 |
| Beneficiary | RootSignal (Founder)   |

> Tokens unlock automatically via immutable contract logic and are claimable only by the founder’s wallet.

---

## 5) Creator Rewards — Funding Flow

DevOpsCoin’s sustainability relies on **creator rewards (SOL)** from Pump.fun activity — not inflation, not fees.

**Reward Flow:**

```text
Pump.fun Creator Rewards (SOL)
           │
           ▼
      TreasuryOps (SOL + 2% DEVOPS)
      ├─ Operations, liquidity, and buybacks
      ├─ Marketing and ecosystem support
      └─ Top-ups to Ship-It Fund (DEVOPS grants)
                │
                ▼
           Ship-It Fund (DEVOPS)
           ├─ Monthly open-source grants
           └─ Rolls forward when volume is low
```

**Allocation Policy:**

- Creator rewards are roughly **split 50/50** between TreasuryOps operations and DevOpsCoin LLC business functions.
- Variations of **±10%** are permitted for operational needs but must be documented in the transparency ledger before execution.
- No changes to total supply, vesting, or wallet allocations occur under this model.

See: [Treasury Refill Policy](./TREASURY_REFILL_POLICY.md)

---

## 6) Liquidity & Market Operations

- **Pump.fun** provides the initial distribution and launch curve.
- Liquidity transitions to **Raydium**, then routes through **Jupiter** for aggregation.
- TreasuryOps may add liquidity or perform buybacks based solely on transparent reserve data and ledger entries.

---

## 7) Transparency & Verification

All key wallet activity is publicly verifiable:

- **Ship-It Fund Ledger:** [`/shipit-fund/ledger/`](../../shipit-fund/ledger/)
- **Verification Script:** [`verify-ledger.sh`](../../shipit-fund/ledger/verify-ledger.sh)
- **Transparency Logs:** `/docs/ledger/TRANSPARENCY_LOG.md`
- **Governance Policy:** [Governance & Oversight](../operations/GOVERNANCE.md)
- **Ship-It Fund Docs:** [SHIPIT_FUND.md](./SHIPIT_FUND.md)

Each ledger record includes date, purpose, amount, wallet addresses, Solana transaction hash, and signature.  
No off-ledger or discretionary transfers.

---

## 8) Invariants and Controls

- **No embedded taxes.** DEVOPS transfers are clean at the protocol level.
- **No hidden wallets.** All addresses are declared and linked to purpose.
- **Fixed supply.** No minting, burning, or redistribution after deployment.
- **Operational discipline.** Ship-It Fund manages grants; TreasuryOps manages liquidity and operations.

---

## 9) Roadmap Alignment

| Phase                    | Description                           | Timing            |
| ------------------------ | ------------------------------------- | ----------------- |
| **Developer Onboarding** | Initial contributor engagement        | Mid-November 2025 |
| **Stealth Phase**        | Internal stabilization period         | December 2025     |
| **Public Launch**        | Open trading and transparency rollout | January 1 2026    |

These milestones affect **execution**, not tokenomics or allocation structure.

---

## Appendix — Quick Reference

| Metric              | Value              | Notes              |
| ------------------- | ------------------ | ------------------ |
| **5% Ship-It Fund** | 50,000,000 DEVOPS  | Grant treasury     |
| **10% Founder**     | 100,000,000 DEVOPS | Vesting allocation |
| **2% TreasuryOps**  | 20,000,000 DEVOPS  | Bootstrap reserve  |

---

## Principle

DevOpsCoin funds **work, not hype.**  
Every wallet, ledger, and transaction exists to prove it — not to promise it.
