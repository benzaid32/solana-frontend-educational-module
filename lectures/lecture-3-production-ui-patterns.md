# Lecture 3

## Title

Production-Ready UI Patterns for Solana dApps

## Slide 1: From Demo UI to Production UI

### Content

- Devnet demos often hide:
  - RPC instability
  - confirmation delays
  - fee decisions
  - account loading states
- Production UI must include:
  - loading states
  - empty states
  - recoverable error states
  - clear transaction status labels

### Speaker notes

This lecture moves from “can it work?” to “can users trust it?” A production-ready dApp is not defined only by code correctness, but by how it behaves under imperfect network conditions.

### Visual description

Before/after comparison: demo screen vs production screen with loading, error, and status handling.

---

## Slide 2: Use a Shared Runtime Instead of Ad Hoc State

### Content

Official `@solana/react-hooks` guide emphasizes:

- one shared client
- one `SolanaProvider`
- shared watchers and caches
- hook-based access to:
  - wallets
  - balances
  - accounts
  - transactions

UI takeaway:

- centralize Solana state
- do not duplicate RPC plumbing per component

### Speaker notes

This improves both performance and clarity. Teams that create one-off network logic in every component usually end up with inconsistent states and poor debugging visibility.

### Visual description

Architecture diagram:
`SolanaProvider -> hooks -> UI cards/forms/status panels`.

---

## Slide 3: Loading and Error States You Actually Need

### Content

Minimum state model for key screens:

- account view
  - loading
  - loaded
  - RPC error
- transaction action
  - idle
  - awaiting wallet
  - sending
  - confirmed
  - expired
  - failed
- token or balance data
  - loading
  - stale
  - refreshed

### Speaker notes

Don’t let students ship interfaces where every problem becomes “Something went wrong.” Solana has enough specific runtime conditions that the UI state model must be explicit.

### Visual description

State matrix table with rows for screen types and columns for supported states.

---

## Slide 4: RPC Reliability Must Influence UI Copy

### Content

Official production-readiness guide:

- public mainnet RPC endpoints are rate-limited and have no SLA
- production apps should use private RPC
- applications should consider redundant RPC configuration

UI implication:

- users should not be blamed for infra issues
- surface errors as:
  - temporary network issue
  - retryable action
  - degraded service state

### Speaker notes

A frontend team that understands infrastructure produces better copy. If RPC is the likely failure source, the user should see a retryable network explanation, not a vague product failure message.

### Visual description

Retry banner example with CTA buttons:
`Retry`, `Try backup RPC`, `View status`.

---

## Slide 5: Priority Fee UX Pattern

### Content

Official production-readiness guidance recommends:

- fresh blockhash
- competitive priority fee
- compute unit limit matched to estimated need

UI pattern:

- default to “recommended”
- expose advanced override only when useful
- show tradeoff:
  - lower fee, lower landing reliability
  - higher fee, better landing chance

### Speaker notes

This is a classic progressive disclosure opportunity. Most users should not have to tune advanced blockchain settings, but advanced users should not be blocked from doing so.

### Visual description

Three-tier fee selector:
`Economy`, `Recommended`, `Priority`.

---

## Slide 6: Accessibility and Mobile Are Not Optional

### Content

Production dApp UI should support:

- keyboard navigation
- readable feedback using text, not color alone
- large enough touch targets
- sticky mobile CTA for long pages
- visible status text for screen readers

When using wallet flows:

- label every action clearly
- avoid icon-only transaction meaning
- keep critical actions reachable on small screens

### Speaker notes

Many dApps still fail here. A strong submission should show that Web2-quality accessibility and mobile UX are compatible with Web3 product constraints.

### Visual description

Mobile mockup with sticky CTA at bottom and collapsible “Transaction details” section.

---

## Slide 7: UI Pattern Library for Hackathon Teams

### Content

Recommended reusable component set:

- wallet status badge
- network status pill
- transaction preview card
- transaction progress stepper
- fee explanation panel
- RPC warning banner
- empty-state card
- sponsor review checklist

### Speaker notes

The goal is to turn repeated Solana UX needs into reusable building blocks. This directly improves team speed in a hackathon setting.

### Visual description

Bento-style grid of reusable component cards with names only.

---

## Slide 8: Lecture 3 Summary

### Content

- Production-ready UI means handling real network behavior
- Shared runtime reduces duplicated Solana state logic
- RPC, fees, confirmation, and expiry all affect UX
- Mobile and accessibility decisions should be built in from the start

### Speaker notes

End by tying this lecture to usability scoring. Fast setup alone does not win; teams also need interfaces that stay understandable under real conditions.

### Visual description

Summary slide with four production principles and a footer: “Next: testing, toolkit, and hackathon execution”.

---

## References

- `https://solana.com/docs/frontend/react-hooks`
- `https://solana.com/docs/payments/production-readiness`
- `https://solana.com/docs/core/fees`
- `https://solana.com/developers/guides/advanced/confirmation`
