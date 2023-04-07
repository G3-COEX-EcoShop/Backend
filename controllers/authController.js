require("dotenv").config();

const bcrypt = require("bcryptjs");
const models = require("../models");
const token = require("../services/token");

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
      let user = await models.User.findOne({
        where: {
          email: email,
        },
        include: [
          {
            model: models.Role,
            include: [
              { model: models.Permission, as: "productPermission" },
              { model: models.Permission, as: "categoryPermission" },
              { model: models.Permission, as: "ordersPermission" },
              { model: models.Permission, as: "reviewsPermission" },
            ],
          },
        ],
      });

      if (user) {
        let match = await bcrypt.compare(password, user.password);

        if (!match) {
          res.status(401).send({
            auth: false,
            reason: "Invalid Password!",
          });
        }

        const rol = await models.Role.findOne({
          where: {
            name: user.rol,
          },
        });
        if (rol) {
          //user.rol = rol;
          const permissions = await models.Permission.find;
        }
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
