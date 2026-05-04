import { APP_CONFIG } from "./app-config";

export type AppState = "loading" | "empty" | "success" | "error" | "validation" | "permission";

export function getDashboardData() {
  return {
    app: APP_CONFIG,
    status: "success" as AppState,
    empty: false,
    permissionMissing: [],
    rows: APP_CONFIG.sampleRows.map(([name, signal, priority, action], index) => ({
      id: `row-${index + 1}`,
      name,
      signal,
      priority,
      action,
    })),
    metrics: APP_CONFIG.metrics.map(([label, value]) => ({ label, value })),
  };
}

export function getStateFixtures() {
  return [
    { state: "loading" as const, title: "Loading state", body: "Skeleton copy while Shopify or local data is being fetched." },
    { state: "empty" as const, title: "Empty state", body: "The shop has no matching data yet, so the merchant sees the next setup step." },
    { state: "success" as const, title: "Success state", body: "The latest action completed and the next recommended action is visible." },
    { state: "error" as const, title: "API error state", body: "Shopify returned an error; the merchant sees a recoverable message." },
    { state: "validation" as const, title: "Validation state", body: "Input needs correction before anything is saved server-side." },
    { state: "permission" as const, title: "Permission state", body: "The app needs missing scopes or staff permissions before continuing." },
  ];
}
