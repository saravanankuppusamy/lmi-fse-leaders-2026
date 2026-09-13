# Prompt Engineering Workbook (Starter)

A good prompt has four parts: **Context**, **Task**, **Constraints**, and
**Format**. Vague prompts make the AI guess — and it will fill the gaps with
assumptions you may not want.

## Exercise 4 — Improve a weak prompt

A teammate asked an AI assistant:

> make a discount function

That is too vague: no context, no rules, no expected shape. Rewrite it as a
strong, specific prompt for the `applyMultiPolicyDiscount` feature.

Write your improved prompt here (replace the TODO):

> TODO: your improved prompt — include the language/runtime, exactly what the
> function should do, the discount rules, rounding, and the return type.

## Try both prompts for real

Open Copilot Chat in **Ask** mode and send the weak prompt exactly as written
above. Look at what comes back. Then start a new chat (the `+` button) and send
your improved prompt. Compare the two answers: which one could you drop into
the codebase and verify against `test.mjs` without edits?

See `prompts.solution.md` for one strong example after you try it yourself.
