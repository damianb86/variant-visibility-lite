# Assumptions

## Supuestos para avanzar
- El MVP solicitado prioriza pantallas visuales funcionales, no integracion productiva con datos reales.
- Cada app sera una Shopify public app candidata, pero aun no vinculada al Partner Dashboard.
- `client_id` local es placeholder tecnico y debe reemplazarse con `shopify app config link`.
- Variant Visibility Lite no usa datos reales de merchants ni secrets.
- Los scopes fueron elegidos por minimo acceso segun documentacion Shopify revisada con Shopify Dev MCP.

## Preguntas abiertas
- Tienda dev store objetivo para QA real.
- Dominio/tunnel final por app.
- Modelo de pricing y billing.
- Nivel de soporte de theme/checkout en las apps con storefront o Functions.

## Decisiones tomadas
- Usar React Router template moderno generado por Shopify CLI.
- Usar Polaris web components con CSS minimo por app.
- Incluir preview no autenticado solo para E2E visual local.
