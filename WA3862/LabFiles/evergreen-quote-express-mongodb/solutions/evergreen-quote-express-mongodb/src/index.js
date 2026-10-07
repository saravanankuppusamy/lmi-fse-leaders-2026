// src/index.js — Evergreen Quote API backed by MongoDB (Solution).
import express from "express";
import { connectDB } from "./db.js";
import { Quote } from "./Quote.js";
import { calculatePremium } from "./premium.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Evergreen Quote API (MongoDB)", status: "ok" });
});

app.get("/api/quotes", async (req, res, next) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    next(err);
  }
});

app.get("/api/quotes/:id", async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) return res.status(404).json({ error: "Not found" });
    res.json(quote);
  } catch (err) {
    next(err);
  }
});

app.post("/api/quote", async (req, res, next) => {
  try {
    const { type, age, coverageAmount } = req.body;
    const monthlyPremium = calculatePremium(type, Number(age), Number(coverageAmount));
    const quote = await Quote.create({
      type,
      age: Number(age),
      coverageAmount: Number(coverageAmount),
      monthlyPremium,
    });
    res.status(201).json(quote);
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

await connectDB();
app.listen(PORT, () => {
  console.log(`Evergreen Quote API (MongoDB) on http://localhost:${PORT}`);
});
