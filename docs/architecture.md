# Architecture

## Tipo de app
- Embedded app en Shopify Admin.
- Candidata a public app; puede usarse custom durante desarrollo.
- App Store readiness documentado, sin deploy.

## Estructura tecnica
- `app/routes/app.tsx`: layout autenticado, AppProvider, App Bridge y navegacion embebida.
- `app/routes/app._index.tsx`: dashboard.
- `app/routes/app.workspace.tsx`: workspace visual.
- `app/routes/app.settings.tsx`: action server-side de validacion.
- `app/routes/app.help.tsx`: QA/readiness.
- `app/routes/preview.tsx`: preview local no autenticado para Playwright.
- `app/components/AppScreens.tsx`: UI Polaris compartida.
- `app/lib/*`: config, fixtures, validadores y helpers GraphQL.
- Prisma/PostgreSQL: Session, AppSetting, AppAuditEvent.

## Shopify checklist
- Scopes minimos: read_products, write_products.
- No pedir: read_orders, read_customers, write_publications.
- OAuth/session tokens manejados por `@shopify/shopify-app-react-router`.
- Reinstalacion: webhook `app/uninstalled` limpia estado futuro por shop.
- Staff permissions: mostrar permission state si faltan permisos.
- 401/403/404/500: mostrar estado recuperable, no stack traces al cliente.
- GraphQL `errors`: `collectGraphqlErrors` y error state.
- GraphQL `userErrors`: `formatUserErrors` y validation state.
- Rate limits: paginacion y retry/backoff futuro.
- GIDs: no convertir a legacy IDs salvo necesidad documentada.
- Multi-shop: todas las tablas futuras indexadas por `shop`.

## UX Polaris
- `s-page`, `s-section`, `s-box`, `s-banner`, `s-badge`, `s-button`, `s-text-field` y una tabla HTML accesible dentro de secciones Polaris.
- Empty/loading/success/error/validation/permission states visibles.
- Acciones destructivas fuera de alcance en MVP.
- Navegacion embebida por `s-app-nav`.
