# MASI OS Slides Canary QA Checklist

## 80/20 objective

Prove only the path that matters first:

`source deck -> deterministic build -> web presentation -> presenter notes -> PDF/PPTX export -> evidence`

Do not standardize the capability until these checks pass.

## Build checks

- [ ] `npm install` completes on Node >= 22.12.0.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` produces `dist/`.
- [ ] `open-slide.config.ts` uses `base: '/masi-os-playbook/'` for GitHub Pages project hosting.
- [ ] No secrets, customer data, personal data, or private partner information are present.

## Web interaction checks

- [ ] Deck opens in desktop Chromium.
- [ ] Deck opens in iPhone Safari.
- [ ] Keyboard navigation works.
- [ ] Mobile swipe navigation works.
- [ ] Presenter mode opens and notes are visible.
- [ ] Refresh/deep route does not create an accidental 404.

## Design QA checks

- [ ] Masibio colors are used consistently: #047AC2, #89C553, navy/white system.
- [ ] Text is legible on 16:9 desktop and mobile view.
- [ ] No title/body overflow.
- [ ] No elements cut off near safe areas.
- [ ] Slides tell one coherent story, not a UI component dump.

## Export checks

- [ ] PDF export works from Chromium.
- [ ] PPTX export works from the runtime toolbar.
- [ ] PPTX opens in Microsoft PowerPoint for Mac without repair warning.
- [ ] Important text boxes are editable.
- [ ] Speaker notes are preserved in exported PPTX.

## Evidence to attach before PASS

- [ ] Commit SHA.
- [ ] Screenshot: desktop view.
- [ ] Screenshot: iPhone Safari view.
- [ ] Screenshot: presenter notes.
- [ ] Exported PDF.
- [ ] Exported PPTX.
- [ ] PowerPoint Mac open/edit result.
- [ ] Known defects list.

## Verdict rule

- `PASS`: all build, interaction, design, and export checks pass.
- `PASS_WITH_NOTES`: non-blocking visual polish issues only.
- `FAIL`: build/export/navigation/PPTX fails, or any source/data governance issue appears.
