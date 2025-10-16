"use client";
import { useChainId } from "wagmi";

export function useDevopsVestingAddress(): `0x${string}` {
  const chainId = useChainId();

  // BSC testnet (97) vs mainnet (56)
  if (chainId === 97) {
    return process.env.NEXT_PUBLIC_VESTING_CONTRACT_TESTNET as `0x${string}`;
  }

  return process.env.NEXT_PUBLIC_VESTING_CONTRACT_MAINNET as `0x${string}`;
}

