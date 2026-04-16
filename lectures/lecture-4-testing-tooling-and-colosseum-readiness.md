# Lecture 4

## Title

Testing, Tooling, and Colosseum Hackathon Readiness

## Slide 1: Winning Requires More Than a Demo

### Content

- Hackathon teams often stop at:
  - devnet success
  - one happy-path wallet flow
  - weak documentation
- A stronger final package includes:
  - starter commands
  - provider setup
  - transaction UX guidance
  - testing checklist
  - known limitations

### Speaker notes

This lecture is about shipping discipline. Teams that communicate setup, assumptions, and limitations clearly are easier for judges and teammates to trust.

### Visual description

Simple “Prototype vs Submission-ready” comparison.

---

## Slide 2: Official Scaffolding Path

### Content

Official `create-solana-dapp` usage:

```bash
npm create solana-dapp@latest
pnpm create solana-dapp@latest
```

Official template guidance:

- templates live in the official templates repository
- template categories include:
  - Gill
  - Web3.js
  - Mobile
  - Community
- direct template selection example:

```bash
npm create solana-dapp@latest -t gill-next-tailwind-basic
```

### Speaker notes

This gives teams an official way to start instead of copying random starter repos. It also supports the bounty’s requirement that the toolkit be plug-and-play.

### Visual description

CLI-focused slide with command blocks and a small template category chart.

---

## Slide 3: What the Toolkit Should Include

### Content

Minimum toolkit contents:

- setup command
- provider snippet
- wallet connection example
- transaction send example
- retry/expiry notes
- production-readiness checklist
- assignment links

If a feature is not covered by official docs:

- label it explicitly
- avoid presenting it as official best practice
- add note: `verify latest docs before production use`

### Speaker notes

This slide is about intellectual honesty. A strong toolkit reduces ambiguity and makes it easy for new developers to distinguish official guidance from project-specific opinion.

### Visual description

Folder tree mockup for a starter kit README.

---

## Slide 4: Testing Checklist for Frontend Teams

### Content

Recommended manual validation checklist:

- wallet connects and disconnects cleanly
- app handles missing wallet state
- transaction preview appears before signing
- stale or expired transaction path is handled
- RPC failure path is visible and retryable
- mobile layout preserves CTA visibility
- empty account states are readable

### Speaker notes

This checklist is intentionally practical. Most hackathon regressions show up in edge-case UX, not in the happy-path demo.

### Visual description

Checklist slide with seven check items.

---

## Slide 5: Confirmation-Safe Transaction Flow

### Content

Official docs recommend:

- fetch blockhash with `confirmed` commitment
- track `lastValidBlockHeight`
- avoid stale blockhash reuse
- handle retries manually when needed

Implementation implications:

- fetch blockhash late
- monitor transaction state after send
- stop retrying after expiry window
- tell user what happened in plain language

### Speaker notes

This is one of the strongest Solana-specific lecture points because it connects protocol mechanics directly to what a frontend must do in code and copy.

### Visual description

Sequence diagram:
`Get blockhash -> sign -> send -> check block height -> confirm or expire`.

---

## Slide 6: Mainnet Readiness for Frontend Teams

### Content

Official production-readiness guide highlights:

- use private RPC for production
- plan redundant RPC configuration
- configure transaction send options carefully
- use priority fees and compute unit settings thoughtfully

Mainnet mindset:

- devnet is for learning
- mainnet is where latency, congestion, and reliability become UX issues

### Speaker notes

This slide should help students understand that “works on devnet” is not a finish line. It is a starting point.

### Visual description

Mainnet readiness checklist with red warning labels next to “public RPC only” and “default send config”.

---

## Slide 7: Colosseum-Oriented Build Strategy

### Content

Recommended execution strategy for hackathon teams:

1. start from official template
2. wire provider and wallet early
3. validate one end-to-end transaction path
4. add readable states for success, failure, expiry
5. document setup and judging path
6. only then expand features

### Speaker notes

This sequence reduces the risk of building too much before proving the critical path. It favors confidence and speed, which is exactly what hackathon teams need.

### Visual description

Six-step roadmap with arrows from left to right.

---

## Slide 8: Final Lecture Summary

### Content

- official scaffolding tools reduce setup time
- a winning toolkit is honest, documented, and reusable
- testing should focus on real frontend failure states
- Solana frontend readiness depends on confirmation, fees, RPC quality, and user messaging

### Speaker notes

Close the full module here. The students now have a path from architecture, through wallet UX, through production UI patterns, into hackathon execution.

### Visual description

End slide: “Zero to functional dApp, with fewer avoidable mistakes.”

---

## References

- `https://github.com/solana-foundation/create-solana-dapp`
- `https://github.com/solana-foundation/templates`
- `https://solana.com/docs/payments/production-readiness`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/docs/rpc/http/getlatestblockhash`
