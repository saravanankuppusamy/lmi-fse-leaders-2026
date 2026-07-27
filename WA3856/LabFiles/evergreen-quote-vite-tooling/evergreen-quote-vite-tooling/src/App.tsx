import { useState } from "react";
import { COMPANY, TAGLINE } from "./branding";
import "./App.css";

// Starter: the title is hard-coded and branding is imported with a relative path.
// In the lab you will move the title into a .env file and switch this import to a
// path alias ("@/branding").
const appTitle = COMPANY;

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
