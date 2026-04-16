# Quiz 2

## Topic

Wallets, Wallet Adapter, and Transaction UX

## Format

10 multiple choice questions, 2 open-ended questions.
Grounded in official Solana and `anza-xyz/wallet-adapter` documentation.

---

## Question 1

Which is the canonical React wallet integration library recommended in official Solana docs?

- A. `solana-wallet-kit`
- B. `@solana/wallet-adapter` (the `anza-xyz/wallet-adapter` React packages)
- C. `wagmi`
- D. `web3modal`

Correct answer: `B`

---

## Question 2

In a React app using Wallet Adapter, which component makes the wallet selection modal available?

- A. `WalletProvider`
- B. `ConnectionProvider`
- C. `WalletModalProvider`
- D. `WalletButton`

Correct answer: `C`

---

## Question 3

Which provider in Wallet Adapter is responsible for exposing a Solana RPC connection to the tree?

- A. `ConnectionProvider`
- B. `WalletProvider`
- C. `ClusterProvider`
- D. `RpcProvider`

Correct answer: `A`

---

## Question 4

Which helper from `@solana/web3.js` is commonly used in official examples to get a default endpoint for a cluster?

- A. `getRpcUrl`
- B. `clusterApiUrl`
- C. `defaultEndpoint`
- D. `rpcForCluster`

Correct answer: `B`

---

## Question 5

Why is it important to explain what a wallet signature does before asking the user to sign?

- A. It is legally required
- B. Users do not understand cryptography, and trust is lost when a signature request is unclear
- C. Wallets block unexplained signatures
- D. It speeds up transactions

Correct answer: `B`

---

## Question 6

Which of these statements matches official guidance on confirmation UX?

- A. Polling `confirmed` commitment forever is fine
- B. The UI should not mention expiration since it almost never happens
- C. The UI must handle the case of transaction expiration caused by blockhash timeout
- D. Users should manually check explorer to confirm transactions

Correct answer: `C`

---

## Question 7

Which is the correct purpose of priority fees?

- A. To reduce the transaction size
- B. To bypass signature verification
- C. To increase the chance of inclusion during congestion by paying compute unit priority
- D. To remove the need for a blockhash

Correct answer: `C`

---

## Question 8

Which platform is officially supported by Mobile Wallet Adapter (MWA)?

- A. iOS Safari
- B. Android and Chrome on Android
- C. Desktop Safari only
- D. Smart TVs

Correct answer: `B`

---

## Question 9

Which statement is true about Mobile Wallet Adapter on iOS based on current official docs?

- A. It has full iOS support
- B. There is no official MWA support on iOS yet
- C. It works on iOS through App Clips
- D. It is the recommended mobile flow on iOS

Correct answer: `B`

---

## Question 10

Which of the following is a concrete UX mitigation for RPC failures or rate limits?

- A. Ignore errors and retry forever
- B. Use a primary private RPC and fall back to a secondary RPC plus clear error messaging
- C. Always use only `clusterApiUrl` in production
- D. Disable error messages so users do not worry

Correct answer: `B`

---

## Open-ended Question 1

Describe the minimal provider tree needed for a Wallet Adapter React app and the role of each provider.

Reference expectation:
Answer should include `ConnectionProvider` (RPC connection), `WalletProvider` (wallet list, connection state), and `WalletModalProvider` (wallet selection UI).

---

## Open-ended Question 2

List at least two UX patterns a frontend can use to handle transaction expiration gracefully.

Reference expectation:
Answers include: refetch a fresh blockhash on explicit retry, show specific state "transaction expired" rather than generic error, keep the transaction data so the user only resigns, log and surface guidance about congestion.

---

## References

- `https://solana.com/docs/frontend`
- `https://github.com/anza-xyz/wallet-adapter`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/developers/guides/advanced/how-to-use-priority-fees`
- `https://docs.solanamobile.com/`
