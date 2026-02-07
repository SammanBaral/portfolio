# Samman Baral – Portfolio

A personal portfolio website built with React and Vite, ready to deploy.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in the `dist` folder.

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Import this repository; Vercel will detect Vite and use the included `vercel.json`.
4. Deploy. Your site will be live at `https://your-project.vercel.app`.

### Netlify

1. Push to GitHub, then at [netlify.com](https://netlify.com): **Add new site** → **Import from Git**.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

### GitHub Pages

1. In `vite.config.js`, set `base: '/your-repo-name/'` (e.g. `base: '/portfolio/'`).
2. Install: `npm install -D gh-pages`
3. In `package.json`, add:
   - `"homepage": "https://yourusername.github.io/portfolio"`
   - In scripts: `"deploy": "vite build && gh-pages -d dist"`
4. Run `npm run deploy` to publish to GitHub Pages.
