import React from "react";
import { Outlet } from "react-router-dom";
import NavbarWebSite from "../NavBar/NavBarWebSite";
import Footer from "../Footer/Footer";

export default function LayoutWebsite() {
  return (
    <div>
      <div>
        <NavbarWebSite />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
