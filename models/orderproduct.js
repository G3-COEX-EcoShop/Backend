"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "id_product",
      });
      this.belongsTo(models.Order, {
        foreignKey: "id_order",
      });
    }
  }
  OrderProduct.init(
    {
      id_product: DataTypes.INTEGER,
      id_order: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderProduct",
    }
  );
  return OrderProduct;
};
