const express = require("express");
const multer = require("../middleware/Multer");
// const { Authorization, IsAdmin } = require("../middleware/Autorization");

const { CreateWebSiteController } = require("../controllers");

const CreateWebSiteRouter = express.Router();

CreateWebSiteRouter.get("/", CreateWebSiteController.browse);
CreateWebSiteRouter.get("/:id", CreateWebSiteController.read);
CreateWebSiteRouter.put("/:id", CreateWebSiteController.edit);
CreateWebSiteRouter.post("/", multer, CreateWebSiteController.add);
CreateWebSiteRouter.delete("/:id", CreateWebSiteController.delete);

module.exports = CreateWebSiteRouter;
