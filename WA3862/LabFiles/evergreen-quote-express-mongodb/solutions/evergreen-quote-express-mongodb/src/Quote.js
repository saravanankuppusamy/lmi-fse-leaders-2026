// src/Quote.js — the Mongoose model (Solution).
import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, enum: ["auto", "home", "life"] },
    age: { type: Number, required: true, min: 18, max: 100 },
    coverageAmount: { type: Number, required: true, min: 10000 },
    monthlyPremium: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Quote = mongoose.model("Quote", quoteSchema);
