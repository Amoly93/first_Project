import React, { useEffect } from "react";
import { useAuth } from "./hooks/use-user-auth";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const { userInfo, setUserInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user_info")));
  }, []);

  const onLogout = () => {
    navigate("/login");
    localStorage.removeItem("user_info");
    setUserInfo();
  };

  const navItems = [
    { to: "home", label: "Home", show: true },
    {
      to: "login",
      label: "Login",
      show: !userInfo,
    },
    {
      to: "signup",
      label: "Signup",
      show: !userInfo,
    },
    {
      to: "details",
      label: "Details",
      show: !!userInfo,
    },
    {
      label: "logout",
      show: !!userInfo,
      type: "button",
      onClick: onLogout,
    },
  ];

  return (
    <div className="fixed top-0 z-50 p-5 bg-white w-full shadow-lg">
      <div className="container mx-auto max-w-5xl space-x-5">
        {navItems.map(({ to, label, show, type, onClick }, idx) => {
          if (!show) return;

          return type === "button" ? (
            <button
              key={idx}
              onClick={() => onClick()}
              type="button"
              className="p-2 text-gray-300 hover:text-orange-500"
            >
              {label}
            </button>
          ) : (
            <NavLink
              key={idx}
              to={to}
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
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
