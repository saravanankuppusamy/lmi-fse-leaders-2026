import { useState } from "react";
import { COMPANY, TAGLINE } from "@/branding";
import "./App.css";

// Solution: the title comes from a VITE_ environment variable (with a safe
// fallback), and branding is imported with the "@" path alias instead of a
// fragile relative path.
const appTitle = import.meta.env.VITE_APP_TITLE ?? COMPANY;

export default function App() {
  const [views, setViews] = useState(0);

  return (
    <main className="app">
      <h1>{appTitle}</h1>
      <p className="tagline">{TAGLINE}</p>

      <section className="card">
        <p>
          You have viewed this quote page <strong>{views}</strong>{" "}
          time{views === 1 ? "" : "s"}.
        </p>
        <button onClick={() => setViews((v) => v + 1)}>Count a view</button>
      </section>

      <p className="hint">
        Edit <code>src/App.tsx</code> and save — the page updates instantly and the
        counter keeps its value. That is Hot Module Replacement.
      </p>
    </main>
  );
}
