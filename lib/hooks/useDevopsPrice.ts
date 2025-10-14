// lib/hooks/useDevopsPrice.ts
import { useEffect, useState } from "react";
import { DEVOPS_TOKEN } from "@/lib/constants";

interface PriceResult {
  devopsUsd: number | null;
  lastUpdated: number | null;
  isLoading: boolean;
  error?: string;
}

export function useDevopsPrice(): PriceResult {
  const [price, setPrice] = useState<PriceResult>({
    devopsUsd: null,
    lastUpdated: null,
    isLoading: true,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchPrice() {
      setPrice((p) => ({ ...p, isLoading: true }));

      try {
        let devopsPriceInBNB: number | null = null;
        let devopsUsd: number | null = null;

        // --- Step 1: Try PancakeSwap subgraph
        try {
          const subgraphRes = await fetch(
            "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                query: `{
                  pairs(where: { token0: "${DEVOPS_TOKEN.address.toLowerCase()}" }) {
                    token0Price
                    token1Price
                  }
                }`,
              }),
            }
          );

          const subgraphData = await subgraphRes.json();
          const pair = subgraphData?.data?.pairs?.[0];
          if (pair?.token0Price) {
            devopsPriceInBNB = parseFloat(pair.token0Price);
          }
        } catch {
          console.warn("Subgraph unavailable — using fallback pricing.");
        }

        // --- Step 2: Always get BNB/USD
        const bnbRes = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
        );
        const bnbData = await bnbRes.json();
        const bnbUsd = bnbData?.binancecoin?.usd ?? 600; // fallback to 600 if API fails

        // --- Step 3: Calculate or fallback
        if (devopsPriceInBNB && bnbUsd) {
          devopsUsd = devopsPriceInBNB * bnbUsd;
        } else {
          const tokenPerBNB = 200000; // adjust once LP is live
          devopsUsd = bnbUsd / tokenPerBNB;
        }

        if (!cancelled) {
          setPrice({
            devopsUsd,
            lastUpdated: Date.now(),
            isLoading: false,
          });
        }
      } catch (err: any) {
        console.error("useDevopsPrice error:", err);
        if (!cancelled) {
          // Absolute last fallback
          setPrice({
            devopsUsd: 0.003, // ~$0.003 per DEVOPS as emergency baseline
            lastUpdated: Date.now(),
            isLoading: false,
            error: err.message,
          });
        }
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 5 * 60 * 1000); // refresh every 5 min
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return price;
}
