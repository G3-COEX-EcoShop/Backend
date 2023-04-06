require("dotenv").config();

const bcrypt = require("bcryptjs");
const models = require("../models");
const token = require("../services/token");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req;
      let user = await models.Usuario.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (user) {
        res.status(409).send({
          message: "El correo ya tiene una cuenta registrada",
        });
        return;
      }

      const reg = await models.User.create({
        name,
        email,
        password,
      });

      res.status(200).json({
        reg,
      });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      let user = await models.Usuario.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (user) {
        let match = await bcrypt.compare(req.body.password, user.password);

        if (match) {
          let tokenReturn = await token.encode(
            user.id,
            user.rol,
            user.nombre,
            user.email
          );
          res.cookie("token", tokenReturn);
          res.status(200).json({
            user,
          });
        } else {
          res.status(401).send({
            auth: false,
            reason: "Invalid Password!",
          });
        }
      } else {
        res.status(404).send({
          message: "User Not Found.",
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },

  github: async (req, res, next) => {
    const { displayName, id, emails } = req.user;
    const email = emails[0].values;
    try {
      let user = await models.Usuario.findOne({
        where: {
          email: email,
        },
      });
    } catch (error) {}

    let tokenReturn = await token.encode(
      "user.id",
      "user.rol",
      displayName,
      emails[0].values
    );
    res.cookie("token", tokenReturn);
    res.redirect(process.env.REDIRECT_AUTH);
  },
};
