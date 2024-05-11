import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="bg-secondary pt-20 text-primary">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
