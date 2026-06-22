# Evergreen Quote — Rate Tweak (solution)

This is the Week 5 solution. The only change from the starter is a
single one-character edit inside `app.js`:

```diff
   const ratePerThousand = {
-    auto: 1.2,
+    auto: 1.5,
     home: 0.9,
     renters: 0.4,
   };
```

That change raises the per-thousand Auto rate by 25%. Submitting the
form with Auto + $50,000 now returns $75 (up from $60) — a visible,
predictable result that students can confirm in the browser.

The optional bonus in the lab (changing the `"$"` label prefix to
`"Estimated: $"`) is intentionally not in this solution file. The
mandatory change is tight so the student diff stays small and
reviewable.

See `evergreen-quote-rate-tweak.adoc` in the course materials for the
full walkthrough.
