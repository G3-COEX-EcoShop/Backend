require("dotenv").config();

const bcrypt = require("bcryptjs");
const models = require("../models");
const token = require("../services/token");
const utils = require("./utilsController");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      let user = await models.User.findOne({
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
      const hashPassword = await bcrypt.hash(password, 12);

      const reg = await models.User.create({
        name: name,
        email: email,
        password: hashPassword,
      });

      res.status(200).json({
        name: reg.name,
      });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const info = await utils.userByEmail(email);
      if (!info) {
        res.status(401).send({
          message: "Usuario no registrado",
        });
        return;
      }

      let match = await bcrypt.compare(password, info.password);
      if (!match) {
        res.status(401).send({
          message: "Credenciales invalidas",
        });
      }

      const tokenReturn = await token.encode(info.user);
      res.cookie("token", tokenReturn, { sameSite: "none", secure: true });
      res.status(200).json({
        name: info.user.name,
      });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
    }
  },

  github: async (req, res, next) => {
    try {
      const { displayName, id, emails } = req.user;
      const email = emails[0].value;
      let info = null;
      info = await utils.userByEmail(email);
      if (!info) {
        const reg = await models.User.create({
          name: displayName,
          email: email,
          password: id,
          github: true,
        });
        if (reg) {
          info = await utils.userByEmail(email);
        }
      }
      if (info) {
        const tokenReturn = await token.encode(info.user);
        res.cookie("token", tokenReturn, { sameSite: "none", secure: true });
      }
    } catch (error) {
      console.log(error);
    }
    res.redirect(process.env.REDIRECT_AUTH);
  },
};
