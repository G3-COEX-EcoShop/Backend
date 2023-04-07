"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Permissions", {
      name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      id: {
        type: Sequelize.INTEGER,
      },
      can_manager: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      can_create: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      can_read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      can_update: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      can_delete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      can_activate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Permissions");
  },
};
