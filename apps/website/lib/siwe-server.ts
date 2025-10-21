// lib/siwe-server.ts
import { SiweMessage } from 'siwe';
import { NextRequest, NextResponse } from 'next/server';

export async function verifySiwe(req: NextRequest) {
  try {
    const { message, signature } = await req.json();
    const siweMessage = new SiweMessage(message);
    const fields = await siweMessage.verify({ signature });

    if (!fields.success) throw new Error('Invalid signature');

    return NextResponse.json({
      success: true,
      address: siweMessage.address,
    });
  } catch (error) {
    console.error('SIWE verification failed:', error);
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }
}
