// RecentQuotes.tsx
// This component receives a list of quotes through props and renders each one.
// It demonstrates rendering a LIST with .map() and the all-important `key`.
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
        {/* TODO 5: map over `quotes`. For each `quote`, return an <li>.
            Give the <li> a key={quote.id}. Inside, show the capitalized type
            and formatCurrency(quote.monthlyPremium) + "/mo".

            {quotes.map((quote) => (
              <li key={quote.id}>...</li>
            ))}
        */}
      </ul>
    </aside>
  );
}

export default RecentQuotes;
