# Quiz 3

## Topic

Production UI Patterns for Solana dApps

## Format

10 multiple choice questions, 2 open-ended questions.

---

## Question 1

Which UI state is essential for any on-chain action and often missed by early builders?

- A. Light mode toggle
- B. Explicit loading, success, and expired states tied to the real transaction lifecycle
- C. Auto-dismissing toast only
- D. Silent background execution with no UI feedback

Correct answer: `B`

---

## Question 2

Why should RPC reliability directly affect UI design decisions?

- A. It does not, UI and RPC are unrelated
- B. Because public RPC endpoints are rate-limited and can fail, so the UI must show actionable error and fallback states
- C. Because RPC always works, so no UI adjustment is needed
- D. Because RPC outages are illegal

Correct answer: `B`

---

## Question 3

Which pattern is appropriate when RPC is slow or rate-limited?

- A. Retry without user feedback indefinitely
- B. Backoff, cache the last known state, and show a "Network is slow" banner with retry
- C. Crash the UI
- D. Ask the user to switch wallets

Correct answer: `B`

---

## Question 4

Which of these is a best practice for priority fee UX?

- A. Always use a hardcoded fee
- B. Explain the purpose of the fee, allow auto or manual modes, and display the cost before signing
- C. Charge the user twice for safety
- D. Hide priority fees from the user

Correct answer: `B`

---

## Question 5

Which statement is accurate about accessibility for dApp frontends?

- A. Accessibility is optional since dApp users are technical
- B. WCAG 2.1 accessibility standards apply to dApps like any other web app, including color contrast and keyboard navigation
- C. Only wallet buttons need accessibility
- D. Accessibility only matters on mobile

Correct answer: `B`

---

## Question 6

Which is a correct Solana-specific confirmation UX pattern?

- A. Show only "Transaction sent" and never update
- B. Show a sequence of states: signing, submitting, confirming, confirmed or expired with actionable retry
- C. Rely purely on toasts
- D. Force the user to open Solana Explorer manually

Correct answer: `B`

---

## Question 7

What is a strong reason to show the user a Solana Explorer link after a successful transaction?

- A. Decoration
- B. Transparency and trust, letting the user verify what happened on chain
- C. Forced marketing
- D. Required by Solana protocol

Correct answer: `B`

---

## Question 8

Which of the following is a Solana-specific UX risk that pure Web2 UX does not cover?

- A. Button hover states
- B. Long-running fees, wallet approval prompts, and transaction expiration
- C. Logo rendering
- D. Dark mode

Correct answer: `B`

---

## Question 9

Which is the safer pattern for critical flows like payments?

- A. Optimistic UI only, without confirmation
- B. Confirmed or finalized state required before showing "completed" status for money flows
- C. Always wait for `processed` only
- D. Skip server retries entirely

Correct answer: `B`

---

## Question 10

Why should a production dApp not rely on a single public RPC?

- A. Public RPCs cost too much
- B. Public RPCs are rate-limited, have no SLA, and can fail, per official production readiness docs
- C. They are not allowed by law
- D. They reject all write requests

Correct answer: `B`

---

## Open-ended Question 1

Describe the minimum set of UI states your transaction submission flow should represent and why each matters.

Reference expectation:
Answers should include idle, pre-sign explanation, signing, submitting, confirming, confirmed, expired, and error. Each state reduces user uncertainty and supports recovery.

---

## Open-ended Question 2

Give two concrete UI strategies to respond to RPC instability.

Reference expectation:
Answers include: fallback RPC endpoint, exponential backoff, cached last known on-chain data, clear error message, retry CTA, banner for network congestion.

---

## References

- `https://solana.com/docs/frontend`
- `https://solana.com/docs/payments/production-readiness`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/developers/guides/advanced/how-to-use-priority-fees`
