# Founder Vesting Contract

This directory contains the **Founder Vesting Program** for **DevOpsCoin ($DEVOPS)** on **Solana**, implemented using **Anchor** and **Rust**.  
It governs the founder token vesting schedule with a **3-month cliff** and **5% monthly vesting** for **20 months** (100% total).

---

## Overview

- **Language:** Rust  
- **Framework:** Anchor  
- **Network:** Solana (devnet / mainnet-beta)  
- **Schedule:** 3-month cliff → 5% per month → 20 months total  
- **Authority:** Founder wallet (`id.json`)  
- **Vault:** Token account holding total vested tokens  
- **Claim:** Founder calls `claim()` to release vested tokens over time  

---

## 1. Environment Setup (Docker)

The included `Dockerfile` provides a reproducible Anchor + Solana CLI toolchain.

### Build the container
```bash
make build
```

### Open an interactive devnet shell
```bash
make shell-devnet
```

---

## 2. Wallet Setup

Anchor and Solana use a local keypair JSON file (`id.json`) for signing transactions.

### Generate a new wallet
```bash
solana-keygen new --outfile ./id.json
```

Output example:
```
Wrote new keypair to id.json
pubkey: 9wZrbG8LC8jChb8BrCxLArFfKq8R5jAbvA7K7uMvb5Wk
```

The file contains a JSON array of 64 integers representing the keypair:
```json
[58,12,97,221,204,137,41,74,107,115,143,68,17,202, ... ,99,144,222,33]
```

### Check and fund your wallet (devnet)
```bash
solana address -k ./id.json
solana airdrop 2 -k ./id.json
solana balance -k ./id.json
```

---

## 3. Build & Deploy to Devnet

```bash
make deploy-devnet
```

After deployment:
- Note your **Program ID**.
- Update it in both `Anchor.toml` and `src/lib.rs` (`declare_id!()` macro).

Confirm deployment:
```bash
solana program show <PROGRAM_ID>
```

---

## 4. Initialize Vesting Account

Initialization runs your `migrations/deploy.js` script to create the on-chain vesting schedule.

```bash
make init-devnet
```

This sets:
- `start_time = now`
- `cliff = +3 months`
- `duration = 20 months`
- `total_amount` (configured in the script)

Example snippet (`migrations/deploy.js`):

```js
const anchor = require("@coral-xyz/anchor");
const { SystemProgram } = anchor.web3;

module.exports = async function (provider) {
  anchor.setProvider(provider);
  const program = anchor.workspace.FounderVesting;
  const vesting = anchor.web3.Keypair.generate();
  const totalAmount = new anchor.BN(100000000000000000);
  const startTime = Math.floor(Date.now() / 1000);

  await program.methods
    .initialize(totalAmount, new anchor.BN(startTime))
    .accounts({
      vesting: vesting.publicKey,
      authority: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .signers([vesting])
    .rpc();

  console.log("Founder vesting account:", vesting.publicKey.toBase58());
};
```

---

## 5. Claiming Vested Tokens

Once the 3-month cliff has passed, the founder wallet can claim unlocked tokens.

### Devnet
```bash
make claim-devnet
```

### Mainnet
```bash
make claim-mainnet
```

Each call automatically calculates vested percentage and releases any newly unlocked tokens.

---

## 6. Local Testing (Optional)

Start a local validator:
```bash
make localnet
```

Then:
```bash
anchor build
anchor deploy
anchor run deploy
```

Switch provider in `Anchor.toml` to:
```toml
[provider]
cluster = "localnet"
wallet = "/app/id.json"
```

---

## 7. Switching to Mainnet

For production deployment:
```bash
make deploy-mainnet
make init-mainnet
```

Confirm:
```bash
solana program show <PROGRAM_ID>
```

---

## 8. Claim Testing Script

Simulate vesting and claim behavior on devnet using:

```bash
make claim-test
```

### `scripts/test_claim.js`
```js
const anchor = require("@coral-xyz/anchor");

async function main() {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);
  const program = anchor.workspace.FounderVesting;

  const vestingPubkey = new anchor.web3.PublicKey("<YOUR_VESTING_ACCOUNT>");
  const vaultTokenAccount = new anchor.web3.PublicKey("<VAULT_TOKEN_ACCOUNT>");
  const recipientTokenAccount = new anchor.web3.PublicKey("<RECIPIENT_TOKEN_ACCOUNT>");
  const vaultAuthority = new anchor.web3.PublicKey("<VAULT_AUTHORITY>");

  console.log("Simulating vesting month-by-month...");

  for (let month = 1; month <= 24; month++) {
    console.log(`--- Month ${month} ---`);
    try {
      const tx = await program.methods.claim().accounts({
        vesting: vestingPubkey,
        vaultTokenAccount,
        recipientTokenAccount,
        vaultAuthority,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      }).rpc();
      console.log(`✅ Claim succeeded: ${tx}`);
    } catch (err) {
      console.log(`❌ Claim failed:`, err.error?.errorMessage || err.message);
    }
    await new Promise(r => setTimeout(r, 1000));
  }
}
main().catch(console.error);
```

Expected results:
- Months 1–3 → claim fails (`CliffNotReached`)
- Month 4+ → 5% vest per month
- Month 23 → 100% vested

---

## 9. Makefile Commands

The included `Makefile` automates all operations.

| Command | Description |
|----------|--------------|
| `make build` | Build Docker container |
| `make shell-devnet` | Open interactive devnet shell |
| `make deploy-devnet` | Build and deploy to devnet |
| `make init-devnet` | Initialize founder vesting account |
| `make claim-devnet` | Claim vested tokens on devnet |
| `make claim-test` | Run vesting claim simulation |
| `make deploy-mainnet` | Build and deploy to mainnet |
| `make init-mainnet` | Initialize on mainnet |
| `make claim-mainnet` | Claim on mainnet |
| `make clean` | Clean Docker cache |
| `make localnet` | Run local validator |

Example usage:
```bash
make build
make deploy-devnet
make init-devnet
make claim-test
```

---

## 10. Directory Layout

```
contracts/founder-vesting/
├── Dockerfile
├── Makefile
├── Anchor.toml
├── Cargo.toml
├── migrations/
│   └── deploy.js
├── programs/
│   └── founder_vesting/
│       ├── Cargo.toml
│       └── src/lib.rs
├── scripts/
│   └── test_claim.js
└── README.md
```

---

## 11. Troubleshooting

**Wallet not found:**  
Ensure `id.json` is mounted in `/app` and matches `ANCHOR_WALLET`.

**Not enough SOL:**  
Fund wallet with `solana airdrop 2` (devnet) or transfer SOL (mainnet).

**Program ID mismatch:**  
Update both `Anchor.toml` and `src/lib.rs` (`declare_id!()`).

**RPC rate limits:**  
Use a dedicated mainnet RPC like Helius, Triton, or QuickNode.

---

## 12. Resources

- [Solana Docs](https://docs.solana.com/)
- [Anchor Book](https://book.anchor-lang.com/)
- [DevOpsCoin Tokenomics](../../TOKENOMICS.md)

---

**Version:** v0.1.0  
**Author:** RootSignal / DevOpsCoin LLC  
**Program ID (example):** `DevopsVesting11111111111111111111111111111111`

