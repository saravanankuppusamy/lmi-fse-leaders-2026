// RecentQuotes.tsx (Solution)
import { formatCurrency } from "../premium";
import type { Quote } from "../types";

interface RecentQuotesProps {
  quotes: Quote[];
}

function RecentQuotes({ quotes }: RecentQuotesProps) {
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
