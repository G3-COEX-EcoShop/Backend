const models = require("../models");

module.exports = {
  list: async (req, res, next) => {
    try {
      let data = await models.Brand.findAll({});
      if (!data) {
        res.status(409).send({
          message: "marcas no encontrados",
        });
        return;
      }
      res.status(200).json(data);
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      //   const { id, name, description, img_url, status } = req.body;
      const data = await models.Brand.create({ ...req.body });
      res.json(data);
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const data = await models.Brand.findOne({
        where: {
          id: req.query.id,
        },
      });
      if (!data) {
        res.status(404).send({
          message: "la marca no existe",
        });
      } else {
        res.status(200).json(data);
      }
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const { name, description, status, id } = req.body;

      const data = await models.Brand.findOne({ where: { id } });
      console.log({ body: req.body });
      if (!data) {
        return res.status(404).json({ message: "marca no encontrada" });
      }
      //estamos disable for frontend
      // if (status !== undefined && status !== category.status) {
      //   return res
      //     .status(400)
      //     .json({ message: "No se puede actualizar el campo de estado" });
      // }
      await data.update({ ...req.body }, { where: { id } });

      const updateData = await models.Brand.findOne({ where: { id } });

      return res.status(200).json(updateData);
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const { id } = req.query;

      const data = await models.Brand.findOne({ where: { id } });

      if (!data) {
        return res.status(404).json({ error: "marca no encontrado" });
      }

      await data.update({ status: true });

      res.json({ message: "marca activada correctamente" });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    const { id } = req.query;
    try {
      const data = await models.Brand.findOne({ where: { id } });

      if (!data) {
        return res.status(404).json({ message: "marca no encontrado" });
      }

      await data.update({ status: false });

      return res
        .status(200)
        .json({ message: "marca desactivada correctamente" });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    const { id } = req.query;
    try {
      const data = await models.Brand.destroy({
        where: { id },
      });
      if (data === 0) {
        throw new Error("No se pudo eliminar la marca");
      }
      res.json({ mensaje: "marca eliminado exitosamente" });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
};
