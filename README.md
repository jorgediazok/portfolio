# Jorge Díaz — Portfolio

Personal portfolio of **Jorge Díaz**, a senior frontend developer based in Buenos Aires, Argentina.

![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38bdf8?logo=tailwindcss)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

A single-page site with a Hero, About, and Projects section, dark mode, and scroll-reveal animations.

## Tech stack

| Layer      | Tools                                  |
| ---------- | --------------------------------------- |
| Framework  | Next.js 13 (App Router)                 |
| Language   | TypeScript                              |
| Styling    | Tailwind CSS                            |
| Theming    | next-themes (light/dark, system-aware)  |
| Navigation | react-scroll (smooth in-page scrolling) |

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
app/          # App Router entry (layout, page, metadata)
components/   # Navbar, Hero, About, Projects, Footer, theme Providers, Slide (scroll-reveal)
utils/        # Content as data — nav items, projects, skills
types/        # Shared TypeScript types
```

Content (nav links, projects, skills) lives in `utils/` as plain data — update those files to change what's displayed, no need to touch component markup.

## Deploy

Deployed on [Vercel](https://vercel.com).

## Contact

- GitHub: [@jorgediazok](https://github.com/jorgediazok)
- LinkedIn: [in/jorgediaz1984](https://www.linkedin.com/in/jorgediaz1984/)
