"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
<<<<<<< HEAD
    try {
      await queryInterface.createTable("Brands", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
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
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        },
      });
    } catch (error) {
      console.log(error);
    }
=======
    await queryInterface.createTable("Brands", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      img_url: {
        type: Sequelize.TEXT,
      },
      state: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("Brands");
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Brands');
  }
};
