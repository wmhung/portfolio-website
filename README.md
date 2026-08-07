# Portfolio Website — Weiming

My personal developer portfolio: a frontend-focused **React (Vite)** single-page
app backed by my own **Flask REST API**. It presents a short bio, a
resume-accurate skills breakdown, and four projects grouped into full-stack and
front-end work. The centrepiece is the **Taipei Parks Explorer**, an interactive
page that searches, filters and pages through all 830 of Taipei's parks, green
spaces and plazas (Taipei City open data) via the live API.

The site is **bilingual** (English / 繁體中文) with a language toggle, ships a
**light/dark theme** toggle, and is fully responsive.

## Live site

- **Frontend:** hosted on Vercel — `https://<your-project>.vercel.app`
- **API:** hosted on Render — `https://taipei-portfolio.onrender.com`

> The Vercel frontend proxies `/api/*` to the Render backend (see
> `frontend/vercel.json`), so the Parks Explorer calls the API same-origin with
> no CORS. On Render's free tier the first API request after idle can take
> ~30 s to wake.

## Features

- Single-page React app with reveal-on-scroll animations and a sticky nav that
  collapses into a slide-in mobile menu.
- Bilingual UI (EN / 繁中) driven by a single `STRINGS` table in `src/i18n.js`;
  choice persisted in `localStorage`.
- Light/dark theme with a blocking head script to prevent a flash on reload;
  choice persisted in `localStorage`.
- Live full-stack demo (Parks Explorer) plus three self-contained static demos.

## Projects featured

| #   | Project                        | Group      | Stack                                                                |
| --- | ------------------------------ | ---------- | -------------------------------------------------------------------- |
| 04  | **FNN — Park Finder**          | Full-stack | Next.js, TypeScript, Supabase, Leaflet, RHF, Zod, Tailwind           |
| 03  | **Taipei Parks Explorer**      | Full-stack | React + **Flask REST API**, server-side search / filter / pagination |
| 02  | **Streaming Platform UI**      | Front-end  | HTML5, CSS3, CSS Grid, Scroll Snap, Vanilla JS                       |
| 01  | **Responsive Layout Showcase** | Front-end  | HTML5, CSS3, Flexbox, Media Queries                                  |

Projects 04 and 02–01 link out to live demo pages / screenshots; **Project 03**
is the interactive page served from `public/parks/`, talking to the Flask API.

## Tech stack

**Frontend:** React 18, Vite 5, plain CSS with custom-property theming.
**Backend:** Python, Flask 3, Flask-CORS, gunicorn (production).
**Data:** Taipei City open data (`backend/taipei_parks.json`, 830 records).
**Hosting:** Vercel (frontend) + Render (Flask API).

## Repository structure

```
Portfolio Website/
├── render.yaml                 # Render Blueprint (Flask API + built SPA)
├── backend/                    # Flask REST API
│   ├── app.py                  # routes + serves frontend/dist in production
│   ├── requirements.txt        # Flask, flask-cors, gunicorn
│   └── taipei_parks.json       # 830-park dataset
└── frontend/                   # React + Vite SPA
    ├── vercel.json             # proxies /api/* → Render backend
    ├── vite.config.js          # dev proxy /api → localhost:5001
    ├── src/
    │   ├── App.jsx             # theme + language state
    │   ├── i18n.js             # EN / 繁中 strings
    │   ├── components/         # Header, Hero, Skills, Projects, TwoColProject, Footer
    │   └── styles/theme.css    # grey + yellow design system, light/dark tokens
    ├── public/                 # copied verbatim into the build
    │   ├── parks/              # Project 03 explorer (index.html + style.css + script.js)
    │   ├── rwd/                # Project 01 demo
    │   ├── hbomax/             # Project 02 demo
    │   ├── img/                # project screenshots (webp)
    │   └── resume.pdf
    └── dist/                   # built output (committed so Render serves it without Node)
```

## Run it locally

Two terminals — one for the API, one for the Vite dev server.

**1. Backend (Flask) — port 5001**

```bash
cd backend
python3 -m venv venv && source venv/bin/activate      # optional
pip install -r requirements.txt
python app.py                                          # http://localhost:5001
```

**2. Frontend (Vite) — port 5173**

```bash
cd frontend
npm install
npm run dev                                            # http://localhost:5173
```

Open http://localhost:5173. The Vite dev server proxies `/api/*` to Flask on
5001 (`vite.config.js`), so the Parks Explorer works with no CORS setup.

## Build for production

```bash
cd frontend && npm run build          # outputs frontend/dist
```

`dist/` is committed so the Render service can serve it with only Python (no Node
at build time). Rebuild and commit `dist/` after any frontend change.

## Deployment

Two supported setups:

**A. Hybrid — Vercel (frontend) + Render (backend)** _(current)_

1. Deploy the backend on Render (below) and note its URL.
2. Set that URL as the `destination` in `frontend/vercel.json`.
3. On Vercel: import the repo, set **Root Directory: `frontend`**, deploy.
   Vercel serves the static site; `/api/*` is proxied to Render.

**B. All-in-one on Render**
`app.py` also serves the built SPA, so one Render service can host everything.
Push to GitHub, then **New → Blueprint** and point Render at the repo
(`render.yaml`): it installs Python and runs gunicorn, serving the API + SPA on
one URL.

## API reference

| Method | Endpoint          | Purpose                                        |
| ------ | ----------------- | ---------------------------------------------- |
| GET    | `/api/health`     | Health check + record count                    |
| GET    | `/api/filters`    | Distinct `types` and `areas` for the dropdowns |
| GET    | `/api/parks`      | Filtered + paginated list                      |
| GET    | `/api/parks/<id>` | Single park detail                             |
| POST   | `/api/contact`    | Server-side validation demo                    |

`/api/parks` query params: `search`, `type`, `area`, `page`, `per_page`.
Response: `{ items, total, page, perPage, totalPages }`.
