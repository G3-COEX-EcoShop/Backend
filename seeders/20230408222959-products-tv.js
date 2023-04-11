"use strict";
const models = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const info = await models.Product.bulkCreate(
      [
        {
          category: "televisores",
          brand: "lg",
          name: "Irure deserunt magna quis eu.",
          description:
            "Cupidatat reprehenderit ex incididunt laboris nisi excepteur veniam reprehenderit velit est enim laboris aliquip quis. Officia occaecat nostrud voluptate duis excepteur consequat ad commodo dolor. Labore non labore occaecat consectetur consectetur. Et mollit nostrud velit non do enim dolore.",
          stock: 18,
          price: 4000,
          state: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          Reviews: [
            {
              description: "tv1",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "LED",
            resolution: "1920x1080",
            screen_size: "42pulgadas",
            hdmi: "2 hdmi3.0",
          },
        },
        {
          category: "televisores",
          brand: "lg",
          name: "Id incididunt adipisicing nostrud elit do.",
          description:
            "Eiusmod eiusmod ea mollit ex sint tempor do in dolore nostrud consectetur adipisicing. Sunt cupidatat enim magna eu pariatur. Amet deserunt qui aliqua qui excepteur est qui elit Lorem qui quis officia.",
          stock: 6,
          price: 6000,
          state: 1,
          img_url:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          Reviews: [
            {
              description: "tv2",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductTV: {
            display_technology: "Pasma",
            resolution: "1920x1080",
            screen_size: "32pulgadas",
            hdmi: "1 hdmi2.0",
          },
        },
      ],
      { include: [models.ProductTV, models.Review] }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
    await queryInterface.bulkDelete("ProductTVs", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
