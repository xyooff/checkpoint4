const express = require("express");
const Authorization = require("../middleware/Autorization");

const { UsersController } = require("../controllers");

const Usersrouter = express.Router();

Usersrouter.get("/", Authorization, UsersController.browse);
Usersrouter.post("/admin/", UsersController.login);
Usersrouter.get("/:id", UsersController.read);
Usersrouter.put("/admin/:id", UsersController.edit);
Usersrouter.post("/", UsersController.add);
Usersrouter.delete("/:id", UsersController.delete);

module.exports = Usersrouter;
