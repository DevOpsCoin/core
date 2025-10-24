// scripts/test_claim.js
//
// Simulate vesting progression for the DevOpsCoin Founder Vesting Program
// to verify cliff enforcement and 5% monthly unlock logic.
//
// Usage:
//   1. Update placeholder public keys below with your actual accounts.
//   2. Run inside the container:  node scripts/test_claim.js
//
// Requires: Anchor, @coral-xyz/anchor, Solana CLI wallet set in ANCHOR_WALLET.

const anchor = require('@coral-xyz/anchor');

async function main() {
  // Configure provider and workspace
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);
  const program = anchor.workspace.FounderVesting;

  // Replace with your actual account public keys
  const vestingPubkey = new anchor.web3.PublicKey('<YOUR_VESTING_ACCOUNT>');
  const vaultTokenAccount = new anchor.web3.PublicKey('<VAULT_TOKEN_ACCOUNT>');
  const recipientTokenAccount = new anchor.web3.PublicKey(
    '<RECIPIENT_TOKEN_ACCOUNT>'
  );
  const vaultAuthority = new anchor.web3.PublicKey('<VAULT_AUTHORITY>');

  console.log('========================================================');
  console.log('DevOpsCoin Founder Vesting Simulation');
  console.log('========================================================');
  console.log(`Program ID: ${program.programId.toBase58()}`);
  console.log(`Vesting Account: ${vestingPubkey.toBase58()}`);
  console.log('Simulating 24 months of vesting progression...\n');

  for (let month = 1; month <= 24; month++) {
    console.log(`--- Month ${month} ---`);

    try {
      const tx = await program.methods
        .claim()
        .accounts({
          vesting: vestingPubkey,
          vaultTokenAccount,
          recipientTokenAccount,
          vaultAuthority,
          tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log(`✅ Claim succeeded for month ${month}`);
      console.log(`   Transaction: ${tx}`);
    } catch (err) {
      const reason = err.error?.errorMessage || err.message;
      console.log(
        `❌ Claim failed (likely before cliff or fully vested): ${reason}`
      );
    }

    // Optional delay to simulate passage of time between claims
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log('\nSimulation complete.');
  console.log('Check your token account balances to verify claim amounts.');
}

main().catch((err) => {
  console.error('Error running vesting test:', err);
  process.exit(1);
});
