import { describe, expect, it } from "vitest";
import { validateSettings } from "../../app/lib/validators";

describe("validateSettings", () => {
  it("accepts valid merchant settings", () => {
    const result = validateSettings({
      workflowName: "Weekly audit",
      ownerEmail: "merchant@example.com",
      threshold: "75",
      enabled: "on",
    });

    expect(result.valid).toBe(true);
    expect(result.values.threshold).toBe(75);
    expect(result.values.enabled).toBe(true);
  });

  it("rejects invalid workflow, email and threshold", () => {
    const result = validateSettings({
      workflowName: "x",
      ownerEmail: "bad",
      threshold: "101",
    });

    expect(result.valid).toBe(false);
    expect(result.errors.workflowName).toContain("at least 3");
    expect(result.errors.ownerEmail).toContain("valid");
    expect(result.errors.threshold).toContain("0 to 100");
  });
});
