# Lecture 1

## Title

Solana Frontend Architecture: Web2 to Web3 Transition

## Slide 1: Why Solana Frontend Feels Different

### Content

- Web2 frontend usually talks to:
  - REST APIs
  - centralized auth
  - predictable backend-controlled state
- Solana frontend must also handle:
  - wallets
  - onchain accounts
  - transactions with recent blockhashes
  - RPC reliability
- Official Solana frontend docs position the frontend stack around:
  - `@solana/client`
  - `@solana/react-hooks`
  - `@solana/kit`
  - `@solana/web3-compat`

### Speaker notes

Start by reframing the student’s mental model. A Solana frontend is not just “React plus blockchain calls”; it sits between user intent, wallet approval, RPC infrastructure, and account state.

### Visual description

Split slide: Web2 app flow on the left, Solana app flow on the right. Highlight the added wallet and transaction steps in the Solana path.

---

## Slide 2: Official Solana Frontend Library Stack

### Content

- `@solana/client`
  - official client runtime for RPC, wallets, transactions
- `@solana/react-hooks`
  - React hooks on top of `@solana/client`
- `@solana/kit`
  - low-level SDK powering the modern stack
- `@solana/web3-compat`
  - migration helper for projects still tied to legacy `@solana/web3.js`
- Official guidance:
  - many ecosystem projects still use deprecated `@solana/web3.js`
  - prefer `@solana/web3-compat` to simplify migration

### Speaker notes

This slide matters for technical accuracy. Students should leave with a clear picture that the modern official stack is not just legacy `web3.js`; Solana’s docs now emphasize the client, hooks, and kit layering.

### Visual description

Stack diagram from bottom to top:
`@solana/kit` -> `@solana/client` -> `@solana/react-hooks` -> React UI.

---

## Slide 3: Solana State Model in One Slide

### Content

- Official accounts docs:
  - all Solana state lives in accounts
  - each account is a key-value record
  - key is a 32-byte address
  - value is an account
- Every account has five core fields:
  - lamports
  - data
  - owner
  - executable
  - rent_epoch
- Key rule:
  - only the owner program can modify account data or debit lamports

### Speaker notes

This is where Web2 developers usually need the biggest mindset shift. Instead of thinking in terms of rows in a database controlled by your backend, think in terms of accounts with ownership rules enforced by the runtime.

### Visual description

Show one account card with the five fields labeled. Add a note: “UI reads account state, UI does not directly own state transitions.”

---

## Slide 4: Transactions Are Atomic

### Content

- Official transactions docs:
  - a transaction includes one or more instructions
  - signatures authorize the changes
  - a recent blockhash is required
- Important rule:
  - if any instruction fails, the whole transaction fails
  - all state changes are reverted
  - fees are still charged on failure
- Key transaction facts from docs:
  - max size: `1,232 bytes`
  - blockhash expiry: `150 slots`

### Speaker notes

Stress the UX implication: the user may see failure even after signing, and a failed transaction still has a cost. This is why preview, validation, and human-readable errors are essential.

### Visual description

Three-box transaction flow: “Build instructions” -> “User signs” -> “All succeed or all revert”.

---

## Slide 5: Confirmation and Expiration Reality

### Content

- Official confirmation guide states:
  - slots are about `400ms`, but can vary
  - a blockhash is valid for roughly `60-90 seconds`
  - clients should fetch blockhashes with `confirmed` commitment in most cases
- UX implications:
  - stale transactions can expire before or after signing
  - users need clear retry guidance
  - wallets and apps should avoid reusing old blockhashes

### Speaker notes

This is a core Solana-specific UX topic and one judges will expect to see. Teach students that “transaction pending” is not enough; they must think in terms of expiry windows and confirmation strategy.

### Visual description

Timeline showing:
`Fetch blockhash -> user reviews -> user signs -> send -> confirm or expire`.

---

## Slide 6: Devnet vs Mainnet Frontend Differences

### Content

- Official production-readiness guide:
  - Devnet: free SOL, easy landing, public RPC is fine
  - Mainnet: real SOL, priority fees matter, production RPC is required
- Mainnet checklist from docs:
  - use private RPC
  - plan for redundant RPC configuration
  - manage blockhash freshness
  - set transaction send options carefully

### Speaker notes

A lot of frontend tutorials stop at devnet success. This module should help hackathon teams avoid that trap by making production differences visible early.

### Visual description

Two-column comparison table: Devnet vs Mainnet.

---

## Slide 7: Recommended React Setup with Official Hooks

### Content

Official install command:

```bash
npm install @solana/client @solana/react-hooks
```

Official provider pattern:

```tsx
"use client";

import { autoDiscover, createClient } from "@solana/client";
import { SolanaProvider } from "@solana/react-hooks";

const client = createClient({
  endpoint: "https://api.devnet.solana.com",
  websocketEndpoint: "wss://api.devnet.solana.com",
  walletConnectors: autoDiscover()
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <SolanaProvider client={client}>{children}</SolanaProvider>;
}
```

### Speaker notes

Keep this practical. Students should see an official minimal setup they can paste into a real app immediately instead of starting from theory only.

### Visual description

Code block on the right, short bullet list on the left: “one client, one provider, shared runtime”.

---

## Slide 8: Lecture 1 Summary

### Content

- Solana frontend is a runtime + wallet + account + transaction problem
- Official modern stack:
  - `@solana/client`
  - `@solana/react-hooks`
  - `@solana/kit`
  - `@solana/web3-compat`
- Frontend teams must understand:
  - account ownership
  - atomic transactions
  - blockhash expiry
  - devnet vs mainnet differences

### Speaker notes

Close by reinforcing that good Solana frontend work starts with the right mental model. The next lecture will move from architecture into wallet integration and transaction UX.

### Visual description

Checklist summary slide with four large takeaways and a “Next: wallet integration” footer.

---

## References

- `https://solana.com/docs/frontend`
- `https://solana.com/docs/frontend/react-hooks`
- `https://solana.com/docs/core/accounts`
- `https://solana.com/docs/core/transactions`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/docs/payments/production-readiness`
