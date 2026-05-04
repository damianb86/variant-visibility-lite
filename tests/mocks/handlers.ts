import { graphql, http, HttpResponse } from "msw";
import { graphqlSuccess } from "../fixtures/shopify";

export const handlers = [
  http.get("/health", () => HttpResponse.json({ ok: true })),
  graphql.query("AccessScopeList", () => {
    return HttpResponse.json(graphqlSuccess({ currentAppInstallation: { accessScopes: [] } }));
  }),
];
