"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Brands", [
      {
        id: "lg",
        name: "LG",
        description:
          "LG Electronics es una de las mayores empresas de electrónica de consumo del mundo",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/LG_Electronics_logo_2015_%28english%29.svg/1920px-LG_Electronics_logo_2015_%28english%29.svg.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "unique_brand_id",
        name: "Brand2",
        description: "Description2",
        img_url: "https://example.com/image2.png",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};