import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Projects.css";
import UploadFile from "../../../components/uploadFile/UploadFile";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [sumUp, setSumUp] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects`)
      .then((res) => res.data)
      .then((data) => setProjects(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="projects-cards">
        {projects.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <h1 className="project-card-title">{project.title}</h1>
              <img
                className="project-card-img"
                style={{ width: "200px" }}
                src="https://www.photobox.fr/blog/wp-content/uploads/sites/3/2017/05/types-de-lumiere-photo-ideales.jpg"
                alt="df"
              />
              <p className="project-card-description">{project.description}</p>
              <p className="project-card-technical">
                {project.technicalDescription}
              </p>
              <a className="project-card-url" href={project.url_website}>
                voir le site
              </a>
            </div>
          );
        })}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-row" style={{ margin: "20px" }}>
          <div className="form-group col-md-6" style={{ margin: "20px" }}>
            <label htmlFor="inputtitle">titre</label>
            <input
              type="text"
              className="form-control"
              id="inputtitle"
              placeholder="nom du projet ici"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group" style={{ margin: "20px" }}>
          <label htmlFor="inputAddress">lien vers le site</label>
          <input
            type="url"
            className="form-control"
            id="inputAddress"
            placeholder="https://www.monsite.com"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ margin: "20px" }}>
          <label htmlFor="inputdescription">description du projet</label>
          <textarea
            type="text"
            className="form-control"
            id="inputdescription"
            placeholder="présentation rapide ici"
            onChange={(e) => setSumUp(e.target.value)}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6" style={{ margin: "20px" }}>
            <label htmlFor="inputprotject">description détaillée</label>
            <textarea
              type="text"
              className="form-control"
              id="inputprotject"
              placeholder="présentation détaillée ici"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <UploadFile
          title={title}
          link={link}
          sumUp={sumUp}
          description={description}
          route={`${import.meta.env.VITE_BACKEND_URL}/projects`}
        />
      </form>
    </div>
  );
}
