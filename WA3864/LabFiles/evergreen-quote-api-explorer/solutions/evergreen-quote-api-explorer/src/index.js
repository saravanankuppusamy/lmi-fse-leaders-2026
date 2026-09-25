// src/index.js — Evergreen Quote API: REST + GraphQL side by side (Solution)
import express from "express";
import { randomUUID } from "node:crypto";
import { buildSchema } from "graphql";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { quotes, calculatePremium } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// ----- REST API ------------------------------------------------------------
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((q) => q.id === req.params.id);
  if (!quote) return res.status(404).json({ error: "Not found" });
  res.json(quote);
});

// ----- GraphQL schema ------------------------------------------------------
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

  createQuote: ({ type, age, coverageAmount }) => {
    const monthlyPremium = calculatePremium(type, age, coverageAmount);
    const newQuote = { id: randomUUID(), type, age, coverageAmount, monthlyPremium };
    quotes.push(newQuote);
    return newQuote;
  },
};

app.all("/graphql", createHandler({ schema, rootValue: root }));

// GraphiQL — an in-browser tool to run GraphQL queries.
app.get("/", (req, res) => {
  res.type("html").end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(PORT, () => {
  console.log(`Evergreen API + GraphQL on http://localhost:${PORT}`);
  console.log(`GraphiQL explorer:        http://localhost:${PORT}/`);
});
