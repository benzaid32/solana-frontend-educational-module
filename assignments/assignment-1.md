# Assignment 1

## Title

Read-only Solana Account Viewer using official React Hooks

## Goal

Transition a learner from Web2 intuition to the Solana account model by building a real read-only frontend that fetches and displays on-chain account data using the official `@solana/react-hooks` stack.

## Prerequisites

- Node 18 or newer
- A browser wallet (Phantom, Solflare, Backpack)
- Devnet RPC access
- Familiarity with React basics

## Scope

Build a small React (Vite or Next.js) page that:

1. Installs and configures `@solana/react-hooks` and `@solana/client`.
2. Connects to Devnet using the official provider pattern.
3. Accepts a base58 wallet address input from the user.
4. Fetches and displays the SOL balance and the full set of account fields (lamports, owner, executable, rent epoch) for that address.

## Deliverables

- GitHub repo with a clear README
- Working dev server running locally
- A single page that renders:
  - Input for a Solana address
  - Displayed balance in SOL
  - Displayed owner program
  - Displayed raw account fields
- Loading, empty, and error states

## Success Criteria

The submission is accepted only if all the following are true:

- `@solana/react-hooks` and `@solana/client` (and/or `@solana/kit` as appropriate) are installed from npm, not copied source
- The app loads on Devnet without errors
- It fetches a real account and shows correct balance in SOL
- It renders the owner program address and whether the account is executable
- Loading and error states are clearly visible
- No critical console errors during the happy path

## Stretch Goals

- Show a Solana Explorer link to the address
- Detect when the address is not a valid base58 wallet address and show a friendly error
- Support switching between Devnet and Mainnet

## Anti-cheat and Review

Reviewers should pull the repo, run it locally with stated commands, enter a known Devnet address with SOL, and confirm the displayed balance matches what Solana Explorer shows.

## References

- `https://solana.com/docs/frontend`
- `https://solana.com/docs/core/accounts`
- `https://github.com/anza-xyz/solana-kit`
- `https://solana.com/docs/intro/installation`
