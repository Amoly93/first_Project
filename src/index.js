import "./index.css";
import App from "./App";
import React from "react";
import ErrorPage from "./error-page";
import Login from "./pages/login-page";
import ReactDOM from "react-dom/client";
import SignupPage from "./pages/signup-page";
import HomePage from "./components/home-page";
import DetailsPage from "./pages/details-page";
import reportWebVitals from "./reportWebVitals";
import { PublicRoute } from "./route/public-route";
import { ProtectedRoute } from "./route/protected-route";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        element: (
          <PublicRoute>
            <Outlet />
          </PublicRoute>
        ),
        children: [
          {
            path: "login",
            element: <Login />,
            errorElement: <ErrorPage />,
          },
          {
            path: "signup",
            element: <SignupPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "details",
            element: <DetailsPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
