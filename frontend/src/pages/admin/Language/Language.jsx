import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Language.css";
import UploadFile from "../../../components/uploadFile/UploadFile";

export default function Language() {
  const [titleTech, setTitleTech] = useState("");
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/language`)
      .then((res) => res.data)
      .then((data) => setLanguages(data));
  }, []);

  return (
    <div>
      <h1>ajouter un language</h1>
      <form>
        <div className="language-add-all">
          <div className="form-group col-md-6" style={{ margin: "20px" }}>
            <label htmlFor="inputtitle">titre</label>
            <input
              type="text"
              className="form-control"
              id="inputtitle"
              placeholder="nom de la technologie ici"
              onChange={(e) => setTitleTech(e.target.value)}
            />
          </div>
        </div>
        <UploadFile
          title={titleTech}
          route={`${import.meta.env.VITE_BACKEND_URL}/language`}
        />
      </form>
      <h2>language déjà disponible</h2>
      <div className="language-all-cards">
        {languages.map((language) => {
          return (
            <div key={language.id} className="language-all">
              <h2 className="language-title">{language.name}</h2>
              <img
                className="language-img"
                src={language.url_language}
                alt="language"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
