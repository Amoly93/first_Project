import "./index.css";
import App from "./App";
import React from "react";
import ErrorPage from "./error-page";
import Login from "./pages/login-page";
import ReactDOM from "react-dom/client";
import SignupPage from "./pages/signup-page";
import Users from "./pages/user-page";
import HomePage from "./pages/home-page";
import DetailsPage from "./pages/details-page";
import reportWebVitals from "./reportWebVitals";
import { PublicRoute } from "./guard/public-route";
import { ProtectedRoute } from "./guard/protected-route";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
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
              },{
                path: "user",
                element: <Users/>,
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
    ],
  },
]);

root.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
