# Evergreen Quote API Explorer - REST + GraphQL (Solution)

The completed reference server. `src/index.js` exposes the quote data over both
REST and GraphQL, with the `createQuote` mutation implemented.

```bash
npm install
npm run dev  # restarts on save (or: npm start)
```

- GraphiQL explorer: <http://localhost:3000/>
- REST: <http://localhost:3000/api/quotes>

Example GraphQL query (paste into GraphiQL):

```graphql
query {
  quotes {
    type
    monthlyPremium
  }
}
```
