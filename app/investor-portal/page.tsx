"use client"
export const dynamic = "force-dynamic"
import { useEffect, useState } from "react"
import {
  useAccount,
  useReadContract,
  useWriteContract,
  usePublicClient,
  useBalance,
  useChainId,
} from "wagmi"
import { formatUnits } from "viem"

import WalletConnect from "@/components/WalletConnect"
import ComingSoon from "@/components/ComingSoon"
import { useDevopsPrice } from "@/lib/hooks/useDevopsPrice"
import { useDevopsTokenAddress } from "@/lib/useDevopsTokenAddress"
import { useDevopsVestingAddress } from "@/lib/useDevopsVestingAddress"

function toBigIntOrZero(x: unknown): bigint {
  if (typeof x === "bigint") return x
  if (typeof x === "number") return BigInt(Math.floor(x))
  if (typeof x === "string") {
    try {
      return BigInt(x)
    } catch {
      return 0n
    }
  }
  return 0n
}

function parseVesting(v: unknown) {
  if (Array.isArray(v)) {
    const totalAmount = toBigIntOrZero(v[0])
    const released = toBigIntOrZero(v[1])
    const start = Number(v[2] ?? 0)
    const cliff = Number(v[3] ?? 0)
    const duration = Number(v[4] ?? 0)
    const revoked = Boolean(v[5])
    return { totalAmount, released, start, cliff, duration, revoked }
  }
  if (v && typeof v === "object") {
    const obj = v as Record<string, unknown>
    return {
      totalAmount: toBigIntOrZero(obj["totalAmount"] ?? obj["0"] ?? 0n),
      released: toBigIntOrZero(obj["released"] ?? obj["1"] ?? 0n),
      start: Number(obj["start"] ?? obj["2"] ?? 0),
      cliff: Number(obj["cliff"] ?? obj["3"] ?? 0),
      duration: Number(obj["duration"] ?? obj["4"] ?? 0),
      revoked: Boolean(obj["revoked"] ?? obj["5"] ?? false),
    }
  }
  return null
}

const vestingAbi = [
  {
    name: "getVestingCount",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "contributor", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "vestings",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "contributor", type: "address" },
      { name: "vestingId", type: "uint256" },
    ],
    outputs: [
      { name: "totalAmount", type: "uint256" },
      { name: "released", type: "uint256" },
      { name: "start", type: "uint64" },
      { name: "cliff", type: "uint64" },
      { name: "duration", type: "uint64" },
      { name: "revoked", type: "bool" },
    ],
  },
  {
    name: "releasable",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "contributor", type: "address" },
      { name: "vestingId", type: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "release",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "vestingId", type: "uint256" }],
    outputs: [],
  },
] as const

function BalanceDisplay() {
  const { address } = useAccount()
  const tokenAddress = useDevopsTokenAddress()
  const { devopsUsd, refetch: refetchPrice } = useDevopsPrice()

  const { data: balanceData, isLoading: balanceLoading } = useBalance({
    address,
    token: tokenAddress,
  })

  const formatted = balanceData?.formatted ? parseFloat(balanceData.formatted) : 0
  const usd = devopsUsd && formatted ? formatted * devopsUsd : null

  return (
    <div className="flex items-center gap-3">
      {balanceLoading ? (
        <div className="h-4 w-24 bg-cyan-700/30 rounded shimmer" />
      ) : (
        <>
          <span className="font-semibold">
            {formatted.toLocaleString(undefined, { maximumFractionDigits: 2 })} DEVOPS
          </span>
          {devopsUsd ? (
            <span className="text-gray-400 text-xs">
              ≈ ${usd?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          ) : (
            <button onClick={() => refetchPrice()} className="text-xs text-cyan-300 underline">
              Refresh price
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default function InvestorPortalPage() {
  const { address, isConnected } = useAccount()
  const publicClient = usePublicClient()
  const { writeContractAsync } = useWriteContract()
  const _chainId = useChainId()

  const _tokenAddress = useDevopsTokenAddress()
  const vestingAddress = useDevopsVestingAddress()

  const [vestingCount, setVestingCount] = useState(0)
  type ParsedVesting = {
    totalAmount: bigint
    released: bigint
    start: number
    cliff: number
    duration: number
    revoked: boolean
  }

  const [vestingData, setVestingData] = useState<Array<{ id: number; v: ParsedVesting }>>([])
  const [releasableData, setReleasableData] = useState<Record<number, bigint>>({})
  const [pendingIds, setPendingIds] = useState<Record<number, boolean>>({})
  const [claimedIds, setClaimedIds] = useState<Record<number, boolean>>({})

  const { data: countData } = useReadContract({
    abi: vestingAbi,
    address: vestingAddress,
    functionName: "getVestingCount",
    args: address ? [address] : undefined,
    query: { enabled: !!address && !!vestingAddress },
  })

  useEffect(() => {
    if (!address || !countData) return
    setVestingCount(Number(countData))
  }, [countData, address])

  useEffect(() => {
    const fetchData = async () => {
      if (!publicClient || !address || vestingCount === 0 || !vestingAddress) return

      type MulticallContract = {
        address: `0x${string}`
        abi: typeof vestingAbi
        functionName: string
        args?: readonly unknown[]
      }

      const vestingCalls: MulticallContract[] = []
      const releasableCalls: MulticallContract[] = []
      for (let i = 0; i < vestingCount; i++) {
        vestingCalls.push({
          address: vestingAddress as `0x${string}`,
          abi: vestingAbi,
          functionName: "vestings" as const,
          args: [address, BigInt(i)],
        })
        releasableCalls.push({
          address: vestingAddress as `0x${string}`,
          abi: vestingAbi,
          functionName: "releasable" as const,
          args: [address, BigInt(i)],
        })
      }

      try {
        const supportsMulticall = !!publicClient.chain?.contracts?.multicall3?.address
        let vestingResults: unknown[] = []
        let releasableResults: unknown[] = []

        /* eslint-disable @typescript-eslint/no-explicit-any */
        if (supportsMulticall) {
          // publicClient.multicall types are strict; our calls are built dynamically.
          const pc = publicClient as unknown as any
          const [vRes, rRes] = await Promise.all([
            pc.multicall({ contracts: vestingCalls }),
            pc.multicall({ contracts: releasableCalls }),
          ])
          vestingResults = [...(vRes as unknown[])]
          releasableResults = [...(rRes as unknown[])]
        } else {
          console.warn("Multicall not supported — sequential fallback.")
          vestingResults = await Promise.allSettled(
            vestingCalls.map((c) =>
              (publicClient as unknown as any).readContract(c).catch(() => null),
            ),
          )
          releasableResults = await Promise.allSettled(
            releasableCalls.map((c) =>
              (publicClient as unknown as any).readContract(c).catch(() => null),
            ),
          )
        }
        /* eslint-enable @typescript-eslint/no-explicit-any */

        const vestingCleaned: Array<{ id: number; v: ParsedVesting }> = []
        const releasablesCleaned: Record<number, bigint> = {}

        vestingResults.forEach((r: unknown, i: number) => {
          const maybe = r as unknown as { result?: unknown; value?: unknown } | null
          const result = maybe?.result ?? maybe?.value ?? null
          const parsed = parseVesting(result)
          if (parsed) vestingCleaned.push({ id: i, v: parsed })
        })

        releasableResults.forEach((r: unknown, i: number) => {
          const maybe = r as unknown as { result?: unknown; value?: unknown } | null
          const result = (maybe?.result ?? maybe?.value ?? 0n) as bigint
          releasablesCleaned[i] = result
        })

        setVestingData(vestingCleaned)
        setReleasableData(releasablesCleaned)
      } catch (err: unknown) {
        console.error("Fetch error:", err)
      }
    }

    fetchData()
  }, [publicClient, address, vestingCount, vestingAddress])

  const handleClaim = async (id: number) => {
    try {
      setPendingIds((prev) => ({ ...prev, [id]: true }))

      const txHash = await writeContractAsync({
        abi: vestingAbi,
        address: vestingAddress,
        functionName: "release",
        args: [BigInt(id)],
      })

      console.log(`Transaction sent for vesting ${id}:`, txHash)

      if (!publicClient) throw new Error("Public client not initialized")

      const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash })
      if (receipt.status === "success") {
        setClaimedIds((prev) => ({ ...prev, [id]: true }))
        alert(`Claim for vesting #${id} confirmed!`)
      } else {
        alert(`Claim for vesting #${id} failed or reverted.`)
      }
    } catch (err: unknown) {
      console.error(`Claim error for vesting ${id}:`, err)
      let message = String(err)
      if (err && typeof err === "object") {
        const e = err as Record<string, unknown>
        if (typeof e.message === "string") message = e.message
      }
      alert(`Claim for vesting #${id} failed: ${message}`)
    } finally {
      setPendingIds((prev) => ({ ...prev, [id]: false }))
    }
  }

  const TRADING_LIVE =
    process.env.NEXT_PUBLIC_TRADING_LIVE === "true" || process.env.NODE_ENV !== "production"

  const comingSoonEl = <ComingSoon />

  return (
    <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">$DEVOPS Investor Portal</h1>

      <div className="mb-6 bg-gray-800 border border-cyan-700/40 text-gray-300 rounded-lg p-4 text-sm text-left shadow-sm">
        <p className="text-cyan-300 font-semibold mb-1">Security Notice — Connecting Your Wallet</p>
        <p>
          Connecting your wallet allows this site to read your public blockchain address and display
          your balances, vesting schedules, and eligibility for claims or NFT mints. The connection
          itself is <strong>read-only</strong> — it does <strong>not</strong> give this site access
          to move or withdraw your funds.
        </p>
        <p className="mt-2">
          When you perform an action (such as claiming vested tokens), your wallet will prompt you
          to confirm before anything is sent to the blockchain.
        </p>
      </div>

      <div className="mb-4 flex flex-col items-center gap-3">
        <WalletConnect />
        {isConnected && (
          <div className="bg-gray-800 text-cyan-300 rounded-lg px-4 py-2 text-sm shadow border border-cyan-700/40 flex items-center gap-3">
            <BalanceDisplay />
          </div>
        )}
      </div>

      {!TRADING_LIVE ? (
        comingSoonEl
      ) : !isConnected ? (
        <p className="text-cyan-300">Connect your wallet to continue</p>
      ) : vestingCount === 0 ? (
        <p className="text-gray-400">No vesting schedules found for this wallet.</p>
      ) : (
        <div className="space-y-6">
          {vestingData.map((entry) => {
            const v = entry.v
            const id = entry.id
            const total = v.totalAmount
            const released = v.released
            const cliff = v.cliff
            const duration = v.duration
            const revoked = v.revoked
            const releasable = releasableData[id] ?? 0n
            const endDate = (Number(cliff) + Number(duration)) * 1000

            return (
              <div key={id} className="border border-teal-600 p-5 rounded-lg bg-gray-800 text-left">
                <h2 className="text-teal-400 font-semibold text-lg mb-2">Vesting ID #{id}</h2>
                <p>
                  <span className="font-semibold">Total:</span> {formatUnits(total ?? 0n, 18)}{" "}
                  DEVOPS
                </p>
                <p>
                  <span className="font-semibold">Released:</span> {formatUnits(released ?? 0n, 18)}{" "}
                  DEVOPS
                </p>
                <p>
                  <span className="font-semibold">Releasable:</span> {formatUnits(releasable, 18)}{" "}
                  DEVOPS
                </p>
                <p>
                  <span className="font-semibold">Cliff Date:</span>{" "}
                  {new Date(Number(cliff) * 1000).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">End Date:</span>{" "}
                  {new Date(endDate).toLocaleDateString()}
                </p>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => handleClaim(id)}
                    disabled={pendingIds[id] || releasable === 0n || revoked}
                    className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded"
                  >
                    {pendingIds[id] ? "Processing..." : "Claim Available Tokens"}
                  </button>
                  {claimedIds[id] && (
                    <p className="text-green-400 mt-2">✅ Claim successful! Balances updated.</p>
                  )}
                  {revoked && (
                    <p className="text-red-400 mt-2">⚠️ This vesting has been revoked.</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
