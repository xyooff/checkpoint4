const express = require("express");

const { CreateWebSiteController } = require("../controllers");

const CreateWebSiteRouter = express.Router();

CreateWebSiteRouter.get("/", CreateWebSiteController.browse);
CreateWebSiteRouter.get("/:id", CreateWebSiteController.read);
CreateWebSiteRouter.put("/:id", CreateWebSiteController.edit);
CreateWebSiteRouter.post("/", CreateWebSiteController.add);
CreateWebSiteRouter.delete("/:id", CreateWebSiteController.delete);

module.exports = CreateWebSiteRouter;
