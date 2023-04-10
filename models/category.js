'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Product }) {
      this.hasMany(Product, { foreignKey: 'categoryId', as: 'categoryProducts' });
    }
  }
  Category.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: DataTypes.TEXT,
    img_url: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return Category;
};