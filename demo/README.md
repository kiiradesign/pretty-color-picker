# Demo site

Static showcase for **Pretty Color Picker**. This folder is not published to npm.

- **Local dev:** `npm run dev` from the repo root (serves this folder)
- **Production build:** `npm run build:demo` → output in `demo-dist/`
- **Vercel:** `vercel.json` at the repo root points here

The embeddable component lives in [`../src/`](../src/). Consumers install the package and use `<pretty-color-picker>` in their own apps — typically with `header-action="close"` in a popover, not this full-page demo.
