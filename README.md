<p align="center">
  <img src="https://devopscoin.ai/banner.png" alt="DevOpsCoin Banner" width="100%" />
</p>

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Built%20with-Next.js-000?style=flat&logo=nextdotjs" alt="Built with Next.js">
  </a>
  <a href="https://bscscan.com/address/DISCLOSED_AT_LAUNCH">
    <img src="https://img.shields.io/badge/Chain-BNB%20Smart%20Chain-F3BA2F?logo=binance" alt="BNB Smart Chain">
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
This repo powers all public-facing components of the DevOpsCoin ecosystem — including token onboarding, vesting visibility, and open-source tooling integrations.

---

## 🌐 Overview

- Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **wagmi**
- Fully client-side wallet integrations (MetaMask / RainbowKit)
- Dynamic BSC Mainnet/Testnet detection
- PancakeSwap widget integration and token import helpers
- Investor Portal with on-chain vesting visibility and claim interface
- “Add Network” + “Add Token” one-click helpers for MetaMask users
- Environment-driven token/vesting contract configuration

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
| `NEXT_PUBLIC_TRADING_LIVE`             | Enables production buy/claim logic            |
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

We welcome open-source contributions that improve documentation, UI/UX, or developer tooling.

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/devopscoin-website.git
cd devopscoin-website
npm install

# Start the dev server
npm run dev
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 🧩 Transparency

This repo intentionally showcases how a decentralized project can operate openly and responsibly.  
All financial and on-chain activity related to the project is documented under [TRANSPARENCY.md](./TRANSPARENCY.md).

**Active Wallets:**

```
Founder (Vesting):  DISCLOSED_ON_LAUNCH
Treasury:           DISCLOSED_ON_LAUNCH
Community Wallet:   DISCLOSED_ON_LAUNCH
Ship-It Fund:       DISCLOSED_ON_LAUNCH
Support NFT:        CONTRIBUTION_LEDGER_ON_LAUNCH
```

> The Founder wallet follows a vesting schedule (3-month cliff, 20-month linear release).  
> The Support NFT provides a voluntary contribution path that funds the Ship-It Fund.

---

## 🧭 Governance

Governance is structured under **DevOpsCoin LLC**, built around automation and verifiable transparency.  
Key details and policies are outlined in [GOVERNANCE.md](./GOVERNANCE.md).

---

## 🔐 Security Policy

Please report vulnerabilities responsibly via  
[SECURITY.md →](./SECURITY.md)

---

## 🧾 Open Source Disclosure

This repository is published under the [MIT License](./LICENSE) to promote transparency and open DevOps collaboration.  
You are free to **fork, modify, and build upon** this codebase in accordance with the license terms.

However, please note:

- Only builds and deployments from the **official domain** [https://devopscoin.ai](https://devopscoin.ai)  
  and verified wallets listed above are recognized as **authentic DevOpsCoin**.
- Any clones, forks, or redeployments using different wallet addresses or branding **are not affiliated**  
  with DevOpsCoin LLC, RootSignal, or the Ship-It Fund initiative.
- Users should always **verify contract addresses on BscScan** before interacting with any derivative project.

This open-source release serves as a **reference implementation** and **educational resource**  
for DevOps engineers exploring blockchain automation — not an endorsement of third-party token launches.

---

## 🪙 License

This project is licensed under the [MIT License](./LICENSE).  
© 2025 DevOpsCoin LLC — _Where pipelines meet protocols._
