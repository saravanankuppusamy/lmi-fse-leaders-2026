# Evergreen Insurance — Quote Page (Week 3)

A small static web app used across the FSE Leaders Phase 1 program. Each week,
you'll open this app (or a week-specific variant of it) and make a small,
scoped change that illustrates what your engineering teams actually do.

## What's in this folder

- `index.html` — the page structure (HTML). Unchanged from Week 2.
- `styles.css` — the visual styling (CSS). **This is the file you edit this week.**
- `app.js` — the behavior (JavaScript). Unchanged from Week 2.

## How to open it

1. Open this folder in Visual Studio Code.
2. Right-click `index.html` in VS Code and choose **Open with Live Server**.
3. The page should open in Chrome with the green Evergreen branding.
4. Open Chrome DevTools (F12) — you'll use it throughout the lab.

## What Week 3 focuses on

This week is about **CSS** — the language that controls how every web page
looks. You've been looking at the Evergreen stylesheet for two weeks already;
this week you'll edit it.

Your task: introduce **CSS variables** and use them to **rebrand** the entire
site with a single color change. Specifically you will:

- Count how many times the hardcoded brand green appears in `styles.css`
- Add a `:root { --primary: ...; ... }` block that defines the brand palette
  in one place
- Replace every hardcoded brand color with a `var(--...)` reference
- Change `--primary` to Liberty Mutual blue and watch the whole page rebrand
- Make one spacing adjustment to see how the box model ties together

> **Why this matters:** When the brand team announces "we're moving from
> green to blue across all digital properties," the engineer on the design
> system team does exactly this refactor. A stylesheet that already uses
> variables turns a two-week project into a one-line change.
