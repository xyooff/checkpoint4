const models = require("../models");

class LanguageController {
  static browse = (req, res) => {
    models.Language.findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.Language.find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    item.id = parseInt(req.params.id, 10);

    models.Language.update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const item = req.body.title;
    const url = req.files.path;
    // TODO validations (length, format...)

    models.Language.insert(item, url)
      .then(([result]) => {
        res.status(201).send({ item, url, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.Status(406).send("mauvais format d'image");
      });
  };

  static delete = (req, res) => {
    models.Language.delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = LanguageController;
