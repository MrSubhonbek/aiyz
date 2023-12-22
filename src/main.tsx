import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./pages/login";
import { ErrorPage } from "./pages/error";
import { Dashboard } from "./pages/dashboard";
import { User } from "./pages/user";
import { RequireAuth } from "./components/requireAuth";

import { routes } from "./utils/endpoint.ts";

const router = createBrowserRouter([
  {
    path: routes.Login,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: routes.Dashboard,
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: routes.User + "/*",
        element: <User />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
