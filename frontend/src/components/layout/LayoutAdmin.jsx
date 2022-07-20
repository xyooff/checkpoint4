import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAdmin from "../NavBar/NavBarAdmin";

export default function LayoutAdmin() {
  return (
    <div>
      <div>
        <NavBarAdmin />
        <Outlet />
      </div>
    </div>
  );
}
