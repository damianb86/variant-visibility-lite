export const APP_CONFIG = {
  name: "Variant Visibility Lite",
  shortName: "Variant Visibility",
  slug: "variant-visibility-lite",
  tagline: "Hide selected variants on storefront selectors without pretending Shopify has variant-level publishing.",
  problem: "Shopify publishing is product-level, but merchants often need to hide individual variants from shoppers.",
  persona: "Merchandiser managing discontinued colors, wholesale-only variants, samples or temporary availability.",
  value: "A transparent storefront control layer using variant metafields and theme app extension guidance.",
  primaryFlow: "Choose variants, mark visibility rules, preview the storefront selector behavior, and keep checkout blocking as a future safeguard.",
  color: "#7c3aed",
  mainObject: "Variant visibility rule",
  workspaceLabel: "Variant workbench",
  settingsLabel: "Visibility",
  requiredScopes: ["read_products","write_products"],
  doNotRequestScopes: ["read_orders","read_customers","write_publications"],
  integrations: [
  "ProductVariant metafield definition under app namespace for hidden_on_storefront.",
  "Theme app extension JavaScript to remove hidden variants from selectors.",
  "Future cart and checkout validation to block hidden variants from stale links."
],
  mvpFeatures: [
  "Variant rule table with status and reason.",
  "Selector behavior preview for first visible variant, hidden variants and deep links.",
  "Settings form for default behavior and checkout safeguard readiness.",
  "Explicit limitations around theme support."
],
  outOfScope: [
  "True variant publication control.",
  "Guaranteed support for every custom theme selector.",
  "Separate variant product cards in collection grids."
],
  futureFeatures: [
  "Theme app extension for Dawn and selected OS 2.0 themes.",
  "Checkout validation Function for hidden variant protection.",
  "Collection-specific visibility rules."
],
  screens: [
  "Dashboard: hidden variants and theme readiness.",
  "Variant workbench: variant table and selector preview.",
  "Visibility: default hide/show behavior and safety settings.",
  "Help/QA: theme support matrix and manual tests."
],
  sampleRows: [
  [
    "Blue / XL",
    "Hidden for discontinued color",
    "High",
    "Hide from selector"
  ],
  [
    "Sample / One size",
    "Staff-only sample",
    "Medium",
    "Block deep link"
  ],
  [
    "Red / S",
    "Visible",
    "Low",
    "No change"
  ]
],
  metrics: [
  [
    "Variants flagged",
    "39"
  ],
  [
    "Products affected",
    "12"
  ],
  [
    "Theme checks",
    "3"
  ]
],
  settingsFields: {
  "workflowName": "Default hidden variant rule",
  "thresholdLabel": "Max hidden variants per product",
  "thresholdDefault": "10",
  "ownerEmail": "merchandising@example.com"
},
  risks: [
  "Theme JavaScript and quick views vary substantially across stores.",
  "Deep links and stale carts require checkout validation for complete enforcement."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
