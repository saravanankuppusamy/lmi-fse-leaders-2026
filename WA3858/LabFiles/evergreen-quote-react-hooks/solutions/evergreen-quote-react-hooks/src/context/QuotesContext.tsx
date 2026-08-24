// QuotesContext.tsx (Solution)
// CONTEXT + useReducer: share the saved-quotes list across the component tree
// without prop drilling. useReducer centralizes how the list changes.
import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { Quote } from "../types";
import { sampleQuotes } from "../sampleQuotes";

type Action = { type: "add"; quote: Quote };

function quotesReducer(state: Quote[], action: Action): Quote[] {
  switch (action.type) {
    case "add":
      return [action.quote, ...state];
    default:
      return state;
  }
}

interface QuotesContextValue {
  quotes: Quote[];
  addQuote: (quote: Quote) => void;
}

const QuotesContext = createContext<QuotesContextValue | null>(null);

export function QuotesProvider({ children }: { children: ReactNode }) {
  const [quotes, dispatch] = useReducer(quotesReducer, sampleQuotes);
  const addQuote = (quote: Quote) => dispatch({ type: "add", quote });

  return (
    <QuotesContext.Provider value={{ quotes, addQuote }}>
      {children}
    </QuotesContext.Provider>
  );
}

// A small custom hook that wraps useContext — the recommended pattern.
export function useQuotes(): QuotesContextValue {
  const ctx = useContext(QuotesContext);
  if (!ctx) {
    throw new Error("useQuotes must be used within a QuotesProvider");
  }
  return ctx;
}
