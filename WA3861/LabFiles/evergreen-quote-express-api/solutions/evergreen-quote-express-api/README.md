# Evergreen Quote API - Node & Express (Solution)

The completed reference server. `src/index.js` implements all the routes from
the lab guide.

```bash
npm install
npm run dev  # restarts on save (or: npm start)
```

Try it:

```bash
curl http://localhost:3000/api/quotes
curl http://localhost:3000/api/quotes/q1
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{"type":"auto","age":35,"coverageAmount":50000}'
```
