const models = require("../models");

module.exports = {
  list: async (req, res, next) => {
    try {
      let category = await models.Category.findAll({});
      if (!category) {
        res.status(409).send({
          message: "categoria no encontrados",
        });
        return;
      }
      res.status(200).json({
        category,
      });
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  listByCategory: async (req, res, next) => {
    try {
      const id = req.query.id;
      const category = await models.Category.findOne({
        where: { name: id },
      });
      if (!category) {
        return res.status(404).json({ message: "Categoría no encontrada" });
      }
      const products = await models.Product.findAll({
        where: { Category: category.id },
      });
      return res.json({
        category: {
          id: category.id,
          name: category.name,
          description: category.description,
          img_url: category.img_url,
          status: category.status,
        },
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          status: product.status,
          img_url: product.img_url,
        })),
      });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      const { id, name, description, img_url, status } = req.body;
      const category = await models.Category.create({
        id,
        name,
        description,
        img_url,
        status,
      });
      res.json(category);
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Category.findOne({
        where: {
          id: req.query.id,
        },
      });
      if (!reg) {
        res.status(404).send({
          message: "El registro no existe",
        });
      } else {
        res.status(200).json(reg);
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
      const { id } = req.query;
      const { name, description, status } = req.body;

      const category = await models.Category.findOne({ where: { id } });

      if (!category) {
        return res.status(404).json({ message: "Categoría no encontrada" });
      }

      if (status !== undefined && status === category.status) {
        return res
          .status(400)
          .json({ message: "El campo de estado no puede ser actualizado con el mismo valor" });
      }
      if (status !== undefined && status !== category.status) {
        return res
          .status(400)
          .json({ message: "No se puede actualizar el campo de estado" });
      }
      await category.update({ name, description, status }, { where: { id } });

      const updatedCategory = await models.Category.findOne({ where: { id } });

      return res.status(200).json(updatedCategory);
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

      const category = await models.Category.findOne({ where: { id } });

      if (!category) {
        return res.status(404).json({ error: "Categoria no encontrado" });
      }

      await category.update({ status: true });

      res.json({ message: "Categoria activada correctamente" });
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
      const category = await models.Category.findOne({ where: { id } });

      if (!category) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      await category.update({ status: false });

      return res
        .status(200)
        .json({ message: "categoria desactivada correctamente" });
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
      // Buscar productos asociados a la categoría
      const products = await models.Product.findAll({
        where: { category: id },
      });
  
      // Filtrar los productos con una categoría válida
      const productsWithCategory = products.filter(
        (product) => product.category !== null
      );
  
      // Actualizar la categoría de los productos a null
      await Promise.all(
        productsWithCategory.map((product) => {
          product.category = null;
          return product.save();
        })
      );
  
      // Eliminar la categoría
      const category = await models.Category.destroy({
        where: { id },
      });
      if (category === 0) {
        throw new Error("No se pudo eliminar la categoría");
      }
      res.json({ mensaje: "Categoría eliminada exitosamente" });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  
};
