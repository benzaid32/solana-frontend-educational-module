---
marp: true
theme: kyiv-solana
paginate: true
title: "Lecture 2 — Wallets and Transaction UX"
author: "Superteam Ukraine"
---

<!-- _class: cover -->

<p class="kicker">Superteam Ukraine · Frontend Module · Lecture 02</p>

# Wallets & **transaction UX**, the way real users experience them.

#### Connect, sign, confirm — without lying to your user.

---

<!-- _class: divider -->

#### Session goals

# Wire the **official Wallet Adapter** into a React app and design a signature flow that users **trust**.

---

## Why wallets, not logins

<div class="cols">
<div>

- A wallet is not an account — it's a **key** under user control.
- The app never sees the private key. It can only **request signatures**.
- Every signature is a **cryptographic permission** — no password is involved.

</div>
<div>

<div class="callout warn">
If your UI cannot explain <em>what</em> it is asking the user to sign in one sentence, you have already lost their trust.
</div>

</div>
</div>

<p class="footnote">Source: <a href="https://github.com/anza-xyz/wallet-adapter">anza-xyz/wallet-adapter</a></p>

---

## The official React wiring

```tsx
import { ConnectionProvider, WalletProvider }
  from "@solana/wallet-adapter-react";
import { WalletModalProvider }
  from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter, SolflareWalletAdapter }
  from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

export function SolanaProvider({ children }) {
  const endpoint = process.env.NEXT_PUBLIC_RPC!;
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
```

<p class="footnote">Three providers, wrapped once. That is the whole story.</p>

---

## The three providers, explained

<div class="cols-3">
<div>

#### Connection

Exposes an RPC `Connection` object to the tree. Drives reads and writes.

</div>
<div>

#### Wallet

Owns the connected wallet, available wallets, autoConnect, and signing surfaces.

</div>
<div>

#### Wallet Modal

Renders the UI for wallet selection — the classic "connect wallet" button.

</div>
</div>

<div class="callout">
Swap your RPC by changing <strong>one environment variable</strong>. No code changes, no hardcoded URLs.
</div>

---

<!-- _class: quote -->

## Every signature should feel like the app asking **permission**, not taking it.

---

## Pre-signature: set expectations

Before calling `sendTransaction`, show the user:

- **Who** is paying — the connected wallet.
- **What** is happening — "Send 0.1 SOL to `4Nd1…k3s`".
- **How much** it costs — network fee + priority fee (if enabled).
- **Where** they can verify — a link to Solana Explorer *after* success.

<div class="callout ok">
Consistency matters. Use the same copy pattern on every signing surface in your app.
</div>

---

## The transaction lifecycle, on screen

<div class="cols-3">
<div>
<p class="label">Before submit</p>

- Idle
- Preparing

</div>
<div>
<p class="label">In flight</p>

- Signing
- Submitting
- Confirming

</div>
<div>
<p class="label">After RPC</p>

- Confirmed
- **Expired**
- Error

</div>
</div>

<div class="stitch"></div>

Each state has its own copy, its own color, its own call-to-action. **No generic "Loading…"**.

---

## Expiry is not an error

Blockhashes are valid roughly **60–90 seconds**. If the transaction isn't included, it expires.

<div class="cols">
<div>

#### Bad UX

- Silent retry that loops forever.
- "Something went wrong." toast.
- User has no idea if funds moved.

</div>
<div>

#### Good UX

- Dedicated **expired** state.
- CTA: "Retry with fresh blockhash".
- Preserves the form so the user only re-signs.

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/developers/guides/advanced/confirmation">Confirmation guide</a></p>

---

## Priority fees, in plain language

- Priority fees buy **compute-unit priority** during congestion.
- Measured in **micro-lamports per compute unit**.
- They are **additional** to the base network fee.

<div class="cols">
<div>

#### In the UI

- Off / Auto / Manual
- One-line explanation
- Final cost visible **before** signing.

</div>
<div>

```ts
import { ComputeBudgetProgram } from "@solana/web3.js";

const ix = ComputeBudgetProgram.setComputeUnitPrice({
  microLamports: 5_000,
});
```

</div>
</div>

<p class="footnote">Source: <a href="https://solana.com/developers/guides/advanced/how-to-use-priority-fees">Priority fees</a></p>

---

## Mobile wallets — the honest version

<div class="cols">
<div>

#### Supported today

- **Android**, Chrome on Android, via Mobile Wallet Adapter (MWA).
- Works with major Android wallets.

</div>
<div>

#### Not yet supported

- **iOS** has no official MWA support.
- Do not fake it — show a factual "mobile connection is desktop-only right now" message.

</div>
</div>

<div class="callout warn">
Lying about mobile support is a fast way to lose a user forever.
</div>

<p class="footnote">Source: <a href="https://docs.solanamobile.com/">docs.solanamobile.com</a></p>

---

<!-- _class: divider -->

#### Hands on

# You will ship a real **SOL transfer on Devnet**, with the full lifecycle exposed to the user.

---

## Assignment 2 — live recap

<div class="cols">
<div>

- Install the official Wallet Adapter React packages.
- Wrap the app in the three providers.
- Build a transfer form with recipient + amount.
- Surface **every** lifecycle state.
- Add a Solana Explorer link after confirmation.

</div>
<div>

<div class="callout ok">
Full spec: <code>assignments/assignment-2.md</code>.
</div>

</div>
</div>

---

## Quiz 2 — topics covered

- The three providers and their responsibilities.
- Why pre-signature explanation builds trust.
- How to handle expired transactions gracefully.
- Priority fee modes and user-facing UX.
- Real MWA support on Android vs iOS.

<div class="callout">
Full quiz with answers: <code>quizzes/quiz-2.md</code>.
</div>

---

<!-- _class: divider -->

#### End of Lecture 02

# Next: **Production UI patterns.**

RPC failover, accessibility, priority fee ergonomics, and the difference between "works on my localhost" and "ready for Mainnet".

---

<!-- _class: cover -->

## References

- Wallet Adapter — github.com/anza-xyz/wallet-adapter
- Frontend docs — solana.com/docs/frontend
- Confirmation — solana.com/developers/guides/advanced/confirmation
- Priority fees — solana.com/developers/guides/advanced/how-to-use-priority-fees
- Solana Mobile — docs.solanamobile.com
