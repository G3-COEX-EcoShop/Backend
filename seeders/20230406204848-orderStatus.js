"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("OrderStatus", [
      {
        id: "pendiente",
        name: "Pendiente",
        description:
          "El pedido ha sido recibido, pero aún no ha sido procesado.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "confirmado",
        name: "Confirmado",
        description:
          " El pedido ha sido procesado y se encuentra listo para ser enviado o recogido",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "cancelado",
        name: "Cancelado",
        description:
          "El pedido ha sido cancelado por el cliente o por la empresa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "entregado",
        name: "Entregado",
        description:
          "El pedido ha sido entregado al cliente y se ha completado satisfactoriamente",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("OrderStatus", null, {});
  },
};
