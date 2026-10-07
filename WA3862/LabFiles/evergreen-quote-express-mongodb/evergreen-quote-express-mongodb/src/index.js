// src/index.js — Evergreen Quote API backed by MongoDB (Starter).
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

// List all quotes from the database.
app.get("/api/quotes", async (req, res, next) => {
  try {
    // TODO 2: read every quote from MongoDB.
    //   const quotes = await Quote.find();
    //   res.json(quotes);
    res.json([]); // placeholder response — delete this line when you add the code above
  } catch (err) {
    next(err);
  }
});

// One quote by its database id.
app.get("/api/quotes/:id", async (req, res, next) => {
  try {
    // TODO 3: find one quote by id.
    //   const quote = await Quote.findById(req.params.id);
    //   if (!quote) return res.status(404).json({ error: "Not found" });
    //   res.json(quote);
    res.status(404).json({ error: "Not found" }); // placeholder response — delete this line when you add the code above
  } catch (err) {
    next(err);
  }
});

// Create and store a new quote.
app.post("/api/quote", async (req, res, next) => {
  try {
    const { type, age, coverageAmount } = req.body;
    // TODO 4: compute the premium, then create + save a Quote document.
    //   const monthlyPremium = calculatePremium(type, Number(age), Number(coverageAmount));
    //   const quote = await Quote.create({ type, age, coverageAmount, monthlyPremium });
    //   res.status(201).json(quote);
    res.status(501).json({ error: "Not implemented" }); // placeholder response — delete this line when you add the code above
  } catch (err) {
    next(err); // validation errors land here
  }
});

// Central error handler — turns Mongoose validation errors into 400s.
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

// Connect to the database FIRST, then start listening.
await connectDB();
app.listen(PORT, () => {
  console.log(`Evergreen Quote API (MongoDB) on http://localhost:${PORT}`);
});
