# Security and privacy

- No guardar secrets en repo.
- Tokens OAuth/session tokens solo en servidor y Prisma session storage.
- Las rutas `/app/*` llaman `authenticate.admin`.
- El preview `/preview` no muestra datos reales ni llama Shopify APIs.
- Validar inputs client-side visualmente y server-side en actions.
- Minimizar datos: no customer/order data en MVP.
- Logs futuros solo con shop, tipo de evento, estado y metadata no sensible.
- Multi-shop isolation por columna `shop`.
- IA fuera de alcance; si se agrega, outputs deben validarse con schema y prompts versionarse.
