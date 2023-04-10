"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.STRING,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      brandId: {
        type: Sequelize.STRING,
        references: {
          model: "Brands",
          key: "id",
        },
      },
      name: {
        type: Sequelize.TEXT,
      },
      img_url: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Products");
  },
};
