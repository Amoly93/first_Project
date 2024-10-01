import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DetailsPage from "./details-page";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
    errorElement: <ErrorPage />,
  }, {
    path: "/",
    element: <Navigate to="/home" replace />, // Redirect from root to /home
  },
]);

// useEffect(() => {
// if (window.location.pathname === "/"){
//   return () => {
//     redirect("/home")
//   };
// }


// }, [])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
