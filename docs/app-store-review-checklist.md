# App Store review checklist

- [ ] Install from review link on a clean dev store.
- [ ] Reinstall after uninstall; no stale shop data remains.
- [ ] OAuth/session token flow works inside Shopify Admin.
- [ ] Embedded navigation uses App Bridge/React Router and no top-window unsafe redirects.
- [ ] Scopes are minimal: read_products, write_products.
- [ ] Missing permissions produce useful UI.
- [ ] Billing is either disabled or uses Shopify Billing API with test plan.
- [ ] Webhooks configured and verified: app/uninstalled, app/scopes_update.
- [ ] 404/500 pages do not expose stack traces.
- [ ] UI works in narrow viewport.
- [ ] Axe scan has no critical issues.
- [ ] Reviewer instructions include test data, no real secrets.
- [ ] Known limitation disclosed: MVP is visual and Admin App Home plus future theme app extension.
