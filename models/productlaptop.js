"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductLaptop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "id_product",
      });
    }
  }
  ProductLaptop.init(
    {
      id_product: DataTypes.INTEGER,
      cpu_brand: DataTypes.STRING,
      cpu_model: DataTypes.STRING,
      graphics_coprocessor: DataTypes.STRING,
      storage: DataTypes.STRING,
      ram: DataTypes.STRING,
      operating_system: DataTypes.STRING,
      screen_size: DataTypes.STRING,
      resolution: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductLaptop",
    }
  );
  return ProductLaptop;
};
