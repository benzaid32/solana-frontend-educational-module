"use client";

import dynamic from "next/dynamic";

/**
 * Wallet Adapter's UI button uses browser-only APIs, so we disable SSR.
 * This is the officially recommended pattern.
 */
export const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton,
    ),
  { ssr: false },
);
