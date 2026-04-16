"use client";

import type { PriorityFeeConfig, PriorityFeeMode } from "@/lib/transactions";
import { cn } from "@/lib/utils";

export function PriorityFeePicker({
  value,
  onChange,
}: {
  value: PriorityFeeConfig;
  onChange: (next: PriorityFeeConfig) => void;
}) {
  const modes: { id: PriorityFeeMode; label: string; help: string }[] = [
    {
      id: "off",
      label: "Off",
      help: "Cheapest, but slower during congestion.",
    },
    {
      id: "auto",
      label: "Auto",
      help: "5,000 µL per compute unit (safe default).",
    },
    {
      id: "manual",
      label: "Manual",
      help: "Set your own micro-lamport price.",
    },
  ];

  return (
    <fieldset className="space-y-4 border-t border-paper-line pt-6">
      <legend className="field-label">Priority fee</legend>
      <p className="text-[12px] leading-relaxed text-ink-muted">
        Priority fees pay for compute-unit priority when the network is busy.
        Surface the choice to users — never hide it.
      </p>
      <div
        role="radiogroup"
        aria-label="Priority fee mode"
        className="grid grid-cols-3 gap-0 rounded-full border border-paper-line p-1"
      >
        {modes.map((mode) => {
          const active = value.mode === mode.id;
          return (
            <button
              type="button"
              key={mode.id}
              role="radio"
              aria-checked={active}
              onClick={() => onChange({ ...value, mode: mode.id })}
              className={cn(
                "rounded-full py-2 text-[12px] font-medium tracking-wide transition",
                active
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {mode.label}
            </button>
          );
        })}
      </div>
      <p className="text-[11px] text-ink-muted">
        {modes.find((m) => m.id === value.mode)?.help}
      </p>
      {value.mode === "manual" ? (
        <label className="block">
          <span className="field-label">
            Micro-lamports per compute unit
          </span>
          <input
            type="number"
            min={0}
            step={1000}
            inputMode="numeric"
            value={value.microLamportsPerCu ?? 0}
            onChange={(event) =>
              onChange({
                ...value,
                microLamportsPerCu: Number(event.target.value) || 0,
              })
            }
            className="field-input font-mono"
          />
        </label>
      ) : null}
    </fieldset>
  );
}
