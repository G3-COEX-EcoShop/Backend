"use strict";
const { Model } = require("sequelize");
const Category = require('./category');
const Brand = require('./brand');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
<<<<<<< HEAD
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
=======
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      category: DataTypes.STRING,
      brand: DataTypes.STRING,
      name: DataTypes.TEXT,
      description: DataTypes.TEXT,
      urlImg: DataTypes.TEXT,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      state: DataTypes.BOOLEAN,
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
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
