import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-paper">
      <div className="mx-auto w-full max-w-editorial px-6 py-10 sm:px-10">
        <div className="stitch mb-8" aria-hidden />
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Made in Kyiv</p>
            <p className="mt-3 max-w-md font-display text-[20px] font-light leading-snug text-ink">
              A plug-and-play Solana frontend, crafted in Ukraine for builders
              heading into Colosseum.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-muted"
          >
            <Link href="/" className="hover:text-ink">Overview</Link>
            <Link href="/transfer" className="hover:text-ink">Transfer</Link>
            <Link href="/account" className="hover:text-ink">Inspector</Link>
            <a
              href="https://solana.com/docs/frontend"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              Solana docs
            </a>
            <a
              href="https://github.com/anza-xyz/wallet-adapter"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              Wallet Adapter
            </a>
          </nav>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
          Superteam Ukraine · Solana Frontend Educational Module · 2026
        </p>
      </div>
    </footer>
  );
}
