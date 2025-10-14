import { NextResponse } from "next/server";
import { linkWalletTwitter } from "@/lib/db";
import { isAddressLike } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { wallet, twitter } = await req.json();
    if (!wallet || !twitter || !isAddressLike(wallet)) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }
    await linkWalletTwitter(wallet, twitter);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
