const express = require("express");
const multer = require("../middleware/Multer");

const { LanguageController } = require("../controllers");

const Languagerouter = express.Router();

Languagerouter.get("/", LanguageController.browse);
Languagerouter.get("/:id", LanguageController.read);
Languagerouter.put("/:id", LanguageController.edit);
Languagerouter.post("/", multer, LanguageController.add);
Languagerouter.delete("/:id", LanguageController.delete);

module.exports = Languagerouter;
