# Assignment 3

## Title

Production-grade transaction UI with RPC failover and accessible components

## Goal

Take a working Devnet dApp and harden it for realistic production conditions: RPC instability, congestion, failing wallets, and accessibility expectations. This mirrors what Colosseum and Superteam sponsors actually review.

## Prerequisites

- Assignment 2 completed (or a functionally equivalent Devnet transfer app)
- Two RPC endpoints available, for example a primary Helius, QuickNode, or similar, plus `clusterApiUrl('devnet')` as a fallback

## Scope

Extend the dApp from Assignment 2 so that:

1. RPC is configured via environment variables, not hardcoded.
2. The `ConnectionProvider` reads from the primary RPC and falls back to a secondary RPC if the primary fails.
3. The UI gracefully handles:

   - Wallet connection rejection
   - Wallet not installed
   - Network slowness with a visible "network is slow" banner
   - Transaction expiration with a dedicated "expired, retry" flow
   - Generic unknown error with a minimal error surface that logs details

4. Accessibility:

   - All inputs have `label` associations
   - Color contrast meets WCAG 2.1 AA
   - The app is fully keyboard operable
   - Focus states are visible

5. Include a "Priority fee" helper:

   - Off, Auto, or Manual (with explicit compute unit price input)
   - Explain the tradeoff in plain language in the UI

## Deliverables

- GitHub repo
- Public Devnet demo URL or screen recording
- README describing:
  - Env vars for RPC configuration
  - How to run locally
  - How the priority fee flow behaves

## Success Criteria

- Unplugging the primary RPC (e.g., using an invalid URL) still allows the app to function via the fallback
- Rejecting the wallet signature shows a clear actionable message, not a crash
- Forcing a stale blockhash (e.g., waiting beyond validity window) produces an "expired" state with retry that succeeds on retry
- Lighthouse accessibility score 90 or above on the main page
- Priority fee UI explains what it does before the user signs

## Stretch Goals

- Add telemetry for failures (e.g., Sentry) using only opt-in logging
- Offer a "slow network mode" that prefers `finalized` commitment for critical confirmations

## Anti-cheat and Review

Reviewers should flip the primary RPC to a bad URL in `.env`, attempt a transfer, and confirm the app still succeeds using the fallback. They should run Lighthouse accessibility and confirm the score.

## References

- `https://solana.com/docs/payments/production-readiness`
- `https://solana.com/developers/guides/advanced/how-to-use-priority-fees`
- `https://www.w3.org/WAI/standards-guidelines/wcag/`
- `https://github.com/anza-xyz/wallet-adapter`
