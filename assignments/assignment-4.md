# Assignment 4

## Title

Colosseum-ready dApp using `create-solana-dapp` with mobile-aware UX and confirmation-safe flow

## Goal

Ship a mini hackathon-grade dApp built on the official scaffold. The goal is to prove a learner can go from zero to a deployable, reviewable Solana frontend in one session, which directly matches the bounty's "zero to functional dApp" usability criterion.

## Prerequisites

- Node 18 or newer
- A Devnet wallet (desktop at minimum, mobile optional)
- Access to a primary RPC URL

## Scope

1. Scaffold a new project using the official command:

   ```bash
   npx create-solana-dapp@latest
   ```

   Pick a React or Next.js template.

2. Wire up the official Wallet Adapter providers and a minimal on-chain action:

   - SOL transfer OR
   - Calling a simple Anchor program instruction (e.g., counter increment)

3. Implement a confirmation-safe flow:

   - Fetch fresh blockhash with `confirmed` commitment right before signing
   - Show explicit states: Signing, Submitting, Confirming, Confirmed, Expired
   - Retry on expiry only, never loop silently

4. Mobile awareness:

   - If the app is opened on Android, allow Mobile Wallet Adapter use via a compatible wallet
   - If on iOS, show a clear notice: "Mobile wallet connection on iOS is not yet officially supported"
   - Do not pretend iOS MWA works

5. Write a README that, without any extra context:

   - Explains the project in one paragraph
   - Gives setup commands (`pnpm install`, `pnpm dev`, etc.)
   - States which RPC and cluster are used
   - Links to the deployed Devnet URL, if any

## Deliverables

- GitHub repo built on `create-solana-dapp`
- Devnet deployment (Vercel, Netlify, or similar) if feasible, otherwise a 2 minute demo video
- README covering install, run, demo
- A short `SOLANA-UX-NOTES.md` describing how the app handles RPC, confirmation, and mobile

## Success Criteria

- Judges can clone the repo and reach a running app in under 10 minutes following the README
- A happy-path transaction completes on Devnet with visible Explorer link
- The confirmation flow never leaves the user on an indeterminate spinner
- iOS users see an honest, factual message about MWA support
- The README clearly states Solana-specific considerations (RPC, priority fees, expiry)

## Stretch Goals

- Include a GitHub Action that runs `pnpm build` on push
- Add a Dockerfile so evaluators can run the frontend with a single command
- Add a basic Playwright test that hits the home page and verifies wallet button render

## Anti-cheat and Review

Reviewers:

1. Clone the repo fresh on a clean machine.
2. Follow the README.
3. Connect a Devnet wallet.
4. Execute the demo flow.
5. Observe transaction on Solana Explorer.
6. Attempt to reproduce the expiry retry flow with a stale connection.

## References

- `https://github.com/solana-developers/create-solana-dapp`
- `https://solana.com/docs/frontend`
- `https://solana.com/docs/payments/production-readiness`
- `https://docs.solanamobile.com/`
- `https://solana.com/developers/guides/advanced/confirmation`
