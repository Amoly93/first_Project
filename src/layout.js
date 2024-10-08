import React from "react";
import Navigation from "./navigation";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navigation />
      <div className=" flex flex-col items-center min-h-screen conainer mx-auto bg-neutral-200">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
