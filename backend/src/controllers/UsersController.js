const argon2 = require("argon2");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UsersController {
  static browse = (req, res) => {
    models.users
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseabout = (req, res) => {
    const id = req.params;
    models.users
      .findabout(id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.users
      .find(req.params.id)
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

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ error: "Please specify both email and password" });
    }

    models.users
      .findByMail(email)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(403).send("Email ou mot de passe incorrect");
        } else {
          const { id, password: hash, role } = rows[0];

          if (await argon2.verify(hash, password)) {
            const token = await jwt.sign(
              {
                id,
                role,
              },
              process.env.JWT_AUTH_SECRET,
              {
                expiresIn: "1h",
              }
            );
            // response and HTTP cookie
            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              })
              .status(200)
              .send({
                id,
                email,
                role,
              });
          } else {
            res.status(401).send({
              error: "Invalid password",
            });
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static edit = (req, res) => {
    const users = req.body;

    // TODO validations (length, format...)

    users.id = parseInt(req.params.id, 10);

    models.users
      .update(users)
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

  static add = async (req, res) => {
    const {
      firstname,
      lastname,
      password,
      email,
      phoneNumber,
      postalCode,
      role,
    } = req.body;
    const { error } = Joi.object({
      firstname: Joi.string().max(255).required(),
      lastname: Joi.string().max(255).required(),
      password: Joi.string().max(255).required(),
      email: Joi.string().email().max(255).required(),
      phoneNumber: Joi.string().max(10).required(),
      postalCode: Joi.string().max(5).required(),
      role: Joi.string().max(255).required(),
    }).validate({
      firstname,
      lastname,
      password,
      email,
      phoneNumber,
      postalCode,
      role,
    });

    if (error) {
      res.status(422).json({ validationsErrors: error.details });
    } else {
      try {
        const hash = await argon2.hash(password);
        models.users
          .insert({
            firstname,
            lastname,
            email,
            password: hash,
            phoneNumber,
            postalCode,
            role,
          })
          .then(([result]) => {
            res.status(201).send({
              firstname,
              lastname,
              email,
              phoneNumber,
              postalCode,
              role,
              id: result.insertId,
            });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500).send({ error: err.message });
          });
      } catch (err) {
        console.error(err);
        res.sendStatus(500).send({ error: err.message });
      }
    }
  };

  static delete = (req, res) => {
    models.users
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static logout = (req, res) => {
    res.clearCookie("access_token").sendStatus(204);
  };
}

module.exports = UsersController;
