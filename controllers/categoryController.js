const models = require("../models");

module.exports = {
  list: async (req, res, next) => {
    try {
<<<<<<< HEAD
      let category = await models.Category.findAll({
      });
      if (!category) {
        res.status(409).send({
          message: "categoria no encontrados",
        });
        return;
      }
      res.status(200).json({
        category
      });
    } catch (e) {
      res.status(400).send({
=======
      const reg = await models.Category.findAll();
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
        message: "Error -> " + e,
      });
      next(e);
    }
  },
<<<<<<< HEAD
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
                   id: req.query.id
               }
           });
           if (!reg) {
               res.status(404).send({
                   message: 'El registro no existe'
               });
           } else {
               res.status(200).json(reg);
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
        const { name, description, status } = req.body;
  
        const category = await models.Category.findOne({ where: { id } });
        
        if (!category) {
          return res.status(404).json({ message: 'categoria no encontrados' });
        }
  
        if (status !== undefined && status !== category.status) {
          return res.status(400).json({ message: 'No se puede actualizar el campo de estado' });
        }
        await category.update({ name, description }, { where: { id } });

        const updatedCategory = await models.Category.findOne({ where: { id } });
  
        return res.status(200).json(updatedCategory);
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

      const category = await models.Category.findOne({ where: { id } });

      if (!category) {
        return res.status(404).json({ error: 'Categoria no encontrado' });
      }

      await category.update({ status: true });

      res.json({ message: 'Categoria activada correctamente' });
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
      const category = await models.Category.findOne({ where: { id } });

      if (!category) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      await category.update({ status: false });

      return res.status(200).json({ message: "categoria desactivada correctamente" });
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
      const category = await models.Category.destroy({
        where: { id },
      });
      if (category === 0) {
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
=======
  // add: async (req, res, next) => {
  //   try {
  //     const reg = await models.Category.create(req.body);
  //     res.status(200).json(reg);
  //   } catch (e) {
  //     res.status(500).send({
  //       message: "Error -> " + e,
  //     });
  //     next(e);
  //   }
  // },
  // query: async (req, res, next) => {
  //     try {
  //         const reg = await models.Category.findOne({
  //             where: {
  //                 id: req.query.id
  //             }
  //         });
  //         if (!reg) {
  //             res.status(404).send({
  //                 message: 'El registro no existe'
  //             });
  //         } else {
  //             res.status(200).json(reg);
  //         }
  //     } catch (e) {
  //         res.status(500).send({
  //             message: 'Error -> ' + e
  //         });
  //         next(e);
  //     }
  // },
  // update: async (req, res, next) => {
  //     try {
  //         const reg = await models.Category.update({
  //             nombre: req.body.nombre,
  //             descripcion: req.body.descripcion
  //         }, {
  //             where: {
  //                 id: req.body.id
  //             }
  //         });
  //         res.status(200).json(reg);
  //     } catch (e) {
  //         res.status(500).send({
  //             message: 'Error -> ' + e
  //         });
  //         next(e);
  //     }
  // },
  // activate: async (req, res, next) => {
  //   try {
  //     const reg = await models.Category.update(
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
  //       message: "Error -> " + e,
  //     });
  //     next(e);
  //   }
  // },
  // deactivate: async (req, res, next) => {
  //     try {
  //         const reg = await models.Category.update({
  //             estado: 0
  //         }, {
  //             where: {
  //                 id: req.body.id
  //             }
  //         });
  //         res.status(200).json(reg);
  //     } catch (e) {
  //         res.status(500).send({
  //             message: 'Error -> ' + e
  //         });
  //         next(e);
  //     }
  // },
  // remove: async (req, res, next) => {
  //     try {
  //         const reg = await models.Category.destroy({
  //             where: {
  //                 _id: req.body.id
  //             }
  //         });
  //         res.status(200).json(reg);
  //     } catch (e) {
  //         res.status(500).send({
  //             message: 'Error -> ' + e
  //         });
  //         next(e);
  //     }
  // }
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
};
