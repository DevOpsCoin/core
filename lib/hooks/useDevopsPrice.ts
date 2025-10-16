// lib/hooks/useDevopsPrice.ts
import { useCallback, useEffect, useState } from "react";
import { DEVOPS_TOKEN } from "@/lib/constants";

interface PriceResult {
  devopsUsd: number | null;
  lastUpdated: number | null;
  isLoading: boolean;
  error?: string;
}

export function useDevopsPrice() {
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
          const subgraphRes = await fetch(`/api/subgraph`, {
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
          });

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
    return () => {
      cancelled = true;
    };
  }, []);

  const refetch = useCallback(() => {
    // simple trigger: re-run the effect's fetch by directly calling the same logic
    let cancelled = false;

    (async () => {
      try {
        setPrice((p) => ({ ...p, isLoading: true }));

        // --- Step 1: Try PancakeSwap subgraph
        let devopsPriceInBNB: number | null = null;
        try {
          const subgraphRes = await fetch(`/api/subgraph`, {
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
          });

          const subgraphData = await subgraphRes.json();
          const pair = subgraphData?.data?.pairs?.[0];
          if (pair?.token0Price) {
            devopsPriceInBNB = parseFloat(pair.token0Price);
          }
        } catch {
          console.warn("Subgraph unavailable 2 using fallback pricing.");
        }

        // --- Step 2: Always get BNB/USD
        const bnbRes = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
        );
        const bnbData = await bnbRes.json();
        const bnbUsd = bnbData?.binancecoin?.usd ?? 600;

        let devopsUsd: number | null = null;
        if (devopsPriceInBNB && bnbUsd) {
          devopsUsd = devopsPriceInBNB * bnbUsd;
        } else {
          const tokenPerBNB = 200000;
          devopsUsd = bnbUsd / tokenPerBNB;
        }

        if (!cancelled) {
          setPrice({ devopsUsd, lastUpdated: Date.now(), isLoading: false });
        }
      } catch (err: any) {
        console.error("useDevopsPrice refetch error:", err);
        if (!cancelled) {
          setPrice({ devopsUsd: 0.003, lastUpdated: Date.now(), isLoading: false, error: err.message });
        }
      }
    })();
  }, []);

  return { ...price, refetch };
}
