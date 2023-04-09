"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "id_user",
      });
    }
  }
  Address.init(
    {
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      city: DataTypes.STRING,
      description: DataTypes.TEXT,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
