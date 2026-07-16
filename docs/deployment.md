# Deployment guide

## Vercel

1. Import the `sinanalekar/sinan-portfolio` GitHub repository.
2. Keep the default Next.js build settings.
3. Add `NEXT_PUBLIC_SITE_URL` with the production URL.
4. Deploy and then update `NEXT_PUBLIC_SITE_URL` if Vercel assigned a different production URL.

## OpenAI Sites

The included `.openai/hosting.json` requires no database or object-storage binding.

## Custom domain

Attach the domain in the deployment provider, verify DNS, then update `NEXT_PUBLIC_SITE_URL` so canonical URLs, sitemap entries and social metadata use it.
