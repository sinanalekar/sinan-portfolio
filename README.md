# Sinan Alekar · Research Portfolio

Public portfolio, research library and documentation built with Next.js.

## Local development

Use Node.js 22.13 or later. Run `npm ci`, then `npm run dev`.
Run `npm test`, `npm run lint`, `npm run typecheck` and `npm run build` to check changes.

## Publishing an entry

Add an entry to `app/data.ts` with a unique slug, topic, kind, color, summary and article sections. The library, documentation listing and sitemap use this catalog. Link to public source material where useful. Keep private repositories, unpublished findings and personal contact information out of the catalog and résumé page.

The repository also supports the worker deployment described in [docs/deployment.md](docs/deployment.md).

## Browser verification

Run `npm run build` followed by `npm run test:e2e`. The suite starts a production server on port 3001. It uses system Chromium when available; otherwise run `npx playwright install chromium` first, or set `CHROMIUM_PATH`. To test a preview, use `BASE_URL=https://your-preview.vercel.app npm run test:e2e`.

See [the redesign review](docs/review/README.md) for design decisions, public content sources, interaction behavior, and desktop/mobile captures.
