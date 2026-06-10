// Evergreen Insurance — Week 6 starter script
// The page is unchanged from the Week 5 rate-tweak lab. This week's
// lab does not modify app.js — it walks the repo through the full
// GitHub pull-request cycle. See evergreen-quote-pull-request.adoc.

// Keep the slider value shown next to its label up to date.
const coverageAmountInput = document.getElementById("coverageAmount");
const coverageAmountDisplay = document.getElementById("coverageAmountDisplay");

coverageAmountInput.addEventListener("input", function () {
  coverageAmountDisplay.textContent = coverageAmountInput.value;
});

// Very simple placeholder premium calculation.
// This is a learning app — real insurance pricing is much more complex.
function calculatePremium(coverageType, coverageAmount) {
  const ratePerThousand = {
    auto: 1.5,
    home: 0.9,
    renters: 0.4,
  };

  const rate = ratePerThousand[coverageType] || 1.0;
  const thousands = coverageAmount / 1000;
  return Math.round(rate * thousands);
}

// Wire up the form.
const form = document.getElementById("quote-form");
const premiumBox = document.getElementById("premium-box");
const premiumValue = document.getElementById("premium-value");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const coverageType = document.getElementById("coverageType").value;
  const coverageAmount = Number(coverageAmountInput.value);

  const premium = calculatePremium(coverageType, coverageAmount);

  premiumValue.textContent = "$" + premium;
  premiumBox.hidden = false;
});
