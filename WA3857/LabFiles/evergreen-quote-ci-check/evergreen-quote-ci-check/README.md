# Evergreen Insurance Quote Page — Week 7 starter

This folder is the Week 7 starter for the Evergreen Insurance demo app used
throughout the FSE Leaders Phase 1 program. The files are identical to the
state you left them in at the end of Week 6 (the hero copy reads *"Coverage
that scales with your life"*).

## What this week's lab does

Week 7 doesn't change the application. It adds a single, minimal GitHub
Actions workflow file — `.github/workflows/ci.yml` — that runs every time
a pull request is opened against `main`. You'll:

1. Open a feature branch in the `evergreen-quote-demo` repository you
   created in Week 6 (or push these files to a new repo if you need a
   fresh start).
2. Add the `ci.yml` workflow file.
3. Open a pull request.
4. Watch the Actions tab, read the run summary, and click into the logs.
5. Merge the PR and confirm a green check lands on `main`.

The goal is to build fluency reading an Actions run — not to author a
sophisticated pipeline. See `evergreen-quote-ci-check.adoc` for the full
walk-through.

## Files

- `index.html` — landing page with the quote form.
- `styles.css` — page styling.
- `app.js` — premium calculator wired to the form.
- `README.md` — this file.

## How to run it locally

Open `index.html` in VS Code and start the Live Server extension
(right-click → *Open with Live Server*). The Actions workflow you add
this week runs on GitHub, not on your laptop, so local behavior is
unchanged.
