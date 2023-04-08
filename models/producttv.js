"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductTV extends Model {
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
  ProductTV.init(
    {
      id_product: DataTypes.INTEGER,
      display_technology: DataTypes.STRING,
      resolution: DataTypes.STRING,
      screen_size: DataTypes.STRING,
      hdmi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductTV",
    }
  );
  return ProductTV;
};
