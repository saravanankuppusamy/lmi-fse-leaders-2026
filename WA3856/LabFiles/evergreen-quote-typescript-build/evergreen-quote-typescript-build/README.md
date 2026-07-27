# Evergreen Quote — TypeScript Build (Starter)

This is the Week 1 Evergreen quote logic, moved into a real **TypeScript + Vite**
project managed by **npm**. The app already runs — your job is to add the types
that make it safe.

## Run it

```bash
npm install      # download the packages listed in package.json
npm run dev      # start the Vite dev server, then open the URL it prints
```

The page works right away because Vite's dev server strips types and runs the
JavaScript. But open `src/premium.ts` in VS Code and you will see red
underlines — TypeScript is telling you the types in `types.ts` are still missing.

Follow the lab guide to fill in the `TODO` comments. When you are done:

```bash
npm run build    # runs tsc (type-check) then builds — must pass with no errors
```
