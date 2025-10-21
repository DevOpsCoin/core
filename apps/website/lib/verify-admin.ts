// lib/verify-admin.ts
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { SiweMessage } from 'siwe';

export async function verifyAdminRequest(req: Request) {
  // 1. Verify NextAuth session (GitHub login)
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    return { authorized: false, reason: 'Invalid GitHub session' };
  }

  // 2. Verify SIWE signature in request
  try {
    const { message, signature } = await req.json();
    const siweMessage = new SiweMessage(message);
    const result = await siweMessage.verify({ signature });

    if (!result.success) throw new Error('Signature invalid');

    const address = siweMessage.address.toLowerCase();
    const adminWallet = process.env.ADMIN_WALLET?.toLowerCase();

    if (address !== adminWallet) {
      return { authorized: false, reason: 'Wallet mismatch' };
    }

    // ✅ Fully authorized
    return { authorized: true, address };
  } catch (err) {
    console.error('Admin verification failed:', err);
    return { authorized: false, reason: 'Malformed or invalid request' };
  }
}
