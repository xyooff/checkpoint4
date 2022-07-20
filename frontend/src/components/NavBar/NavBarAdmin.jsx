import React from "react";
import { Link } from "react-router-dom";

export default function NavBarAdmin() {
  return (
    <div>
      <nav>
        <Link to="/">
          <p>Acceuil</p>
        </Link>
        <Link to="/">
          <p>Compétences</p>
        </Link>
        <Link to="/">
          <p>Portfolio</p>
        </Link>
        <Link to="/">
          <p>Contact</p>
        </Link>
      </nav>
    </div>
  );
}
