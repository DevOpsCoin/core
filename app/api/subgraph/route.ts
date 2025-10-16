import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.text()

    const res = await fetch(
      'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      }
    )

    const text = await res.text()
    return new Response(text, {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
