# Local PostgreSQL

This app uses PostgreSQL for local development and production-like session storage.

## Local defaults

- Host: `127.0.0.1`
- Port: `5432`
- Database: `variant_visibility_lite`
- Development user: `qorve_dev`
- Password: store it only in `.env`; do not commit it

The local machine for this workspace was bootstrapped with Homebrew PostgreSQL and a per-app database owned by `qorve_dev`.

## Required environment

```env
DATABASE_URL=postgresql://qorve_dev:<local-password>@127.0.0.1:5432/variant_visibility_lite
```

## Commands

```sh
brew services start postgresql@18
npm run setup
npm run typecheck
```

## Production notes

Use a unique managed database user, a generated password from the hosting provider, SSL where required by the provider, backups, and connection limits/pooling appropriate for the runtime. Keep `DATABASE_URL` in the platform secret manager, not in Git.
