# Prompt Engineering Workbook (Solution)

## Exercise 4 — A strong prompt

One good rewrite of "make a discount function":

> In JavaScript (Node, ES modules), write and export a function
> `applyMultiPolicyDiscount(premium, policyCount)` that applies a multi-policy
> discount to an insurance premium. Rules: 1 policy = no discount; 2 policies =
> 10% off; 3 or more = 15% off. Return the discounted premium as a number
> rounded to 2 decimal places. Do not mutate the input. Include no external
> dependencies.

Why it works:

- **Context** — JavaScript, Node, ES modules, an insurance premium.
- **Task** — name, signature, and exactly what it computes.
- **Constraints** — the discount tiers, rounding, no mutation, no dependencies.
- **Format** — returns a number; exported.

The vague version forces the AI to guess the tiers, the rounding, and the return
type. The strong version leaves nothing important to chance — and makes the
result easy to verify against the spec.
