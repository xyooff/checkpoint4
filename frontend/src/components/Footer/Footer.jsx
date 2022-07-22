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
          <p className="footer-p">Acceuil</p>
        </Link>
        <Link className="footer-links" to="/competences">
          <p className="footer-p">Compétences</p>
        </Link>
        <Link className="footer-links" to="/portfolio">
          <p className="footer-p">Portfolio</p>
        </Link>
        <Link className="footer-links" to="/contact">
          <p className="footer-p">Contact</p>
        </Link>
      </nav>
      <div className="footer-web-site-icons">
        <Link to="/contact">
          <BiEnvelope className="svg-iconsFooter" />
        </Link>
        <a href="www.linkedin.com/in/rodrigue-techer">
          <FiLinkedin className="svg-iconsFooter" />
        </a>
        <a href="https://github.com/xyooff">
          <FiGithub className="svg-iconsFooter" />
        </a>
      </div>
    </div>
  );
}
