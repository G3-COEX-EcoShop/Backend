"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", {
      name: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      id: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      p_product: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "name",
        },
      },
      p_category: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "name",
        },
      },
      p_orders: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "name",
        },
      },
      p_reviews: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "name",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Roles");
  },
};
