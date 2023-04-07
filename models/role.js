"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsTo(models.Permission, {
        as: "productPermission",
        foreignKey: "p_product",
      });
      Role.belongsTo(models.Permission, {
        as: "categoryPermission",
        foreignKey: "p_category",
      });
      Role.belongsTo(models.Permission, {
        as: "ordersPermission",
        foreignKey: "p_orders",
      });
      Role.belongsTo(models.Permission, {
        as: "reviewsPermission",
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
