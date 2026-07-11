# Evergreen Quote — Capstone Starter Kit

This folder is your **starter kit**. Every "provided piece" the lab tells you to use lives here. You assemble from these — you do not author new code.

On the lab VM this folder is deployed to:

    ~/LabFiles/wa3855-cap-phase-1-capstone-project-leaders/

## What's in here

| Folder | What it's for | When you use it |
|---|---|---|
| `starter/` | The engineering team's runnable starter project (`index.html`, `README.md`, `CAPSTONE-BRIEF.md`). Push it to your own GitHub repo and assemble onto it. | **Day 1** — read the brief, run it, push it to GitHub. |
| `html-partials/` | Section snippets (`header.html`, `hero.html`, `quote-form.html`, `testimonials.html`, `footer.html`) and a page skeleton (`index-skeleton.html`) with `<!-- INSERT: ... -->` markers. | **Day 2 morning** — assemble `index.html`. |
| `theme/` | `theme.css` — the brand theme. Drop it in, link it from `index.html`. | **Day 2 morning** — apply the theme. |
| `js-snippets/` | `quote-calc.js` — the provided `calculatePremium(...)` function. | **Day 3 morning** — wire to the form. |
| `workflows/` | `ci.yml` — the GitHub Actions CI workflow. | **Day 3 morning** — enable CI. |
| `templates/` | Markdown templates for every required deliverable. | **All week** — copy into your `delivery-leadership-package/`. |
| `delivery-leadership-package/` | An **empty scaffold** (just a `.gitkeep`) for your written leadership artifacts. Copy it into your own repo on Day 1, then fill it from `templates/`. | **All week** — your deliverables live here. |

> **Note:** The `solutions/` folder that sits next to this one is **not part of the starter kit** — it is a fully completed reference for instructors. Assemble your own work from the pieces above; don't copy from `solutions/`.

## Bootstrap classes to apply (Day 2)

When you assemble the partials, look for `<!-- CONFIG: add bootstrap class here: <class-name> -->` comments. Replace each one's parent element's `class=""` with the listed class. The exact mapping:

| Partial | Element | Class to add |
|---|---|---|
| `header.html` | `<nav>` | `navbar navbar-expand-lg navbar-dark bg-success` |
| `hero.html` | hero `<section>` | `py-5 text-center text-white bg-success` |
| `quote-form.html` | form container `<section>` | `container py-4` |
| `quote-form.html` | `<form>` | `row g-3` |
| `testimonials.html` | `<section>` | `container py-5` |
| `testimonials.html` | testimonial row | `row g-4` |
| `footer.html` | `<footer>` | `py-3 text-center bg-dark text-light` |

To pick up Bootstrap, the skeleton already includes the Bootstrap 5 CDN `<link>` in `<head>`.

## Wiring snippet for the calculator (Day 3)

After you drop `js/quote-calc.js` into your repo and link it from `index.html`, add this `<script>` block **just before `</body>`**, **after** the `<script src="js/quote-calc.js"></script>` line:

```html
<script>
  document.getElementById("quote-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var coverageType = document.getElementById("coverageType").value;
    var coverageAmount = Number(document.getElementById("coverageAmount").value);
    var premium = calculatePremium(coverageType, coverageAmount);
    document.getElementById("premium-value").textContent = "$" + premium;
    document.getElementById("premium-box").hidden = false;
  });

  // Keep the slider value label in sync.
  var slider = document.getElementById("coverageAmount");
  var display = document.getElementById("coverageAmountDisplay");
  slider.addEventListener("input", function () { display.textContent = slider.value; });
</script>
```

You are pasting this — not writing it.
