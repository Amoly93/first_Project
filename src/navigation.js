import React from "react";
import { useAuth } from "./hooks/use-user-auth";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const { userInfo } = useAuth();

  const navItems = [
    { to: "home", label: "Home" },
    { to: "login", label: "Login" },
    { to: "details", label: "Details" },
  ];

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
        {renderNavLink("home", "Home")}
        {userInfo
          ? renderNavLink("details", "Details")
          : renderNavLink("login", "Login")}
      </div>
    </div>
  );
};

export default Navigation;
