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
        // --- Step 1: Try PancakeSwap subgraph (replace with your pair address when live)
        const subgraphQuery = `
          {
            pairs(where: { token0: "${DEVOPS_TOKEN.address.toLowerCase()}" }) {
              token0Price
              token1Price
            }
          }`;

        const subgraphRes = await fetch(
          "https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: subgraphQuery }),
          }
        );

        const subgraphData = await subgraphRes.json();
        const pair = subgraphData?.data?.pairs?.[0];

        let devopsPriceInBNB: number | null = null;
        if (pair && pair.token0Price) {
          devopsPriceInBNB = parseFloat(pair.token0Price);
        }

        // --- Step 2: Get live BNB/USD
        const bnbRes = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
        );
        const bnbData = await bnbRes.json();
        const bnbUsd = bnbData?.binancecoin?.usd;

        let devopsUsd: number | null = null;

        if (devopsPriceInBNB && bnbUsd) {
          devopsUsd = devopsPriceInBNB * bnbUsd;
        } else {
          // --- Step 3: Fallback estimate until pool is live
          const tokenPerBNB = 200000; // adjust once live
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
          setPrice({
            devopsUsd: null,
            lastUpdated: Date.now(),
            isLoading: false,
            error: err.message,
          });
        }
      }
    }

    // Check cache (5 min)
    const cacheKey = "devopsPriceCache";
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const now = Date.now();
      if (now - parsed.lastUpdated < 5 * 60 * 1000) {
        setPrice(parsed);
        return;
      }
    }

    fetchPrice().then(() => {
      localStorage.setItem(cacheKey, JSON.stringify(price));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return price;
}

