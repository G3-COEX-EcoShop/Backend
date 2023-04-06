"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.bulkInsert("Brands", [
    //   {
    //     name: "administrador",
    //     email: "admin@gmail.com",
    //     password: "",
    //     rol: "Administrador",
    //     membership: true,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Brands", null, {});
  },
};
