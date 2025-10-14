import { sql } from "@vercel/postgres";

export async function ensureTables() {
  await sql`CREATE TABLE IF NOT EXISTS wallet_links (
    wallet TEXT PRIMARY KEY,
    twitter TEXT,
    telegram TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  )`;
}

export async function linkWalletTwitter(wallet: string, handle: string) {
  await ensureTables();
  await sql`
    INSERT INTO wallet_links (wallet, twitter)
    VALUES (${wallet}, ${handle})
    ON CONFLICT (wallet) DO UPDATE SET twitter = ${handle}
  `;
}

export async function getTwitterForWallet(wallet: string) {
  await ensureTables();
  const r = await sql`SELECT twitter FROM wallet_links WHERE wallet = ${wallet}`;
  return r.rows[0]?.twitter || null;
}
