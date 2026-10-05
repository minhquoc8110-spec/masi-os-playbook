# MASI OS Interactive Playbook

Interactive playbook by **Masibio Lab**.

## Current public baseline

- 21 interactive screens
- Keyboard: ← / →, **M** menu, **F** fullscreen, **P** print/PDF
- Mobile: responsive reading mode + swipe navigation
- Single-file HTML, no runtime dependencies
- Design QA: brand, layout, responsive, content integrity, interaction, export
- Published with GitHub Pages

## Slides capability canary

This branch adds an **open-slide** source canary without replacing the current `index.html` baseline.

```bash
npm install
npm run typecheck
npm run build
npm run preview
```

Canary deck source:

```text
slides/masi-os-canary/index.tsx
```

Decision rule: this becomes a Masibio standard only after build, web, mobile, presenter, PDF, PPTX and evidence QA pass.
