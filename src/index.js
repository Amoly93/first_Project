import "./index.css";
import App from "./App";
import React from "react";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import DetailsPage from "./details-page";
import HomePage from "./components/home-page";
import Login from "./login";
import Logout from "./logout";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "details",
        element: <DetailsPage />,
        errorElement: <ErrorPage />,
      },{
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },{
        path: "logout",
        element: <Logout />,
        errorElement: <ErrorPage />,
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
