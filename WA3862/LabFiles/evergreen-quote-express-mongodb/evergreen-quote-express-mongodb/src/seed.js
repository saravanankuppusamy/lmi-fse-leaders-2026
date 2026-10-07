// src/seed.js — load a few starter quotes into MongoDB (provided).
// Run with: npm run seed
import { connectDB } from "./db.js";
import { Quote } from "./Quote.js";
import mongoose from "mongoose";

await connectDB();
await Quote.deleteMany({}); // start clean

await Quote.insertMany([
  { type: "auto", age: 41, coverageAmount: 50000, monthlyPremium: 96.0 },
  { type: "home", age: 52, coverageAmount: 250000, monthlyPremium: 375.0 },
  { type: "life", age: 29, coverageAmount: 100000, monthlyPremium: 84.0 },
]);

const count = await Quote.countDocuments();
console.log(`Seeded ${count} quotes.`);
await mongoose.disconnect();
