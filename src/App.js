import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./contexts/auth-context";
import Navigation from "./navigation";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     navigate("/home");
  //   }
  // }, [location.pathname, navigate]);

  return (
    <AuthContextProvider>
      <Navigation />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
