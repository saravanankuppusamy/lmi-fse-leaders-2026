# Evergreen Quote API Explorer - REST + GraphQL (Starter)

The Evergreen Quote API now speaks **two styles** over the same data:

- **REST** - `GET /api/quotes`, `GET /api/quotes/:id`
- **GraphQL** - a single `/graphql` endpoint with an in-browser explorer

## Run it

```bash
npm install
npm run dev  # restarts on save (or: npm start)
```

- GraphiQL explorer: <http://localhost:3000/>
- REST: <http://localhost:3000/api/quotes>

In the lab you will run queries in both styles to feel the difference, then
implement the `createQuote` GraphQL mutation in `src/index.js` (look for the
`TODO`).
