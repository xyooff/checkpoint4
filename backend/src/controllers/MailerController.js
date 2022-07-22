const mailerContact = require("../Mailer/MailerContact");

class MailerController {
  static mailerformcontact = (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    try {
      mailerContact(firstName, lastName, email, message);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500).send("ERR_BAD_REQUEST");
    }
  };
}

module.exports = MailerController;
