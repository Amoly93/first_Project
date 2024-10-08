import { useEffect } from "react";
import Layout from "./layout";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./contexts/auth-context";

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
      <Layout />
    </AuthContextProvider>
  );
}

export default App;
