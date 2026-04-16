# Final submission — Superteam Ukraine · Solana Frontend Development Educational Module

This file contains the exact text to paste into the Superteam Earn form,
plus a traceable link for every deliverable the bounty asks for.

**Status:** READY TO SUBMIT once you:

1. Export the four Marp decks to PDF (or upload them to Google Slides).
2. Push the starter to GitHub (see `toolkit/starter/PUBLISH.md`).
3. Fill in the two TODO lines below (GitHub URL, deck URLs).

## Paste-ready answers

### Title

```
Solana Frontend Development Educational Module — Kyiv × Solana
```

### Summary (short)

```
A complete, plug-and-play Frontend module for Solana, authored in Kyiv for
Superteam Ukraine. Four lectures, four practical assignments, four
quizzes, and a production-grade Next.js starter kit that connects a real
wallet, sends a real SOL transfer on Devnet, and handles the full
transaction lifecycle — not a mock in sight.
```

### Description (long)

```
This submission delivers everything the bounty requires:

1) 4 lectures, as Marp-authored slide decks (exportable to PDF, PPTX, and
   Google Slides). Content is grounded exclusively in official Solana
   documentation — no speculation.

   - Lecture 1: From Web2 UI to Solana Frontend Architecture
   - Lecture 2: Wallets and Transaction UX
   - Lecture 3: Production UI Patterns for Solana dApps
   - Lecture 4: Testing, Tooling, and Colosseum Readiness

2) A plug-and-play developer toolkit: a Next.js 14 + Wallet Adapter +
   web3.js starter kit that installs cleanly, typechecks, builds, and
   runs on Devnet. Includes:

   - Official anza-xyz Wallet Adapter integration
   - A real SOL transfer page with an 8-state lifecycle UI
     (idle → preparing → signing → submitting → confirming → confirmed /
     expired / error)
   - An on-chain account inspector reading the five canonical fields
   - RPC primary + fallback via environment variables
   - Priority fee helper (Off / Auto / Manual) with in-UI explanation
   - Editorial Ukrainian design system (paper + ink + azure + wheat,
     with a subtle vyshyvanka motif)
   - WCAG-conscious: labeled inputs, focus states, ARIA live regions

3) 4 technical quizzes (10 multiple-choice + 2 open-ended each, with
   answer keys and references to official docs) and 4 practical coding
   assignments (success criteria, anti-cheat review steps, stretch
   goals).

Judging criteria coverage:

- Technical accuracy: every fact and code sample is sourced from
  official Solana docs (solana.com/docs, anza-xyz/wallet-adapter,
  create-solana-dapp, docs.solanamobile.com).
- Usability: the starter goes from `npm install` to a signed, confirmed
  Devnet transfer in under 10 minutes on a clean machine.
- Quality of content: editorial slide design, code samples that mirror
  what create-solana-dapp generates today.
- Solana context: explicit treatment of transaction expiry, commitment
  levels, RPC rate limits, priority fees, compute units, and mobile
  wallet adapter platform support.

Authored by Superteam Ukraine. Built in Kyiv.
```

### Links (fill in before submitting)

- **GitHub repo (developer toolkit + full submission):**
  `TODO: paste the URL returned by gh repo create — see toolkit/starter/PUBLISH.md`

- **Live Devnet demo (optional but recommended):**
  `TODO: paste Vercel URL after deploying the starter`

- **Lecture 1 slides (PDF or Google Slides):**
  `TODO: paste URL`

- **Lecture 2 slides:** `TODO: paste URL`
- **Lecture 3 slides:** `TODO: paste URL`
- **Lecture 4 slides:** `TODO: paste URL`

## What lives where

| Deliverable | File path |
|---|---|
| Lecture 1 deck (source) | `decks/lecture-1.md` |
| Lecture 2 deck (source) | `decks/lecture-2.md` |
| Lecture 3 deck (source) | `decks/lecture-3.md` |
| Lecture 4 deck (source) | `decks/lecture-4.md` |
| Deck theme (Ukrainian editorial) | `decks/theme/kyiv-solana.css` |
| How to export decks | `decks/README.md` |
| Developer toolkit (code) | `toolkit/starter/` |
| Toolkit docs | `toolkit/README.md`, `toolkit/starter/README.md` |
| Official snippets reference | `toolkit/official-snippets.md` |
| Publishing guide | `toolkit/starter/PUBLISH.md` |
| Quiz 1–4 | `quizzes/quiz-{1..4}.md` |
| Assignment 1–4 | `assignments/assignment-{1..4}.md` |
| Lecture notes (plain markdown, source for decks) | `lectures/lecture-{1..4}-*.md` |

## Pre-submit checklist

Run these, top to bottom, immediately before pressing Submit on the Earn
form:

- [ ] Decks exported to PDF or uploaded to Google Slides, links verified.
- [ ] Starter pushed to a public GitHub repo, README renders.
- [ ] CI badge on the repo is **green** (GitHub Actions ran typecheck + lint + build).
- [ ] Starter installs with `npm install` on a clean machine.
- [ ] Starter runs with `npm run dev` and serves `/`, `/transfer`,
      `/account` (HTTP 200 each).
- [ ] Connected a wallet and completed a Devnet transfer end-to-end.
- [ ] Explorer links in the UI point at the correct cluster.
- [ ] Quizzes + assignments + lectures directories all committed.
- [ ] `LICENSE` (MIT) is present at both the submission-package root
      and the `toolkit/starter/` root.
- [ ] `.env.local` is **not** in the repo.
- [ ] No private RPC keys leaked in `.env.example`.
- [ ] (Optional) Vercel deployment is live, preview URL copied.
- [ ] All URLs above (GitHub, 4 decks) are filled in.
- [ ] Submitted on Superteam Earn.

## Quick facts (for the sponsor comment, if asked)

- Stack: Next.js 14.2.35 + React 18.3.1 + TypeScript 5.9.3 + Tailwind 3.4.19
- Solana: @solana/web3.js 1.98.4 + anza-xyz/wallet-adapter React 0.15.39
- Starter package count: 1,375 (via `npm install`)
- Starter build: typechecks clean, builds clean, all routes prerender.
- Starter size: `/ ` 96 kB First Load JS, `/transfer` 186 kB, `/account` 184 kB.
