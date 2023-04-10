require("dotenv").config();
const models = require("../models");

module.exports = {
<<<<<<< HEAD
   add: async (req, res, next) => {
     try {
      const { categoryId, brandId, name, img_url, description, stock, price, status } = req.body;
      if (!categoryId || !brandId) {
        return res.status(400).json({ message: 'categoryId and brandId are required fields.' });
      }
      const newProduct = await models.Product.create({
        categoryId,
        brandId,
        name,
        img_url,
        description,
        stock,
        price,
        status
      });

      res.status(201).json(newProduct);
    } catch (e) {
      res.status(400).send({
        message: "Error -> " + e,
      });
      next(e);
    }
   },
   query: async (req, res, next) => {
=======
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
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
    try {
      const reg = await models.Product.findOne({
        where: {
          id: req.query.id,
        },
<<<<<<< HEAD
        include: {
          model: models.Category,
          as: "productCategory",
          attributes: ["name"],
        },
=======
        include: [
          models.Brand,
          models.Category,
          models.Review,
          models.ProductCel,
          models.ProductLaptop,
          models.ProductTV,
        ],
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
      });
      if (!reg) {
        res.status(404).send({
          message: "El registro no existe",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
<<<<<<< HEAD
      res.status(400).send({
        message: "Error -> " + e,
=======
      res.status(500).send({
        message: "Ocurrió un error",
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
      });
      next(e);
    }
  },
<<<<<<< HEAD

   list: async (req, res, next) => {
     try {
       const reg = await models.Product.findAll({
         include: [
           {
            model: models.Category,
            as: 'productCategory'
           },
           {
            model: models.Brand,
            as: 'productBrand'
          }
         ],
       });
       res.status(200).json(reg);
      } catch (e) {
        res.status(500).send({
            message: 'Error -> ' + e
        });
       next(e);
     }
   },
   listByCategories: async (req, res, next) => {
    try {
      let result = [];
      const categories = await models.Category.findAll({
        attributes: ["id", "name", "description", "status"],
      });
      for (const item of categories) {
        let temp = await models.Product.findAll({
          where: {
            categoryId: item.id,
          },
        });
        result.push({
          name: item.name,
          categoryId: item.id,
          description: item.description,
          status: item.status,
          product: temp,
        });
      }
      res.status(200).json(result);
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
     const { name, description, stock, price,status } = req.body;

     const product = await models.Product.findOne({ where: { id } });
     
     if (!product) {
       return res.status(404).json({ message: 'producto no encontrados' });
     }

     if (status !== undefined && status !== product.status) {
       return res.status(400).json({ message: 'No se puede actualizar el campo de estado' });
     }
     await product.update({ name, description, stock, price,status }, { where: { id } });

     const updatedProduct = await models.Product.findOne({ where: { id } });

     return res.status(200).json(updatedProduct);
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
      const product = await models.Product.destroy({
        where: { id },
      });
      if (product === 0) {
        throw new Error("No se pudo eliminar la categoria");
      }
      res.json({ mensaje: "categoria eliminado exitosamente" });
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
      });
      next(e);
  }
  }, 
  activate: async (req, res, next) => {
    try {
      const { id } = req.query;

      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ error: 'producto no encontrado' });
      }

      await product.update({ status: true });

      res.json({ message: 'producto activado correctamente' });
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
      const product = await models.Product.findOne({ where: { id } });

      if (!product) {
        return res.status(404).json({ message: "producto no encontrado" });
      }

      await product.update({ status: false });

      return res.status(200).json({ message: "producto desactivado correctamente" });
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
=======
  list: async (req, res, next) => {
    try {
      const reg = await models.Product.findAll({});
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
      });
      next(e);
    }
  },
<<<<<<< HEAD
=======
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
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
};
