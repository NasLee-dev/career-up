import { AppRoutingManager } from "@career-up/shell-router";
import React from "react";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider } from "./providers/auth0-client-provider";
import Layout from "./components/layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <Layout>
          <AppRoutingManager type="app-edu" />,
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        index: true,
        element: <div>PageList</div>,
      },
      {
        path: ":id",
        element: <div>PageDetail</div>,
      },
    ],
  },
];
