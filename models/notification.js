"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "id_product",
      });
      this.belongsTo(models.Role, {
        foreignKey: "rol",
      });
    }
  }
  Notification.init(
    {
      id_product: DataTypes.INTEGER,
      date: DataTypes.DATE,
      rol: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
