require("dotenv").config();

const models = require("../models");
const bcrypt = require("bcryptjs");


module.exports = {
  list: async (req, res, next) => {
    try {
      //   const { name, email, password } = req.body;
      const order = await models.Order.findAll({
      });
      console.log(order);
      if (!order) {
        res.status(409).send({
          message: "orden no encontrados",
        });

        return;
      }
      const newUser = order.map((item) => {
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
      const { date,
        order_status,
        discount,
        id_user,
        id_address,
        id_payment_method } = req.body;

      let order = await models.Order.create({
        date: date,
        order_status: order_status,
        discount: discount,
        id_user: id_user,
        id_address: id_address,
        id_payment_method:id_payment_method
      });

      if (!order) {
        res.status(409).send({
          message: "orden no encontrado",
        });
        return;
      }
      res.status(200).json({
        order
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
        const order = await models.Order.findOne({
            where: {
                id: req.query.id
            } 
        });

        if (!order) {
            res.status(404).send({
                message: 'La orden no existe'
            });
        } else {
            res.status(200).json(order);
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
    const { order_status } = req.body;

    const order = await models.Order.findOne({ where: { id } });

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    if (!['cancelado', 'confirmado', 'entregado', 'pendiente'].includes(order_status)) {
      return res.status(400).json({ message: 'El campo de estado debe ser "cancelado", "confirmado", "entregado" o "pendiente"' });
    }

    await order.update({ order_status }, { where: { id } });

    const updatedOrder = await models.Order.findOne({ where: { id } });

    return res.status(200).json(updatedOrder);
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
      const orderDelete = await models.Order.destroy({
        where: { id },
      });
      if (orderDelete === 0) {
        throw new Error("No se pudo eliminar el orden");
      }
      res.json({ mensaje: "orden eliminado exitosamente" });
    } catch (e) {
      res.status(500).send({
          message: 'Error -> ' + e
      });
      next(e);
  }
  }, 
}