"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rol: {
        type: Sequelize.STRING,
        defaultValue: "Usuario",
        references: {
          model: "Roles",
          key: "id",
        },
      },
      membership: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      status:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null 
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
    await queryInterface.dropTable("Users");
  },
};
