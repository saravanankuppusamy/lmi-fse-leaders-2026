// src/index.js — the Evergreen Quote API (Starter)
// Fill in the TODO route handlers by following the lab guide.
import express from "express";
import { randomUUID } from "node:crypto";
import { quotes, calculatePremium } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: parse JSON request bodies so req.body works on POST requests.
app.use(express.json());

// Health check — provided, so you can confirm the server is up.
app.get("/", (req, res) => {
  res.json({ message: "Evergreen Quote API", status: "ok" });
});

// TODO 1: GET /api/quotes
//   Return the full `quotes` array as JSON (res.json(quotes)).

// TODO 2: GET /api/quotes/:id
//   Find the quote whose id matches req.params.id.
//   If found, res.json(quote). If not, res.status(404).json({ error: "Not found" }).

// TODO 3: POST /api/quote
//   Read { type, age, coverageAmount } from req.body.
//   If any is missing, res.status(400).json({ error: "type, age, coverageAmount required" }).
//   Otherwise compute the premium with calculatePremium(...), build a new quote
//   object with id: randomUUID() and monthlyPremium, push it to `quotes`,
//   and res.status(201).json(newQuote).

// TODO 4: 404 catch-all — AFTER all routes, add middleware that responds
//   res.status(404).json({ error: "Not found" }) for any unmatched path.

app.listen(PORT, () => {
  console.log(`Evergreen Quote API running on http://localhost:${PORT}`);
});
