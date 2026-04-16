# Solana Frontend Development Educational Module

[![CI](https://github.com/benzaid32/solana-frontend-educational-module/actions/workflows/ci.yml/badge.svg)](https://github.com/benzaid32/solana-frontend-educational-module/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Submission for the Superteam Ukraine bounty
**"Solana Frontend Development Educational Module"**.

Everything the bounty asks for is in this folder — nothing outside it is
part of the submission.

## Bounty requirements → deliverables

| Bounty requirement                                              | Where it lives                                                              |
| --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **4 lectures** (Google Slides / Canva)                          | `decks/lecture-{1..4}.md` (Marp source) + `decks/README.md` (export guide)  |
| **Developer toolkit** (source code on GitHub, plug-and-play)    | `toolkit/starter/` — Next.js 14 + Wallet Adapter + web3.js, MIT-licensed    |
| **Interactive tests / assignments** (≥ 1 per lecture)           | `quizzes/quiz-{1..4}.md` (10 MCQ + 2 open-ended each) + `assignments/assignment-{1..4}.md` |

## Repository layout

```
submission-package/              ← pushed as github.com/benzaid32/solana-frontend-educational-module
├── README.md                    ← you are here
├── LICENSE                      ← MIT
├── .github/workflows/ci.yml     ← typecheck + lint + build on every push
│
├── decks/                       ← 4 slide decks (BOUNTY)
│   ├── lecture-1.md … lecture-4.md
│   ├── theme/kyiv-solana.css    ← shared editorial theme
│   └── README.md                ← 3 ways to export (web, VS Code, CLI)
│
├── lectures/                    ← longform teaching notes (BOUNTY)
│   └── lecture-{1..4}-*.md
│
├── toolkit/starter/             ← plug-and-play Next.js app (BOUNTY)
│   ├── README.md                ← run / deploy / adopt (Vercel button inside)
│   ├── PUBLISH.md               ← standalone publish guide (optional)
│   ├── LICENSE                  ← MIT
│   ├── .env.example · .nvmrc · .gitignore · .eslintrc.json
│   ├── next.config.mjs · tailwind.config.ts · tsconfig.json
│   └── src/
│       ├── app/{page,transfer,account,layout}.tsx
│       ├── components/{providers,site-header,tx-status,…}.tsx
│       └── lib/{cluster,connection,transactions,utils}.ts
│
├── quizzes/quiz-1.md … quiz-4.md        ← 4 quizzes (BOUNTY)
├── assignments/assignment-1.md … 4.md   ← 4 assignments (BOUNTY)
│
└── submission/SUBMISSION.md     ← paste-ready Earn form answers + final checklist
```

## Judging criteria coverage (just the facts)

| Criterion                | Evidence                                                                                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Technical Accuracy**   | Every fact and code sample cites official Solana docs (`solana.com/docs`, `anza-xyz/wallet-adapter`, `docs.solanamobile.com`). Inline comments link to the exact page implemented. |
| **Usability**            | `toolkit/starter/` installs cleanly, typechecks, lints, and builds. CI enforces all three on every push. Connect a wallet, fund from the Devnet faucet, send a real SOL transfer — under 10 minutes on a clean machine. |
| **Quality of Content**   | 4 Marp decks sharing the Kyiv × Solana editorial theme. Slide-by-slide longform notes. All content is structured with speaker notes, visual direction, and references. |
| **Solana Context**       | Explicit, *UI-level* treatment of: blockhash expiry + `lastValidBlockHeight`, commitment levels (`processed` / `confirmed` / `finalized`), priority fees + compute budget, RPC rate-limit reality, primary-plus-fallback RPC, Android-only Mobile Wallet Adapter support. |

## Review order (for a fast sponsor pass)

1. `submission/SUBMISSION.md` — what this submission is, in one page.
2. `decks/lecture-1.md` — open in Marp or the VS Code preview.
3. `toolkit/starter/README.md` — then `npm install && npm run dev` and
   send a real Devnet SOL transfer end-to-end.
4. Any `quizzes/quiz-*.md` + any `assignments/assignment-*.md`.

## Source policy

No speculation. Every fact, command, and code sample is grounded in
official Solana documentation:

- `https://solana.com/docs/frontend`
- `https://github.com/anza-xyz/wallet-adapter`
- `https://solana.com/docs/core/accounts`
- `https://solana.com/docs/core/transactions`
- `https://solana.com/docs/core/fees`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/developers/guides/advanced/how-to-use-priority-fees`
- `https://solana.com/docs/payments/production-readiness`
- `https://docs.solanamobile.com/`
- `https://github.com/solana-developers/create-solana-dapp`

## License

MIT (see `LICENSE` at the repo root and inside `toolkit/starter/`).
Hackathon teams may fork, copy, or strip down any part of the starter.

Authored by Superteam Ukraine. Built in Kyiv.
