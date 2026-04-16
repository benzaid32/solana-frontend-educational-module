"use client";

import { useMemo, type ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  LedgerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { getPrimaryEndpoint } from "@/lib/cluster";

import "@solana/wallet-adapter-react-ui/styles.css";

/**
 * Wallet Adapter is smart about wallet discovery: any wallet implementing
 * the Solana Wallet Standard (Backpack, Glow, Coinbase, Trust, etc.) is
 * detected automatically in the user's browser. We only need to register
 * adapters for wallets that don't yet implement the standard or that need
 * extra transport plumbing (Ledger).
 */
export function Providers({ children }: { children: ReactNode }) {
  const endpoint = useMemo(() => getPrimaryEndpoint(), []);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
