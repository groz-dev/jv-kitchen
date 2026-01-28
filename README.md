# JV Kitchen

A tiny, static recipe website (Astro + Tailwind) intended for:
- browsing recipes in a grid
- opening a recipe “card” layout (title, ratings, ingredients, directions)
- swiping left/right on mobile to move between recipes

## Local dev

```bash
npm install
npm run dev
```

## Add a recipe

Edit `src/data/recipes.ts` and add a new item to the `recipes` array.

Put images/illustrations in `public/recipes/` and reference them like:

```ts
image: "/recipes/my-dish.jpg"
```

## GitHub Pages

This project is ready for GitHub Pages once you set `site` + `base` in `astro.config.mjs`
(the `base` should match your repo name).

