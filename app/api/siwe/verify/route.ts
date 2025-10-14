import { verifySiwe } from "@/lib/siwe-server";

export async function POST(req: Request) {
  return verifySiwe(req as any);
}

