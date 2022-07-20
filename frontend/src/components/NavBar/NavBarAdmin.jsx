import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./NavBarAdmin.css";

export default function NavBarAdmin() {
  return (
    <div className="nav-bar-admin">
      <nav className="nav-bar-admin-nav">
        <Link className="nav-bar-admin-links" to="/admin/users">
          <p>Acceuil</p>
        </Link>
        <Link className="nav-bar-admin-links" to="/admin/users/projects">
          <p>Projets</p>
        </Link>
        <Link className="nav-bar-admin-links" to="/admin/users/language">
          <p>Language</p>
        </Link>
        <Logout
          classLogout="nav-bar-admin-links"
          idLogout="navbar-link-logout"
          logout="/admin/loginadmin"
          redirect="/admin"
        />
      </nav>
    </div>
  );
}
