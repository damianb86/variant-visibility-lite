import { describe, expect, it } from "vitest";
import { assertNoGraphqlErrors, collectGraphqlErrors, formatUserErrors, hasMissingScope } from "../../app/lib/graphql";

describe("Shopify GraphQL helpers", () => {
  it("collects top-level GraphQL errors", () => {
    const errors = collectGraphqlErrors({ errors: [{ message: "API unavailable" }] });
    expect(errors).toEqual(["API unavailable"]);
  });

  it("throws when top-level GraphQL errors exist", () => {
    expect(() => assertNoGraphqlErrors({ errors: [{ message: "Denied" }] })).toThrow("Denied");
  });

  it("formats userErrors with fields", () => {
    expect(formatUserErrors([{ field: ["input", "title"], message: "Required" }])).toEqual(["input.title: Required"]);
  });

  it("detects missing scopes", () => {
    expect(hasMissingScope(["read_products"], ["read_products","write_products"])).toContain("write_products");
  });
});
