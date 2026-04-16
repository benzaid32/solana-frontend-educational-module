---
marp: true
theme: kyiv-solana
paginate: true
title: "Lecture 1 — From Web2 UI to Solana Frontend Architecture"
author: "Superteam Ukraine"
---

<!-- _class: cover -->

<p class="kicker">Superteam Ukraine · Frontend Module · Lecture 01</p>

# From Web2 UI to Solana frontend architecture.

#### A mental model for developers heading into Colosseum.

---

<!-- _class: divider -->

#### Session goals

# Why Solana frontend engineering is **a different discipline** — and why the differences are the point.

---

## What you will leave with

- A clear picture of the **official Solana JS stack**, and when to use each piece.
- The **account model**, from a frontend developer's perspective.
- How **transactions** actually flow from click to confirmation.
- The **key environmental differences** that break Web2 assumptions.

<div class="callout">
Every concept in this deck is sourced from official Solana documentation. No speculation, no hype.
</div>

---

## The official frontend stack

<div class="cols">
<div>

#### Modern path

- `@solana/kit` — low-level SDK
- `@solana/client` — JSON-RPC client
- `@solana/react-hooks` — React integration

</div>
<div>

#### Compat path

- `@solana/web3.js` 1.x — the classic SDK
- `@solana/web3-compat` — migration bridge

</div>
</div>

<div class="callout">
For Colosseum: start with <strong>web3.js 1.x + Wallet Adapter</strong> (battle-tested, everywhere). Graduate to <code>@solana/kit</code> as your app matures.
</div>

<p class="footnote">Source: <a href="https://solana.com/docs/frontend">solana.com/docs/frontend</a></p>

---

## The account model in one slide

<div class="cols">
<div>

Every account in Solana has **five canonical fields**:

- `lamports` — SOL balance in lamports (1 SOL = 10⁹ lamports)
- `data` — raw bytes the owner program interprets
- `owner` — program authorized to mutate this account
- `executable` — is this account a program?
- `rent_epoch` — bookkeeping for rent

</div>
<div>

<div class="callout warn">
Only the <strong>owner program</strong> can modify an account's data or debit lamports. A frontend never owns state — it reads, and it submits.
</div>

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/docs/core/accounts">solana.com/docs/core/accounts</a></p>

---

<!-- _class: quote -->

## A frontend is a **witness** of on-chain state and a **courier** of user intent — not the source of truth.

---

## Transactions, atomically

<div class="cols">
<div>

A transaction is a **bundle** of instructions signed by a fee payer.

- If **any** instruction fails, the whole transaction is reverted.
- State changes are atomic. The user pays fees regardless.
- Max transaction size: **1232 bytes**.

</div>
<div>

<div class="callout">
Practical impact: never design a UI that "half-succeeds" on chain. Either a transaction confirms or it doesn't.
</div>

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/docs/core/transactions">solana.com/docs/core/transactions</a></p>

---

## The confirmation lifecycle

<div class="cols-3">
<div>
<p class="label">Step 1</p>
Fetch a fresh <code>blockhash</code> and <code>lastValidBlockHeight</code>.
</div>
<div>
<p class="label">Step 2</p>
Build, sign, submit. Track the signature.
</div>
<div>
<p class="label">Step 3</p>
Wait for <strong>confirmed</strong> commitment against <code>lastValidBlockHeight</code>.
</div>
</div>

<div class="stitch"></div>

- Blockhashes are valid ~**60–90 seconds**.
- If the window closes, the transaction **expires**.
- Your UI must express this explicitly — no infinite spinners.

<p class="footnote">Source: <a href="https://solana.com/developers/guides/advanced/confirmation">Confirmation guide</a></p>

---

## What breaks Web2 intuition

<div class="cols">
<div>

#### Speed is real but bounded

Target slot time is **~400 ms**. Congestion happens. Priority fees exist for a reason.

#### Public RPC is not production

Public Solana RPC endpoints are rate-limited and have **no SLA**.

</div>
<div>

#### Wallets are external

Your UI can never sign. It can only **ask**.

#### Fees are paid even on failure

Users pay for failed transactions. Your UI must explain this.

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/docs/payments/production-readiness">Production readiness</a></p>

---

<!-- _class: divider -->

#### Hands on

# You will build an **account viewer** that reads live data from Devnet using the official stack.

---

## Assignment 1 — live recap

<div class="cols">
<div>

- Install `@solana/react-hooks` and `@solana/client` from npm.
- Connect to Devnet using the official provider.
- Accept any base58 address.
- Display **SOL balance + the five account fields**.
- Link to Solana Explorer for verification.

</div>
<div>

<div class="callout ok">
Success criteria live in <code>assignments/assignment-1.md</code>. Reviewers pull, run, and verify against Explorer.
</div>

</div>
</div>

---

## Quiz 1 — topics covered

- The official Solana frontend stack and what each package does.
- The five fields every account has, and who can modify them.
- Why transactions are **atomic**, and what "expired" means.
- Why public RPC is not production-grade.

<div class="callout">
Full quiz with 10 MCQs, 2 open-ended questions, and answer keys: <code>quizzes/quiz-1.md</code>.
</div>

---

<!-- _class: divider -->

#### End of Lecture 01

# Next: **Wallets & transaction UX.**

How Wallet Adapter wires into React, how to build a trust-worthy signature flow, and how to make expiry feel intentional.

---

<!-- _class: cover -->

## References

- Solana frontend docs — solana.com/docs/frontend
- Accounts model — solana.com/docs/core/accounts
- Transactions — solana.com/docs/core/transactions
- Confirmation — solana.com/developers/guides/advanced/confirmation
- Production readiness — solana.com/docs/payments/production-readiness
