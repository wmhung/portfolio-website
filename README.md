# Portfolio Website — Weiming Hung

My personal developer portfolio: a **static React (Vite)** single-page app. It
presents a short bio, a resume-accurate skills breakdown, and four projects
grouped into full-stack and front-end work.

The site is **bilingual** (English / 繁體中文) with a language toggle, ships a
**light/dark theme** toggle, and is fully responsive. It's a pure front-end build
— no backend or API of its own.

> **Note:** The **Taipei Parks Explorer** (Project 03) used to be embedded here as
> a live React + Flask app. It has been split into its own repository /
> `Taipei Parks Explorer` folder (frontend on Vercel, Flask API on Render). In this
> portfolio, Project 03 is now a showcase card that links out to that separately
> hosted app.

## Live site

- **Frontend:** hosted on Vercel — https://portfolio-website-weiming.vercel.app

## Features

- Single-page React app with reveal-on-scroll animations and a sticky nav that
  collapses into a slide-in mobile menu.
- Bilingual UI (EN / 繁中) driven by a single `STRINGS` table in `src/i18n.js`;
  choice persisted in `localStorage`.
- Light/dark theme with a blocking head script to prevent a flash on reload;
  choice persisted in `localStorage`.
- Four project cards; each links out to a live demo, a hosted app, or a
  self-contained static demo.

## Projects featured

| #   | Project                        | Group      | Stack                                                      |
| --- | ------------------------------ | ---------- | ---------------------------------------------------------- |
| 04  | **FNN — Park Finder**          | Full-stack | Next.js, TypeScript, Supabase, Leaflet, RHF, Zod, Tailwind |
| 03  | **Taipei Parks Explorer**      | Full-stack | React + Flask REST API — _hosted separately_               |
| 02  | **Streaming Platform UI**      | Front-end  | HTML5, CSS3, CSS Grid, Scroll Snap, Vanilla JS             |
| 01  | **Responsive Layout Showcase** | Front-end  | HTML5, CSS3, Flexbox, Media Queries                        |

- **Project 04** links to its live Vercel app.
- **Project 03** links to the standalone Taipei Parks Explorer (set the URL in
  `frontend/src/components/Projects.jsx` — currently a `#` placeholder).
- **Projects 02 & 01** are self-contained static demos in `public/` (`hbomax/`, `rwd/`).

## Tech stack

**Frontend:** React 18, Vite 5, plain CSS with custom-property theming.
**Hosting:** Vercel (static site).

## Repository structure

```
Portfolio Website/
└── frontend/                   # React + Vite SPA (the whole site)
    ├── vite.config.js          # Vite + React plugin (no proxy)
    ├── index.html
    ├── package.json
    ├── src/
    │   ├── App.jsx             # theme + language state
    │   ├── i18n.js             # EN / 繁中 strings
    │   ├── components/         # Header, Hero, Skills, Projects, TwoColProject, Footer
    │   └── styles/theme.css    # grey + yellow design system, light/dark tokens
    └── public/                 # copied verbatim into the build
        ├── rwd/                # Project 01 demo
        ├── hbomax/             # Project 02 demo
        ├── img/                # project screenshots (webp)
        └── resume.pdf
```

## Run it locally

```bash
cd frontend
npm install
npm run dev            # http://localhost:5173
```

No backend to start — it's a static front end.

## Build for production

```bash
cd frontend
npm run build          # outputs frontend/dist
```

## Deployment (Vercel)

Import the repo on Vercel, set **Root Directory: `frontend`**, and deploy. Vercel
auto-detects Vite (build `npm run build`, output `dist`). No server, no
environment variables required.
