"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "id_user",
      });
      this.belongsTo(models.Address, {
        foreignKey: "id_address",
      });
      this.belongsTo(models.PaymentMethod, {
        foreignKey: "id_payment_method",
      });
      this.belongsTo(models.OrderStatus, {
        foreignKey: "order_status",
      });
    }
  }
  Order.init(
    {
      date: DataTypes.DATE,
      order_status: DataTypes.STRING,
      discount: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_address: DataTypes.INTEGER,
      id_payment_method: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
