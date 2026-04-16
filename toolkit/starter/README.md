# Solana Frontend Starter

[![CI](https://github.com/benzaid32/solana-frontend-educational-module/actions/workflows/ci.yml/badge.svg)](https://github.com/benzaid32/solana-frontend-educational-module/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Solana: Devnet](https://img.shields.io/badge/Solana-Devnet-9945FF)](https://faucet.solana.com)
[![Made in Kyiv](https://img.shields.io/badge/Made%20in-Kyiv-0057B7?labelColor=FFD500&color=0057B7)](https://superteam.fun/ukraine)

Plug-and-play Solana frontend starter for hackathon teams. Built for the
bounty's usability criterion: go from a clean clone to a working dApp on
Devnet in under 10 minutes.

> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbenzaid32%2Fsolana-frontend-educational-module&root-directory=toolkit%2Fstarter&env=NEXT_PUBLIC_SOLANA_CLUSTER,NEXT_PUBLIC_SOLANA_RPC_PRIMARY,NEXT_PUBLIC_SOLANA_RPC_FALLBACK&envDescription=Solana%20RPC%20configuration.%20See%20.env.example%20for%20defaults.&envLink=https%3A%2F%2Fgithub.com%2Fbenzaid32%2Fsolana-frontend-educational-module%2Fblob%2Fmain%2Ftoolkit%2Fstarter%2F.env.example&project-name=solana-frontend-starter&repository-name=solana-frontend-starter)

## What you get

- Next.js 14 (App Router) + React 18 + Tailwind CSS 3
- Official `anza-xyz/wallet-adapter` React packages wired up
- `@solana/web3.js` for all on-chain operations
- A real SOL transfer page with the full transaction lifecycle UI:
  - building → signing → submitting → confirming → confirmed / expired / error
- Account inspector page that reads the canonical five account fields live
- Environment-based primary and fallback RPC endpoints
- Priority fee picker (off / auto / manual) with an in-UI explanation
- Solana Explorer links everywhere a user cares about
- No mock data

## Requirements

- Node 18.18 or newer
- A Solana wallet browser extension. Tested with Phantom and Solflare.
- Devnet SOL. Get it at `https://faucet.solana.com`.

## Quickstart

```bash
# 1. Install
npm install

# 2. Configure RPC (optional but recommended)
cp .env.example .env.local
# edit .env.local if you have a private RPC (Helius, Triton, QuickNode, etc.)

# 3. Run the dev server
npm run dev
# open http://localhost:3000
```

That is the zero-to-dApp path. Connect a wallet, grab some Devnet SOL from the
faucet, and send it to any address.

## Environment variables

All RPC configuration happens in `.env.local`. See `.env.example`.

| Variable                            | Purpose                                                            | Default                              |
| ----------------------------------- | ------------------------------------------------------------------ | ------------------------------------ |
| `NEXT_PUBLIC_SOLANA_CLUSTER`        | `devnet`, `testnet`, or `mainnet-beta`                             | `devnet`                             |
| `NEXT_PUBLIC_SOLANA_RPC_PRIMARY`    | Primary RPC URL. Use a private endpoint in production.             | `clusterApiUrl(cluster)`             |
| `NEXT_PUBLIC_SOLANA_RPC_FALLBACK`   | Fallback RPC URL used if the primary fails.                        | `clusterApiUrl(cluster)`             |

Why a fallback? Public Solana RPC endpoints are rate-limited and have no SLA,
per the official production-readiness guidance. Shipping without a fallback is
a common hackathon failure.

## Project layout

```text
src/
  app/
    layout.tsx             # RootLayout, wraps app in providers
    page.tsx               # Landing page
    transfer/page.tsx      # SOL transfer with full tx lifecycle
    account/page.tsx       # On-chain account inspector
    globals.css
  components/
    providers.tsx          # ConnectionProvider + WalletProvider + Modal
    site-header.tsx        # Nav + wallet button + cluster badge
    site-footer.tsx
    wallet-button.tsx      # SSR-safe wrapper for WalletMultiButton
    tx-status.tsx          # Confirmation-lifecycle UI
    priority-fee-picker.tsx
    wordmark.tsx
  lib/
    cluster.ts             # Cluster + Explorer URL helpers
    connection.ts          # Primary + fallback RPC + withRpcFallback()
    transactions.ts        # Transaction builder + confirm-with-timeout
    utils.ts

.env.example
.nvmrc                     # Node 20
LICENSE                    # MIT
PUBLISH.md                 # standalone publish guide (optional)
```

CI lives at the repo root (`.github/workflows/ci.yml`) and runs
`typecheck → lint → build` against this folder on every push.

## Quality gates

The starter ships with a CI pipeline that every push runs through:

```bash
npm run typecheck   # tsc --noEmit   → zero errors
npm run lint        # next lint      → zero warnings
npm run build       # next build     → 4 routes prerender as static
```

All three pass locally and on GitHub Actions on a clean install. See
`.github/workflows/ci.yml`.

## What each example teaches

- `transfer/page.tsx` — the confirmation-safe transaction pattern:
  fetch fresh blockhash with `confirmed` commitment, build the transaction,
  ask the wallet to sign, submit via RPC, confirm against
  `lastValidBlockHeight`, and handle expiry and on-chain failure explicitly.
- `account/page.tsx` — the account model in practice. Shows the five fields
  that every Solana account has: lamports, data, owner, executable, rentEpoch.
- `priority-fee-picker.tsx` — how to expose compute-unit pricing to users
  without scaring them.
- `connection.ts` — how to actually build RPC fallback logic, not just talk
  about it.

## Using the starter as your hackathon base

1. Clone this folder into your own repo or copy it into a new Next.js app.
2. Replace `src/app/page.tsx` with your landing page.
3. Keep `providers.tsx`, `tx-status.tsx`, `connection.ts`, and
   `transactions.ts` — they handle the Solana-specific UX so you don’t have to.
4. Swap Devnet for your production cluster by updating `.env.local`.
5. Add your own pages under `src/app/<feature>/page.tsx`.

## Honest limits

- Mobile Wallet Adapter (MWA) is not bundled here. MWA officially supports
  Android and Chrome on Android. There is no official iOS support yet, per
  Solana Mobile docs, and pretending otherwise hurts users.
- This starter uses `@solana/web3.js` 1.x and `anza-xyz/wallet-adapter` React
  packages — the current mainstream stack and what `create-solana-dapp`
  generates today. If you want to adopt the newer `@solana/kit` +
  `@solana/react-hooks` stack later, the rest of the UI patterns still apply.

## References

- Solana frontend docs: `https://solana.com/docs/frontend`
- Wallet Adapter: `https://github.com/anza-xyz/wallet-adapter`
- Accounts model: `https://solana.com/docs/core/accounts`
- Transactions: `https://solana.com/docs/core/transactions`
- Confirmation guidance: `https://solana.com/developers/guides/advanced/confirmation`
- Priority fees: `https://solana.com/developers/guides/advanced/how-to-use-priority-fees`
- Production readiness: `https://solana.com/docs/payments/production-readiness`
- Solana Mobile: `https://docs.solanamobile.com/`
