# Evergreen Quote API - Node & Express (Starter)

The first **back end** for Evergreen. Until now the quote data lived in the
browser; in this lab you build a small **Node.js + Express** server that serves
it over HTTP, the same kind of API the React app would call.

## Run it

```bash
npm install
npm run dev  # restarts on save (or: npm start)
```

Then open <http://localhost:3000/>, where you should see a status message.

Fill in the route handlers in `src/index.js` (look for the `TODO` comments):

- `GET /api/quotes` - list all quotes
- `GET /api/quotes/:id` - one quote by id
- `POST /api/quote` - calculate and save a new quote
- a 404 handler for everything else

Test them from a second terminal with `curl` (the lab guide shows the commands).
