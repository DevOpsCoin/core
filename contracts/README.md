# DevOpsCoin Smart Contracts

This directory contains all on-chain code for **DevOpsCoin ($DEVOPS)**.  
At present, it includes a single deployed Solana program: the **Founder Vesting Contract**, which governs the release of founder-allocated tokens over time.

---

## Overview

- **Blockchain:** Solana  
- **Framework:** Anchor (Rust)  
- **Contract:** `founder-vesting`  
- **Purpose:** Enforce a 3-month cliff followed by 5% monthly vesting over 20 months  
- **Deployment:** Fully containerized (Docker + Makefile workflow)

---

## Structure

```
contracts/
├── README.md
└── founder-vesting/
    ├── README.md
    ├── Makefile
    ├── Dockerfile
    ├── Anchor.toml
    ├── Cargo.toml
    ├── migrations/
    ├── programs/
    └── scripts/
```

The `founder-vesting` folder is a complete, standalone Anchor project with its own build and deployment process.

---

## Quick Usage

From this directory:

```bash
cd founder-vesting
make build
make deploy-devnet
make init-devnet
make claim-test
```

All build, deploy, and test commands are executed through the Makefile inside `founder-vesting/`, which wraps the Docker environment and Anchor CLI.

---

## Environment Requirements

- **Docker** (latest stable)
- **Solana CLI** (optional; only needed outside Docker)
- **Wallet keypair:** `id.json` generated with `solana-keygen new`
- **Anchor** knowledge (for development or customization)

No Rust or Anchor toolchain is required locally—everything runs inside the container.

---

## Deployment Summary

| Network | Command | Notes |
|----------|----------|-------|
| Devnet | `make deploy-devnet` | Builds and deploys to Solana devnet |
| Mainnet | `make deploy-mainnet` | Builds and deploys to mainnet-beta |
| Initialize | `make init-devnet` or `make init-mainnet` | Creates vesting schedule on-chain |
| Claim | `make claim-devnet` or `make claim-mainnet` | Founder claims vested tokens |

---

## Documentation

Detailed build, wallet, and testing instructions are inside:

```
contracts/founder-vesting/README.md
```

That document explains:
- How to generate and fund a wallet  
- How to initialize vesting  
- How to simulate vesting claims  
- How to deploy and verify on mainnet  

---

## Version & Maintenance

- **Current Contract:** Founder Vesting v0.1.0  
- **Maintainer:** RootSignal / DevOpsCoin LLC  
- **Repository:** [DevOpsCoin/core](https://github.com/DevOpsCoin/core)

---

**Summary:**  
This folder contains the complete, reproducible Anchor-based build system for DevOpsCoin’s founder vesting schedule.  
All other blockchain extensions—reserve locks, ship-it funding, or treasury modules—will be added here only if the project expands beyond this initial contract.

