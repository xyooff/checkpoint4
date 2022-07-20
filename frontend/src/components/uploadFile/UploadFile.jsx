import React, { useState } from "react";
import axios from "axios";
import "./UploadFile.css";
import PropTypes from "prop-types";

export default function UploadFile({ title, link, sumUp, description, route }) {
  const [image, setImage] = useState([]);
  function hundleChange(e) {
    const value = e.target.files;
    setImage(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const tableImage = Object.keys(image);
    formData.append("title", title);
    formData.append("url_website", link);
    formData.append("description", sumUp);
    formData.append("technicalDescription", description);
    tableImage.map((item) => {
      return formData.append("nomfichier", image[item]);
    });
    axios
      .post(route, formData, { whithCredentials: true })
      .then((res) => console.warn(res.data))
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <form className="uploadFile">
        <div className="form-group col-md-6">
          <label className="label-file" htmlFor="file">
            <input
              id="file"
              type="file"
              name="monfichier"
              className="form-control"
              multiple
              onChange={(e) => hundleChange(e)}
            />
          </label>
        </div>
        <button
          type="submit"
          id="language-submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
        >
          ajouté
        </button>
      </form>
    </div>
  );
}

UploadFile.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  sumUp: PropTypes.string,
  description: PropTypes.string,
  route: PropTypes.string,
};

UploadFile.defaultProps = {
  title: "",
  link: "",
  sumUp: "",
  description: "",
  route: "",
};
