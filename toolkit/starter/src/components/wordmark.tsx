export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-display text-[22px] font-light tracking-tightest text-ink">
        kyiv
      </span>
      <span className="mx-1 inline-block h-[7px] w-[7px] translate-y-[-2px] bg-wheat" />
      <span className="font-display text-[22px] font-light tracking-tightest text-ink">
        solana
      </span>
    </span>
  );
}
