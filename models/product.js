"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
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
      category: {
        type: DataTypes.STRING,
        references: {
          model: "Categories",
          key: "id",
          onUpdate: "CASCADE",
        },
        allowNull: true,
      },
      brand: {
        type: DataTypes.STRING,
        references: {
          model: "Brands",
          key: "id",
          onUpdate: "CASCADE",
        },
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img_url: DataTypes.TEXT,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
