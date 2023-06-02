import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>header</header>
      <Outlet />
    </div>
  );
};

export default Layout;
