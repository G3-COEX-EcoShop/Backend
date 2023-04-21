"use strict";
/** @type {import('sequelize-cli').Migration}*/
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductCels", {
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
      brand: {
        type: Sequelize.STRING,
      },
      operating_system: {
        type: Sequelize.STRING,
      },
      storage: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      processor: {
        type: Sequelize.STRING,
      },
      screen_size: {
        type: Sequelize.STRING,
      },
      resolution: {
        type: Sequelize.STRING,
      },
      main_camera: {
        type: Sequelize.STRING,
      },
      front_camera: {
        type: Sequelize.STRING,
      },
      battery: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("ProductCels");
  },
};
