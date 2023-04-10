"use strict";
const { Model } = require("sequelize");
const Category = require('./category');
const Brand = require('./brand');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category, Brand }) {
      this.belongsTo(Category, { foreignKey: 'categoryId', as: 'productCategory' });
      this.belongsTo(Brand, { foreignKey: 'brandId', as: 'productBrand' });
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Brand,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_url: DataTypes.TEXT,
    description: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
