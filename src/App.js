import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "./contexts/auth-context";
import clsx from "clsx";

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
      <div class="flex  items-center justify-center p-2 sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <NavLink  to="home"   className={({ isActive }) =>
                clsx(isActive ? "bg-orange-500 text-white" : "text-gray-300", "p-2")
              }>
            Home
            </NavLink>
            <NavLink  to="details"   className={({ isActive }) =>
                clsx(isActive ? "bg-orange-500 text-white" : "text-gray-300", "p-2 ")
              }>
           Details
            </NavLink>
            <NavLink  to="details"   className={({ isActive }) =>
                clsx(isActive ? "bg-orange-500 text-white" : "text-gray-300", "p-2")
              }>
           Login
            </NavLink>
            
          </div>
        </div>
      </div>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
