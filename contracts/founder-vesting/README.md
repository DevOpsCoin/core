# DevOpsCoin Smart Contracts

This directory contains the on-chain programs for **DevOpsCoin ($DEVOPS)**.  
It currently includes one deployed Solana program: the **Founder Vesting Contract**, which governs the gradual release of founder-allocated tokens.

---

## Overview

- **Blockchain:** Solana
- **Framework:** Anchor (Rust)
- **Contract:** `founder-vesting`
- **Purpose:** Enforces a 3-month cliff followed by 5% monthly vesting for 20 months
- **Deployment:** Containerized via Docker and Makefile workflow

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

The `founder-vesting` directory is a self-contained Anchor project with its own build and deployment process.

---

## Quick Usage

```bash
cd founder-vesting
make build
make deploy-devnet
make init-devnet
make claim-test
```

All commands are executed through the Makefile, which wraps the Docker environment and Anchor CLI for reproducible builds.

---

## Environment Requirements

- **Docker** (latest stable)
- **Solana CLI** (optional; used outside the container)
- **Wallet keypair:** `id.json` generated via `solana-keygen new`
- **Anchor** familiarity recommended for contributors

Rust and Anchor are not required locally — builds run inside the containerized environment.

---

## Deployment Summary

| Network     | Command                                     | Description                       |
| ----------- | ------------------------------------------- | --------------------------------- |
| **Devnet**  | `make deploy-devnet`                        | Build and deploy to Solana devnet |
| **Mainnet** | `make deploy-mainnet`                       | Build and deploy to mainnet-beta  |
| **Init**    | `make init-devnet` or `make init-mainnet`   | Create vesting schedule on-chain  |
| **Claim**   | `make claim-devnet` or `make claim-mainnet` | Claim vested tokens from contract |

---

## Documentation

See `contracts/founder-vesting/README.md` for detailed instructions, including:

- Wallet generation and funding
- Initialization and testing of vesting schedules
- Simulation of vesting claims
- Mainnet deployment and verification steps

---

## Version & Maintenance

| Component       | Version | Maintainer                  | Repository                                            |
| --------------- | ------- | --------------------------- | ----------------------------------------------------- |
| Founder Vesting | v0.1.0  | RootSignal / DevOpsCoin LLC | [DevOpsCoin/core](https://github.com/DevOpsCoin/core) |

---

## Future Additions

Any future on-chain modules — such as reserve locks, Ship-It funding logic, or TreasuryOps automation — will follow the same **reproducible and auditable Anchor-based structure**.  
All programs will remain open source and verified through this repository.

---

## Principle

Smart contracts are infrastructure, not marketing.  
Each module exists to enforce transparency and alignment — not speculation.  
**Fund reality — not hype.**

---
