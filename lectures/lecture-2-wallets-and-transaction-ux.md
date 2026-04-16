# Lecture 2

## Title

Wallet Integration and Core Transaction UX

## Slide 1: Wallet UX Is Product UX

### Content

- In Solana apps, the wallet is part of the primary product flow
- Bad wallet UX causes:
  - dropped onboarding
  - signature confusion
  - expired transactions
  - duplicate submissions
- Goal:
  - make signing predictable
  - make failures understandable
  - make status visible

### Speaker notes

Explain that wallet integration is not a technical afterthought. For many users, the wallet prompt is the single highest-friction moment in the entire flow.

### Visual description

Hero statement on left, three failure states on right: “confusing signature”, “expired tx”, “unclear error”.

---

## Slide 2: Official React Wallet Adapter Pattern

### Content

Official cookbook installation:

```bash
npm install @solana/web3.js \
  @solana/wallet-adapter-base \
  @solana/wallet-adapter-react \
  @solana/wallet-adapter-react-ui \
  @solana/wallet-adapter-wallets
```

Official note from cookbook:

- the reference Next.js template shown there is compatible with `@solana/web3.js`
- for `@solana/kit`, the cookbook points to the Kit example

### Speaker notes

Call out that official docs currently present both the modern stack and wallet-adapter guidance. Students need to know which examples are legacy-compatible and which are part of the newer stack.

### Visual description

Single clean command block with a note callout: “wallet-adapter cookbook example uses web3.js template”.

---

## Slide 3: Official SolanaProvider Example

### Content

Official wallet-adapter provider pattern:

```tsx
"use client";

import React, { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

export const SolanaProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
```

### Speaker notes

Use this as the “minimum viable official provider” example. Then tell students that strong UX requires more than just getting a modal to open.

### Visual description

Code-focused slide with annotations: “connection”, “wallet state”, “modal UI”.

---

## Slide 4: What Frontend Must Explain Before Signature

### Content

Before asking for a wallet signature, show:

- what action the user is taking
- what they will receive or change
- whether this is:
  - a connect action
  - a message signature
  - a transaction signature
- whether fees apply
- whether retries may be needed

### Speaker notes

This slide is about progressive disclosure. Users should not meet a wallet popup before they understand why it is appearing.

### Visual description

Mock transaction preview card:
- Action
- Network
- Fee note
- Expected outcome
- CTA: “Continue to wallet”

---

## Slide 5: Confirmation UX Must Handle Expiry

### Content

- Official confirmation docs:
  - recent blockhashes expire quickly
  - `confirmed` commitment is usually recommended for fetching blockhashes
  - clients should avoid stale blockhash reuse
- UX recommendations:
  - distinguish `waiting for signature` from `sending`
  - distinguish `sent` from `confirmed`
  - show a retry path when a transaction expires
  - never hide failures behind a spinner

### Speaker notes

Students need to see that “loading…” is not a real transaction UX. Solana users need explicit states because confirmation and expiration are first-class realities.

### Visual description

Four-state flow diagram:
`Awaiting signature -> Broadcasting -> Confirming -> Confirmed/Expired`.

---

## Slide 6: Priority Fees and User Trust

### Content

Official fees docs:

- base fee per signature: `5,000 lamports`
- prioritization fee is optional
- prioritization fee increases likelihood of faster inclusion
- prioritization fee formula is based on:
  - compute unit limit
  - compute unit price

UX translation:

- do not expose users only to raw low-level jargon
- explain when faster inclusion is worth extra cost
- keep fee messaging human-readable

### Speaker notes

The job of the frontend is to translate protocol mechanics into decisions users can actually make. A user may not care about compute budgets, but they do care whether paying more improves landing reliability.

### Visual description

Simple fee box:
- Base fee
- Priority fee
- Why it matters

---

## Slide 7: Mobile Wallet Adapter Facts

### Content

Official Mobile Wallet Adapter docs state:

- Android: supported
- Mobile Web on Chrome for Android: supported
- iOS: not supported
- Safari, Firefox, Opera, Brave on mobile: not supported

Key takeaway:

- do not promise one mobile wallet flow everywhere
- detect platform constraints early
- present fallback guidance instead of broken flows

### Speaker notes

This is a high-value slide because it prevents incorrect assumptions. If a team designs a mobile-first Solana flow without checking MWA platform support, they can ship a broken experience.

### Visual description

Support matrix table with green and red status markers.

---

## Slide 8: Lecture 2 Summary

### Content

- Official wallet-adapter patterns solve connection basics
- Strong UX still requires:
  - transaction previews
  - clear signature intent
  - readable fee communication
  - confirmation and expiry states
  - mobile platform awareness

### Speaker notes

Close by reminding students that a functional wallet button is not enough. Winning frontend work makes the signing flow trustworthy and understandable.

### Visual description

Summary checklist and “Next lecture: production UI patterns” callout.

---

## References

- `https://solana.com/developers/cookbook/wallets/connect-wallet-react`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/docs/core/fees`
- `https://docs.solanamobile.com/developers/mobile-wallet-adapter`
