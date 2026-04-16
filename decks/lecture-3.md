---
marp: true
theme: kyiv-solana
paginate: true
title: "Lecture 3 — Production UI Patterns for Solana dApps"
author: "Superteam Ukraine"
---

<!-- _class: cover -->

<p class="kicker">Superteam Ukraine · Frontend Module · Lecture 03</p>

# Production UI patterns, from **demo to mainnet**.

#### What separates a hackathon demo from an app users trust.

---

<!-- _class: divider -->

#### Session goals

# Design a Solana frontend that survives **real users**, **real congestion**, and **real RPC failures**.

---

## The shift nobody warns you about

<div class="cols">
<div>

#### Demo reality

- One wallet, one network, one RPC, no users.
- "Happy path" dominates the screen.
- Errors are console.log'd.

</div>
<div>

#### Production reality

- Congestion, rate limits, wallet rejects, dropped connections.
- Happy path is **the minority of sessions**.
- Errors are a first-class UI concern.

</div>
</div>

<div class="callout warn">
If your UI only looks good during success, it isn't done.
</div>

---

<!-- _class: quote -->

## A production UI **tells the truth** about every state — fast, slow, failed, expired.

---

## State, by the numbers

<div class="cols-3">
<div>
<p class="metric">8<small>states per tx</small></p>
</div>
<div>
<p class="metric">2<small>RPC endpoints minimum</small></p>
</div>
<div>
<p class="metric">0<small>infinite spinners allowed</small></p>
</div>
</div>

<div class="stitch"></div>

States: **idle → preparing → signing → submitting → confirming → confirmed | expired | error**.

Every state gets a label, a color, and a next-step CTA.

---

## RPC reliability drives UI design

<div class="cols">
<div>

#### Facts from official docs

- Public mainnet RPC is **rate-limited** and carries **no SLA**.
- Private RPC + a fallback is the minimum for production.
- Congestion is real and **affects your UI**, not just your backend.

</div>
<div>

```ts
async function withRpcFallback<T>(
  run: (c: Connection) => Promise<T>,
) {
  try { return await run(primary); }
  catch { return await run(fallback); }
}
```

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/docs/payments/production-readiness">Production readiness</a></p>

---

## Error taxonomy (the ones you must own)

<table>
<tr><th>Category</th><th>Origin</th><th>UI response</th></tr>
<tr><td>Wallet rejected</td><td>User</td><td>Soft notice, no guilt. "No changes. Try again when ready."</td></tr>
<tr><td>Wallet not installed</td><td>Browser</td><td>Direct link to install the wallet.</td></tr>
<tr><td>RPC rate-limited</td><td>Network</td><td>Retry via fallback. Show a "network is busy" banner.</td></tr>
<tr><td>Transaction expired</td><td>Timing</td><td>Dedicated expired state. Retry with fresh blockhash.</td></tr>
<tr><td>On-chain failure</td><td>Program</td><td>Show error details. Link to Explorer for transparency.</td></tr>
</table>

---

## Priority fee UX, in one flow

<div class="cols">
<div>

- Expose **Off / Auto / Manual** as a segmented control.
- Default to **Auto** for beginners.
- Show a one-line explanation inline, not hidden in a tooltip.
- Display the final cost **before** the signature request.

</div>
<div>

<div class="callout">
Priority fees are not optional UI. During congestion, they are the reason a transaction gets included at all.
</div>

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/developers/guides/advanced/how-to-use-priority-fees">Priority fees</a></p>

---

## Accessibility is not optional

<div class="cols">
<div>

#### WCAG 2.1 AA basics

- Color contrast for all text and icons.
- Keyboard-operable inputs and buttons.
- Visible focus states.
- ARIA live regions for status updates.

</div>
<div>

#### Why it matters on Solana

- Money flows need to be usable for everyone.
- Screen readers must announce each transaction stage.
- Fast UIs without accessibility are still **inaccessible**.

</div>
</div>

<p class="footnote">Source: <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG 2.1</a></p>

---

## Optimistic UI — carefully

<div class="cols">
<div>

#### OK for

- Toggling a "like", re-ordering a list, pre-selecting an option.
- Anything **reversible** without on-chain cost.

</div>
<div>

#### Never OK for

- Money movement.
- NFT minting.
- Governance votes.

</div>
</div>

<div class="callout warn">
Wait for <strong>confirmed</strong> (or <strong>finalized</strong> for critical flows) before showing "success" on money paths.
</div>

---

## A production UI checklist

- [ ] Every transaction has 5 explicit on-screen states.
- [ ] A **primary + fallback RPC** is wired via env variables.
- [ ] Priority fee mode is visible **before** the signature request.
- [ ] Wallet rejection is handled as a first-class state, not an error.
- [ ] Every confirmation links to **Solana Explorer**.
- [ ] The page is keyboard-operable and color-contrast-safe.
- [ ] iOS MWA is **honestly** disclosed.

---

<!-- _class: divider -->

#### Hands on

# You will harden the Assignment 2 app into a **production-grade** transfer experience.

---

## Assignment 3 — live recap

<div class="cols">
<div>

- Env-based RPC primary + fallback.
- Graceful handling of rejection, slowness, expiry, and unknown errors.
- Accessible inputs, focus states, ARIA live regions.
- Priority fee helper with Off / Auto / Manual.
- Lighthouse accessibility score **≥ 90**.

</div>
<div>

<div class="callout ok">
Full spec: <code>assignments/assignment-3.md</code>.
</div>

</div>
</div>

---

## Quiz 3 — topics covered

- Minimum number of tx states for a production UI.
- Why RPC reliability is a UX concern.
- Priority fee UX best practices.
- When optimistic UI is safe and when it is not.
- Accessibility facts for crypto apps.

<div class="callout">
Full quiz with answers: <code>quizzes/quiz-3.md</code>.
</div>

---

<!-- _class: divider -->

#### End of Lecture 03

# Next: **Testing, tooling & Colosseum readiness.**

From `create-solana-dapp` to your demo day, without losing the weekend to a missing `.env`.

---

<!-- _class: cover -->

## References

- Production readiness — solana.com/docs/payments/production-readiness
- Confirmation — solana.com/developers/guides/advanced/confirmation
- Priority fees — solana.com/developers/guides/advanced/how-to-use-priority-fees
- WCAG — w3.org/WAI/standards-guidelines/wcag
