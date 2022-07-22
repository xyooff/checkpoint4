import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginAdmin.css";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => res.data)
        .then(() => navigate("/admin/users"))
        .catch((error) => {
          if (error.response.status === 401) {
            swal("vous n'est pas autorisé a vous connecté");
          }
          swal(error.status);
        });
    } else {
      swal("Please specify both email and password");
    }
  };
  return (
    <div className="loginAdmin">
      <div className="div-welcome-all">
        <h1 className="div-welcome-h1-login">ACCÈS ADMINISTRATEUR</h1>
      </div>
      <Form className="form-group" onSubmit={handleSubmit}>
        <Form.Group className="mb-5 " controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          connexion
        </Button>
      </Form>
    </div>
  );
}

export default LoginAdmin;
