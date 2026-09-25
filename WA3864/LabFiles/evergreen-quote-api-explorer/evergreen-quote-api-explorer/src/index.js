// src/index.js — Evergreen Quote API: REST + GraphQL side by side (Starter)
import express from "express";
import { randomUUID } from "node:crypto";
import { buildSchema } from "graphql";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { quotes, calculatePremium } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// ----- REST API (provided) -------------------------------------------------
// Notice: GET /api/quotes always returns EVERY field of every quote.
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((q) => q.id === req.params.id);
  if (!quote) return res.status(404).json({ error: "Not found" });
  res.json(quote);
});

// ----- GraphQL schema (provided) -------------------------------------------
// One endpoint, /graphql. The client asks for exactly the fields it wants.
const schema = buildSchema(`
  type Quote {
    id: ID!
    type: String!
    age: Int!
    coverageAmount: Int!
    monthlyPremium: Float!
  }

  type Query {
    quotes: [Quote!]!
    quote(id: ID!): Quote
  }

  type Mutation {
    createQuote(type: String!, age: Int!, coverageAmount: Int!): Quote!
  }
`);

// ----- GraphQL resolvers ----------------------------------------------------
const root = {
  quotes: () => quotes,
  quote: ({ id }) => quotes.find((q) => q.id === id),

  // TODO 1: implement the createQuote mutation resolver.
  //   - compute monthlyPremium with calculatePremium(type, age, coverageAmount)
  //   - build a new quote with id: randomUUID()
  //   - push it onto `quotes`
  //   - return the new quote
  createQuote: ({ type, age, coverageAmount }) => {
    throw new Error("createQuote is not implemented yet");
  },
};

app.all("/graphql", createHandler({ schema, rootValue: root }));

// GraphiQL — an in-browser tool to run GraphQL queries (provided).
app.get("/", (req, res) => {
  res.type("html").end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(PORT, () => {
  console.log(`Evergreen API + GraphQL on http://localhost:${PORT}`);
  console.log(`GraphiQL explorer:        http://localhost:${PORT}/`);
});
