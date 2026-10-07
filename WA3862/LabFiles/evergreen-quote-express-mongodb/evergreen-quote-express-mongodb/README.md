# Evergreen Quote API + MongoDB (Starter)

The Evergreen Quote API from Week 2 of Phase 3, now backed by a **real database**.
Instead of an in-memory array that vanishes on restart, the quotes are stored in
**MongoDB** and accessed through **Mongoose** (a model layer with schemas and
validation).

## Run it

MongoDB is already running on your lab VM.

```bash
npm install
npm run seed  # load a few starter quotes into MongoDB (after TODO 1!)
npm run dev   # restarts on save (or: npm start)
```

Then open <http://localhost:3000/> for the status message.

Fill in the `TODO`s:

- `src/Quote.js` - define the Mongoose schema (the rules for a quote document)
- `src/index.js` - replace the placeholder responses with real database calls

Test the routes with `curl` (the lab guide has the commands).
