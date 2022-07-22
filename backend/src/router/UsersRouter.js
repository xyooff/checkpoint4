const express = require("express");
const { Authorization, IsAdmin } = require("../middleware/Autorization");

const { UsersController } = require("../controllers");

const Usersrouter = express.Router();

Usersrouter.get("/", Authorization, IsAdmin, UsersController.browse);
Usersrouter.get("/about/:id", UsersController.browseabout);
Usersrouter.post("/login", UsersController.login);
Usersrouter.get("/logout", Authorization, UsersController.logout);
Usersrouter.get("/:id", UsersController.read);
Usersrouter.put("/admin/:id", Authorization, IsAdmin, UsersController.edit);
Usersrouter.post("/", Authorization, IsAdmin, UsersController.add);
Usersrouter.delete("/:id", Authorization, IsAdmin, UsersController.delete);

module.exports = Usersrouter;
