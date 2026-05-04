import { useEffect } from "react";
import type { ActionFunctionArgs, HeadersFunction, LoaderFunctionArgs } from "react-router";
import { Form, useActionData, useRouteError } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";
import { SettingsScreen } from "../components/AppScreens";
import { parseSettingsForm, validateSettings } from "../lib/validators";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticate.admin(request);
  const validation = validateSettings(parseSettingsForm(await request.formData()));

  if (!validation.valid) {
    return { status: "invalid" as const, errors: validation.errors };
  }

  return { status: "saved" as const, message: "Visual settings validated. Persistence is not enabled in this MVP scaffold." };
};

export default function SettingsRoute() {
  const actionData = useActionData<typeof action>();
  const shopify = useAppBridge();

  useEffect(() => {
    if (actionData?.status === "saved") {
      shopify.toast.show("Settings validated");
    }
  }, [actionData, shopify]);

  return (
    <Form method="post">
      <SettingsScreen actionData={actionData} />
    </Form>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => boundary.headers(headersArgs);
