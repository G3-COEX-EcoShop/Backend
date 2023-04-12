"use strict";
const models = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const info = await models.Product.bulkCreate(
      [
        {
          category: "celulares",
          brand: "lg",
          name: "Refined Wooden Gloves",
          description:
            "Dignissimos non ad eos accusantium consequatur dolorem. Ab sit doloribus adipisci cumque sunt nemo atque. Impedit autem ratione consequatur voluptate nihil. Enim voluptatem aliquid repellat. Sint rerum placeat explicabo officiis. Sit sequi et nam aut quia eos.",
          stock: 18,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          price: 4000,
          status: 1,
          Reviews: [
            {
              description: "celular 1",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductCel: {
            operating_system: "android",
            storage: "128gb",
            ram: "6gb",
            processor: "Intel Core i9-11900K",
            screen_size: "6.2 pulgadas",
            resolution: "1080x2400",
            main_camera: "12mpx",
            front_camera: "32mpx",
            battery: "5000mAh",
          },
        },
        {
          category: "celulares",
          brand: "lg",
          name: "Gorgeous Wooden Cheese",
          description:
            "Dolore ut iure dolorum alias in architecto. Voluptatem reiciendis aperiam ut. Exercitationem aliquid velit iste aut laboriosam soluta illum. Eum incidunt expedita ullam nesciunt ab aut iusto dolores. Enim omnis rerum vel fuga.",
          stock: 6,
          price: 6000,
          status: 0,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          Reviews: [
            {
              description: "celular2",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductCel: {
            operating_system: "android",
            storage: "256gb",
            ram: "8gb",
            processor: "AMD Ryzen 9 5950X",
            screen_size: "6.5 pulgadas",
            resolution: "1440x3200",
            main_camera: "64mpx",
            front_camera: "16mpx",
            battery: "6000mAh",
          },
        },
      ],
      { include: [models.ProductCel, models.Review] }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
    await queryInterface.bulkDelete("ProductCels", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
