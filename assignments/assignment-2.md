# Assignment 2

## Title

Wallet-connected SOL transfer with proper transaction UX

## Goal

Practice the full signing and confirmation lifecycle using the official Wallet Adapter pattern, including explicit UI states for each stage.

## Prerequisites

- Assignment 1 completed (or equivalent understanding)
- A Devnet wallet funded via `https://faucet.solana.com` or the Phantom faucet
- Node 18 or newer

## Scope

Build a React app that lets a connected user send SOL to another address on Devnet.

1. Install and set up the official Wallet Adapter stack:

   - `@solana/wallet-adapter-base`
   - `@solana/wallet-adapter-react`
   - `@solana/wallet-adapter-react-ui`
   - `@solana/wallet-adapter-wallets`
   - Wallet Adapter CSS

2. Wrap the app in `ConnectionProvider`, `WalletProvider`, and `WalletModalProvider` following the official React setup.

3. Build a transfer form with:

   - Recipient address input
   - Amount in SOL
   - A button that constructs, sends, and confirms a transfer on Devnet

4. Render distinct states for:

   - Wallet disconnected
   - Ready to sign
   - Signing in wallet
   - Submitting to RPC
   - Confirming (with commitment level mentioned)
   - Confirmed (with Explorer link)
   - Expired or failed (with retry)

## Deliverables

- GitHub repo
- Working Devnet demo, either screen recording or live URL
- Code that uses the official wallet adapter React packages directly, not custom wallet detection logic

## Success Criteria

- The wallet connect button opens the wallet selection modal and connects successfully
- A valid Devnet transaction is created and signed by the wallet
- The UI shows each stage of the transaction clearly and never lies about the state
- On confirmation, the user sees a link to Solana Explorer for that transaction
- If the transaction expires, the UI shows a proper "expired, retry" state rather than a generic error

## Stretch Goals

- Add a priority fee slider that maps to compute unit price, with a short explanation of why the fee exists
- Add automatic retry for blockhash expiry once, with a new fresh blockhash

## Anti-cheat and Review

Reviewers sign in with their own Devnet wallet, send a small amount to a known address, and validate on Solana Explorer that the transaction appears with the signature shown in the UI.

## References

- `https://solana.com/docs/frontend`
- `https://github.com/anza-xyz/wallet-adapter`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/developers/guides/advanced/how-to-use-priority-fees`
