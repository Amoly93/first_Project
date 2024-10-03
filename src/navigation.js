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
        clsx(isActive ? "bg-orange-500 text-white" : "text-gray-300", "p-2")
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="flex items-center justify-center p-2 sm:items-stretch sm:justify-start">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {/* {navItems.map(({ to, label}) => 
         
              renderNavLink(to, label)
          )} */}
          {renderNavLink("home", "Home")}
          {userInfo
            ? renderNavLink("details", "Details")
            : renderNavLink("login", "Login")}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
