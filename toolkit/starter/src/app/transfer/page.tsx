"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  buildSolTransferTransaction,
  confirmWithTimeout,
  type PriorityFeeConfig,
} from "@/lib/transactions";
import { withRpcFallback } from "@/lib/connection";
import { formatLamports, shortAddress } from "@/lib/utils";
import { getExplorerAddressUrl } from "@/lib/cluster";
import { TxStatus, type TxState } from "@/components/tx-status";
import { PriorityFeePicker } from "@/components/priority-fee-picker";

export default function TransferPage() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction, connected } = useWallet();

  const [balanceLamports, setBalanceLamports] = useState<number | null>(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("0.001");
  const [priorityFee, setPriorityFee] = useState<PriorityFeeConfig>({
    mode: "auto",
  });
  const [tx, setTx] = useState<TxState>({ stage: "idle" });

  const loadBalance = useCallback(async () => {
    if (!publicKey) {
      setBalanceLamports(null);
      return;
    }
    try {
      const lamports = await withRpcFallback((conn) =>
        conn.getBalance(publicKey, "confirmed"),
      );
      setBalanceLamports(lamports);
    } catch (error) {
      console.error("Failed to fetch balance", error);
      setBalanceLamports(null);
    }
  }, [publicKey]);

  useEffect(() => {
    loadBalance();
  }, [loadBalance]);

  const recipientPubkey = useMemo(() => {
    if (!recipient) return null;
    try {
      return new PublicKey(recipient.trim());
    } catch {
      return null;
    }
  }, [recipient]);

  const amountNumber = useMemo(() => {
    const n = Number(amount);
    return Number.isFinite(n) ? n : NaN;
  }, [amount]);

  const busy = ["building", "signing", "submitting", "confirming"].includes(
    tx.stage,
  );

  const canSubmit =
    connected &&
    publicKey !== null &&
    recipientPubkey !== null &&
    !Number.isNaN(amountNumber) &&
    amountNumber > 0 &&
    !busy;

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (!publicKey || !recipientPubkey) return;

      try {
        setTx({ stage: "building" });
        const { transaction, blockhash, lastValidBlockHeight } =
          await buildSolTransferTransaction({
            connection,
            from: publicKey,
            to: recipientPubkey,
            amountSol: amountNumber,
            priorityFee,
          });

        setTx({ stage: "signing" });

        let signature: string;
        try {
          signature = await sendTransaction(transaction, connection, {
            skipPreflight: false,
            preflightCommitment: "confirmed",
          });
        } catch (error) {
          const msg = (error as Error)?.message ?? String(error);
          if (
            msg.toLowerCase().includes("user rejected") ||
            msg.toLowerCase().includes("rejected the request")
          ) {
            setTx({
              stage: "error",
              message: "You rejected the request in your wallet.",
            });
            return;
          }
          setTx({
            stage: "error",
            message: `Wallet error: ${msg}`,
          });
          return;
        }

        setTx({ stage: "submitting", signature });
        setTx({ stage: "confirming", signature });

        const result = await confirmWithTimeout({
          connection,
          signature,
          blockhash,
          lastValidBlockHeight,
        });

        if (result.ok) {
          setTx({ stage: "confirmed", signature });
          loadBalance();
          return;
        }

        if (result.error.kind === "expired") {
          setTx({
            stage: "expired",
            signature,
            message: result.error.message,
          });
          return;
        }

        setTx({
          stage: "error",
          signature,
          message: result.error.message,
        });
      } catch (error) {
        const msg = (error as Error)?.message ?? String(error);
        setTx({
          stage: "error",
          message: msg,
        });
      }
    },
    [
      amountNumber,
      connection,
      loadBalance,
      priorityFee,
      publicKey,
      recipientPubkey,
      sendTransaction,
    ],
  );

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
      <header className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">Example 01 · Transfer</p>
        <h1 className="mt-6 font-display text-[40px] font-light leading-[1.05] tracking-tightest text-ink sm:text-[56px]">
          Send SOL, with the
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">truth on screen.</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0.5 -z-0 h-2.5 bg-wheat/80 sm:h-3"
            />
          </span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-ink-muted">
          Every stage of a Solana transaction is visible here — preparing,
          signing, submitting, confirming, or expired. No invented success
          states. No hidden failure.
        </p>

        <section
          aria-label="Connected wallet"
          className="mt-10 border-t border-paper-line pt-6"
        >
          <p className="field-label">Connected wallet</p>
          {publicKey ? (
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <Link
                href={getExplorerAddressUrl(publicKey.toBase58())}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[14px] text-ink underline decoration-wheat decoration-2 underline-offset-4 hover:decoration-azure"
              >
                {shortAddress(publicKey.toBase58(), 6)}
              </Link>
              <div className="text-right">
                <p className="font-display text-[22px] font-light text-ink">
                  {formatLamports(balanceLamports)}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  SOL
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-[14px] text-ink-muted">
              Connect a wallet from the top right to continue.
            </p>
          )}
        </section>
      </header>

      <div className="space-y-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-paper-line bg-paper p-8 shadow-card"
        >
          <label className="block">
            <span className="field-label">Recipient address</span>
            <input
              type="text"
              inputMode="text"
              autoComplete="off"
              spellCheck={false}
              value={recipient}
              onChange={(event) => setRecipient(event.target.value)}
              placeholder="Base58 Solana address"
              aria-invalid={recipient.length > 0 && recipientPubkey === null}
              className="field-input font-mono"
            />
            {recipient.length > 0 && recipientPubkey === null ? (
              <span className="mt-2 block text-[12px] text-signal-red">
                That is not a valid Solana address.
              </span>
            ) : null}
          </label>

          <label className="block">
            <span className="field-label">Amount (SOL)</span>
            <input
              type="number"
              min="0"
              step="0.000001"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="field-input font-mono"
            />
          </label>

          <PriorityFeePicker value={priorityFee} onChange={setPriorityFee} />

          <button
            type="submit"
            disabled={!canSubmit}
            className="btn-primary w-full"
          >
            {busy
              ? "Working…"
              : tx.stage === "confirmed"
              ? "Send another transfer"
              : tx.stage === "expired"
              ? "Retry with fresh blockhash"
              : "Send SOL"}
          </button>
        </form>

        <TxStatus state={tx} />
      </div>
    </div>
  );
}
