import Image from "next/image";
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
              href="https://github.com/benzaid32/solana-frontend-educational-module"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              GitHub
            </a>
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

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-paper-line pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              In partnership with
            </span>
            <a
              href="https://ua.superteam.fun"
              target="_blank"
              rel="noreferrer"
              aria-label="Superteam Ukraine — open ua.superteam.fun"
              className="inline-flex items-center rounded-md bg-ink px-4 py-2 transition hover:bg-ink/90"
            >
              <Image
                src="/superteam-ukraine-logo.svg"
                alt="Superteam Ukraine"
                width={210}
                height={56}
                priority={false}
                className="h-6 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/benzaid32/solana-frontend-educational-module"
                target="_blank"
                rel="noreferrer"
                aria-label="Module source on GitHub"
                className="text-ink-muted transition hover:text-ink"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-1.93c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>
                </svg>
              </a>
              <a
                href="https://x.com/superteamukr"
                target="_blank"
                rel="noreferrer"
                aria-label="Superteam Ukraine on X"
                className="text-ink-muted transition hover:text-ink"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Superteam Ukraine · 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
