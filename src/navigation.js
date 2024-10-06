import React, { useEffect } from "react";
import { useAuth } from "./hooks/use-user-auth";
import {  NavLink,useNavigate } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const { userInfo ,setUserInfo} = useAuth();
  const navigate = useNavigate();
  const navItems = [
    { to: "home", label: "Home", show: true,typeButton: "NavLink"},
    { to: "login", label: "Login", show: true, typeButton: "NavLink"},
    { to: "details", label: "Details", show: false,typeButton: "NavLink" },
    { to: "logout", label: "logout", show: true,typeButton: "Button" },
  ];

  useEffect(()=>{
   setUserInfo(localStorage.getItem("user_Info"))

  },[setUserInfo])

const logoutButton =()=>{
  navigate("home");
  setUserInfo(localStorage.removeItem("user_Info"))
}
  return (
    <div className="fixed top-0 z-50 p-5 bg-white w-full shadow-lg">
     <div className="container mx-auto max-w-5xl space-x-5">
      {navItems.map(({ to, label, show ,typeButton}) => 
          show && (
            typeButton === "NavLink" ? (
              <NavLink
                key={to}
                to={to === "login" && userInfo ? "details" : to}
                className={({ isActive }) =>
                  clsx(
                    isActive ? "bg-orange-500 text-white" : "text-gray-300 hover:text-orange-500",
                    "p-2"
                  )
                }
              >
                {to === "login" && userInfo ? "Details" : label}
              </NavLink>
            ) : typeButton === "Button" && userInfo ? (
              <button
                key={to}
                onClick={logoutButton}
                className="p-2 text-gray-300 hover:text-orange-500"
              >
                {label}
              </button>
            ) : null
          
          )
        )}

  </div>
 
    </div>
  );
};

export default Navigation;
