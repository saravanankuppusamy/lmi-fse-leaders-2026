// src/index.js — the Evergreen Quote API (Solution)
import express from "express";
import { randomUUID } from "node:crypto";
import { quotes, calculatePremium } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Evergreen Quote API", status: "ok" });
});

// List all quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// One quote by id
app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((q) => q.id === req.params.id);
  if (!quote) {
    return res.status(404).json({ error: "Not found" });
  }
  res.json(quote);
});

// Calculate and save a new quote
app.post("/api/quote", (req, res) => {
  const { type, age, coverageAmount } = req.body;
  if (!type || age === undefined || coverageAmount === undefined) {
    return res
      .status(400)
      .json({ error: "type, age, coverageAmount required" });
  }
  const monthlyPremium = calculatePremium(type, Number(age), Number(coverageAmount));
  const newQuote = {
    id: randomUUID(),
    type,
    age: Number(age),
    coverageAmount: Number(coverageAmount),
    monthlyPremium,
  };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// 404 catch-all — must come after all routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Evergreen Quote API running on http://localhost:${PORT}`);
});
