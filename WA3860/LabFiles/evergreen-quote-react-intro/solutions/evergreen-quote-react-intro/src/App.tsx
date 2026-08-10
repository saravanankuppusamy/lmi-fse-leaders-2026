// App.tsx — the root component. It lays out the page and composes the
// QuoteForm and RecentQuotes components. This file is provided for you.
import QuoteForm from "./components/QuoteForm";
import RecentQuotes from "./components/RecentQuotes";
import { sampleQuotes } from "./sampleQuotes";

function App() {
  return (
    <>
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
          <p>Now built with React.</p>
        </section>

        <section className="quote-form-section">
          <QuoteForm />
          <RecentQuotes quotes={sampleQuotes} />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </>
  );
}

export default App;
