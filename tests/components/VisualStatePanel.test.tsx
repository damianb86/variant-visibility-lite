import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { VisualStatePanel } from "../../app/components/AppScreens";

describe("VisualStatePanel", () => {
  it("renders loading state copy", () => {
    render(<VisualStatePanel state="loading" title="Loading state" body="Fetching data" />);
    expect(screen.getByText("Loading state")).toBeInTheDocument();
    expect(screen.getByText("Fetching data")).toBeInTheDocument();
  });

  it("renders permission state copy", () => {
    render(<VisualStatePanel state="permission" title="Permission state" body="Missing scopes" />);
    expect(screen.getByText("Permission state")).toBeInTheDocument();
    expect(screen.getByText("Missing scopes")).toBeInTheDocument();
  });
});
