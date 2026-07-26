# Weiming Hung — Portfolio + Taipei Parks Explorer

A frontend-focused portfolio built as a **React (Vite)** single-page app that
talks to my own **Flask REST API**. The flagship piece, *Taipei Parks Explorer*,
lets you search, filter and page through all 830 of Taipei's parks, green
spaces and plazas (Taipei City open data).

```
taipei-portfolio/
├── backend/            # Flask REST API
│   ├── app.py
│   ├── requirements.txt
│   └── taipei_parks.json
└── frontend/           # React + Vite
    ├── src/
    │   ├── components/
    │   └── styles/theme.css
    └── public/rwd/      # embedded responsive-layout showcase (Project 1)
```

## Run it locally

You need two terminals: one for the API, one for the frontend dev server.

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
5001 (configured in `vite.config.js`), so the Parks Explorer and contact form
work with no CORS setup.

## Build for production (single service)

`app.py` serves the built React app, so one process runs everything:

```bash
cd frontend && npm run build          # outputs frontend/dist
cd ../backend && python app.py        # serves API + the built SPA on :5001
```

## Deploy to Render

This repo includes `render.yaml` (a Render Blueprint). It:

1. builds the frontend (`npm ci && npm run build`), and
2. serves the API + built SPA with gunicorn.

Push to GitHub, then in Render choose **New → Blueprint** and point it at the
repo. One free web service, one public URL.

## API reference

| Method | Endpoint            | Purpose                                        |
| ------ | ------------------- | ---------------------------------------------- |
| GET    | `/api/health`       | Health check + record count                    |
| GET    | `/api/filters`      | Distinct `types` and `areas` for the dropdowns |
| GET    | `/api/parks`        | Filtered + paginated list                      |
| GET    | `/api/parks/<id>`   | Single park detail                             |
| POST   | `/api/contact`      | Contact form (server-side validation)          |

`/api/parks` query params: `search`, `type`, `area`, `page`, `per_page`.

## To personalise before interviews

- `frontend/src/components/Contact.jsx` — set your real `GITHUB` and `LINKEDIN` URLs.
- `frontend/src/components/Hero.jsx` — tweak the bio if you like.
```
