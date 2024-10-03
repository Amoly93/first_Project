import React, { useEffect } from "react";
import { useAuth } from "./hooks/use-user-auth";
import { json, NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const { userInfo ,setUserInfo} = useAuth();

  const navItems = [
    { to: "home", label: "Home" },
    { to: "login", label: "Login" },
    { to: "details", label: "Details" },
  ];

  useEffect(()=>{
   setUserInfo(localStorage.getItem("user_Info"))

  },[setUserInfo])

  const renderNavLink = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(isActive ? "bg-orange-500 text-white" : "text-gray-300 hover:text-orange-500", "p-2")
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="fixed top-0 z-50 p-5 bg-white w-full shadow-lg">
      <div className="container mx-auto max-w-5xl space-x-5">
      {/* {navItems.map((to, label) => {
          <NavLink
            to={to=== "login"?"login": }
            className={({ isActive }) =>
              clsx(
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-orange-500",
                "p-2"
              )
            }
          >
            {label}
          </NavLink>;
        })} */}
        {renderNavLink("home", "Home")}
        {userInfo
          ? renderNavLink("details", "Details")
          : renderNavLink("login", "Login")}
     {renderNavLink("logout", "logout")}
      </div>
    </div>
  );
};

export default Navigation;
