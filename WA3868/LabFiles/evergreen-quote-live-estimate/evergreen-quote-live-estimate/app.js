// Evergreen Quote — Live Estimate
// ---------------------------------
// Fill in the TODOs below by following the lab guide. Each TODO maps to one
// step in the instructions. The solution version of this file is provided
// in the files/solutions folder if you get stuck.

// --- Base monthly rates by coverage type (an object used as a lookup table) ---
const BASE_RATES = {
  auto: 80,
  home: 120,
  life: 60,
};

// --- Grab the DOM elements we need (Step 2) ---
const form = document.querySelector("#quote-form");
const typeEl = document.querySelector("#coverage-type");
const ageEl = document.querySelector("#age");
const amountEl = document.querySelector("#coverage-amount");
const estimateEl = document.querySelector("#estimate-amount");
const messageEl = document.querySelector("#message");
const recentList = document.querySelector("#recent-list");

// --- Step 3: Calculate the premium -------------------------------------------
// Return a monthly premium number based on coverage type, age, and amount.
// Use BASE_RATES for the base, then apply an age factor and a coverage factor.
function calculatePremium(type, age, coverageAmount) {
  // TODO 3a: look up the base rate for `type` from BASE_RATES.
  //          Use the nullish coalescing operator (??) to fall back to 100.

  // TODO 3b: compute an age factor:
  //          younger than 25 -> 1.4, older than 60 -> 1.25, otherwise 1.0

  // TODO 3c: compute a coverage factor of coverageAmount / 10000

  // TODO 3d: return base * ageFactor * coverageFactor
  return 0;
}

// --- Step 4: Validate the inputs ---------------------------------------------
// Throw an Error with a clear message when the inputs are not usable.
function validateInputs(age, coverageAmount) {
  // TODO 4a: if age is NaN, less than 18, or greater than 100,
  //          throw new Error("Please enter an age between 18 and 100.")

  // TODO 4b: if coverageAmount is NaN or less than 10000,
  //          throw new Error("Coverage amount must be at least $10,000.")
}

// --- Step 5: Format a number as US currency ----------------------------------
function formatCurrency(value) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// --- Step 6: Update the live estimate ----------------------------------------
// Read the current form values, validate them, calculate the premium, and
// show it. If validation throws, show the error message instead.
function updateEstimate() {
  // TODO 6a: read the values. Use Number(...) for age and amount.

  // TODO 6b: wrap the next lines in try/catch.
  //          In try: call validateInputs(...), call calculatePremium(...),
  //          set estimateEl.textContent to the formatted premium, and clear
  //          the message.
  //          In catch (error): set estimateEl.textContent = "—" and show
  //          error.message in messageEl. Remove the "success" class.
}

// --- Step 7: Load recent quotes asynchronously -------------------------------
// Fetch quotes.json and render each quote into the recent-quotes list.
async function loadRecentQuotes() {
  // TODO 7a: wrap in try/catch.
  //          In try: await fetch("quotes.json"); if !response.ok throw an Error;
  //          await response.json(); then call renderRecentQuotes(data).
  //          In catch: show "Could not load recent quotes." inside recentList.
}

// --- Step 8: Render the recent quotes list -----------------------------------
function renderRecentQuotes(quotes) {
  // TODO 8a: clear recentList.innerHTML, then for each quote build an <li>
  //          showing the capitalized type and the formatted monthly premium.
  //          Use createElement + appendChild, or build an HTML string.
}

// --- Wire everything up (Step 9) ---------------------------------------------
// TODO 9a: call updateEstimate() once so the page starts with an estimate.

// TODO 9b: add an "input" event listener to the form that calls updateEstimate.

// TODO 9c: add a "submit" event listener to the form. Call e.preventDefault(),
//          then show a success message in messageEl (add the "success" class).

// TODO 9d: call loadRecentQuotes() to populate the recent quotes list.
