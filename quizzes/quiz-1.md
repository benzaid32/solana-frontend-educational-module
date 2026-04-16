# Quiz 1

## Topic

Solana Frontend Architecture and Web2 to Web3 Transition

## Format

10 multiple choice questions, 2 open-ended questions.
Answers are based on official Solana documentation.

---

## Question 1

Which of the following is the official modern low-level Solana JavaScript SDK powering the newer frontend stack?

- A. `@solana/web3.js`
- B. `@solana/kit`
- C. `@solana/anchor`
- D. `@solana/spl-core`

Correct answer: `B`
Reason: Official frontend docs list `@solana/kit` as the low level Solana SDK powering the other libraries like `@solana/react-hooks`.

---

## Question 2

Which library is described in the official Solana frontend docs as providing React hooks built on `@solana/client`?

- A. `@solana/react-hooks`
- B. `@solana/ui-react`
- C. `@solana/dapp-react`
- D. `solana-react`

Correct answer: `A`

---

## Question 3

Which library do official docs recommend as a compatibility layer for projects still tied to legacy `@solana/web3.js`?

- A. `@solana/web3-compat`
- B. `@solana/legacy`
- C. `@solana/web3-shim`
- D. `@solana/bridge`

Correct answer: `A`

---

## Question 4

According to official accounts documentation, which five fields does every Solana account contain?

- A. name, owner, balance, data, timestamp
- B. address, balance, program, data, rent
- C. lamports, data, owner, executable, rent_epoch
- D. id, value, owner, type, created_at

Correct answer: `C`

---

## Question 5

Which statement about account ownership is correct?

- A. Any program can modify any account
- B. Only the account owner program can modify account data or debit its lamports
- C. Only the user wallet can modify account data
- D. Accounts cannot be modified once created

Correct answer: `B`

---

## Question 6

According to official transaction docs, what happens if any instruction in a transaction fails?

- A. The successful instructions remain applied
- B. The entire transaction fails and all state changes are reverted, but fees still apply
- C. The transaction retries automatically
- D. The user is refunded the entire fee

Correct answer: `B`

---

## Question 7

What is the maximum transaction size in bytes according to official transaction docs?

- A. 512
- B. 1,024
- C. 1,232
- D. 4,096

Correct answer: `C`

---

## Question 8

According to official confirmation guidance, roughly how long can a Solana transaction blockhash remain valid?

- A. about 5 seconds
- B. about 60 to 90 seconds
- C. about 10 minutes
- D. about 1 hour

Correct answer: `B`

---

## Question 9

Which commitment level does official guidance recommend for most blockhash-fetching cases?

- A. `processed`
- B. `confirmed`
- C. `finalized`
- D. `pending`

Correct answer: `B`

---

## Question 10

Which statement about production RPC usage is correct, according to official production-readiness docs?

- A. Public mainnet RPC endpoints are production-grade
- B. Public mainnet RPC endpoints are rate-limited and lack an SLA
- C. Only enterprise teams need private RPC
- D. Production apps should always use one single RPC with no backup

Correct answer: `B`

---

## Open-ended Question 1

Explain, in a few sentences, why the account model in Solana forces a different frontend mental model compared to Web2 CRUD apps.

Reference expectation:
The answer should mention that all state lives in accounts, every account has a strict owner, and only the owner program can modify account data. It should note that the frontend reads account data and submits transactions but does not own state transitions directly.

---

## Open-ended Question 2

Describe at least two user experience consequences of blockhash expiration for a Solana frontend.

Reference expectation:
The answer should mention at least two of:

- transactions can expire if not included within the valid window
- the UI must communicate a retry path if a transaction expires
- blockhashes should be fetched fresh when the user is ready to sign
- "loading" is not enough, specific states are needed

---

## References

- `https://solana.com/docs/frontend`
- `https://solana.com/docs/core/accounts`
- `https://solana.com/docs/core/transactions`
- `https://solana.com/developers/guides/advanced/confirmation`
- `https://solana.com/docs/payments/production-readiness`
