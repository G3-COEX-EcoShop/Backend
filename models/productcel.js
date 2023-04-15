"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductCel extends Model {
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "id_product",
      });
    }
  }
  ProductCel.init(
    {
      id_product: DataTypes.INTEGER,
      operating_system: DataTypes.STRING,
      storage: DataTypes.STRING,
      ram: DataTypes.STRING,
      processor: DataTypes.STRING,
      screen_size: DataTypes.STRING,
      resolution: DataTypes.STRING,
      main_camera: DataTypes.STRING,
      front_camera: DataTypes.STRING,
      battery: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductCel",
    }
  );
  return ProductCel;
};