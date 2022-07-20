import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="footer">
      <nav className="footer-web-site">
        <Link className="footer-links" to="/">
          <p>Acceuil</p>
        </Link>
        <Link className="footer-links" to="/competences">
          <p>Compétences</p>
        </Link>
        <Link className="footer-links" to="/portfolio">
          <p>Portfolio</p>
        </Link>
        <Link className="footer-links" to="/contact">
          <p>Contact</p>
        </Link>
      </nav>
      <div className="footer-web-site-icons">
        <BiEnvelope className="svg-iconsFooter" />
        <FiLinkedin className="svg-iconsFooter" />
        <FiGithub className="svg-iconsFooter" />
      </div>
    </div>
  );
}
