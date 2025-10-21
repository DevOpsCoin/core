import { NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/verify-admin';

export async function POST(req: Request) {
  const result = await verifyAdminRequest(req);
  if (!result.authorized) {
    return NextResponse.json(
      { success: false, error: result.reason },
      { status: 401 }
    );
  }

  // ✅ Authorized — perform sensitive action
  // Example: Log, trigger payout, or modify metadata
  console.log(`Admin action authorized for wallet: ${result.address}`);

  // TODO: add your logic here
  return NextResponse.json({
    success: true,
    message: 'Secure admin action executed.',
    address: result.address,
  });
}
