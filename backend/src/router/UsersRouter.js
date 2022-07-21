const express = require("express");
// const Authorization = require("../middleware/Autorization");

const { UsersController } = require("../controllers");

const Usersrouter = express.Router();

Usersrouter.get("/", UsersController.browse);
Usersrouter.get("/about/:id", UsersController.browseabout);
Usersrouter.post("/login", UsersController.login);
Usersrouter.get("/logout", UsersController.logout);
Usersrouter.get("/:id", UsersController.read);
Usersrouter.put("/admin/:id", UsersController.edit);
Usersrouter.post("/", UsersController.add);
Usersrouter.delete("/:id", UsersController.delete);

module.exports = Usersrouter;
