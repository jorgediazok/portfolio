# Jorge Díaz — Portfolio

Personal portfolio of **Jorge Díaz**, a senior frontend developer based in Buenos Aires, Argentina.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38bdf8?logo=tailwindcss)
![Deployed on Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify)

A single-page site with a Hero, About, and Projects section, dark mode, scroll-reveal animations, and English/Spanish localization.

## Tech stack

| Layer         | Tools                                     |
| ------------- | ------------------------------------------ |
| Framework     | Next.js 16 (App Router)                    |
| Language      | TypeScript                                 |
| Styling       | Tailwind CSS                               |
| Theming       | next-themes (light/dark, system-aware)     |
| i18n          | next-intl (`/en`, `/es`, English default)  |
| Navigation    | react-scroll (smooth in-page scrolling)    |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Project structure

```
app/[locale]/ # App Router entry (layout, page) — locale-scoped
app/          # Locale-agnostic metadata routes: icon, opengraph-image, robots, sitemap
components/   # Navbar, Hero, About, Projects, Footer, theme Providers, Slide (scroll-reveal), Logo
i18n/         # next-intl routing/navigation/request config
messages/     # en.json / es.json — all translated UI copy
utils/        # Content as data — nav items, projects, skills (non-translatable fields only)
types/        # Shared TypeScript types
```

Content (nav links, projects, skills) lives in `utils/` as plain data, keyed by a stable `id`. Translated strings for that content live in `messages/en.json` and `messages/es.json` under the matching `id` — update both files together when adding a project or skill.

## Deploy

Deployed on [Netlify](https://jorgedev-portfolio.netlify.app/). Set the `NEXT_PUBLIC_SITE_URL` environment variable if the domain ever changes — it drives `metadataBase`, canonical URLs, `robots.txt`, and `sitemap.xml`.

> **Note:** `next/image` optimization is disabled (`images.unoptimized` in `next.config.js`) because Netlify's image proxy (`/_ipx`) currently 500s on this site. Images are served as static files directly instead. Revisit this if Netlify fixes their Next.js image handling.

## Contact

- GitHub: [@jorgediazok](https://github.com/jorgediazok)
- LinkedIn: [in/jorgediaz1984](https://www.linkedin.com/in/jorgediaz1984/)
