"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Brands", [
      {
        id: "lg",
        name: "LG",
        description:
          "LG Electronics es una de las mayores empresas de electrónica de consumo del mundo",
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/LG_Electronics_logo_2015_%28english%29.svg/1920px-LG_Electronics_logo_2015_%28english%29.svg.png",
        state: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Brands", null, {});
  },
};
