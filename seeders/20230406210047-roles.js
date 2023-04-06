"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        name: "Administrador",
        description:
          "Puede acceder y modificar todas las funciones y datos del sistema",
        p_product: "111111",
        p_category: "111111",
        p_orders: "111111",
        p_reviews: "111111",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vendedor",
        description: "Puede ver toda la informacion del sistema",
        p_product: "101000",
        p_category: "000000",
        p_orders: "101000",
        p_reviews: "000000",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
