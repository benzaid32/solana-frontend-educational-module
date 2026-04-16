import {
  ComputeBudgetProgram,
  type Connection,
  type PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

export type PriorityFeeMode = "off" | "auto" | "manual";

export interface PriorityFeeConfig {
  mode: PriorityFeeMode;
  /** micro-lamports per compute unit, used when mode === "manual". */
  microLamportsPerCu?: number;
  /** compute unit limit, optional override. */
  computeUnitLimit?: number;
}

/**
 * Builds compute budget instructions for a transaction.
 * Priority fees are optional, but explaining them in UI is required for a good UX.
 * See: https://solana.com/developers/guides/advanced/how-to-use-priority-fees
 */
export function buildComputeBudgetInstructions(
  config: PriorityFeeConfig,
): TransactionInstruction[] {
  const ixs: TransactionInstruction[] = [];

  if (config.computeUnitLimit && config.computeUnitLimit > 0) {
    ixs.push(
      ComputeBudgetProgram.setComputeUnitLimit({
        units: config.computeUnitLimit,
      }),
    );
  }

  if (config.mode === "off") return ixs;

  const microLamports =
    config.mode === "manual"
      ? Math.max(0, Math.floor(config.microLamportsPerCu ?? 0))
      : 5_000;

  if (microLamports > 0) {
    ixs.push(
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports,
      }),
    );
  }

  return ixs;
}

/**
 * Builds an unsigned SOL transfer transaction with a fresh blockhash.
 * Always fetch a fresh blockhash at submit time. See:
 * https://solana.com/developers/guides/advanced/confirmation
 */
export async function buildSolTransferTransaction(params: {
  connection: Connection;
  from: PublicKey;
  to: PublicKey;
  amountSol: number;
  priorityFee: PriorityFeeConfig;
}): Promise<{ transaction: Transaction; lastValidBlockHeight: number; blockhash: string }> {
  const { connection, from, to, amountSol, priorityFee } = params;

  const lamports = Math.round(amountSol * LAMPORTS_PER_SOL);
  if (!Number.isFinite(lamports) || lamports <= 0) {
    throw new Error("Amount must be a positive number of SOL.");
  }

  const tx = new Transaction();
  const cbIxs = buildComputeBudgetInstructions(priorityFee);
  cbIxs.forEach((ix) => tx.add(ix));

  tx.add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports,
    }),
  );

  const latest = await connection.getLatestBlockhash("confirmed");
  tx.recentBlockhash = latest.blockhash;
  tx.lastValidBlockHeight = latest.lastValidBlockHeight;
  tx.feePayer = from;

  return {
    transaction: tx,
    lastValidBlockHeight: latest.lastValidBlockHeight,
    blockhash: latest.blockhash,
  };
}

export type ConfirmationError =
  | { kind: "expired"; message: string }
  | { kind: "rpc"; message: string }
  | { kind: "onchain"; message: string };

/**
 * Awaits confirmation using the standard blockhash+lastValidBlockHeight pattern.
 * This is the flow recommended in Solana docs to avoid silently waiting on
 * expired transactions.
 */
export async function confirmWithTimeout(params: {
  connection: Connection;
  signature: string;
  blockhash: string;
  lastValidBlockHeight: number;
}): Promise<{ ok: true } | { ok: false; error: ConfirmationError }> {
  const { connection, signature, blockhash, lastValidBlockHeight } = params;
  try {
    const result = await connection.confirmTransaction(
      {
        signature,
        blockhash,
        lastValidBlockHeight,
      },
      "confirmed",
    );
    if (result.value.err) {
      return {
        ok: false,
        error: {
          kind: "onchain",
          message: `Transaction failed on chain: ${JSON.stringify(result.value.err)}`,
        },
      };
    }
    return { ok: true };
  } catch (error) {
    const msg = (error as Error)?.message ?? String(error);
    if (msg.toLowerCase().includes("expired") || msg.toLowerCase().includes("block height exceeded")) {
      return {
        ok: false,
        error: {
          kind: "expired",
          message:
            "Transaction expired before inclusion. Blockhash window passed. Please retry.",
        },
      };
    }
    return {
      ok: false,
      error: {
        kind: "rpc",
        message: msg,
      },
    };
  }
}
