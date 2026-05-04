# Implementation plan

## File tree esperado
- app/routes/app.tsx
- app/routes/app._index.tsx
- app/routes/app.workspace.tsx
- app/routes/app.settings.tsx
- app/routes/app.help.tsx
- app/routes/preview.tsx
- app/components/AppScreens.tsx
- app/lib/app-config.ts
- app/lib/mock-data.ts
- app/lib/validators.ts
- app/lib/graphql.ts
- app/styles/app-home.module.css
- docs/*.md
- tests/**/*
- .github/workflows/qa.yml

## Cambios por archivo
- Rutas: loader/action autenticados y pantallas visuales.
- Components: Polaris web components y estados.
- Lib: config, validacion y helpers GraphQL.
- Tests: unit, component, integration-lite, E2E y a11y.
- CI: npm ci, typecheck, lint, tests, build y Shopify validate/build best-effort.

## Dependencias
- vitest, testing-library, jest-dom, jsdom, msw, playwright, axe.

## Riesgos
- Theme JavaScript and quick views vary substantially across stores.
- Deep links and stale carts require checkout validation for complete enforcement.

## Orden de trabajo
1. Scaffold Shopify CLI React Router.
2. Configurar app metadata/scopes.
3. Crear UI y rutas.
4. Crear docs y trazabilidad.
5. Agregar tests/fixtures/mocks.
6. Correr typecheck/lint/test/build/validate cuando haya deps/env.

## Requiere credenciales/dev store
- `shopify app dev`
- OAuth real.
- Admin GraphQL real.
- App Store review real.
