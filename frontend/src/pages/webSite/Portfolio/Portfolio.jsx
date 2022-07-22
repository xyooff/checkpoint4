import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WelcomeBan from "../../../components/WelcomeBan/WelcomeBan";
import "./Portfolio.css";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => res.data)
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <WelcomeBan />
      <div>
        <h2>Portfolio</h2>
        <p>
          Voici quelques exemples de mes réalisations personnelles et
          professionnelles.
        </p>
      </div>
      <div className="projects-all-map">
        {projects.map((project) => {
          return (
            <div className="project-all" key={project.id}>
              <Link
                className="projects-all-link"
                to={`/project/infos/${project.id}`}
              >
                <p className="project-title-name">{project.title}</p>
                <img className="project-img" src={project.url_picture} alt="" />
              </Link>
              <a className="project-link-website" href={project.url_website}>
                voir le site
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
