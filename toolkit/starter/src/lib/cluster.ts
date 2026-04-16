import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export type ClusterName = "devnet" | "testnet" | "mainnet-beta";

export function getClusterName(): ClusterName {
  const raw = (process.env.NEXT_PUBLIC_SOLANA_CLUSTER ?? "devnet").toLowerCase();
  if (raw === "mainnet-beta" || raw === "mainnet") return "mainnet-beta";
  if (raw === "testnet") return "testnet";
  return "devnet";
}

export function getWalletAdapterNetwork(): WalletAdapterNetwork {
  const name = getClusterName();
  if (name === "mainnet-beta") return WalletAdapterNetwork.Mainnet;
  if (name === "testnet") return WalletAdapterNetwork.Testnet;
  return WalletAdapterNetwork.Devnet;
}

export function getPrimaryEndpoint(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SOLANA_RPC_PRIMARY;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  return clusterApiUrl(getWalletAdapterNetwork());
}

export function getFallbackEndpoint(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SOLANA_RPC_FALLBACK;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  return clusterApiUrl(getWalletAdapterNetwork());
}

export function getExplorerTxUrl(signature: string): string {
  const cluster = getClusterName();
  const suffix = cluster === "mainnet-beta" ? "" : `?cluster=${cluster}`;
  return `https://explorer.solana.com/tx/${signature}${suffix}`;
}

export function getExplorerAddressUrl(address: string): string {
  const cluster = getClusterName();
  const suffix = cluster === "mainnet-beta" ? "" : `?cluster=${cluster}`;
  return `https://explorer.solana.com/address/${address}${suffix}`;
}
