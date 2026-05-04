import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { WorkspaceScreen } from "../components/AppScreens";
import { getDashboardData } from "../lib/mock-data";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return getDashboardData();
};

export default function WorkspaceRoute() {
  const data = useLoaderData<typeof loader>();
  return <WorkspaceScreen data={data} />;
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => boundary.headers(headersArgs);
