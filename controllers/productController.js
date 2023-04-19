require("dotenv").config();
const models = require("../models");

module.exports = {
  add: async (req, res, next) => {
    try {
      const {
        categoryId,
        brandId,
        name,
        img_url,
        description,
        stock,
        price,
        status,
      } = req.body;
      if (!categoryId || !brandId) {
        return res
          .status(400)
          .json({ message: "categoryId and brandId are required fields." });
      }
      const newProduct = await models.Product.create({
        categoryId,
        brandId,
        name,
        img_url,
        description,
        stock,
        price,
        status,
      });

      res.status(201).json(newProduct);
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const products = await models.Product.findAll({});

      res.status(200).json(products);
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Product.findOne({
        where: {
          id: req.query.id,
        },
        include: [
          models.Brand,
          models.Category,
          models.Review,
          models.ProductCel,
          models.ProductLaptop,
          models.ProductTV,
        ],
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
        message: "Ocurrió un error",
      });
      next(e);
    }
  },

  search: async (req, res, next) => {
    try {
      let {
        name,
        brand,
        category,
        cpu_brand,
        cpu_model,
        graphics_coprocessor,
        storage,
        operating_system,
        screen_size,
        resolution,
        ram,
        processor,
        main_camera,
        front_camera,
        battery,
        display_technology,
        hdmi,
      } = req.query;
      const conditions = [];
      if (name) {
        conditions.push({ name: { [models.Sequelize.Op.like]: `%${name}%` } });
      }
      if (brand) {
        conditions.push({
          "$brand.name$": { [models.Sequelize.Op.like]: `%${brand}%` },
        });
      }
      if (category) {
        conditions.push({
          "$category.name$": { [models.Sequelize.Op.like]: `%${category}%` },
        });
      }
      if (cpu_brand) {
        conditions.push({
          "$ProductLaptop.cpu_brand$": {
            [models.Sequelize.Op.like]: `%${cpu_brand}%`,
          },
        });
      }
      if (cpu_model) {
        conditions.push({
          "$ProductLaptop.cpu_model$": {
            [models.Sequelize.Op.like]: `%${cpu_model}%`,
          },
        });
      }
      if (graphics_coprocessor) {
        conditions.push({
          "$ProductLaptop.graphics_coprocessor$": {
            [models.Sequelize.Op.like]: `%${graphics_coprocessor}%`,
          },
        });
      }
      if (storage) {
        conditions.push({
          [models.Sequelize.Op.or]: [
            {
              "$ProductCel.storage$": {
                [models.Sequelize.Op.like]: `%${storage}%`,
              },
            },
            {
              "$ProductLaptop.storage$": {
                [models.Sequelize.Op.like]: `%${storage}%`,
              },
            },
          ],
        });
      }
      if (operating_system) {
        conditions.push({
          [models.Sequelize.Op.or]: [
            {
              "$ProductCel.operating_system$": {
                [models.Sequelize.Op.like]: `%${operating_system}%`,
              },
            },
            {
              "$ProductLaptop.operating_system$": {
                [models.Sequelize.Op.like]: `%${operating_system}%`,
              },
            },
          ],
        });
      }
      if (screen_size) {
        conditions.push({
          [models.Sequelize.Op.or]: [
            {
              "$ProductCel.screen_size$": {
                [models.Sequelize.Op.like]: `%${screen_size}%`,
              },
            },
            {
              "$ProductLaptop.screen_size$": {
                [models.Sequelize.Op.like]: `%${screen_size}%`,
              },
            },
            {
              "$ProductTV.screen_size$": {
                [models.Sequelize.Op.like]: `%${screen_size}%`,
              },
            },
          ],
        });
      }
      if (resolution) {
        conditions.push({
          [models.Sequelize.Op.or]: [
            {
              "$ProductCel.resolution$": {
                [models.Sequelize.Op.like]: `%${resolution}%`,
              },
            },
            {
              "$ProductLaptop.resolution$": {
                [models.Sequelize.Op.like]: `%${resolution}%`,
              },
            },
            {
              "$ProductTV.resolution$": {
                [models.Sequelize.Op.like]: `%${resolution}%`,
              },
            },
          ],
        });
      }
      if (ram) {
        conditions.push({
          [models.Sequelize.Op.or]: [
            { "$ProductCel.ram$": { [models.Sequelize.Op.like]: `%${ram}%` } },
            {
              "$ProductLaptop.ram$": { [models.Sequelize.Op.like]: `%${ram}%` },
            },
          ],
        });
      }
      if (processor) {
        conditions.push({
          "$ProductCel.processor$": {
            [models.Sequelize.Op.like]: `%${processor}%`,
          },
        });
      }
      if (main_camera) {
        conditions.push({
          "$ProductCel.main_camera$": {
            [models.Sequelize.Op.like]: `%${main_camera}%`,
          },
        });
      }
      if (front_camera) {
        conditions.push({
          "$ProductCel.front_camera$": {
            [models.Sequelize.Op.like]: `%${front_camera}%`,
          },
        });
      }
      if (battery) {
        conditions.push({
          "$ProductCel.battery$": {
            [models.Sequelize.Op.like]: `%${battery}%`,
          },
        });
      }
      if (display_technology) {
        conditions.push({
          "$ProductTV.display_technology$": {
            [models.Sequelize.Op.like]: `%${display_technology}%`,
          },
        });
      }
      if (hdmi) {
        conditions.push({
          "$ProductTV.hdmi$": { [models.Sequelize.Op.like]: `%${hdmi}%` },
        });
      }
      const where = conditions.length
        ? { [models.Sequelize.Op.and]: conditions }
        : {};
      const products = await models.Product.findAll({
        where,
        include: [
          { model: models.Brand },
          { model: models.Category },
          models.Review,
          models.ProductCel,
          models.ProductLaptop,
          models.ProductTV,
        ],
      });

      if (products.length === 0) {
        return res.status(404).json({
          message: "producto no encontrado",
        });
      }
      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      if (e.name === "SequelizeDatabaseError") {
        return res.status(400).json({
          message: "consulta invalida, por favor rectifique",
        });
      }
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  listByCategory: async (req, res, next) => {
    try {
      const { id } = req.query;

      const products = await models.Product.findAll({
        where: {
          category: id,
        },
      });
      res.status(200).json(products);
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.query;
      const { name, description, stock, price, status } = req.body;

      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ message: "producto no encontrados" });
      }

      const allowedFields = ["name", "description", "stock", "price", "status"];
      const fieldsToUpdate = Object.keys(req.body);
      const invalidFields = fieldsToUpdate.filter(
        (field) => !allowedFields.includes(field)
      );
      if (invalidFields.length > 0) {
        return res.status(400).json({
          message: `No se pueden actualizar los campos ${invalidFields.join(
            ", "
          )}`,
        });
      }

      if (status !== undefined && status !== product.status) {
        return res
          .status(400)
          .json({ message: "No se puede actualizar el campo de estado" });
      }
      await product.update(
        { name, description, stock, price, status },
        { where: { id } }
      );

      const updatedProduct = await models.Product.findOne({ where: { id } });

      return res.status(200).json(updatedProduct);
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
      const product = await models.Product.destroy({
        where: { id },
      });
      if (product === 0) {
        throw new Error("No se pudo eliminar la categoria");
      }
      res.json({ mensaje: "categoria eliminado exitosamente" });
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

      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ error: "producto no encontrado" });
      }

      await product.update({ status: true });

      res.json({ message: "producto activado correctamente" });
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
      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ message: "producto no encontrado" });
      }

      await product.update({ status: false });

      return res
        .status(200)
        .json({ message: "producto desactivado correctamente" });
    } catch (e) {
      res.status(500).send({
        message: "Error -> " + e,
      });
      next(e);
    }
  },
};
