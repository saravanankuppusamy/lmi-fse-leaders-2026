# Evergreen Insurance — Quote Page (Week 2)

A small static web app used across the FSE Leaders Phase 1 program. Each week,
you'll open this app (or a week-specific variant of it) and make a small,
scoped change that illustrates what your engineering teams actually do.

## What's in this folder

- `index.html` — the page structure (HTML)
- `styles.css` — the visual styling (CSS)
- `app.js` — the behavior, including the premium calculation (JavaScript)

## How to open it

1. Open this folder in Visual Studio Code.
2. Right-click `index.html` in VS Code and choose **Open with Live Server**.
3. Fill in the form and click **Calculate Premium** to see it in action.

## What Week 2 focuses on

This week is about **HTML** — the markup language that defines the structure
of every web page. You've already seen this file in Week 1. This week you
will add one new field to the quote form: an **email address** input. It's
a small change, but it will cover the core ideas of HTML forms:

- How `<label>` associates descriptive text with an `<input>`
- How `type="email"` gives you free, browser-built-in validation
- How `required` prevents the form from submitting without a value
- How VS Code and Git show your change once you save it

> **Why this matters:** When a product manager or customer emails to say
> "the quote form is missing an email field — can we add one?", the change
> you're about to make is exactly what an engineer does in response.
