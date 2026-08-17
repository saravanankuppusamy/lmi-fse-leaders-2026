// App.tsx (Solution)
// RecentQuotes now fetches its own data, so App just lays out the page.
import QuoteForm from "./components/QuoteForm";
import RecentQuotes from "./components/RecentQuotes";

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
          <p>Recent quotes load from the server with useEffect.</p>
        </section>

        <section className="quote-form-section">
          <QuoteForm />
          <RecentQuotes />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </>
  );
}

export default App;
