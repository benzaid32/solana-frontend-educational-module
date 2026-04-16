"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getClusterName } from "@/lib/cluster";
import { WalletMultiButton } from "./wallet-button";
import { Wordmark } from "./wordmark";

const NAV = [
  { href: "/", label: "Overview" },
  { href: "/transfer", label: "Transfer" },
  { href: "/account", label: "Inspector" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const cluster = getClusterName();

  return (
    <header className="sticky top-0 z-30 border-b border-paper-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-editorial items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link href="/" aria-label="Go home" className="flex items-center">
          <Wordmark />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition",
                  active
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-full block h-[2px] w-5 -translate-x-1/2 translate-y-1 bg-wheat"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <span
            title="Current Solana cluster"
            className="hidden chip border-azure/20 bg-azure/5 text-azure sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-azure" aria-hidden />
            {cluster}
          </span>
          <WalletMultiButton />
        </div>
      </div>
    </header>
  );
}
