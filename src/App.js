import { useEffect } from "react";
import { AuthContextProvider } from "./contexts/auth-context";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
