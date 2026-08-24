// RecentQuotes.tsx (Solution)
// No props for the list anymore — it reads the saved quotes straight from
// context. Adding a new prop to App no longer threads through here.
import { formatCurrency } from "../premium";
import { useQuotes } from "../context/QuotesContext";

function RecentQuotes() {
  const { quotes } = useQuotes();

  return (
    <aside className="recent-quotes">
      <h2>Recent quotes</h2>
      <ul className="recent-list">
        {quotes.map((quote) => (
          <li key={quote.id}>
            <span className="quote-type">{quote.type}</span> &mdash;{" "}
            <span className="quote-premium">
              {formatCurrency(quote.monthlyPremium)}/mo
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default RecentQuotes;
