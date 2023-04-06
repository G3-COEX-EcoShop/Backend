"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Permissions", [
      {
        name: "000000",
        can_manager: false,
        can_create: false,
        can_read: false,
        can_update: false,
        can_delete: false,
        can_activate: false,
      },
      {
        name: "101000",
        can_manager: true,
        can_create: false,
        can_read: true,
        can_update: false,
        can_delete: false,
        can_activate: false,
      },
      {
        name: "111101",
        can_manager: true,
        can_create: true,
        can_read: true,
        can_update: true,
        can_delete: false,
        can_activate: true,
      },
      {
        name: "111111",
        can_manager: true,
        can_create: true,
        can_read: true,
        can_update: true,
        can_delete: true,
        can_activate: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Permissions", null, {});
  },
};
