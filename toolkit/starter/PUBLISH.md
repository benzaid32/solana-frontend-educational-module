# Publish the starter to GitHub

The bounty requires a **GitHub link** for the toolkit. This starter is a
standalone folder — not part of the outer repo — so publishing it is a
one-time, ~30-second operation.

## Option A — GitHub CLI (recommended)

Prerequisites: `gh auth login` completed once on your machine.

```bash
# inside submission-package/toolkit/starter
git init
git add .
git commit -m "feat: solana frontend starter — superteam ukraine module"
gh repo create superteam-ukraine-solana-frontend-starter \
  --public \
  --source . \
  --remote origin \
  --description "Plug-and-play Solana frontend starter — Superteam Ukraine Frontend Module (Colosseum-ready)" \
  --push
```

The final line prints your live repo URL. That is the link you paste into
the Superteam Earn submission form.

## Option B — plain git + the GitHub web UI

1. Create a new empty public repo on `github.com/new`. Suggested name:
   `superteam-ukraine-solana-frontend-starter`. Do **not** initialize with
   a README.
2. In the starter folder:

```bash
git init
git add .
git commit -m "feat: solana frontend starter — superteam ukraine module"
git branch -M main
git remote add origin https://github.com/<your-user>/superteam-ukraine-solana-frontend-starter.git
git push -u origin main
```

## Option C — publish the whole submission package

If you prefer one single repo containing lectures + decks + toolkit +
quizzes + assignments:

```bash
# from the repo root, one level above submission-package
cd submission-package
git init
git add .
git commit -m "feat: solana frontend educational module — superteam ukraine bounty"
gh repo create superteam-ukraine-solana-frontend-module \
  --public --source . --remote origin --push
```

This is the most "submission-friendly" path because the Earn form has a
single GitHub field: point it at the combined repo and the toolkit lives
at `/toolkit/starter`.

## After publishing

1. Open the repo on GitHub and confirm the README renders.
2. Add the repo URL to `submission-package/submission/SUBMISSION.md` in
   the "GitHub" field.
3. Optionally, deploy the starter to Vercel with one click:
   - Sign in to vercel.com with your GitHub
   - "Add New Project" → pick the repo
   - Keep defaults, press Deploy
   - Copy the live URL and add it to the submission as well.

## What to double-check before `git push`

- [ ] `.env.local` is **not** committed (it is listed in `.gitignore`)
- [ ] No private RPC keys are in `.env.example`
- [ ] `node_modules/` is not committed
- [ ] `README.md` builds in the GitHub preview
