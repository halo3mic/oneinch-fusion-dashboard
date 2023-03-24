import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  // fixed sidebar and a main content area
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 m-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
