const express = require("express");

const { LanguageController } = require("../controllers");

const Languagerouter = express.Router();

Languagerouter.get("/", LanguageController.browse);
Languagerouter.get("/:id", LanguageController.read);
Languagerouter.put("/:id", LanguageController.edit);
Languagerouter.post("/", LanguageController.add);
Languagerouter.delete("/:id", LanguageController.delete);

module.exports = Languagerouter;
