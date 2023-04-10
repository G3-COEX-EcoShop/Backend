"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
<<<<<<< HEAD
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
=======
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img_url: DataTypes.TEXT,
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
  return Category;
};
