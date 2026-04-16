# Submission — Superteam Ukraine · Solana Frontend Development Educational Module

Paste-ready text for the Superteam Earn form, plus a verified link for
every deliverable the bounty asks for.

## Links

- **GitHub:** <https://github.com/benzaid32/solana-frontend-educational-module>
- **Live Devnet starter (Vercel):** <https://kyiv-solana.vercel.app>
- **Lecture 1 slides:** <https://github.com/benzaid32/solana-frontend-educational-module/blob/main/decks/lecture-1.pdf>
- **Lecture 2 slides:** <https://github.com/benzaid32/solana-frontend-educational-module/blob/main/decks/lecture-2.pdf>
- **Lecture 3 slides:** <https://github.com/benzaid32/solana-frontend-educational-module/blob/main/decks/lecture-3.pdf>
- **Lecture 4 slides:** <https://github.com/benzaid32/solana-frontend-educational-module/blob/main/decks/lecture-4.pdf>

## Paste-ready answers

### Title

```
Solana Frontend Development Educational Module — Kyiv × Solana
```

### Summary (short)

```
A complete, plug-and-play Frontend module for Solana, authored in Kyiv
for Superteam Ukraine. Four lectures, four practical assignments, four
quizzes, and a production-grade Next.js starter that connects a real
wallet, sends a real SOL transfer on Devnet, and handles the full
transaction lifecycle end-to-end.
```

### Description (long)

```
This submission delivers every item in the bounty scope:

1) Four lectures authored in Marp with a shared Kyiv × Solana editorial
   theme, exported to PDF and committed to the repo. Every fact and
   code sample is grounded in official Solana documentation.

   - Lecture 1: From Web2 UI to Solana Frontend Architecture
   - Lecture 2: Wallets and Transaction UX
   - Lecture 3: Production UI Patterns for Solana dApps
   - Lecture 4: Testing, Tooling, and Colosseum Readiness

2) A plug-and-play developer toolkit — a Next.js 14 + Wallet Adapter
   + web3.js starter that installs cleanly, typechecks, lints, builds,
   and is deployed live on Devnet:

   - Official anza-xyz Wallet Adapter (Phantom, Solflare, Ledger, and
     any Wallet Standard wallet auto-discovered)
   - A SOL transfer page with an explicit eight-state lifecycle UI
     (idle → preparing → signing → submitting → confirming → confirmed
     / expired / error), built on a fresh blockhash and a bounded
     confirmation loop
   - An account inspector reading the five canonical Solana account
     fields (lamports, data, owner, executable, rentEpoch)
   - RPC primary + fallback via environment variables, with an
     explicit failover helper
   - Priority fee helper (Off / Auto / Manual) using
     ComputeBudgetProgram, with in-UI explanation of when to use each
   - Editorial Ukrainian design system (paper, ink, azure, wheat, and
     a vyshyvanka stitch motif)
   - Accessibility: labelled inputs, focus states, and ARIA live
     regions for the lifecycle states

3) Four technical quizzes (ten multiple-choice plus two open-ended
   each, with answer keys citing official docs) and four practical
   assignments (goals, success criteria, anti-cheat review steps,
   stretch goals).

Judging criteria coverage:

- Technical accuracy: every fact and code sample cites official Solana
  docs (solana.com/docs, anza-xyz/wallet-adapter, create-solana-dapp,
  docs.solanamobile.com).
- Usability: the starter goes from a clean npm install to a signed,
  confirmed Devnet transfer in under ten minutes.
- Quality of content: one editorial theme across four decks, authored
  slide-by-slide with speaker notes, visual direction, and references.
- Solana context: explicit UI-level treatment of blockhash expiry and
  lastValidBlockHeight, commitment levels, priority fees and compute
  budget, RPC rate limits, primary-plus-fallback RPC, and Android-only
  Mobile Wallet Adapter support.

Authored by Superteam Ukraine. Built in Kyiv. Licensed MIT.
```

## What lives where

| Deliverable | Path |
| --- | --- |
| Lecture decks (source + PDF) | `decks/lecture-{1..4}.md` and `decks/lecture-{1..4}.pdf` |
| Deck theme | `decks/theme/kyiv-solana.css` |
| Developer toolkit | `toolkit/starter/` |
| Quizzes | `quizzes/quiz-{1..4}.md` |
| Assignments | `assignments/assignment-{1..4}.md` |
| Lecture notes (longform) | `lectures/lecture-{1..4}-*.md` |

## Verification status

- [x] Four decks exported to PDF and committed.
- [x] Starter typechecks, lints, and builds clean (verified locally
      and in the GitHub Actions workflow at `.github/workflows/ci.yml`).
- [x] `/`, `/transfer`, and `/account` compile and prerender as static
      (First Load JS: 96 kB / 186 kB / 184 kB).
- [x] Live on Devnet at <https://kyiv-solana.vercel.app>.
- [x] Devnet SOL transfer completed end-to-end through the UI.
- [x] Explorer links in the UI are cluster-aware.
- [x] `LICENSE` (MIT) at the submission root and inside `toolkit/starter/`.
- [x] `.env.local` is not tracked; `.env.example` ships safe public defaults.

## Stack

- Next.js 14.2.35 · React 18.3.1 · TypeScript 5.9.3 · Tailwind 3.4.19
- `@solana/web3.js` 1.98.4 · `@solana/wallet-adapter-react` 0.15.39
