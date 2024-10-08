import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center min-h-screen conainer mx-auto bg-neutral-200 pt-32">
        {children}
      </div>
    </main>
  );
};

export default Layout;
