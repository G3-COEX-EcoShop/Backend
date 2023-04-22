"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable("Brands", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        name: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        description: {
          type: Sequelize.TEXT,
        },
        img_url: {
          type: Sequelize.TEXT,
        },
        status: {
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Brands");
  },
};