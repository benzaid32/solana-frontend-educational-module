# Quiz 4

## Topic

Testing, Tooling, and Colosseum Readiness

## Format

10 multiple choice questions, 2 open-ended questions.

---

## Question 1

Which official command scaffolds a Solana dApp based on current docs?

- A. `npx create-solana-dapp`
- B. `npm init solana`
- C. `npx solana-new-app`
- D. `yarn create anchor-app`

Correct answer: `A`

---

## Question 2

Which environment is intended for realistic integration testing with faucet-funded SOL?

- A. Localnet only
- B. Devnet
- C. Mainnet beta
- D. Testnet validator cluster for end users

Correct answer: `B`

---

## Question 3

Which is appropriate for deterministic unit-style tests of program-client interaction?

- A. Mainnet beta
- B. Devnet
- C. `solana-test-validator` localnet
- D. Fake RPC responses only

Correct answer: `C`

---

## Question 4

Which is a non-negotiable check before shipping to mainnet, per production readiness docs?

- A. Optional unit tests
- B. Dedicated private RPC with a fallback endpoint
- C. Disabling priority fees
- D. Avoiding explorer links

Correct answer: `B`

---

## Question 5

Which toolkit resource should be included to make a hackathon-ready frontend truly plug-and-play?

- A. A PDF only
- B. A starter repo with wallet adapter, transaction flow, error states, and environment-based RPC config
- C. An unrelated Next.js starter
- D. Only a Figma file

Correct answer: `B`

---

## Question 6

Which is a realistic risk to test for in a Solana frontend before shipping?

- A. SEO ranking
- B. Transaction expiry under slow RPC or congestion
- C. Emoji rendering
- D. Printer support

Correct answer: `B`

---

## Question 7

When is it acceptable to rely on `processed` commitment for user-facing state?

- A. For critical money flows
- B. For early UI hints only, never as final state for critical flows
- C. For final success state on payments
- D. Never, under any circumstance

Correct answer: `B`

---

## Question 8

Which matches the official Mobile Wallet Adapter behavior?

- A. Full iOS and Android support
- B. Android and Chrome on Android, no iOS support
- C. iOS only
- D. Desktop only

Correct answer: `B`

---

## Question 9

Which is a legitimate part of a Colosseum demo-day story?

- A. Faked transactions
- B. Clean confirmation flow, explorer links, error recovery, and mobile readiness
- C. Ignoring wallet UX
- D. Hiding errors

Correct answer: `B`

---

## Question 10

What is the role of repository documentation in a hackathon frontend submission?

- A. Optional
- B. Required, it shows judges how fast a developer can go from zero to a working dApp, which matches the usability judging criterion
- C. Only for investors
- D. Marketing only

Correct answer: `B`

---

## Open-ended Question 1

List the tests you would run on a Solana frontend before submitting to Colosseum and explain why each matters.

Reference expectation:
Answers should mention wallet connect disconnect, failed signing, transaction expiry, RPC failure, mobile wallet flow, priority fee UX, error fallback, explorer links.

---

## Open-ended Question 2

Explain why a purely `localhost` demo is insufficient for hackathon judging and what to show instead.

Reference expectation:
Answers should mention that judges evaluate on real devices and conditions. Devnet deployment plus public demo URL, reproducible install steps, and fallback RPC config prove readiness.

---

## References

- `https://solana.com/docs/intro/installation`
- `https://solana.com/developers/guides/getstarted/local-rust-hello-world` (scaffold context)
- `https://solana.com/docs/payments/production-readiness`
- `https://docs.solanamobile.com/`
- `https://github.com/solana-developers/create-solana-dapp`
