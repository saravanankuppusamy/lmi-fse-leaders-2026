// QuoteForm.tsx
// The main interactive component. It holds the form's STATE with useState and
// recalculates the premium whenever the inputs change. It composes the
// PremiumDisplay component (passing data down through props).
import { useState } from "react";
import PremiumDisplay from "./PremiumDisplay";
import { calculatePremium } from "../premium";
import type { CoverageType } from "../types";

function QuoteForm() {
  // TODO 6: declare three pieces of state with useState.
  //   const [type, setType] = useState<CoverageType>("auto");
  //   const [age, setAge] = useState(35);
  //   const [coverageAmount, setCoverageAmount] = useState(50000);

  // TODO 7: compute validation and premium from the current state.
  //   const isValid = age >= 18 && age <= 100 && coverageAmount >= 10000;
  //   const premium = isValid ? calculatePremium(type, age, coverageAmount) : null;
  //   const error = isValid ? "" : "Enter age 18–100 and coverage of at least $10,000.";

  return (
    <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Build your quote</h2>

      <label htmlFor="coverage-type">Coverage type</label>
      {/* TODO 8: make this a controlled input.
          value={type} onChange={(e) => setType(e.target.value as CoverageType)} */}
      <select id="coverage-type">
        <option value="auto">Auto</option>
        <option value="home">Home</option>
        <option value="life">Life</option>
      </select>

      <label htmlFor="age">Your age</label>
      {/* TODO 9: value={age} onChange={(e) => setAge(Number(e.target.value))} */}
      <input id="age" type="number" min={18} max={100} />

      <label htmlFor="coverage-amount">Coverage amount ($)</label>
      {/* TODO 10: value={coverageAmount} onChange={(e) => setCoverageAmount(Number(e.target.value))} */}
      <input id="coverage-amount" type="number" min={10000} step={5000} />

      {/* TODO 11: render <PremiumDisplay premium={premium} error={error} /> */}

      {/* TODO 12: conditional rendering — show the error only when it exists:
          {error && <p className="message">{error}</p>} */}
    </form>
  );
}

export default QuoteForm;
