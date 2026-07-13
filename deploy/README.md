# Deploying to Vercel

The site is a static Vite build (`dist/`) deployed to **Vercel** — no servers, buckets, or CDNs to manage yourself.

## One-time setup

1. **Install the Vercel CLI**

   ```sh
   npm i -g vercel
   ```

2. **Log in** (opens a browser to authenticate):

   ```sh
   vercel login
   ```

## Deploy

From the `portfolio/` folder:

```sh
./deploy/deploy.sh
```

The **first run** asks a few setup questions (link to a new or existing
Vercel project, confirm the framework preset — it auto-detects Vite),
then builds and deploys to production, printing your live URL:

```
✅ Production: https://prince-gupta-portfolio.vercel.app
```

## Updating the site later

Edit content in `src/data/resume.ts` (all text, links, projects live there),
replace `public/PrinceGupta.pdf` if the resume changed, then run the same
script again:

```sh
./deploy/deploy.sh
```

## Alternative: deploy via GitHub (no CLI needed)

1. Push this repo to GitHub (see the root `README.md`).
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects the Vite framework preset — build command
   `npm run build`, output directory `dist`. Click **Deploy**.
4. Every future push to `main` auto-deploys.

## Costs

Vercel's free (Hobby) tier comfortably covers a personal portfolio —
generous bandwidth and build minutes at no cost.

## Tearing it down

Remove the project from the Vercel dashboard (Project → Settings →
Delete), or via CLI:

```sh
vercel remove prince-gupta-portfolio
```
