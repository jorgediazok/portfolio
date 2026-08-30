# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint .
```

There is no test suite configured in this repo (no Jest/Cypress/Playwright setup here — that only exists in the separate "The Culture Atlas" project referenced in the portfolio content).

## Architecture

Single-page portfolio built with Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

- **Entry point**: `app/[locale]/page.tsx` composes the whole page as a stack of section components — `Hero`, `About`, `Projects` — rendered inside `app/[locale]/layout.tsx` (the actual root layout, since it's the one rendering `<html>`), which wraps everything in `Navbar`, `Footer`, and `Providers`.
- **i18n (`next-intl`)**: the site is served at `/en` and `/es` (see `i18n/routing.ts` — `localePrefix: 'always'`, `localeDetection: false`). `/` always redirects to `/en` regardless of browser language, by design — the English version is the "official" default and Spanish is opt-in via the switcher, not browser-detected. `proxy.ts` (Next 16's renamed `middleware.ts`) runs `next-intl`'s locale-routing middleware. UI copy lives in `messages/en.json` / `messages/es.json`; client components use `useTranslations` (e.g. `Navbar`, `Hero`), server components use `getTranslations` (e.g. `About`, `Projects`, `Footer`). `utils/projects.ts` and `utils/skills.ts` hold only non-translatable data (`id`, `image`, `tech`, links) — the `id` is the lookup key into `messages/*.json`'s `projects.items.<id>` / `about.categories.<id>`. The language switcher (`Navbar`) is a **plain `<a href="/en">`/`<a href="/es">`** (with an eslint-disable for `@next/next/no-html-link-for-pages`), not `next/link` or `next-intl`'s client `Link` — a client-side transition here re-renders the root layout's inline JSON-LD `<script>` and trips a React "script tag won't re-execute" dev warning; a full page load sidesteps it and also resets scroll for the new locale's different copy length.
- **Content as data, not markup**: page content (nav links, project list, skills) lives in plain TS objects/arrays under `utils/` (`navItems.ts`, `projects.ts`, `skills.ts`), typed via `types/index.ts`, with translated strings resolved from `messages/*.json` by `id`. To add a project/skill/nav link: add the data row in `utils/`, then add matching keys to **both** `messages/en.json` and `messages/es.json`.
- **Single-page navigation**: there's no routing between sections — `Navbar` uses `react-scroll`'s `Link` (`spy`, `smooth`, `offset`) to scroll to section anchors within the one page, driven by the `NAV_ITEMS` list in `utils/navItems.ts`.
- **Theming**: dark mode is class-based, controlled by `next-themes` (`components/Providers.tsx`, `ThemeProvider` with `enableSystem`) and toggled from `Navbar`. Since Tailwind v4 defaults `dark:` to a media-query strategy, class-based dark mode is re-enabled explicitly via `@custom-variant dark (&:where(.dark, .dark *));` in `styles/globals.css` — that's the file to touch if dark mode variants ever stop responding to the toggle. `app/[locale]/layout.tsx`'s `<html>` has `suppressHydrationWarning` because next-themes sets the `class`/`style` attribute client-side before hydration; the Navbar's theme-toggle icon is also gated behind a `mounted` state (via `useSyncExternalStore`, not a `useEffect`+`setState` — the latter trips the `react-hooks/set-state-in-effect` lint rule) for the same reason.
- **Tailwind config lives in CSS, not JS**: there's no `tailwind.config.js` (removed after the v3→v4 migration) — theme customization (custom breakpoints, keyframes/animations) lives in the `@theme` block of `styles/globals.css`, which is the single stylesheet imported from `app/[locale]/layout.tsx`.
- **Scroll-reveal animation**: `components/Slide.tsx` is a generic wrapper that uses an `IntersectionObserver` to add the custom `animate-slideUpCubiBezier` keyframe animation (defined in `styles/globals.css`'s `@theme` block) when a section scrolls into view. Wrap new sections in `<Slide>` to get the same reveal effect.
- **Icons**: `react-icons` (currently `ri`, `io`, `ai`, `bs`, `hi` icon sets) for UI icons (theme toggle, mobile menu, footer/project links, scroll cue).
- **Brand mark**: `components/Logo.tsx` is an inline SVG wordmark — `<JD/>` in a monospace font with teal brackets — used in the Navbar. `app/icon.tsx` (a solid teal `</>` glyph, sized 128px so Satori/resvg antialiases cleanly before the browser downscales it for the tab) and `app/opengraph-image.tsx` are separate, deliberately simplified treatments for legibility at favicon size and social-card scale — they don't need to match the header mark pixel-for-pixel, just stay in the same teal/monospace/code-bracket language. Note: `ImageResponse` (Satori) has no access to system fonts, so `fontFamily: 'ui-monospace, ...'` in the icon/OG image silently falls back to a default sans for any text glyphs beyond `</>` — only the header logo actually renders monospace.
- **Images**: `next.config.mjs` sets `images.unoptimized: true` because the Netlify deploy's image proxy (`/_ipx`) 500s on Next's `/_next/image` optimization requests — don't remove this without confirming Netlify's Next.js image handling actually works first. Also note it's `.mjs` (ESM `import`), not `.js` — required so `next-intl/plugin`'s import isn't a `require()`, which the new eslint config flags.
- **In-page nav links need a real `href`**: every `react-scroll` `Link` (`Navbar`, `Hero`) is given `href="#<section-id>"` in addition to `to="<section-id>"`. Without it, react-scroll renders an `<a>` with no `href`, which isn't keyboard-activatable (focusable via its own `tabIndex={0}`, but pressing Enter does nothing) and can't carry `aria-label` validly. Keep both props on any new scroll link.

## Content notes

- Site metadata/SEO (title, description, OpenGraph, JSON-LD `Person` schema) is generated per-locale in `app/[locale]/layout.tsx`'s `generateMetadata`; `app/robots.ts` and `app/sitemap.ts` (lists both `/en` and `/es` with `hreflang` alternates) derive from the same `SITE_URL`. All three fall back to the deployed Netlify domain but read `NEXT_PUBLIC_SITE_URL` first — set that env var if the domain changes.
- The `projects` array (`utils/projects.ts`) is the portfolio's project showcase; each entry expects `name`, `description`, `image` (path under `public/`), `github`, `link`, and `tech`.
- Accessibility is audited with `axe-core` (not just manual review) — see the a11y-sensitive spots called out above (headings, nav link `href`, color contrast) before assuming a UI tweak is purely cosmetic.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
