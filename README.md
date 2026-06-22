# HMT Hemant Tambe Website

Static business website for Hemant Maruti Tambe / HMT, built with Vinext and
deployed as a Cloudflare Worker with static assets.

## Prerequisites

- Node.js `>=22.13.0`
- Cloudflare account access
- Wrangler authentication with `npx wrangler login`

## Local Development

```bash
npm install
npm run dev
```

Local preview normally runs at:

```text
http://127.0.0.1:3000
```

## Validation

```bash
npm run lint
npm run build
```

The build creates deployable output in `dist/`.

## Cloudflare Deployment

Vinext generates the Wrangler deployment config at:

```text
dist/server/wrangler.json
```

Run a deploy validation first:

```bash
npm run deploy:dry-run
```

Deploy to Cloudflare:

```bash
npm run deploy:cloudflare
```

The Worker name is currently:

```text
hmt-hemant-tambe-website
```

## Project Shape

- `app/`: site pages, SEO metadata, robots, sitemap, and styles
- `public/`: logo and contact assets
- `worker/`: Vinext Cloudflare Worker entry point
- `.openai/hosting.json`: optional Sites storage metadata, currently no D1/R2
