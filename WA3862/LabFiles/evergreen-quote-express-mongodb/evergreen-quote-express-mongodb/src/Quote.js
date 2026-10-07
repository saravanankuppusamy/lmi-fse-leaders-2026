// src/Quote.js — the Mongoose model (Starter).
// A Mongoose SCHEMA describes the shape and rules of a document; the MODEL is
// the object you use to read and write those documents.
import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    // TODO 1: define the fields. Each quote needs:
    //   type:           String, required, one of "auto" | "home" | "life" (use enum)
    //   age:            Number, required, min 18, max 100
    //   coverageAmount: Number, required, min 10000
    //   monthlyPremium: Number, required
    //
    // Example field:  type: { type: String, required: true, enum: ["auto", "home", "life"] },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

export const Quote = mongoose.model("Quote", quoteSchema);
