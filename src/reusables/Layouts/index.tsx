import React from "react";
import CartDrawer from "./CartDrawer";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="scroll__body">{children}</div>

      <CartDrawer />
    </div>
  );
};

export default AppLayout;
