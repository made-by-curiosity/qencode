import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "src/config/routes";
import { Layout } from "src/components/Layout";
import { ErrorPage } from "../ErrorPage";
import { Login } from "../Login";
import { ForgotPassword } from "../ForgotPassword";
import { ResetPassword } from "../ResetPassword";
import { Welcome } from "../Welcome";
import { Dashboard } from "../Dashboard";

const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.forgot,
        element: <ForgotPassword />,
      },
      {
        path: routes.reset,
        element: <ResetPassword />,
      },
      {
        path: routes.dashboard,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routes.root} />,
  },
]);

function RootPage() {
  return <RouterProvider router={router} />;
}

export default RootPage;
