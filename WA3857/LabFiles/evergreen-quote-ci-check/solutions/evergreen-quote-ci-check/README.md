# Evergreen Insurance Quote Page — Week 7 solution

This folder is the completed state of the Week 7 lab. Compared to the
starter, it adds one file:

- `.github/workflows/ci.yml` — a minimal GitHub Actions workflow that runs
  on every pull request targeting `main`. It checks out the repository,
  installs Node.js 20, and runs `node --check app.js` so there is a visible
  pass/fail signal in the Actions tab.

All application files (`index.html`, `styles.css`, `app.js`) are unchanged
from Week 6.

## How to use this folder

If a student falls behind and needs to catch up, they can copy the entire
contents of this folder — including the hidden `.github/` directory — into
a fresh `evergreen-quote-demo` repository, push to `main`, then open a PR
with a trivial change to see the CI run. On Ubuntu, the `.github` folder
is hidden by default; press `Ctrl+H` in the Files app or use `ls -a` in a
terminal to confirm it copied over.
