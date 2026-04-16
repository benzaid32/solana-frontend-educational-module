# Slide decks

Four Marp decks, one per lecture, styled with the `kyiv-solana` theme
(Ukrainian editorial look, paper + ink + azure + wheat).

- `lecture-1.md` — From Web2 UI to Solana frontend architecture
- `lecture-2.md` — Wallets and transaction UX
- `lecture-3.md` — Production UI patterns for Solana dApps
- `lecture-4.md` — Testing, tooling, and Colosseum readiness
- `theme/kyiv-solana.css` — shared custom theme

## Exporting the decks

You have three paths, ordered by friction.

### 1. Fastest — web.marp.app (no install)

1. Open `https://web.marp.app/`.
2. Open Settings → Custom theme, paste the contents of
   `theme/kyiv-solana.css`.
3. Paste the deck markdown (e.g. `lecture-1.md`) into the editor.
4. Use the top-right menu to export **PDF**, **PPTX**, or **HTML**.
5. Repeat for each lecture.

### 2. VS Code (recommended if you iterate)

1. Install the extension: **"Marp for VS Code"** (by marp-team).
2. Open this folder in VS Code.
3. Open any `lecture-X.md`. You'll see the preview pane on the right.
4. Export via the Marp sidebar → PDF or PPTX.
5. The extension auto-applies `theme/kyiv-solana.css` because it is
   referenced in each deck's frontmatter (`theme: kyiv-solana`).

VS Code reads the theme path from workspace settings. If it doesn't find
it automatically, add to `.vscode/settings.json`:

```json
{
  "markdown.marp.themes": ["./theme/kyiv-solana.css"]
}
```

### 3. CLI — `@marp-team/marp-cli`

Install once:

```bash
npm install -g @marp-team/marp-cli
```

Build PDFs for all four lectures from inside `submission-package/decks`:

```bash
marp --theme-set ./theme/kyiv-solana.css --pdf --allow-local-files lecture-1.md
marp --theme-set ./theme/kyiv-solana.css --pdf --allow-local-files lecture-2.md
marp --theme-set ./theme/kyiv-solana.css --pdf --allow-local-files lecture-3.md
marp --theme-set ./theme/kyiv-solana.css --pdf --allow-local-files lecture-4.md
```

Switch `--pdf` to `--pptx` for PowerPoint, or `--html` for a static site.

Note: marp-cli uses Puppeteer for PDF and PPTX output. First run may
download a Chromium binary (~200 MB). If you hit firewall issues, use
path #1 or #2 instead.

## Moving into Google Slides / Canva

If the sponsor asks for Google Slides or Canva:

1. Export to **PPTX** using any method above.
2. Google Slides: `File → Import slides → Upload the .pptx`.
3. Canva: `Create a design → Uploads → upload the .pptx → open`.

Both platforms preserve layout and text, but fonts may fall back.
Fraunces + Inter + JetBrains Mono are all free on Google Fonts, so
re-apply them once inside the target platform if needed.

## Why Marp

- **Source is plain markdown** — diffable, reviewable, editable by a
  non-designer.
- **One theme file** drives the look — consistency across all four
  lectures.
- **Exports are lossless** — same content as PDF, PPTX, HTML, and Google
  Slides.
- **No vendor lock-in** — no Canva/Slides account required to edit.
