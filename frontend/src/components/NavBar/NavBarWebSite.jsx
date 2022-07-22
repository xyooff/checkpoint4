import React from "react";
import { Link } from "react-router-dom";
import "./NavBarWebSite.css";
import logo from "../../assets/d.png";

export default function NavBarWebSite() {
  return (
    <div className="nav-bar-web">
      <nav id="navweb" className="nav-bar-wibe-site">
        <div className="nav-bar-img">
          <Link className="nav-bar-linkes" to="/">
            <img className="logo-nav-bar" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-bar-links-all">
          <div className="nav-bar-links-div">
            <Link className="nav-bar-links" to="/">
              <p>Acceuil</p>
            </Link>
          </div>
          <div className="nav-bar-links-div">
            <Link className="nav-bar-links" to="/competences">
              <p>Compétences</p>
            </Link>
          </div>
          <div className="nav-bar-links-div">
            <Link className="nav-bar-links" to="/portfolio">
              <p>Portfolio</p>
            </Link>
          </div>
          <div className="nav-bar-links-div">
            <Link className="nav-bar-links" to="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
