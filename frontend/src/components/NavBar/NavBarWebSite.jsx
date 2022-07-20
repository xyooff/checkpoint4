import React from "react";
import { Link } from "react-router-dom";
import "./NavBarWebSite.css";
import logo from "../../assets/logoro.png";

export default function NavBarWebSite() {
  return (
    <div className="nav-bar-web">
      <nav className="nav-bar-wibe-site">
        <img className="logo-nav-bar" src={logo} alt="logo" />
        <Link className="nav-bar-links" to="/">
          <p>Acceuil</p>
        </Link>
        <Link className="nav-bar-links" to="/competences">
          <p>Compétences</p>
        </Link>
        <Link className="nav-bar-links" to="/portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className="nav-bar-links" to="/contact">
          <p>Contact</p>
        </Link>
      </nav>
    </div>
  );
}
