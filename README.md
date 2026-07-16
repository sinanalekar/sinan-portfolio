# Sinan Alekar — Portfolio

Production portfolio for **Sinan Anwar Alekar**, a Computer Engineering Student, Full-Stack Developer, and AI & Cybersecurity Enthusiast.

## Highlights

- Original responsive dark/light interface
- Public project case studies for Sentinental IX and IX:X
- Embedded, downloadable resume PDF
- Server-side contact endpoint with Zod validation, honeypot and rate limiting
- Server-validated contact workflow that opens the visitor's email client
- Open Graph, structured data, sitemap, robots and web manifest
- Accessible semantic markup and keyboard-friendly navigation

## Stack

Next.js App Router, TypeScript, React, Tailwind CSS, Vinext and a Vercel-compatible source-control/deployment workflow.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The environment file should define `NEXT_PUBLIC_SITE_URL`. Never commit `.env*` files.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

## Content updates

- Core portfolio content: `app/data.ts`
- Page content: `app/**/page.tsx`
- Resume: replace `public/resume.pdf` without changing the filename
- Social preview: replace `public/og.png`
- Visual system: `app/globals.css`

## Deployment

See [`docs/deployment.md`](docs/deployment.md). The project intentionally contains no visitor PIN or admin panel; project details are public.

## License

MIT © 2026 Sinan Anwar Alekar.
