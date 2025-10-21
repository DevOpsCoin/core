export async function POST(request: Request) {
  try {
    const body = await request.text();

    const res = await fetch(
      'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      }
    );

    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const e = err as Error | undefined;
    return new Response(JSON.stringify({ error: e?.message ?? String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
