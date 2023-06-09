"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductTVs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_product: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      category: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "Categories",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "Brands",
          key: "id",
          onDelete: "CASCADE",
        },
      },
      display_technology: {
        type: Sequelize.STRING,
      },
      resolution: {
        type: Sequelize.STRING,
      },
      screen_size: {
        type: Sequelize.STRING,
      },
      hdmi: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("ProductTVs");
  },
};
