import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import { appPostingBaseName } from "./constants/prefix";
import Layout from "./components/layout";

const AppPostingLazy = React.lazy(() => import("./components/app-posting"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
