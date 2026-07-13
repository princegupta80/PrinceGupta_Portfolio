# Prince Gupta — Portfolio

A single-page portfolio built with **React + TypeScript + Vite**, styled with
**Tailwind CSS v4**, animated with **Framer Motion**, and deployed to
**AWS S3 + CloudFront**.

## Run locally

```sh
npm install
npm run dev        # dev server at http://localhost:5173
```

## Editing content

Everything on the site — name, summary, skills, experience, projects,
education, achievements, links — lives in **`src/data/resume.ts`**.
Edit that one file and the whole site updates; no component changes needed.

To update the downloadable resume, replace **`public/PrinceGupta.pdf`**
(keep the same filename, or also change `resumeFile` in `resume.ts`).

## Features

- Light/dark theme toggle (defaults to dark, persisted in `localStorage`)
- Typewriter hero tagline, scroll-reveal sections, hover micro-interactions
  (all animations respect `prefers-reduced-motion`)
- Resume download buttons in the navbar, hero, and footer
- Responsive layout with a mobile menu
- SEO meta tags and a custom favicon

## Build & deploy

```sh
npm run build      # outputs static site to dist/
```

Deployment to S3 + CloudFront is scripted — see **[`deploy/README.md`](deploy/README.md)**:

```sh
./deploy/deploy.sh
```
"# PrinceGupta_Portfolio" 
