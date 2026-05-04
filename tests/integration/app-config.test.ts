import { describe, expect, it } from "vitest";
import { APP_CONFIG, requiredScopesText } from "../../app/lib/app-config";

describe("APP_CONFIG", () => {
  it("contains the app identity and scopes", () => {
    expect(APP_CONFIG.name).toBe("Variant Visibility Lite");
    expect(requiredScopesText()).toBe("read_products,write_products");
  });

  it("documents MVP and out-of-scope boundaries", () => {
    expect(APP_CONFIG.mvpFeatures.length).toBeGreaterThan(2);
    expect(APP_CONFIG.outOfScope.length).toBeGreaterThan(1);
  });
});
