// App.tsx (Solution)
// The whole app is wrapped in <QuotesProvider> so any component can read or
// update the saved-quotes list through context.
import QuoteForm from "./components/QuoteForm";
import RecentQuotes from "./components/RecentQuotes";
import { QuotesProvider } from "./context/QuotesContext";

function App() {
  return (
    <QuotesProvider>
      <header className="site-header">
        <div className="brand">Evergreen Insurance</div>
        <nav className="site-nav">
          <a href="#">Coverage</a>
          <a href="#">Claims</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <h1>Coverage that grows with you</h1>
          <p>Composed from hooks and context.</p>
        </section>

        <section className="quote-form-section">
          <QuoteForm />
          <RecentQuotes />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </QuotesProvider>
  );
}

export default App;
