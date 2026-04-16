import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

export function formatLamports(lamports: number | null | undefined): string {
  if (lamports === null || lamports === undefined) return "—";
  return (lamports / 1_000_000_000).toLocaleString(undefined, {
    maximumFractionDigits: 6,
  });
}

export function shortAddress(addr: string, size = 4): string {
  if (!addr) return "";
  if (addr.length <= size * 2 + 1) return addr;
  return `${addr.slice(0, size)}…${addr.slice(-size)}`;
}
