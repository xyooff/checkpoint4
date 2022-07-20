import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Users.css";

export default function Users() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pays, setPays] = useState("");
  const [userid, setUserid] = useState("");
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => res.data)
      .then((data) => {
        data.map((user) => {
          return (
            setUserid(user.id),
            setFirstname(user.firstname),
            setLastname(user.lastname),
            setEmail(user.email),
            setPhoneNumber(user.phoneNumber),
            setPays(user.pays),
            setUserRole(user.role)
          );
        });
      });
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/users/admin/${userid}`,
        {
          firstname,
          lastname,
          email,
          phoneNumber,
          pays,
          role: userRole,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then(() => {
        swal("Modif ok");
      })
      .catch((err) => {
        swal(err);
      });
  }
  return (
    <div>
      <form className="users-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="users-form-div-label">
          <p className="users-from-p">NOM</p>
          <label className="users-form-label" htmlFor="lastname">
            <input
              className="users-form-label-input"
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
        </div>
        <div className="users-form-div-label">
          <p className="users-from-p">Prénom</p>
          <label className="users-form-label" htmlFor="firstname">
            <input
              className="users-form-label-input"
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
        </div>
        <div className="users-form-div-label">
          <p className="users-from-p">email</p>
          <label className="users-form-label" htmlFor="email">
            <input
              className="users-form-label-input"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="users-form-div-label">
          <p className="users-from-p">N° de telephone</p>
          <label className="users-form-label" htmlFor="phone">
            <input
              className="users-form-label-input"
              id="phone"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>
        <div className="users-form-div-label">
          <p className="users-from-p">Pays</p>
          <label className="users-form-label" htmlFor="firstname">
            <input
              className="users-form-label-input"
              id="firstname"
              type="text"
              value={pays}
              onChange={(e) => setPays(e.target.value)}
            />
          </label>
        </div>
        <div className="users-form-div-label">
          <input className="users-form-input" type="submit" value="modifier" />
        </div>
      </form>
    </div>
  );
}
