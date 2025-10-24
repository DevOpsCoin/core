// Simple deployment + initialize script for your founder vesting contract

const anchor = require('@coral-xyz/anchor');
const { SystemProgram } = anchor.web3;

module.exports = async function (provider) {
  anchor.setProvider(provider);
  const program = anchor.workspace.FounderVesting;

  const vesting = anchor.web3.Keypair.generate();

  // Replace with your actual total allocation in token smallest units (e.g. 100M * 10^9 for 9-decimals)
  const totalAmount = new anchor.BN(100000000000000000);

  // Start timestamp = now
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

  console.log('Founder vesting account created:', vesting.publicKey.toBase58());
};
