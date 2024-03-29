import React from "react";
import Router from "../Router/Router";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (children) => {
  return (
    <div className="flex flex-col justify-between h-[100vh] bg-whiteColor ">
      <Header />
      <Router>{children}</Router>
      <Footer />
    </div>
  );
};

export default Layout;
