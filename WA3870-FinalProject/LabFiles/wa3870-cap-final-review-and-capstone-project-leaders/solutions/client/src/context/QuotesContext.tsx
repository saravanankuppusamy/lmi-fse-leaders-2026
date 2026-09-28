// QuotesContext.tsx (provided - Day 2, REPLACES src/context/QuotesContext.tsx)
// Version 3 of the provider, and the second behavior-preserving replacement
// this app has seen: the components still call useQuotes() exactly as before,
// but the data now comes from the Evergreen Quote API instead of a bundled
// file, and saving a quote persists it in the database. You drop it in; you
// don't modify it.
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { Quote } from "../types";
import { fetchQuotes, saveQuote, type NewQuoteInput } from "../api";

type Action =
  | { type: "loaded"; quotes: Quote[] }
  | { type: "add"; quote: Quote };

function quotesReducer(state: Quote[], action: Action): Quote[] {
  switch (action.type) {
    case "loaded":
      return action.quotes;
    case "add":
      return [action.quote, ...state];
    default:
      return state;
  }
}

interface QuotesContextValue {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  addQuote: (input: NewQuoteInput) => Promise<void>;
}

const QuotesContext = createContext<QuotesContextValue | null>(null);

export function QuotesProvider({ children }: { children: ReactNode }) {
  const [quotes, dispatch] = useReducer(quotesReducer, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadQuotes() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchQuotes(controller.signal);
        dispatch({ type: "loaded", quotes: data });
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Could not load recent quotes.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadQuotes();
    return () => controller.abort(); // cleanup: cancel if unmounted
  }, []);

  // Saving now goes through the API: the database assigns the id, the API
  // computes the premium, and the saved quote comes back as the record of
  // truth. The list shows what the server saved, not what the browser hoped.
  const addQuote = async (input: NewQuoteInput) => {
    try {
      setError(null);
      const saved = await saveQuote(input);
      dispatch({ type: "add", quote: saved });
    } catch {
      setError("Could not save the quote.");
    }
  };

  return (
    <QuotesContext.Provider value={{ quotes, loading, error, addQuote }}>
      {children}
    </QuotesContext.Provider>
  );
}

// A small custom hook that wraps useContext, the recommended pattern.
export function useQuotes(): QuotesContextValue {
  const ctx = useContext(QuotesContext);
  if (!ctx) {
    throw new Error("useQuotes must be used within a QuotesProvider");
  }
  return ctx;
}
