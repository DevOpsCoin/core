use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("DevopsVesting11111111111111111111111111111111");

#[program]
pub mod founder_vesting {
    use super::*;

    pub fn initialize(
        ctx: Context<Initialize>,
        total_amount: u64,
        start_time: i64,
    ) -> Result<()> {
        let vesting = &mut ctx.accounts.vesting;
        vesting.authority = *ctx.accounts.authority.key;
        vesting.total_amount = total_amount;
        vesting.start_time = start_time;
        vesting.cliff = start_time + (3 * 30 * 24 * 60 * 60); // 3 months
        vesting.duration = 20 * 30 * 24 * 60 * 60; // 20 months
        vesting.claimed = 0;
        Ok(())
    }

    pub fn claim(ctx: Context<Claim>) -> Result<()> {
        let vesting = &mut ctx.accounts.vesting;
        let clock = Clock::get()?;
        let now = clock.unix_timestamp;

        require!(now >= vesting.cliff, VestingError::CliffNotReached);

        let seconds_per_month = 30 * 24 * 60 * 60;
        let elapsed_seconds = now - vesting.start_time;
        let elapsed_months = ((elapsed_seconds as f64) / (seconds_per_month as f64)).floor() as u64;

        // 3-month cliff, then 5% monthly for 20 months
        let vested_months = elapsed_months.saturating_sub(3).min(20);
        let vested_percent = vested_months as f64 * 0.05;
        let total_vested = (vesting.total_amount as f64 * vested_percent).floor() as u64;

        let claimable = total_vested.saturating_sub(vesting.claimed);
        require!(claimable > 0, VestingError::NothingToClaim);

        let cpi_accounts = Transfer {
            from: ctx.accounts.vault_token_account.to_account_info(),
            to: ctx.accounts.recipient_token_account.to_account_info(),
            authority: ctx.accounts.vault_authority.clone(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, claimable)?;

        vesting.claimed += claimable;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = authority, space = 8 + 80)]
    pub vesting: Account<'info, VestingAccount>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Claim<'info> {
    #[account(mut, has_one = authority)]
    pub vesting: Account<'info, VestingAccount>,
    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub recipient_token_account: Account<'info, TokenAccount>,
    /// CHECK: validated via seeds
    pub vault_authority: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct VestingAccount {
    pub authority: Pubkey,
    pub total_amount: u64,
    pub start_time: i64,
    pub cliff: i64,
    pub duration: i64,
    pub claimed: u64,
}

#[error_code]
pub enum VestingError {
    #[msg("Cliff not reached yet.")]
    CliffNotReached,
    #[msg("No claimable tokens at this time.")]
    NothingToClaim,
}

# ---------------------------
# migrations/deploy.js
# ---------------------------
const anchor = require("@coral-xyz/anchor");
const { SystemProgram } = anchor.web3;

module.exports = async function (provider) {
  anchor.setProvider(provider);
  const program = anchor.workspace.FounderVesting;

  const vesting = anchor.web3.Keypair.generate();
  const totalAmount = new anchor.BN(1000000000000); // Example amount (adjust)
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

  console.log("Founder vesting initialized:", vesting.publicKey.toBase58());
};
