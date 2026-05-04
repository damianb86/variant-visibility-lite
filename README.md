# Variant Visibility Lite

Embedded Shopify Admin app scaffold generated from the modern Shopify CLI React Router template.

## Local setup

1. Copy `.env.example` to `.env` and set `SHOPIFY_API_KEY`, `SHOPIFY_API_SECRET`, `SHOPIFY_APP_URL`, `SCOPES`, and `DATABASE_URL`.
2. Link or create the Shopify app:

```sh
shopify app config link
```

3. Run local development:

```sh
npm install
npm run setup
npm run dev
```

For a non-authenticated visual preview used by Playwright:

```sh
PLAYWRIGHT_START_SERVER=true npm run test:e2e
```

No production deploy is configured or required.
