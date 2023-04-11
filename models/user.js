"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: "rol",
      });
      User.hasMany(models.Address, {
        foreignKey: "id_user",
      });
      User.hasMany(models.PaymentMethod, {
        foreignKey: "id_user",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      rol: DataTypes.STRING,
      membership: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN,
      github: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
