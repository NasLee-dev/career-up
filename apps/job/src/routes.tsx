import React from "react";
import { AppRoutingManager } from "@career-up/shell-router";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider } from "./providers/auth0-client-provider";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider>
        <AppRoutingManager type="app-job" />
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Job error</div>,
    children: [
      {
        index: true,
        element: <div>App Job home</div>,
      },
    ],
  },
];
