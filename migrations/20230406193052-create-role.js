"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      p_product: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      p_category: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      p_orders: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      p_reviews: {
        type: Sequelize.STRING,
        references: {
          model: "Permissions",
          key: "id",
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
