"use strict";
const models = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const info = await models.Product.bulkCreate(
      [
        {
          category: "computadores",
          brand: "lg",
          name: "Irure deserunt magna quis eu.",
          description:
            "Cupidatat reprehenderit ex incididunt laboris nisi excepteur veniam reprehenderit velit est enim laboris aliquip quis. Officia occaecat nostrud voluptate duis excepteur consequat ad commodo dolor. Labore non labore occaecat consectetur consectetur. Et mollit nostrud velit non do enim dolore.",
          stock: 18,
          price: 4000,
          state: 1,
          urlImg:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          Reviews: [
            {
              description: "pc 1",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "amd",
            cpu_model: "ryzen5 3600",
            graphics_coprocessor: "rtx 4200",
            storage: "500gb ssd",
            ram: "8 gb",
            operating_system: "Windows",
            screen_size: "14pulgadas",
            resolution: "1920x1080",
          },
        },

        {
          category: "computadores",
          brand: "lg",
          name: "Id incididunt adipisicing nostrud elit do.",
          description:
            "Eiusmod eiusmod ea mollit ex sint tempor do in dolore nostrud consectetur adipisicing. Sunt cupidatat enim magna eu pariatur. Amet deserunt qui aliqua qui excepteur est qui elit Lorem qui quis officia.",
          stock: 6,
          price: 6000,
          state: 1,
          urlImg:
            "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119797/EcoShop/Televisor/TV_HYUNDAI_65_PULGADAS_UHD_LED_Plano_SmartTV_lj3igv.jpg",
          Reviews: [
            {
              description: "pc2",
              point: 5,
              id_user: 1,
            },
            {
              description: "Cillum voluptate elit aliqua sit ullamco amet.",
              point: 2,
              id_user: 1,
            },
          ],
          ProductLaptop: {
            cpu_brand: "intel",
            cpu_model: "core i7-10700",
            graphics_coprocessor: "gtx 1660ti",
            storage: "1tb nvme ssd",
            ram: "16 gb",
            operating_system: "Windows",
            screen_size: "15pulgadas",
            resolution: "2560x1440",
          },
        },
      ],
      { include: [models.ProductLaptop, models.Review] }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
    await queryInterface.bulkDelete("ProductLaptops", null, {});
    await queryInterface.bulkDelete("Products", null, {});
  },
};
