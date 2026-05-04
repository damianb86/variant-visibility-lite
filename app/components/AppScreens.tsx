import { useState } from "react";
import { APP_CONFIG } from "../lib/app-config";
import { getDashboardData, getStateFixtures, type AppState } from "../lib/mock-data";
import styles from "../styles/app-home.module.css";

type DashboardData = ReturnType<typeof getDashboardData>;

type SettingsActionData =
  | { status: "idle" }
  | { status: "saved"; message: string }
  | { status: "invalid"; errors: Record<string, string | undefined> };

export function DashboardScreen({ data }: { data: DashboardData }) {
  return (
    <s-page heading={APP_CONFIG.name} inline-size="large">
      <div className={styles.shell}>
        <s-section>
          <div className={styles.hero}>
            <s-stack direction="block" gap="base">
              <s-stack direction="inline" gap="base" align-items="center">
                <span className={styles.swatch} aria-hidden="true" />
                <s-badge tone="info">Embedded MVP</s-badge>
              </s-stack>
              <s-heading>{APP_CONFIG.tagline}</s-heading>
              <s-paragraph>{APP_CONFIG.value}</s-paragraph>
              <s-button href="/app/workspace" variant="primary">Open workspace</s-button>
            </s-stack>
          </div>
        </s-section>

        <section className={styles.metricGrid} aria-label="MVP metrics">
          {data.metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <s-box padding="base" border="base" border-radius="base">
                <s-stack direction="block" gap="small">
                  <s-text color="subdued">{metric.label}</s-text>
                  <s-heading>{metric.value}</s-heading>
                </s-stack>
              </s-box>
            </div>
          ))}
        </section>

        <s-section heading="Primary workflow">
          <s-paragraph>{APP_CONFIG.primaryFlow}</s-paragraph>
        </s-section>

        <s-section heading="Current queue">
          <DataTable rows={data.rows} />
        </s-section>

        <s-section heading="Required states">
          <div className={styles.statusGrid}>
            {getStateFixtures().slice(0, 4).map((fixture) => (
              <VisualStatePanel key={fixture.state} state={fixture.state} title={fixture.title} body={fixture.body} />
            ))}
          </div>
        </s-section>
      </div>
    </s-page>
  );
}

export function WorkspaceScreen({ data }: { data: DashboardData }) {
  const [selected, setSelected] = useState(data.rows[0]?.id || "row-1");
  const selectedRow = data.rows.find((row) => row.id === selected) || data.rows[0];

  return (
    <s-page heading={APP_CONFIG.workspaceLabel} inline-size="large">
      <div className={styles.shell}>
        <s-section heading={APP_CONFIG.mainObject}>
          <s-paragraph>{APP_CONFIG.problem}</s-paragraph>
        </s-section>

        <s-section heading="Scenario preview">
          <div className={styles.previewBand}>
            <s-stack direction="block" gap="base">
              <s-text type="strong">{selectedRow?.name}</s-text>
              <s-text color="subdued">{selectedRow?.signal}</s-text>
              <s-button-group>
                {data.rows.map((row) => (
                  <s-button key={row.id} variant={row.id === selected ? "primary" : "secondary"} onClick={() => setSelected(row.id)}>
                    {row.name}
                  </s-button>
                ))}
              </s-button-group>
            </s-stack>
          </div>
        </s-section>

        <s-section heading="Operational list">
          <DataTable rows={data.rows} />
        </s-section>

        <s-section heading="MVP boundaries">
          <s-grid grid-template-columns="1fr 1fr" gap="base">
            <s-box padding="base" border="base" border-radius="base">
              <s-heading>Must have</s-heading>
              <s-unordered-list>
                {APP_CONFIG.mvpFeatures.map((feature) => (
                  <s-list-item key={feature}>{feature}</s-list-item>
                ))}
              </s-unordered-list>
            </s-box>
            <s-box padding="base" border="base" border-radius="base">
              <s-heading>Must not have in MVP</s-heading>
              <s-unordered-list>
                {APP_CONFIG.outOfScope.map((feature) => (
                  <s-list-item key={feature}>{feature}</s-list-item>
                ))}
              </s-unordered-list>
            </s-box>
          </s-grid>
        </s-section>
      </div>
    </s-page>
  );
}

export function SettingsScreen({ actionData }: { actionData?: SettingsActionData }) {
  const errors = actionData?.status === "invalid" ? actionData.errors : {};

  return (
    <s-page heading={APP_CONFIG.settingsLabel} inline-size="large">
      <div className={styles.shell}>
        {actionData?.status === "saved" && (
          <s-banner tone="success" heading="Settings saved">{actionData.message}</s-banner>
        )}
        {actionData?.status === "invalid" && (
          <s-banner tone="critical" heading="Fix validation errors">Server-side validation rejected the submitted settings.</s-banner>
        )}

        <s-section heading="Configuration">
          <s-paragraph>These controls are wired for validation and visual review. Persistence is intentionally deferred until the merchant data model is finalized.</s-paragraph>
          <div className={styles.formGrid}>
            <s-text-field
              label="Workflow name"
              name="workflowName"
              value={APP_CONFIG.settingsFields.workflowName}
              error={errors.workflowName}
              required
            />
            <s-email-field
              label="Notification email"
              name="ownerEmail"
              value={APP_CONFIG.settingsFields.ownerEmail}
              error={errors.ownerEmail}
              required
            />
            <s-number-field
              label={APP_CONFIG.settingsFields.thresholdLabel}
              name="threshold"
              value={APP_CONFIG.settingsFields.thresholdDefault}
              min={0}
              max={100}
              step={1}
              error={errors.threshold}
              required
            />
            <s-switch label="Enable visual MVP workflow" name="enabled" checked />
          </div>
          <s-stack direction="inline" gap="base">
            <s-button type="submit" variant="primary">Validate settings</s-button>
            <s-button href="/app" variant="secondary">Cancel</s-button>
          </s-stack>
        </s-section>

        <s-section heading="Shopify integration">
          <s-unordered-list>
            {APP_CONFIG.integrations.map((item) => (
              <s-list-item key={item}>{item}</s-list-item>
            ))}
          </s-unordered-list>
        </s-section>
      </div>
    </s-page>
  );
}

export function HelpScreen() {
  return (
    <s-page heading="QA and readiness" inline-size="large">
      <div className={styles.shell}>
        <s-section heading="Screens">
          <s-unordered-list>
            {APP_CONFIG.screens.map((screen) => (
              <s-list-item key={screen}>{screen}</s-list-item>
            ))}
          </s-unordered-list>
        </s-section>
        <s-section heading="Risks">
          <s-unordered-list>
            {APP_CONFIG.risks.map((risk) => (
              <s-list-item key={risk}>{risk}</s-list-item>
            ))}
          </s-unordered-list>
        </s-section>
        <s-section heading="Visual states">
          <div className={styles.statusGrid}>
            {getStateFixtures().map((fixture) => (
              <VisualStatePanel key={fixture.state} state={fixture.state} title={fixture.title} body={fixture.body} />
            ))}
          </div>
        </s-section>
      </div>
    </s-page>
  );
}

export function PreviewScreen() {
  const data = getDashboardData();

  return <DashboardScreen data={data} />;
}

export function VisualStatePanel({ state, title, body }: { state: AppState; title: string; body: string }) {
  const tone = state === "error" || state === "permission" ? "critical" : state === "success" ? "success" : state === "validation" ? "warning" : "info";

  return (
    <div className={styles.statePanel} data-state={state}>
      <s-box padding="base" border="base" border-radius="base">
        <s-stack direction="block" gap="small">
          <s-badge tone={tone}>{state}</s-badge>
          <s-text type="strong">{title}</s-text>
          <s-text color="subdued">{body}</s-text>
        </s-stack>
      </s-box>
    </div>
  );
}

function DataTable({ rows }: { rows: DashboardData["rows"] }) {
  if (rows.length === 0) {
    return <VisualStatePanel state="empty" title="No data yet" body="Run the first scan or configure the MVP to populate this table." />;
  }

  return (
    <div className={styles.tableWrap}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Signal</th>
            <th scope="col">Priority</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.signal}</td>
              <td><s-badge tone={row.priority === "High" ? "critical" : row.priority === "Medium" ? "warning" : "info"}>{row.priority}</s-badge></td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
