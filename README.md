# TECHNE

A premium consumer-electronics storefront built to explore Apple-style product marketing pages in Next.js — scroll-driven storytelling, a token-based design system, and a real (client-side) cart, rather than a generic CRUD shop template.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![CI](https://github.com/mertyerturun/Techne_E-Commerce/actions/workflows/ci.yml/badge.svg)

<p align="center">
  <img src="docs/screenshots/homepage.png" alt="TECHNE homepage — product hero section" width="49%" />
  <img src="docs/screenshots/product-detail.png" alt="TECHNE product detail page" width="49%" />
</p>

## Overview

TECHNE is a fictional consumer-electronics brand (laptop, tablet, earbuds, watch, power bank) built as a front-end showcase. The goal was to reproduce the feel of a high-end product page — restrained typography, generous whitespace, and animation that reinforces the content instead of decorating it — while keeping the implementation clean enough to actually maintain.

Content is in Turkish; the codebase, structure, and this README are in English.

## Features

- **Scroll-driven storytelling** — reusable `Reveal` and `Parallax` primitives (`src/components/motion/`) wrap GSAP + `ScrollTrigger` behind a small declarative API (`<Reveal y={28} stagger={0.08}>`), so sections fade/slide/stagger into view once, respect `prefers-reduced-motion` via `gsap.matchMedia()`, and clean up their own triggers.
- **App Router product catalog** — dynamic product routes (`src/app/product/[slug]`) render from a single typed data source (`src/lib/products.ts`), each with its own hero, spec table, and highlight grid.
- **Persistent cart** — a `useReducer`-backed `CartContext` (`src/lib/cart-context.tsx`) handles add/update/remove/clear and syncs to `localStorage`, with a hydration guard so the SSR'd page never flashes stale client state.
- **Token-driven design system** — colors, type scale, spacing, and elevation are defined once (see `DESIGN.md`, "Aura Precision") and consumed as Tailwind v4 CSS variables, keeping the UI visually consistent without magic numbers scattered through components.
- **Fully responsive**, keyboard-accessible interactive elements (storage/variant pickers, quantity steppers, mobile nav).

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) + `@gsap/react` (`useGSAP`) for scroll animation
- ESLint (`eslint-config-next`)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) for unit/integration tests

## Getting started

```bash
git clone https://github.com/mertyerturun/Techne_E-Commerce.git
cd Techne_E-Commerce
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run test`.

## Testing

```bash
npm run test        # run once (CI mode)
npm run test:watch  # watch mode
```

20 tests across cart state, the locale system, product data, and the navbar, using Vitest + React Testing Library. Runs on every push/PR via GitHub Actions (see badge above). One test is a regression test for a real hydration-race bug found during development: an effect syncing locale to `localStorage` could run with a stale default before the storage-read effect's state update committed, silently resetting a saved language preference back to Turkish on every page load — see `src/lib/i18n.test.tsx`.

## Project structure

```
src/
├─ app/
│  ├─ page.tsx                 # Home — hero + product grid
│  ├─ product/[slug]/page.tsx  # Dynamic product detail page
│  ├─ cart/page.tsx            # Cart
│  └─ layout.tsx
├─ components/
│  ├─ motion/                  # Reveal / Parallax GSAP primitives
│  ├─ Navbar.tsx, Footer.tsx, Button.tsx
│  ├─ ProductCard.tsx, ProductDetail.tsx, HighlightIcon.tsx
│  ├─ ui/fluid-flow-grid.tsx
│  └─ *.test.tsx                # component tests, colocated
└─ lib/
   ├─ products.ts               # Typed, localized product catalog (static data)
   ├─ cart-context.tsx          # Cart state (Context + useReducer + localStorage)
   ├─ i18n.tsx, locale.ts       # Turkish/English locale context + UI dictionary
   ├─ gsap.ts                   # GSAP/ScrollTrigger registration
   └─ *.test.ts(x)              # unit tests, colocated
```

## License

MIT — see [LICENSE](LICENSE).
