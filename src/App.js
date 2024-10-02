import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/auth-context";

const userInfo = {
  name: "Amal Bajaber",
  email: "amal.bajaber@gmail.com",
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/home");
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
