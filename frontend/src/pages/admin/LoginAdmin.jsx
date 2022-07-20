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
        .catch((err) => {
          swal(err.response.data.error);
        });
    } else {
      swal("Please specify both email and password");
    }
  };
  return (
    <div>
      <div className="div-welcome">
        <h1 className="div-welcome-h1">ACCÈS ADMINISTRATEUR</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
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
