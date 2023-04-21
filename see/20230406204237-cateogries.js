"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: "computadores",
        name: "computadores",
        description:
          "usar una computadora puede ser muy divertido y fácil, y ofrece una amplia gama de actividades y tareas para realizar. Además, gracias a su versatilidad y facilidad de uso, la computadora se ha convertido en una herramienta esencial en la vida cotidiana de muchas personas.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680836148/Portatiles/Computador_Port%C3%A1til_HP_Pavilion_15_lnwq5t.webp",
        state: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "celulares",
        name: "celulares",
        description:
          "usar un celular puede ser muy divertido y fácil, y ofrece una amplia gama de actividades y tareas para realizar en cualquier momento y lugar. Además, gracias a su portabilidad y facilidad de uso, los celulares se han convertido en una herramienta esencial en la vida cotidiana de muchas personas.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680138147/EcoShop/celulares/ZTE_BLADE_L210_-_32GB_Azul_sbi5oo.jpg",
        state: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "televisores",
        name: "televisores",
        description:
          "usar un televisor puede ser muy divertido y fácil, y ofrece una amplia gama de actividades y tareas para disfrutar en la comodidad de tu hogar. Además, gracias a su tamaño y calidad de imagen, el televisor se ha convertido en un elemento esencial en la vida cotidiana de muchas personas.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119927/EcoShop/Televisor/TV_XIAOMI_43_PULGADAS_UHD_LED_Plano_SmartTV_aoxq9g.jpg",
        state: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
