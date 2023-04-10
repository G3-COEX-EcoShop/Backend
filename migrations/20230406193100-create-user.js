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
<<<<<<< HEAD
      status:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null 
=======
      github: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
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
    await queryInterface.dropTable("Users");
  },
};
