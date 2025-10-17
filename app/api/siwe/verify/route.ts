import { verifySiwe } from "@/lib/siwe-server"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  return verifySiwe(req)
}
