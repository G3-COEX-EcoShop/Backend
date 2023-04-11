"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      order_status: {
        type: Sequelize.STRING,
        references: {
          model: "OrderStatus",
          key: "id",
        },
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      id_address: {
        type: Sequelize.INTEGER,
        references: {
          model: "Addresses",
          key: "id",
        },
      },
      id_payment_method: {
        type: Sequelize.INTEGER,
        references: {
          model: "PaymentMethods",
          key: "id",
        },
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
    await queryInterface.dropTable("Orders");
  },
};
