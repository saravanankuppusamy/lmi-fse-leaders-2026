# Evergreen Quote API + MongoDB (Solution)

The completed reference. `src/Quote.js` defines the Mongoose schema and
`src/index.js` uses it for all database operations.

```bash
npm install
npm run seed
npm run dev  # restarts on save (or: npm start)
```

Try it:

```bash
curl http://localhost:3000/api/quotes
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{"type":"auto","age":35,"coverageAmount":50000}'
# Validation error (age too low) returns 400:
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{"type":"auto","age":5,"coverageAmount":50000}'
```
