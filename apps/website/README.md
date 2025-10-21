<p align="center">
  <img src="https://devopscoin.ai/banner.png" alt="DevOpsCoin Banner" width="100%" />
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Built%20with-Next.js-000?style=flat&logo=nextdotjs" alt="Built with Next.js">
  </a>
  <a href="https://solscan.io/token/DISCLOSED_AT_LAUNCH">
    <img src="https://img.shields.io/badge/Chain-Solana-9945FF?logo=solana" alt="Solana">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License: MIT">
  </a>
  <a href="https://github.com/devopscoin-llc/devopscoin-website">
    <img src="https://img.shields.io/badge/Open-Source-blue.svg" alt="Open Source">
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel" alt="Deployed on Vercel">
  </a>
  <a href="./SECURITY.md">
    <img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-orange.svg" alt="Security Policy">
  </a>
</p>

---

<p align="center">
  <strong>Where Pipelines Meet Protocols</strong>
  <br />
  Transparent DevOps culture meets decentralized innovation.
</p>

---

# DevOpsCoin Website

The official **DevOpsCoin website and investor portal**, designed to showcase how automation, DevOps culture, and blockchain transparency can coexist.  
This repo powers all public-facing components of the DevOpsCoin ecosystem — including token onboarding, vesting visibility, and Ship-It Fund integrations.

---

## 🌐 Overview

- Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **wagmi**
- Fully client-side wallet integrations (MetaMask / RainbowKit)
- Dynamic BSC Mainnet / Testnet detection
- PancakeSwap widget integration and token import helpers
- Investor Portal with on-chain vesting visibility and claim interface
- “Add Network” + “Add Token” one-click helpers for MetaMask users
- Environment-driven token / vesting contract configuration

---

## 🚀 Quick Start

```bash
git clone https://github.com/devopscoin-llc/devopscoin-website.git
cd devopscoin-website
npm install
cp .env.example .env.local
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Environment Variables

| Variable                               | Description                                   |
| -------------------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_TRADING_LIVE`             | Enables production buy / claim logic          |
| `NEXT_PUBLIC_DEVOPS_TOKEN_MAINNET`     | BSC mainnet token address                     |
| `NEXT_PUBLIC_DEVOPS_TOKEN_TESTNET`     | BSC testnet token address                     |
| `NEXT_PUBLIC_VESTING_CONTRACT_MAINNET` | Vesting contract (mainnet)                    |
| `NEXT_PUBLIC_VESTING_CONTRACT_TESTNET` | Vesting contract (testnet)                    |
| `NEXT_PUBLIC_API_BASE`                 | Optional API endpoint for pricing / analytics |

Example configuration can be found in [`/.env.example`](./.env.example).

---

## 🔗 Smart Contracts

All contracts are verified and public on BscScan:

| Network     | Contract              | Explorer                                                                   |
| ----------- | --------------------- | -------------------------------------------------------------------------- |
| **Mainnet** | `DISCLOSED_ON_LAUNCH` | [BscScan](https://bscscan.com/address/DISCLOSED_ON_LAUNCH)                 |
| **Testnet** | `DISCLOSED_ON_LAUNCH` | [BscScan Testnet](https://testnet.bscscan.com/address/DISCLOSED_ON_LAUNCH) |

---

## 🤝 Contributing

We welcome open-source contributions that improve documentation, UI / UX, or developer tooling.

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/devopscoin-website.git
cd devopscoin-website
npm install
npm run dev
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 🧩 Transparency

This repo intentionally showcases how a decentralized project can operate openly and responsibly.  
All fund and on-chain activity related to $DEVOPS is tracked through the **Ship-It Fund** and **Founder Vesting** contracts.

**Active Wallets**

```
Founder (Vesting):  DISCLOSED_ON_LAUNCH
Ship-It Fund:        DISCLOSED_ON_LAUNCH
```

> The Founder wallet follows a 3-month cliff and 5% monthly vesting over 20 months.  
> The Ship-It Fund is a dual-purpose pool supporting open-source DevOps projects and token health operations.

Full transparency and governance details are in [GOVERNANCE.md](./GOVERNANCE.md).

---

## 🔐 Security Policy

Please report vulnerabilities responsibly via  
[SECURITY.md →](./SECURITY.md)

---

## 🧾 Open Source Disclosure

This project is licensed under the [MIT License](./LICENSE) to promote transparency and open DevOps collaboration.  
You are free to **fork, modify, and build upon** this codebase under those terms.

However:

- Only builds and deployments from [https://devopscoin.ai](https://devopscoin.ai) and verified wallets above are **authentic DevOpsCoin**.
- Forks or redeployments using different wallets / branding are **not affiliated** with DevOpsCoin LLC or RootSignal.
- Always verify contract addresses on BscScan before interacting with any derivative project.

This repo serves as a **reference implementation** for transparency and blockchain-driven DevOps automation.

---

## 🐳 Docker (Development with Postgres)

A Docker Compose setup is included for local Next.js + Postgres development.

Files included:

- `Dockerfile` — multi-stage build (builder + runner targets)
- `docker-compose.yml` — runs `web` (Next) and `db` (Postgres)
- `.env.docker.example` — example environment variables for Compose

### Quick Start

```bash
cp .env.docker.example .env.docker
docker compose up --build
```

Visit [http://localhost:3000](http://localhost:3000)

Notes:

- The `web` service mounts the project directory for live reload.
- The `db` service exposes PostgreSQL on port 5432.
- Set `DATABASE_URL` in `.env.docker` to `db:5432`.

---

## 🪙 License

MIT License © 2025 DevOpsCoin LLC  
_Where pipelines meet protocols._
