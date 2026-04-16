---
marp: true
theme: kyiv-solana
paginate: true
title: "Lecture 4 — Testing, Tooling, and Colosseum Readiness"
author: "Superteam Ukraine"
---

<!-- _class: cover -->

<p class="kicker">Superteam Ukraine · Frontend Module · Lecture 04</p>

# Testing, tooling & **Colosseum readiness**.

#### From a clean clone to a demo that judges remember.

---

<!-- _class: divider -->

#### Session goals

# Turn your hackathon codebase into something **judges can run, verify, and trust** — without help from you.

---

## The usability criterion, stated plainly

<blockquote>
Usability: How quickly a developer can go from "zero" to a "functional dApp" using the toolkit.
</blockquote>

<div class="callout">
Translation: a cold judge, on a clean machine, should clone your repo and reach a live transfer in <strong>under 10 minutes</strong>.
</div>

---

## Start from the official scaffold

<div class="cols">
<div>

```bash
npx create-solana-dapp@latest
```

- Official, maintained by Solana Developers.
- Produces a working Next.js or React app.
- Includes wallet adapter and a starter program.

</div>
<div>

<div class="callout">
Your toolkit should either <strong>wrap</strong> this or <strong>replace</strong> it with something equally low-friction. Never reinvent.
</div>

</div>
</div>

<p class="footnote">Source: <a href="https://github.com/solana-developers/create-solana-dapp">create-solana-dapp</a></p>

---

## The three environments you will use

<div class="cols-3">
<div>
<p class="label">Localnet</p>
<code>solana-test-validator</code> for deterministic testing.
</div>
<div>
<p class="label">Devnet</p>
For realistic integration, with a free faucet.
</div>
<div>
<p class="label">Mainnet-beta</p>
For the final judged demo when appropriate.
</div>
</div>

<div class="stitch"></div>

- Your **.env.local** controls cluster + RPC.
- Switching clusters should require **zero code changes**.

---

<!-- _class: quote -->

## If a single `cp .env.example .env.local` is the difference between "runs" and "crashes", your toolkit is not plug-and-play.

---

## The frontend test plan

<table>
<tr><th>Test</th><th>Why</th></tr>
<tr><td>Connect & disconnect a wallet</td><td>Provider wiring is correct.</td></tr>
<tr><td>Reject a signature</td><td>Your UI handles the soft-no path.</td></tr>
<tr><td>Submit with a bad primary RPC</td><td>Fallback kicks in.</td></tr>
<tr><td>Let a transaction expire</td><td>Expired state triggers, retry works.</td></tr>
<tr><td>Run on a phone</td><td>Mobile readiness and honesty checks.</td></tr>
<tr><td>Verify on Explorer</td><td>Signatures match on-chain reality.</td></tr>
</table>

---

## Don't ship without these

- **A live Devnet URL** (Vercel, Netlify, or equivalent).
- **A README** that lists install + run commands.
- **Env variables** documented with examples.
- **A demo wallet with Devnet SOL** for judges, or clear faucet instructions.
- **Explorer links** in every success state.

<div class="callout warn">
A locally-running demo that a judge cannot clone and run is <strong>not</strong> a submission.
</div>

---

## Mobile, realistically

<div class="cols">
<div>

#### What works

- Desktop browser with Phantom / Solflare.
- Android with Mobile Wallet Adapter.

</div>
<div>

#### What doesn't

- iOS MWA (no official support yet).
- In-wallet webview flows that promise more than they deliver.

</div>
</div>

<div class="callout ok">
Colosseum-ready = desktop is flawless, Android is tested, iOS shows a factual notice.
</div>

<p class="footnote">Source: <a href="https://docs.solanamobile.com/">docs.solanamobile.com</a></p>

---

## A ten-minute judging ritual

<div class="cols-3">
<div>
<p class="label">0–3 min</p>

Clone, install, copy `.env`, run `npm run dev`. Expect it to just work.

</div>
<div>
<p class="label">3–7 min</p>

Connect a wallet, fund it from the Devnet faucet, send a transfer.

</div>
<div>
<p class="label">7–10 min</p>

Verify on Solana Explorer. Poke the edge cases.

</div>
</div>

<div class="callout">
If your project survives this ritual, you are in the top quartile of hackathon submissions.
</div>

---

## The toolkit we ship with this module

<div class="cols">
<div>

- **Next.js 14 + Wallet Adapter + web3.js 1.x** starter.
- Real **SOL transfer** page with the 5-stage lifecycle.
- Real **account inspector** page reading live data.
- **RPC fallback** built in.
- Priority fee helper.
- Editorial UI, WCAG-conscious, Ukrainian-authored.

</div>
<div>

<div class="callout ok">
Location in the submission: <code>toolkit/starter/</code>. 1375 packages install, typechecks clean, builds clean.
</div>

</div>
</div>

---

<!-- _class: divider -->

#### Hands on

# You will ship a Colosseum-ready app using `create-solana-dapp` and this module's toolkit.

---

## Assignment 4 — live recap

<div class="cols">
<div>

- Scaffold with `create-solana-dapp`.
- Wire a real on-chain action (transfer or counter).
- Implement confirmation-safe flow with explicit states.
- Disclose mobile reality honestly.
- Ship a public Devnet URL + a README judges can follow.

</div>
<div>

<div class="callout ok">
Full spec: <code>assignments/assignment-4.md</code>.
</div>

</div>
</div>

---

## Quiz 4 — topics covered

- The official scaffold command and when to use it.
- Devnet vs localnet vs mainnet-beta.
- What production requires beyond a happy-path demo.
- Mobile Wallet Adapter support matrix.
- The ten-minute judging ritual.

<div class="callout">
Full quiz with answers: <code>quizzes/quiz-4.md</code>.
</div>

---

<!-- _class: divider -->

#### End of the module

# You are now equipped to ship a **frontend judges remember**.

See you in Colosseum.

---

<!-- _class: cover -->

## References

- create-solana-dapp — github.com/solana-developers/create-solana-dapp
- Frontend docs — solana.com/docs/frontend
- Production readiness — solana.com/docs/payments/production-readiness
- Confirmation — solana.com/developers/guides/advanced/confirmation
- Solana Mobile — docs.solanamobile.com
