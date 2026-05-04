export type GraphqlTopLevelError = {
  message: string;
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
};

export type ShopifyGraphqlResponse<TData> = {
  data?: TData;
  errors?: GraphqlTopLevelError[];
};

export type ShopifyUserError = {
  field?: string[] | null;
  message: string;
  code?: string | null;
};

export function collectGraphqlErrors<TData>(json: ShopifyGraphqlResponse<TData>) {
  return (json.errors || []).map((error) => error.message).filter(Boolean);
}

export function assertNoGraphqlErrors<TData>(json: ShopifyGraphqlResponse<TData>) {
  const errors = collectGraphqlErrors(json);
  if (errors.length > 0) {
    throw new Error(errors.join("; "));
  }
  return json.data;
}

export function formatUserErrors(errors: ShopifyUserError[] = []) {
  return errors.map((error) => {
    const field = error.field?.join(".");
    return field ? `${field}: ${error.message}` : error.message;
  });
}

export function hasMissingScope(grantedScopes: string[], requiredScopes: string[]) {
  const granted = new Set(grantedScopes);
  return requiredScopes.filter((scope) => !granted.has(scope));
}
