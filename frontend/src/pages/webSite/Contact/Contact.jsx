import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import swal from "sweetalert";

export default function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonSubmit, setButtonSubmit] = useState("Envoyer");

  function handleSubmit(e) {
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/user/sendContact`,
        {
          firstName,
          lastName,
          email,
          message,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          swal("Problème lors l'exécution de la requête");
        }
      });
    e.preventDefault();
    setButtonSubmit("Envoi en cours ...");
    setTimeout(() => {
      setButtonSubmit("Envoyer");
      setLastName("");
      setFirstName("");
      setEmail("");
      setMessage("");
    }, 3000);
  }

  return (
    <div className="div-form-container">
      <div className="div-welcome">
        <h1 className="h1-form-contact">Contact</h1>
        <p>
          Si vous souhaitez rentrer en contact avec moi, je vous invite à
          remplir le formulaire ou utiliser mes coordonnées ci-dessous.
        </p>
      </div>

      <form className="form-contact" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p>Nom</p>
          <label htmlFor="lastName" className="all-labels">
            <input
              id="lastname"
              className="form-contact-input"
              type="text"
              name="lastName"
              value={lastName}
              required
              placeholder="votre nom ici"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>Prénom</p>
          <label htmlFor="firstName" className="all-labels">
            <input
              id="firstName"
              className="form-contact-input"
              type="text"
              name="firstName"
              value={firstName}
              required
              placeholder="votre prénom ici"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>

        <div className="div-email">
          <p>Email</p>
          <label htmlFor="email" className="all-labels">
            <input
              className="form-contact-input"
              id="email"
              type="email"
              name="email"
              value={email}
              required
              placeholder="votre email ici"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="div-message">
          <p>Votre message</p>
          <label htmlFor="message">
            <textarea
              className="form-contact-textarea"
              id="message"
              name="message"
              value={message}
              required
              placeholder="votre message ici"
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        <div className="div-btn">
          <button className="btn-contact-submit" type="submit">
            {buttonSubmit}
          </button>
        </div>
      </form>
    </div>
  );
}
