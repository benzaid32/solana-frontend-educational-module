import { Connection, type Commitment } from "@solana/web3.js";
import { getFallbackEndpoint, getPrimaryEndpoint } from "./cluster";

const DEFAULT_COMMITMENT: Commitment = "confirmed";

let primary: Connection | null = null;
let fallback: Connection | null = null;

export function getPrimaryConnection(): Connection {
  if (!primary) {
    primary = new Connection(getPrimaryEndpoint(), DEFAULT_COMMITMENT);
  }
  return primary;
}

export function getFallbackConnection(): Connection {
  if (!fallback) {
    fallback = new Connection(getFallbackEndpoint(), DEFAULT_COMMITMENT);
  }
  return fallback;
}

/**
 * Runs an RPC call against the primary connection. If the primary fails (network
 * error, timeout, rate limit), automatically retries against the fallback.
 *
 * This matches the official production-readiness guidance for Solana apps:
 * public mainnet endpoints are rate-limited and have no SLA, so a fallback is
 * required for real traffic.
 */
export async function withRpcFallback<T>(
  run: (connection: Connection) => Promise<T>,
): Promise<T> {
  try {
    return await run(getPrimaryConnection());
  } catch (error) {
    if (getPrimaryEndpoint() === getFallbackEndpoint()) {
      throw error;
    }
    console.warn(
      "[rpc-fallback] primary RPC failed, trying fallback:",
      (error as Error)?.message ?? error,
    );
    return await run(getFallbackConnection());
  }
}
