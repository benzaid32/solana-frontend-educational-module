"use client";

import Link from "next/link";
import { getExplorerTxUrl } from "@/lib/cluster";
import { cn } from "@/lib/utils";

export type TxStage =
  | "idle"
  | "building"
  | "signing"
  | "submitting"
  | "confirming"
  | "confirmed"
  | "expired"
  | "error";

export interface TxState {
  stage: TxStage;
  signature?: string;
  message?: string;
}

const ORDER: TxStage[] = [
  "building",
  "signing",
  "submitting",
  "confirming",
  "confirmed",
];

const STAGE_COPY: Record<TxStage, { title: string; hint: string; tone: "neutral" | "active" | "success" | "warn" | "error" }> = {
  idle: {
    title: "Idle",
    hint: "Fill the form, then submit to begin.",
    tone: "neutral",
  },
  building: {
    title: "Preparing",
    hint: "Fetching a fresh blockhash and assembling the transaction.",
    tone: "active",
  },
  signing: {
    title: "Awaiting signature",
    hint: "Approve or reject the request in your wallet.",
    tone: "active",
  },
  submitting: {
    title: "Submitting",
    hint: "Broadcasting your signed transaction to an RPC node.",
    tone: "active",
  },
  confirming: {
    title: "Confirming",
    hint: "Waiting for the network. Commitment: confirmed.",
    tone: "active",
  },
  confirmed: {
    title: "Confirmed",
    hint: "On chain. Verify via Solana Explorer.",
    tone: "success",
  },
  expired: {
    title: "Expired",
    hint: "Blockhash window passed before inclusion. Retry to rebuild.",
    tone: "warn",
  },
  error: {
    title: "Failed",
    hint: "Details below.",
    tone: "error",
  },
};

const TONE: Record<string, string> = {
  neutral: "border-paper-line bg-paper",
  active: "border-azure/25 bg-azure/[0.04]",
  success: "border-signal-emerald/30 bg-signal-emerald/[0.06]",
  warn: "border-wheat-deep/40 bg-wheat/[0.14]",
  error: "border-signal-red/30 bg-signal-red/[0.05]",
};

export function TxStatus({ state }: { state: TxState }) {
  const copy = STAGE_COPY[state.stage];
  const activeIndex = ORDER.indexOf(state.stage);

  return (
    <section
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-2xl border p-6 transition",
        TONE[copy.tone],
      )}
    >
      <header className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Transaction status</p>
          <h2 className="mt-2 font-display text-[22px] font-light leading-tight text-ink">
            {copy.title}
          </h2>
          <p className="mt-1 text-[13px] text-ink-muted">{copy.hint}</p>
        </div>
        <span
          className={cn(
            "chip",
            copy.tone === "success" && "border-signal-emerald/40 text-signal-emerald",
            copy.tone === "warn" && "border-wheat-deep/50 text-wheat-deep",
            copy.tone === "error" && "border-signal-red/40 text-signal-red",
            copy.tone === "active" && "border-azure/40 text-azure",
          )}
        >
          {state.stage}
        </span>
      </header>

      <ol
        aria-label="Transaction lifecycle"
        className="mt-6 grid grid-cols-5 gap-2"
      >
        {ORDER.map((s, i) => {
          const done =
            state.stage === "confirmed"
              ? true
              : i < activeIndex && activeIndex >= 0;
          const active = i === activeIndex;
          return (
            <li key={s} className="flex flex-col items-start gap-1.5">
              <span
                className={cn(
                  "h-[3px] w-full rounded-full transition",
                  done
                    ? "bg-ink"
                    : active
                    ? "bg-ink/60"
                    : "bg-paper-line",
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium uppercase tracking-[0.14em]",
                  done || active ? "text-ink" : "text-ink-muted/70",
                )}
              >
                {s}
              </span>
            </li>
          );
        })}
      </ol>

      {state.message ? (
        <pre className="mt-5 overflow-x-auto rounded-lg bg-ink/[0.04] p-3 font-mono text-[12px] leading-relaxed text-ink">
          {state.message}
        </pre>
      ) : null}

      {state.signature ? (
        <p className="mt-5 text-[13px] text-ink-muted">
          Signature{" "}
          <Link
            href={getExplorerTxUrl(state.signature)}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-ink underline decoration-wheat decoration-2 underline-offset-4 hover:decoration-azure"
          >
            {state.signature.slice(0, 8)}…{state.signature.slice(-6)}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
