// QuoteForm.tsx (provided - Day 2, REPLACES src/components/QuoteForm.tsx)
// One change from the Phase 2 version: saving no longer invents an id and a
// premium in the browser. The form sends the visitor's inputs; the API
// assigns the id and computes the premium of record. The estimate on screen
// is still the local math, which is exactly what makes Tuesday's rate
// comparison interesting. You drop it in; you don't modify it.
import PremiumDisplay from "./PremiumDisplay";
import { useQuoteEstimate } from "../hooks/useQuoteEstimate";
import { useQuotes } from "../context/QuotesContext";

function QuoteForm() {
  const {
    type,
    setType,
    age,
    setAge,
    coverageAmount,
    setCoverageAmount,
    premium,
    error,
    isValid,
  } = useQuoteEstimate();
  const { addQuote } = useQuotes();

  function handleSave() {
    if (!isValid || premium === null) return;
    void addQuote({ type, age, coverageAmount });
  }

  return (
    <form
      className="quote-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <h2>Build your quote</h2>

      <label htmlFor="coverage-type">Coverage type</label>
      <select
        id="coverage-type"
        value={type}
        onChange={(e) => setType(e.target.value as typeof type)}
      >
        <option value="auto">Auto</option>
        <option value="home">Home</option>
        <option value="life">Life</option>
      </select>

      <label htmlFor="age">Your age</label>
      <input
        id="age"
        type="number"
        min={18}
        max={100}
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <label htmlFor="coverage-amount">Coverage amount ($)</label>
      <input
        id="coverage-amount"
        type="number"
        min={10000}
        step={5000}
        value={coverageAmount}
        onChange={(e) => setCoverageAmount(Number(e.target.value))}
      />

      <PremiumDisplay premium={premium} error={error} />

      {error && <p className="message">{error}</p>}

      <button type="submit" className="primary-btn" disabled={!isValid}>
        Save this quote
      </button>
    </form>
  );
}

export default QuoteForm;
