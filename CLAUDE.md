# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # next lint
```

There is no test suite configured in this repo (no Jest/Cypress/Playwright setup here — that only exists in the separate "The Culture Atlas" project referenced in the portfolio content).

## Architecture

Single-page portfolio built with Next.js 13 (App Router) + TypeScript + Tailwind CSS.

- **Entry point**: `app/page.tsx` composes the whole page as a stack of section components — `Hero`, `About`, `Projects` — rendered inside `app/layout.tsx`, which wraps everything in `Navbar`, `Footer`, and `Providers`.
- **Content as data, not markup**: page content (nav links, project list, skills) lives in plain TS objects/arrays under `utils/` (`navItems.ts`, `projects.ts`, `skills.ts`), typed via `types/index.ts`. To change what's displayed (add a project, a skill, a nav link), edit the relevant file in `utils/` rather than the component markup.
- **Single-page navigation**: there's no routing between sections — `Navbar` uses `react-scroll`'s `Link` (`spy`, `smooth`, `offset`) to scroll to section anchors within the one page, driven by the `NAV_ITEMS` list in `utils/navItems.ts`.
- **Theming**: dark mode is class-based (`darkMode: 'class'` in `tailwind.config.js`) and controlled by `next-themes`, wired up in `components/Providers.tsx` (`ThemeProvider` with `enableSystem`) and toggled from `Navbar`.
- **Scroll-reveal animation**: `components/Slide.tsx` is a generic wrapper that uses an `IntersectionObserver` to add a custom Tailwind keyframe animation (`slideUpCubiBezier`, defined in `tailwind.config.js`) when a section scrolls into view. Wrap new sections in `<Slide>` to get the same reveal effect.
- **Icons**: `react-icons` (currently `ri` and `io` icon sets) for UI icons (theme toggle, mobile menu).

## Content notes

- Site metadata/SEO (title, description, OpenGraph) is set once in `app/layout.tsx` — update it there if the positioning/bio changes.
- The `projects` array (`utils/projects.ts`) is the portfolio's project showcase; each entry expects `name`, `description`, `image` (path under `public/`), `github`, `link`, and `tech`.
