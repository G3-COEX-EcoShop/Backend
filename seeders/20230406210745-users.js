"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "administrador",
        email: "admin@gmail.com",
        password:
          "$2a$12$81H.pKL0QGK7yKWXIVvwM.m2BpODolqmULzv4BOrGhAJ/z5ohdhBG", //password: 1234
        rol: "administrador",
        membership: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
