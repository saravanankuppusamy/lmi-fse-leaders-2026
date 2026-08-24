// QuotesContext.tsx (Starter)
// CONTEXT lets components share data without passing it through props at every
// level ("prop drilling"). In the lab you will create a context that holds the
// saved-quotes list, with useReducer deciding how the list changes.
import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { Quote } from "../types";
import { sampleQuotes } from "../sampleQuotes";

type Action = { type: "add"; quote: Quote };

// TODO 4: write the reducer. For action.type "add", return a new array with the
//         new quote at the front: [action.quote, ...state]. Otherwise return state.
function quotesReducer(state: Quote[], action: Action): Quote[] {
  return state;
}

interface QuotesContextValue {
  quotes: Quote[];
  addQuote: (quote: Quote) => void;
}

const QuotesContext = createContext<QuotesContextValue | null>(null);

export function QuotesProvider({ children }: { children: ReactNode }) {
  // TODO 5: const [quotes, dispatch] = useReducer(quotesReducer, sampleQuotes);
  //         const addQuote = (quote: Quote) => dispatch({ type: "add", quote });

  // TODO 6: return the provider, passing value={{ quotes, addQuote }}.
  //   <QuotesContext.Provider value={{ quotes, addQuote }}>
  //     {children}
  //   </QuotesContext.Provider>
  return <>{children}</>;
}

// A small custom hook that wraps useContext — the recommended pattern.
export function useQuotes(): QuotesContextValue {
  const ctx = useContext(QuotesContext);
  if (!ctx) {
    throw new Error("useQuotes must be used within a QuotesProvider");
  }
  return ctx;
}
