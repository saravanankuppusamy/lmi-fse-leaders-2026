// RecentQuotes.tsx (Starter)
// In the lab you will fetch the recent quotes from the server using useEffect,
// handling the three states every data fetch must handle: loading, error, and
// success. The shell and the three pieces of state are provided.
import { useEffect, useState } from "react";
import { formatCurrency } from "../premium";
import type { Quote } from "../types";

function RecentQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO 1: create an AbortController so we can cancel the request on unmount.
    //   const controller = new AbortController();

    // TODO 2: define an async function that:
    //   - sets loading true and error null
    //   - awaits fetch("/quotes.json", { signal: controller.signal })
    //   - throws if !res.ok, otherwise awaits res.json()
    //   - calls setQuotes(data)
    //   - in catch, ignores AbortError but sets a friendly error message
    //   - in finally, sets loading false

    // TODO 3: call the async function, then return a cleanup that aborts:
    //   return () => controller.abort();
  }, []);

  return (
    <aside className="recent-quotes">
      <h2>Recent quotes</h2>
      {/* TODO 4: show "Loading recent quotes…" while loading is true */}
      {/* TODO 5: show the error message when error is set */}
      {/* TODO 6: when not loading and no error, render the <ul> of quotes below */}
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
