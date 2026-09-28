# Evergreen Quote Launch: Final Capstone Starter

This is the launch monorepo: three teams' work side by side. `landing/` is the
marketing page from the Phase 1 era, `client/` is the Phase 2 React app, and
`api/` is the Phase 3 quote service. Every part runs as-is from minute one,
but the parts are deliberately not connected: the pieces that wire them
together and ship them arrive as provided pieces during the week. You assemble
onto this; you never write code from scratch.

Read `CAPSTONE-BRIEF.md` first, then read `EVERGREEN-JOURNEY.md` end to end
before you change anything.

## Run it

Three parts, three terminals (or one at a time).

The landing page: open `landing/index.html` with Live Server (right-click the
file in VS Code, **Open with Live Server**).

The API:

```bash
cd api
npm install
npm run seed
npm run dev
```

Then `curl http://localhost:3000/api/quotes` shows the six seeded quotes.

The client:

```bash
cd client
npm install
npm run dev
```

Open the printed URL (port 5173). Compare the recent-quotes panel with the
curl output: the app shows its own bundled sample; the API serves the
database. They do not match. That gap is the week.

## What is here on Day 1

| Path | What it is |
| --- | --- |
| `landing/index.html` | The marketing page: pure HTML, no JavaScript. The two `CONFIG` markers are launch-day configuration. |
| `landing/theme.css` | The page's theme: design tokens and layout. One variable change restyles the whole page. |
| `client/src/` | The React + TypeScript app: components, hooks, context, and the typed contracts in `types.ts` and `premium.ts`. |
| `client/public/quotes.json` | The bundled sample feed the app still reads. It retires on Day 2. |
| `client/.env` | `VITE_APP_TITLE`, the app title. The sponsor announces the launch value on Monday. |
| `api/src/` | The quote service: Express routes, the Mongoose model, the premium math, and the seed script. The `INSERT` markers are where Day 2's GraphQL piece lands. |
| `api/test/` | The safety net: seven `node:test` tests, green from Day 1 (`npm test`). |
| `api/.env` | The service name and database address. Configuration travels by environment variable. |
| `CAPSTONE-BRIEF.md` | The launch brief: the target, the scope, and the risks. |
| `EVERGREEN-JOURNEY.md` | The story of the whole program, and Monday morning's final review. |

## What is deliberately NOT wired yet

The client still reads its bundled sample, not the API. The dev-server proxy,
the API client module, the GraphQL layer, the container recipe, the cluster
manifests, and the CI workflow all arrive as provided pieces during the week,
each with exact placement instructions and command sequences in the kit
README.
