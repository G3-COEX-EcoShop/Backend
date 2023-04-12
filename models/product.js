"use strict";
const { Model } = require("sequelize");
const Category = require("./category");
const Brand = require("./brand");
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

      this.belongsTo(models.Brand, {
        foreignKey: "brand",
      });

      this.hasOne(models.ProductCel, {
        foreignKey: "id_product",
      });
      this.hasOne(models.ProductLaptop, {
        foreignKey: "id_product",
      });
      this.hasOne(models.ProductTV, {
        foreignKey: "id_product",
      });
      this.hasMany(models.Review, {
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
      img_url: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
