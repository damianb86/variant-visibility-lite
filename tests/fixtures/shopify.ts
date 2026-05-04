export const shops = {
  installed: {
    shop: "fixture-shop.myshopify.com",
    scopes: ["read_products","write_products"],
    installed: true,
  },
  empty: {
    shop: "empty-shop.myshopify.com",
    scopes: ["read_products","write_products"],
    installed: true,
    dataState: "empty",
  },
  missingScope: {
    shop: "missing-scope.myshopify.com",
    scopes: [],
    installed: true,
  },
  expiredSession: {
    shop: "expired-session.myshopify.com",
    status: 401,
  },
};

export const products = {
  valid: {
    id: "gid://shopify/Product/1001",
    title: "Valid fixture product",
    handle: "valid-fixture-product",
    status: "ACTIVE",
  },
  missingRequiredData: {
    id: "gid://shopify/Product/1002",
    title: "",
    handle: "",
    status: "DRAFT",
  },
  many: Array.from({ length: 260 }, (_, index) => ({
    id: `gid://shopify/Product/${2000 + index}`,
    title: `Fixture product ${index + 1}`,
  })),
};

export const staffUsers = {
  fullPermissions: { id: "staff-full", permissions: ["apps", "products"] },
  limited: { id: "staff-limited", permissions: [] },
};

export function graphqlSuccess<T>(data: T) {
  return { data };
}

export const graphqlTopLevelErrors = {
  errors: [{ message: "Throttled by fixture", extensions: { code: "THROTTLED" } }],
};

export const graphqlUserErrors = {
  data: {
    mutationResult: {
      userErrors: [{ field: ["input", "title"], message: "Title is required" }],
    },
  },
};

export const rateLimit = {
  errors: [{ message: "Too many requests", extensions: { code: "THROTTLED" } }],
};

export const billing = {
  accepted: { status: "accepted" },
  declined: { status: "declined" },
  pending: { status: "pending" },
};

export const webhooks = {
  valid: { topic: "app/uninstalled", hmac: "fixture-valid" },
  invalid: { topic: "app/uninstalled", hmac: "fixture-invalid" },
};

export const settings = {
  saved: {"workflowName":"Default hidden variant rule","thresholdLabel":"Max hidden variants per product","thresholdDefault":"10","ownerEmail":"merchandising@example.com"},
  invalid: { workflowName: "", ownerEmail: "not-an-email", threshold: "200" },
};
