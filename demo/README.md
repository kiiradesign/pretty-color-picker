# Demo site

Static showcase for **Pretty Color Picker**. This folder is not published to npm.

- **Local dev:** `npm run dev` from the repo root (serves this folder)
- **Production build:** `npm run build:demo` → output in `demo-dist/`
- **Live:** [colors.kiira.in](https://colors.kiira.in)
- **Vercel:** `vercel.json` at the repo root points here

The embeddable component lives in [`../src/`](../src/). This demo is a full-page showcase: always open, draggable panel, no history grid. On desktop, **L** / **D** switch themes (hint in the footer); on mobile, use the header theme toggle. For popover usage in your app, see the [main README](../README.md).
