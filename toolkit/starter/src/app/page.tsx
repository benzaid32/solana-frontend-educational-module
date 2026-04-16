import Link from "next/link";
import { getClusterName } from "@/lib/cluster";

export default function HomePage() {
  const cluster = getClusterName();

  return (
    <div className="space-y-24">
      <section aria-labelledby="hero" className="pt-8 sm:pt-16">
        <p className="eyebrow">
          <span className="h-2 w-2 rounded-full bg-wheat" aria-hidden />
          Superteam Ukraine · Frontend module
        </p>
        <h1
          id="hero"
          className="mt-6 font-display text-[44px] font-light leading-[1.02] tracking-tightest text-ink sm:text-[64px] lg:text-[84px]"
        >
          Zero to a{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Solana dApp</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-wheat/80 sm:bottom-2 sm:h-4"
            />
          </span>
          ,
          <br className="hidden sm:block" /> the Ukrainian way.
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-ink-muted">
          A plug-and-play frontend toolkit for hackathon teams. Wallet
          connection, a confirmation-safe transaction lifecycle, RPC fallback,
          and an on-chain account inspector — all on Solana {cluster}. No mock
          data, no templates that break at the first real signature.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/transfer" className="btn-primary">
            Send a real SOL transfer
            <Arrow />
          </Link>
          <Link href="/account" className="btn-secondary">
            Inspect an on-chain account
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-paper-line pt-10 sm:grid-cols-4">
          <Metric value="4" label="Lectures" />
          <Metric value="2" label="Live examples" />
          <Metric value="400ms" label="Target slot time" />
          <Metric value="<10 min" label="Zero to dApp" />
        </dl>
      </section>

      <section aria-labelledby="principles" className="grid gap-12 lg:grid-cols-[260px_1fr]">
        <div>
          <p className="eyebrow">01 · Principles</p>
          <h2
            id="principles"
            className="mt-4 font-display text-[32px] font-light leading-tight text-ink sm:text-[40px]"
          >
            Built the way real teams ship.
          </h2>
        </div>
        <div className="grid gap-px bg-paper-line sm:grid-cols-3">
          {[
            {
              k: "A",
              title: "Real wallet flow",
              body:
                "The official anza-xyz Wallet Adapter, not a re-implementation. Connect, sign, and disconnect exactly like production apps.",
            },
            {
              k: "B",
              title: "Confirmation-safe",
              body:
                "Explicit states for building, signing, submitting, confirming, expired and error. No silent spinners, no dishonest toasts.",
            },
            {
              k: "C",
              title: "Fallback RPC",
              body:
                "Public Solana RPC is rate-limited and carries no SLA. The starter survives a failing primary by retrying on a fallback.",
            },
          ].map((c) => (
            <article
              key={c.k}
              className="flex flex-col justify-between gap-10 bg-paper p-7"
            >
              <span className="font-display text-[56px] font-light leading-none text-wheat-deep">
                {c.k}
              </span>
              <div>
                <h3 className="font-display text-[22px] font-light text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="stitch" aria-hidden />

      <section
        aria-labelledby="tour"
        className="grid gap-14 lg:grid-cols-[1fr_1fr]"
      >
        <div>
          <p className="eyebrow">02 · Tour the build</p>
          <h2
            id="tour"
            className="mt-4 font-display text-[32px] font-light leading-tight text-ink sm:text-[40px]"
          >
            Two small pages. Every
            <br /> pattern you need.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-ink-muted">
            Each example is a production-grade reference you can lift straight
            into your hackathon project. No abstractions hiding Solana from you.
          </p>
        </div>
        <div className="space-y-6">
          <TourCard
            index="Example 1"
            title="SOL transfer with full lifecycle"
            body="Fetch a fresh blockhash, build, sign, submit, and confirm against lastValidBlockHeight. Retry on expiry, link to Explorer on success."
            cta={{ href: "/transfer", label: "Open transfer" }}
          />
          <TourCard
            index="Example 2"
            title="Account inspector"
            body="Read the five canonical account fields (lamports, data, owner, executable, rentEpoch) from the current cluster with RPC fallback."
            cta={{ href: "/account", label: "Open inspector" }}
          />
        </div>
      </section>

      <section
        aria-labelledby="faucet"
        className="relative overflow-hidden rounded-3xl border border-paper-line bg-gradient-to-br from-azure/[0.06] via-paper to-wheat/[0.15] p-8 sm:p-12"
      >
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow">03 · Before you start</p>
          <h2
            id="faucet"
            className="mt-4 font-display text-[28px] font-light leading-tight text-ink sm:text-[36px]"
          >
            Get Devnet SOL from the official faucet.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-muted">
            Devnet SOL is free, but real. Fund the wallet you will connect,
            then come back and send a transfer. Every transaction in this
            starter is signed by you and confirmed on chain.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://faucet.solana.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Open faucet.solana.com
              <Arrow />
            </a>
            <a
              href="https://solana.com/docs/frontend"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Read Solana frontend docs →
            </a>
          </div>
        </div>
        <VyshyvankaMark className="pointer-events-none absolute bottom-0 right-0 hidden h-48 w-48 translate-x-10 translate-y-10 text-azure/30 sm:block" />
      </section>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dd className="font-display text-[36px] font-light leading-none text-ink sm:text-[44px]">
        {value}
      </dd>
      <dt className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </dt>
    </div>
  );
}

function TourCard({
  index,
  title,
  body,
  cta,
}: {
  index: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
}) {
  return (
    <Link
      href={cta.href}
      className="group block rounded-2xl border border-paper-line bg-paper p-6 transition hover:border-ink"
    >
      <p className="eyebrow">{index}</p>
      <h3 className="mt-3 font-display text-[24px] font-light leading-snug text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{body}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink group-hover:text-azure">
        {cta.label} <Arrow />
      </span>
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function VyshyvankaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <g opacity="0.8">
        <path d="M10 60 L30 40 L50 60 L70 40 L90 60 L110 40" />
        <path d="M10 70 L30 50 L50 70 L70 50 L90 70 L110 50" />
        <path d="M10 80 L30 60 L50 80 L70 60 L90 80 L110 60" />
      </g>
      <g opacity="0.5">
        <rect x="20" y="20" width="6" height="6" />
        <rect x="32" y="20" width="6" height="6" />
        <rect x="44" y="20" width="6" height="6" />
        <rect x="56" y="20" width="6" height="6" />
        <rect x="68" y="20" width="6" height="6" />
        <rect x="80" y="20" width="6" height="6" />
        <rect x="92" y="20" width="6" height="6" />
      </g>
    </svg>
  );
}
