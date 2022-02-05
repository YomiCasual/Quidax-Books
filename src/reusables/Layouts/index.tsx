import React from "react";
import CartDrawer from "./CartDrawer";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="app-layout">
      <Navbar />
      {children}

      <CartDrawer />
    </div>
  );
};

export default AppLayout;
