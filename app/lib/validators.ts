export type SettingsInput = {
  workflowName: string;
  ownerEmail: string;
  threshold: string;
  enabled?: string | null;
};

export type SettingsValidation = {
  valid: boolean;
  errors: Partial<Record<keyof SettingsInput, string>>;
  values: {
    workflowName: string;
    ownerEmail: string;
    threshold: number;
    enabled: boolean;
  };
};

export function parseSettingsForm(formData: FormData): SettingsInput {
  return {
    workflowName: String(formData.get("workflowName") || ""),
    ownerEmail: String(formData.get("ownerEmail") || ""),
    threshold: String(formData.get("threshold") || ""),
    enabled: formData.get("enabled") ? "on" : null,
  };
}

export function validateSettings(input: SettingsInput): SettingsValidation {
  const errors: SettingsValidation["errors"] = {};
  const workflowName = input.workflowName.trim();
  const ownerEmail = input.ownerEmail.trim();
  const threshold = Number(input.threshold);

  if (workflowName.length < 3) {
    errors.workflowName = "Name must be at least 3 characters.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail)) {
    errors.ownerEmail = "Use a valid notification email.";
  }

  if (!Number.isInteger(threshold) || threshold < 0 || threshold > 100) {
    errors.threshold = "Threshold must be a whole number from 0 to 100.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    values: {
      workflowName,
      ownerEmail,
      threshold: Number.isFinite(threshold) ? threshold : 0,
      enabled: input.enabled === "on",
    },
  };
}
