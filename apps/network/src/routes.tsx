import React from "react";
import { AppRoutingManager } from "@career-up/shell-router";
import { RouteObject } from "react-router-dom";
import { Auth0ClientProvider } from "./provider/auth0-client-provider";
import { RecoilRoot } from "recoil";
import Layout from "./components/layout";
import "./index.css";
import PageHome from "./pages/page-home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RecoilRoot>
        <Auth0ClientProvider>
          <Layout>
            <AppRoutingManager type="app-network" />
          </Layout>
        </Auth0ClientProvider>
      </RecoilRoot>
    ),
    errorElement: <div>App Network Error</div>,
    children: [
      {
        index: true,
        element: <PageHome />,
      },
    ],
  },
];
