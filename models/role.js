"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Permission, {
        foreignKey: "p_product",
      });
      this.belongsTo(models.Permission, {
        foreignKey: "p_category",
      });
      this.belongsTo(models.Permission, {
        foreignKey: "p_orders",
      });
      this.belongsTo(models.Permission, {
        foreignKey: "p_reviews",
      });
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      p_product: DataTypes.STRING,
      p_category: DataTypes.STRING,
      p_orders: DataTypes.STRING,
      p_reviews: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
