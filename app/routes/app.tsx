import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

import './../custom-styles/index.css'
import './../custom-styles/responsive.css'

import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

import { Tab, tabsData } from "app/components/tabbed-navigation/tab-data";

import { Provider as ReduxProvider } from 'react-redux';
import store from "app/store";

import i18n from './../i18n'; // Import your i18n configuration
import { I18nextProvider } from 'react-i18next';


export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={store}>
            <NavMenu>
              { tabsData.map((tab, index) => <Link key={index} to={tab.path}>{tab.name}</Link> ) }
            </NavMenu>
            <Outlet />
        </ReduxProvider>
      </I18nextProvider>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
