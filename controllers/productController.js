const models = require("../models");

module.exports = {
  // add: async (req, res, next) => {
  //   try {
  //     const reg = await models.Product.create(req.body);
  //     res.status(200).json(reg);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Ocurrió un error",
  //     });
  //     next(e);
  //   }
  // },
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
  list: async (req, res, next) => {
    try {
      const reg = await models.Product.findAll({});
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  // listByCategories: async (req, res, next) => {
  //   try {
  //     let result = [];
  //     const categories = await models.Category.findAll({
  //       attributes: ["id", "name", "state"],
  //     });
  //     for (const item of categories) {
  //       let temp = await models.Product.findAll({
  //         where: {
  //           idcategory: item.id,
  //         },
  //       });
  //       result.push({
  //         name: item.nombre,
  //         idcategory: item.id,
  //         description: item.descripcion,
  //         state: item.estado,
  //         product: temp,
  //       });
  //     }
  //     res.status(200).json(result);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Ocurrió un error",
  //     });
  //     next(e);
  //   }
  // },
  // update: async (req, res, next) => {
  //   try {
  //     const reg = await models.Product.update(req.body, {
  //       where: {
  //         id: req.body.id,
  //       },
  //     });
  //     res.status(200).json(reg);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Ocurrió un error",
  //     });
  //     next(e);
  //   }
  // },
  // remove: async (req, res, next) => {
  //   try {
  //     const reg = await models.Product.findByIdAndDelete({
  //       id: req.body.id,
  //     });
  //     res.status(200).json(reg);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Ocurrió un error",
  //     });
  //     next(e);
  //   }
  // },
  // activate: async (req, res, next) => {
  //   try {
  //     const reg = await models.Product.update(
  //       {
  //         state: 1,
  //       },
  //       {
  //         where: {
  //           id: req.body.id,
  //         },
  //       }
  //     );
  //     res.status(200).json(reg);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Ocurrió un error",
  //     });
  //     next(e);
  //   }
  // },
  // deactivate: async (req, res, next) => {
  //   try {
  //     const reg = await models.Product.update(
  //       {
  //         state: 0,
  //       },
  //       {
  //         where: {
  //           id: req.body.id,
  //         },
  //       }
  //     );
  //     res.status(200).json(reg);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Ocurrió un error",
  //     });
  //     next(e);
  //   }
  // },
};
