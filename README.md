# Solana Frontend Development Educational Module

[![Live demo](https://img.shields.io/badge/Live%20demo-kyiv--solana.vercel.app-000000?logo=vercel)](https://kyiv-solana.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Solana: Devnet](https://img.shields.io/badge/Solana-Devnet-9945FF)](https://faucet.solana.com)
[![Made in Kyiv](https://img.shields.io/badge/Made%20in-Kyiv-0057B7?labelColor=FFD500&color=0057B7)](https://ua.superteam.fun)

Submission for the Superteam Ukraine bounty **Solana Frontend
Development Educational Module**. Four lectures, a production-grade
Next.js starter, four quizzes, and four practical assignments — all
licensed MIT so hackathon teams can lift any piece of it verbatim.

- **Live starter (Devnet):** <https://kyiv-solana.vercel.app>
- **Repo:** <https://github.com/benzaid32/solana-frontend-educational-module>

## Deliverables

| Bounty requirement | Where it lives |
| --- | --- |
| 4 lectures (Google Slides / Canva) | `decks/lecture-{1..4}.md` (Marp source) and `decks/lecture-{1..4}.pdf` (exported) |
| Developer toolkit (plug-and-play) | `toolkit/starter/` — Next.js 14 + Wallet Adapter + web3.js |
| Interactive tests / assignments | `quizzes/quiz-{1..4}.md` + `assignments/assignment-{1..4}.md` |

## Repository layout

```
submission-package/
├── README.md
├── LICENSE                          MIT
├── .github/workflows/ci.yml         typecheck + lint + build on every push
│
├── decks/
│   ├── lecture-1.md … lecture-4.md  Marp sources
│   ├── lecture-1.pdf … lecture-4.pdf
│   ├── theme/kyiv-solana.css        shared editorial theme
│   └── README.md                    export instructions
│
├── lectures/                        longform teaching notes, slide-by-slide
│   └── lecture-{1..4}-*.md
│
├── toolkit/starter/                 the live Next.js app
│   ├── README.md
│   ├── LICENSE                      MIT
│   └── src/
│       ├── app/{page,transfer,account,layout}.tsx
│       ├── components/{providers,site-header,tx-status,…}.tsx
│       └── lib/{cluster,connection,transactions,utils}.ts
│
├── quizzes/quiz-1.md … quiz-4.md    10 MCQ + 2 open-ended each, with answer keys
├── assignments/assignment-1.md … 4.md   goals, success criteria, anti-cheat review
│
└── submission/SUBMISSION.md         paste-ready Earn form answers
```

## How the bounty criteria are covered

| Criterion | Evidence |
| --- | --- |
| Technical Accuracy | Every fact and code sample cites official Solana documentation (`solana.com/docs`, `anza-xyz/wallet-adapter`, `docs.solanamobile.com`). Inline comments point to the exact page each implementation follows. |
| Usability | The starter installs cleanly, typechecks, lints, and builds. From a fresh clone to a signed, confirmed Devnet transfer takes under ten minutes on a clean machine. |
| Quality of Content | Four decks sharing a single editorial theme (Kyiv × Solana — paper, ink, azure, wheat), authored slide-by-slide with speaker notes, visual direction, and references. |
| Solana Context | UI-level treatment of blockhash expiry and `lastValidBlockHeight`, commitment levels (`processed` / `confirmed` / `finalized`), priority fees and compute budget, RPC rate-limit realities, primary-plus-fallback RPC, and Android-only Mobile Wallet Adapter support. |

## Where to start

1. `submission/SUBMISSION.md` — what this submission is, on one page.
2. `decks/lecture-1.pdf` — the first lecture, in its final editorial form.
3. `toolkit/starter/README.md` — run it locally, or open the live demo
   above, connect a wallet on Devnet, and send a real SOL transfer.
4. One quiz and one assignment, picked at random.

## Sources

All content is grounded in the official Solana documentation:

- <https://solana.com/docs/frontend>
- <https://github.com/anza-xyz/wallet-adapter>
- <https://solana.com/docs/core/accounts>
- <https://solana.com/docs/core/transactions>
- <https://solana.com/docs/core/fees>
- <https://solana.com/developers/guides/advanced/confirmation>
- <https://solana.com/developers/guides/advanced/how-to-use-priority-fees>
- <https://solana.com/docs/payments/production-readiness>
- <https://docs.solanamobile.com/>
- <https://github.com/solana-developers/create-solana-dapp>

## License

MIT (see `LICENSE` at the repo root and inside `toolkit/starter/`).
Hackathon teams may fork, copy, or strip down any part of the starter.

Authored by Superteam Ukraine. Built in Kyiv.
