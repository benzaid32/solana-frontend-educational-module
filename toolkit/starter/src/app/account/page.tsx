"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicKey } from "@solana/web3.js";
import { withRpcFallback } from "@/lib/connection";
import { getExplorerAddressUrl } from "@/lib/cluster";
import { formatLamports, shortAddress } from "@/lib/utils";

type AccountView = {
  address: string;
  lamports: number;
  owner: string;
  executable: boolean;
  rentEpoch: number | bigint | undefined;
  dataLen: number;
};

export default function AccountInspectorPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [account, setAccount] = useState<AccountView | null>(null);

  async function handleLookup(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setAccount(null);
    setLoading(true);
    try {
      let key: PublicKey;
      try {
        key = new PublicKey(input.trim());
      } catch {
        setError("That is not a valid base58 Solana address.");
        return;
      }

      const info = await withRpcFallback((connection) =>
        connection.getAccountInfo(key, "confirmed"),
      );

      if (!info) {
        setError(
          "No account at this address on the current cluster. On Solana, empty addresses are valid until first funded.",
        );
        return;
      }

      setAccount({
        address: key.toBase58(),
        lamports: info.lamports,
        owner: info.owner.toBase58(),
        executable: info.executable,
        rentEpoch: info.rentEpoch,
        dataLen: info.data.length,
      });
    } catch (err) {
      setError((err as Error)?.message ?? String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
      <header className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">Example 02 · Inspector</p>
        <h1 className="mt-6 font-display text-[40px] font-light leading-[1.05] tracking-tightest text-ink sm:text-[56px]">
          Every Solana account
          <br />
          has{" "}
          <span className="relative inline-block">
            <span className="relative z-10">five fields.</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0.5 -z-0 h-2.5 bg-wheat/80 sm:h-3"
            />
          </span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-ink-muted">
          Lamports, data, owner, executable, rentEpoch. Paste any address and
          read the real on-chain state — not a mock, not a cache.
        </p>
      </header>

      <div className="space-y-6">
        <form
          onSubmit={handleLookup}
          className="space-y-6 rounded-2xl border border-paper-line bg-paper p-8 shadow-card"
        >
          <label className="block">
            <span className="field-label">Address</span>
            <input
              type="text"
              inputMode="text"
              autoComplete="off"
              spellCheck={false}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Paste a Solana address"
              className="field-input font-mono"
            />
          </label>
          <button
            type="submit"
            disabled={loading || input.trim().length === 0}
            className="btn-primary w-full"
          >
            {loading ? "Reading…" : "Look up account"}
          </button>
        </form>

        {error ? (
          <div
            role="alert"
            className="rounded-2xl border border-signal-red/30 bg-signal-red/[0.05] p-5 text-[14px] text-signal-red"
          >
            {error}
          </div>
        ) : null}

        {account ? (
          <section className="rounded-2xl border border-paper-line bg-paper p-6 shadow-card">
            <header className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-mono text-[14px] text-ink">
                {shortAddress(account.address, 8)}
              </h2>
              <Link
                href={getExplorerAddressUrl(account.address)}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium text-azure hover:underline"
              >
                View on Explorer →
              </Link>
            </header>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
              <Field
                label="Balance"
                value={`${formatLamports(account.lamports)}`}
                suffix="SOL"
                emphasis
              />
              <Field
                label="Data length"
                value={account.dataLen.toLocaleString()}
                suffix="bytes"
              />
              <Field
                label="Owner program"
                value={shortAddress(account.owner, 8)}
                monospace
                fullWidth
              />
              <Field
                label="Executable"
                value={account.executable ? "yes" : "no"}
              />
              <Field
                label="Rent epoch"
                value={
                  account.rentEpoch === undefined
                    ? "—"
                    : String(account.rentEpoch)
                }
              />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  suffix,
  monospace,
  emphasis,
  fullWidth,
}: {
  label: string;
  value: string;
  suffix?: string;
  monospace?: boolean;
  emphasis?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "col-span-2" : undefined}>
      <p className="field-label">{label}</p>
      <p
        className={
          emphasis
            ? "mt-2 font-display text-[26px] font-light leading-none text-ink"
            : monospace
            ? "mt-2 font-mono text-[14px] text-ink"
            : "mt-2 text-[14px] text-ink"
        }
      >
        {value}
        {suffix ? (
          <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            {suffix}
          </span>
        ) : null}
      </p>
    </div>
  );
}
