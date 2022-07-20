const express = require("express");

const { MailerController } = require("../controllers");

const MailerRouter = express.Router();

// Envoi mail pour la page contact
MailerRouter.post("/admin/mailer/", MailerController.sendMail);

module.exports = MailerRouter;
