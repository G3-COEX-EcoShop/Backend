"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "category",
      });

      this.hasOne(models.ProductCel, {
        foreignKey: "id_product",
      });
    }
  }
  Product.init(
    {
      category: DataTypes.STRING,
      brand: DataTypes.STRING,
      name: DataTypes.TEXT,
      description: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
