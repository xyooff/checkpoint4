const express = require("express");
const { Authorization } = require("../middleware/Autorization");

const { UsersController } = require("../controllers");

const Usersrouter = express.Router();

Usersrouter.get("/", UsersController.browse);
Usersrouter.get("/about/:id", UsersController.browseabout);
Usersrouter.post("/login", UsersController.login);
Usersrouter.get("/logout", Authorization, UsersController.logout);
Usersrouter.get("/:id", UsersController.read);
Usersrouter.put("/admin/:id", Authorization, UsersController.edit);
Usersrouter.post("/", Authorization, UsersController.add);
Usersrouter.delete("/:id", Authorization, UsersController.delete);

module.exports = Usersrouter;
