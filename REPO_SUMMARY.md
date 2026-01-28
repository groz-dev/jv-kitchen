## V&J Kitchen – Repo Summary

**Tech stack**: Astro 5, TypeScript, Tailwind CSS 3, PostCSS/Autoprefixer.  
**App type**: Static, offline-authored recipe book with swipeable full-screen recipe pages.

### What this app does

- **Home page**: Lists all recipes in three switchable views (“List”, “Cards”, “Tiles”). The chosen view is remembered in `localStorage` using the key `vj-kitchen:view`.
- **Recipe pages**: Each recipe has its own static page under `/recipes/[slug]` showing:
  - Big hero image
  - Per-person ratings rendered as star strings
  - Ingredients in multi-column layout
  - Step-by-step directions
  - Mobile-only swipe gestures (left/right) on the recipe card to go to previous/next recipes.

### Project structure

- **Root**
  - `package.json`: Astro app with a single dependency on `astro` plus Tailwind/PostCSS tooling.
  - `astro.config.mjs`: Astro configuration (uses standard `src` and `public` folders).
  - `tailwind.config.mjs`: Tailwind theme extension (colors, fonts, radii, shadows).
  - `postcss.config.cjs`: PostCSS + Autoprefixer setup.
  - `README.md`: Basic project instructions.

- **`src`**
  - `layouts/Layout.astro`
    - Global HTML skeleton: `<main>` centered, max width, padding.
    - Imports global styles from `src/styles/global.css`.
    - Sets `<meta name="theme-color" content="#fbf8f4" />`.
  - `styles/global.css`
    - Includes `@tailwind base; @tailwind components; @tailwind utilities;`.
    - Global background: layered radial gradients over `#fbf8f4` (paper color).
    - Sets root `color-scheme: light`.
    - Defines `.view-toggle-button` styles and `[data-recipes-root][data-view=...]` display logic for list/card/tile views.
  - `data/recipes.ts`
    - Exports:
      - `type PersonRating = { name: string; value: number }`.
      - `type Recipe = { slug; title; image; ingredients[]; directions[]; ratings[] }`.
      - `const recipes: Recipe[]` (all recipes and their content).
  - `pages/index.astro`
    - Imports `Layout` and `recipes`.
    - Derives `base` from `import.meta.env.BASE_URL` and helper `withBase(path)` to prefix links/images.
    - Renders:
      - Header with title “V&J Kitchen” and description.
      - Small “Recipes” counter showing `recipes.length`.
      - View-toggle pill with three buttons (`data-view-button="list" | "card" | "tile"`) and `.view-toggle-button` class.
      - Three recipe grids:
        - **List view**: simple list rows with small thumbnail on the right.
        - **Card view**: medium cards with image, title, and meta.
        - **Tile view**: image-first tiles in a dense grid.
      - Inline `<script>`:
        - Reads/writes `vj-kitchen:view` in `localStorage`.
        - Applies `data-view` on `[data-recipes-root]`.
        - Synchronizes `aria-pressed` and `is-active` class on view-toggle buttons.
  - `pages/recipes/[slug].astro`
    - `getStaticPaths()` reads all `recipes` and returns `[{ params: { slug } }]`.
    - Looks up the recipe by `Astro.params.slug` and throws on unknown slugs.
    - Computes circular `prev` and `next` recipes.
    - Defines `withBase()` helper (same pattern as index).
    - `stars(value: number)` helper returns a 5-character star string from `"★★★★★☆☆☆☆☆"` (values clamped 0–5).
    - Layout:
      - Top bar: back button to `base`, “Prev”/“Next” buttons linking to surrounding recipes.
      - Main `<article>` card with:
        - Large title (uppercased).
        - Ratings section in a `dl` block.
        - Recipe image in a rounded card.
        - “Ingredients” section: two-column list on larger screens.
        - “Directions” section: ordered list with numbered steps.
      - Swipe navigation script:
        - Attaches `touchstart` / `touchend` handlers to the `<article>` with `data-prev` and `data-next`.
        - Ignores mostly-vertical swipes.
        - If horizontal delta exceeds 60px:
          - Swipe right → navigate to `data-prev`.
          - Swipe left → navigate to `data-next`.

- **`public`**
  - `recipes/*.{png,svg}`: Recipe images; `Recipe.image` points to these (e.g. `recipes/rendang.svg`, `recipes/bakwan.png`).

### Tailwind design tokens & layout

From `tailwind.config.mjs`:

- **Colors**
  - `paper: #fbf8f4` – warm off-white paper background.
  - `ink: #14100a` – primary text color.
  - `sand: #f1e8df` – soft beige for cards and pills.
  - `cocoa: #7b5a3a` – primary accent color (headings, accents).

- **Fonts**
  - `font-serif`: `["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]`.
  - `font-sans`: `["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"]`.

- **Radiuses & shadows**
  - `rounded-xl2: 1.25rem` – used for main cards and images.
  - `shadow-soft: 0 10px 30px rgba(20,16,10,0.08)` – used on recipe cards, buttons, and panels.

- **General layout**
  - `Layout.astro` wraps pages in:
    - `main.min-h-screen.px-4.py-10`.
    - Inner container `max-w-5xl mx-auto w-full`.
  - Most interactive elements (cards, buttons) use:
    - Backgrounds like `bg-white/70`, `bg-sand/40`, `bg-paper`.
    - Borders `ring-1 ring-black/5`.
    - Hover: slight translate (`hover:-translate-y-0.5`) and `hover:bg-white`.

### Visual/interaction details to mirror in Next.js

When recreating this app in Next.js + Tailwind, aim to:

- **Use the same Tailwind theme**:
  - Copy the `extend.colors`, `extend.fontFamily`, `extend.borderRadius`, and `extend.boxShadow` config into your Next.js `tailwind.config`.
- **Global background & typography**:
  - Set `body` background to the same layered radial gradients and base color `#fbf8f4`.
  - Set text color to `#14100a` and `color-scheme: light`.
- **View toggle behavior**:
  - Three modes: `"list"`, `"card"`, `"tile"`.
  - Root recipes container (`data-recipes-root`) holds `data-view`.
  - Each grid has `data-view-mode="list|card|tile"` and is `display: grid` only when it matches the current view.
  - Persist chosen view (`vj-kitchen:view`) in `localStorage`.
- **Swipe navigation on recipe page**:
  - Attach `touchstart` / `touchend` listeners to the main recipe card (or use a React hook) to reproduce the same left/right swipe behavior with a 60px threshold and ignore mostly-vertical swipes.
- **Routing & data**:
  - Home page `/`:
    - Import or fetch a `recipes` array matching the `Recipe` type above.
  - Dynamic route `/recipes/[slug]`:
    - Pre-generate pages from `recipes` (e.g. `getStaticPaths`/`generateStaticParams` in Next.js).
    - Compute circular prev/next and wire up buttons and swipe navigation.
  - Store recipe images under `/public/recipes/*` and reference them with the same relative paths.

This description plus the codebase should give a Next.js/Vercel app all the information it needs to recreate the structure, styling, and behaviors of the original Astro version.

