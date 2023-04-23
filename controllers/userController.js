require("dotenv").config();

const models = require("../models");
const bcrypt = require("bcryptjs");


module.exports = {
  list: async (req, res, next) => {
    try {
      //   const { name, email, password } = req.body;
      const user = await models.User.findAll({
      });
      console.log(user);
      if (!user) {
        res.status(409).send({
          message: "usuario no encontrados",
        });

        return;
      }
      const newUser = user.map((item) => {
        item.password = 0
        return item
      })
      res.status(200).json({
        newUser
      });
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      const { name,
        email,
        password,
        rol,
        membership,
        status } = req.body;

      const hashPassword = await bcrypt.hash(password, 12);

      let user = await models.User.create({
        name: name,
        email: email,
        password: hashPassword,
        rol: rol,
        membership: membership,
        status:status
      });

      if (!user) {
        res.status(409).send({
          message: "usuario no encontrados",
        });
        return;
      }
      res.status(200).json({
        user
      });
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
        const reg = await models.User.findOne({
            where: {
                id: req.query.id
            }
        });

        if (!reg) {
            res.status(404).send({
                message: 'El usuario no existe'
            });
        } else {
            const newUser = {
                ...reg.toJSON(),
                password: 0
            };
            res.status(200).json(newUser);
        }
    } catch (e) {
        res.status(500).send({
            message: 'Error -> ' + e
        });
        next(e);
    }
},
  update: async (req, res, next) => {
    try {
      const { id } = req.query;
      const { name, email, status } = req.body;

      const user = await models.User.findOne({ where: { id } });

      if (!user) {
        return res.status(404).json({ message: 'usuario no encontrados' });
      }

      if (status !== undefined && status !== user.status) {
        return res.status(400).json({ message: 'No se puede actualizar el campo de estado' });
      }

      await user.update({ name, email }, { where: { id } });

      const updatedUser = await models.User.findOne({ where: { id } });

      return res.status(200).json(updatedUser);
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
      });
      next(e);
  }
  },
   activate:async(req, res, next) =>{
    try {
      const { id } = req.query;

      const user = await models.User.findOne({ where: { id } });

      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      await user.update({ status: true });

      res.json({ message: 'Usuario activado correctamente' });
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
      });
      next(e);
    }
  },
  deactivate: async(req, res, next) =>{
    const { id } = req.query; 
    try {
      const user = await models.User.findOne({ where: { id } });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      await user.update({ status: false });

      return res.status(200).json({ message: "Usuario desactivado correctamente" });
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    const { id } = req.query; 
    try {
      const userEliminado = await models.User.destroy({
        where: { id },
      });
      if (userEliminado === 0) {
        throw new Error("No se pudo eliminar el usuario");
      }
      res.json({ mensaje: "Usuario eliminado exitosamente" });
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
      });
      next(e);
  }
  }, 
}