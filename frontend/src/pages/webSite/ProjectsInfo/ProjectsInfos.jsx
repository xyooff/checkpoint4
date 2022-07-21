import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectsInfos.css";
import { useParams } from "react-router-dom";
import WelcomeBan from "../../../components/WelcomeBan/WelcomeBan";

export default function ProjectsInfos() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects/${id}`)
      .then((res) => res.data)
      .then((data) => setProject(data));
  }, []);

  return (
    <div>
      <WelcomeBan />
      <div className="project-complete">
        {project.map((pro) => {
          return (
            <div className="project-complet-div">
              <div className="project-complet-h1-img-link">
                <h1>Portfolio</h1>
                <img
                  className="project-complet-img"
                  src={pro.url_picture}
                  alt="picturewebsite"
                />
                <a className="project-link" href={pro.url_website}>
                  {" "}
                  voir le site
                </a>
              </div>
              <div className="project-title">
                <h3 className="project-h3">À propos de ce projet</h3>
                <p>{pro.description}</p>
                <h3 className="project-h3">Fiche technique</h3>
                <p>{pro.technicalDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
