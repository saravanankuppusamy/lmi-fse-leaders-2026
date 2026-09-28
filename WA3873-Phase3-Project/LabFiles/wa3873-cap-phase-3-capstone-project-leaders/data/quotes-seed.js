// quotes-seed.js - run this in mongosh to load the Evergreen quotes (provided).
// Usage:  mongosh evergreen quotes-seed.js
// Each quote is a DOCUMENT - a JSON-like record. A collection holds documents,
// the way a table holds rows.

db.quotes.drop(); // start clean if re-run

db.quotes.insertMany([
  { _id: "q1", type: "auto", age: 41, coverageAmount: 50000, monthlyPremium: 96.0, tags: ["renewal"] },
  { _id: "q2", type: "home", age: 52, coverageAmount: 250000, monthlyPremium: 375.0, tags: ["new"] },
  { _id: "q3", type: "life", age: 29, coverageAmount: 100000, monthlyPremium: 84.0, tags: ["new"] },
  { _id: "q4", type: "auto", age: 23, coverageAmount: 30000, monthlyPremium: 100.8, tags: ["young-driver"] },
  { _id: "q5", type: "home", age: 38, coverageAmount: 180000, monthlyPremium: 248.4, tags: ["renewal", "bundle"] },
  { _id: "q6", type: "auto", age: 67, coverageAmount: 40000, monthlyPremium: 96.0, tags: ["senior"] }
]);

print("Inserted " + db.quotes.countDocuments() + " quotes into the 'quotes' collection.");
