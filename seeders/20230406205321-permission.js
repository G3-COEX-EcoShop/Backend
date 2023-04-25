"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Permissions", [
      {
        id: "000000",
        name: "000000",
        can_manager: false,
        can_create: false,
        can_read: false,
        can_update: false,
        can_delete: false,
        can_activate: false,
        can_deactivate:false

      },
      {
        id: "101000",
        name: "101000",
        can_manager: true,
        can_create: false,
        can_read: true,
        can_update: false,
        can_delete: false,
        can_activate: false,
        can_deactivate:false

      },
      {
        id: "111101",
        name: "111101",
        can_manager: true,
        can_create: true,
        can_read: true,
        can_update: true,
        can_delete: false,
        can_activate: true,
        can_deactivate:true

      },
      {
        id: "111111",
        name: "111111",
        can_manager: true,
        can_create: true,
        can_read: true,
        can_update: true,
        can_delete: true,
        can_activate: true,
        can_deactivate:true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Permissions", null, {});
  },
};
