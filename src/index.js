import "./index.css";
import App from "./App";
import React from "react";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import DetailsPage from "./pages/details-page";
import HomePage from "./components/home-page";
import Login from "./pages/login-page";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/signup-page";
import { ProtectedRoute } from "./route/protected-route";
import { PublicRoute } from "./route/public-router";
import { AuthContextProvider } from "./contexts/auth-context";
import Navigation from "./navigation";

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
      }, {
        path: "/",
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
        path: "/",
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
