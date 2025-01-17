import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import { appEduBasename, appPostingBaseName } from "./constants/prefix";
import Layout from "./components/layout";
import Auth0ProviderWithNavigator from "./components/auth0-provider-with-navigator";

const AppPostingLazy = React.lazy(() => import("./components/app-posting"));
const AppEduLazy = React.lazy(() => import("./components/app-edu"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigator>
        <Layout />
      </Auth0ProviderWithNavigator>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={appPostingBaseName} />,
      },
      {
        path: `${appPostingBaseName}/*`,
        element: (
          <Suspense fallback="Loading Posting...">
            <AppPostingLazy />
          </Suspense>
        ),
      },
      {
        path: `${appEduBasename}/*`,
        element: (
          <Suspense fallback="Loading Edu...">
            <AppEduLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
