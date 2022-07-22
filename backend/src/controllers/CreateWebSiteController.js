const models = require("../models");

class CreateWebSiteController {
  static browse = (req, res) => {
    models.CreateWebSite.findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.CreateWebSite.findlanguage(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send([rows[0]]);
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

    models.CreateWebSite.update(item)
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
    const item = req.body;
    const urlpicture = req.files[0].path;
    const urlFinal = `http://${process.env.DB_HOST}:${process.env.APP_PORT}/${urlpicture}`;
    // TODO validations (length, format...)

    models.CreateWebSite.insert(item, urlFinal)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static adding = (req, res) => {
    const item = req.body;
    const urlpicture = req.files[0].path;
    const urlFinal = `http://${process.env.DB_HOST}:${process.env.APP_PORT}/${urlpicture}`;
    // TODO validations (length, format...)

    models.CreateWebSite.insert(item, urlFinal)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.CreateWebSite.delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CreateWebSiteController;
