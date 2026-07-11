// Evergreen Insurance — provided quote-calculation snippet (solution copy).
// Identical to js-snippets/quote-calc.js in the starter kit.

var ratePerThousand = {
  auto: 1.2,
  home: 0.9,
  renters: 0.4,
};

function calculatePremium(coverageType, coverageAmount) {
  var rate = ratePerThousand[coverageType] || 1.0;
  var thousands = coverageAmount / 1000;
  return Math.round(rate * thousands);
}
