import "./App.css";
import ErrorPage from "./error-page";
import DetailsPage from "./details-page";
import HomePage from "./components/home-page";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/details",
      element: <DetailsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
