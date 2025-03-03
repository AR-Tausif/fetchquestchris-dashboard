import { createBrowserRouter } from "react-router-dom";
import {
  AccountDetails,
  AccountDetailsById,
  Dashboard,
  Login,
  Notification,
  Profile,
  Setting,
  ForgotPassword,
  SetPassword,
  TermsOfUse,
  GameList,
  ProductPrice,
  Blog
} from "../pages";
import App from "../App";

import { AuthWrapper } from "../components/auth-wrapper";
import Demo from "../pages/demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/account-details",
        element: <AccountDetails />,
      },
      {
        path: "/account-details/:accountId",
        element: <AccountDetailsById />,
      },
      {
        path: "/game-list",
        element: <GameList />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/product-price",
        element: <ProductPrice />,
      },
      {
        path: "/privacy-policy",
        element: <Setting />,
      },
      {
        path: "/terms-use",
        element: <TermsOfUse />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/login",
    element: (
      <AuthWrapper>
        <Login />,
      </AuthWrapper>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthWrapper>
        <ForgotPassword />,
      </AuthWrapper>
    ),
  },
  {
    path: "/set-password",
    element: (
      <AuthWrapper>
        <SetPassword />,
      </AuthWrapper>
    ),
  },
]);
export default router;
