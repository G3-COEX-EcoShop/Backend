"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: "computadores",
        name: "Computadores",
<<<<<<< HEAD
        description:"Los computadores son dispositivos electrónicos diseñados para procesar, almacenar y comunicar información mediante la manipulación de datos digitales",
        img_url: "/",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
=======
        description:
          "Los computadores son dispositivos electrónicos diseñados para procesar, almacenar y comunicar información mediante la manipulación de datos digitales",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680841128/EcoShop/PC%20Y%20PORTATILES/Computador_Port%C3%A1til_LENOVO_14_Pulgadas_IdeaPad_3_okwv1i.jpg",
        state: true,
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
      },
      {
        id: "celulares",
        name: "Celulares",
<<<<<<< HEAD
        description:"Los celulares, también conocidos como teléfonos móviles, son dispositivos electrónicos portátiles diseñados para realizar llamadas, enviar mensajes y acceder a internet a través de redes móviles mediante la utilización de una variedad de aplicaciones y herramientas digitales.",
        img_url: "/",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
=======
        description:
          "Los celulares, también conocidos como teléfonos móviles, son dispositivos electrónicos portátiles diseñados para realizar llamadas, enviar mensajes y acceder a internet a través de redes móviles mediante la utilización de una variedad de aplicaciones y herramientas digitales.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680138117/EcoShop/celulares/iPhone_14_Pro_Max_128_GB_Morado_Oscuro_dp4kee.jpg",
        state: true,
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
      },
      {
        id: "televisores",
        name: "Televisores",
<<<<<<< HEAD
        description:"Los televisores son dispositivos electrónicos diseñados para recibir señales de televisión y mostrar imágenes y sonidos en la pantalla mediante la conversión de señales analógicas o digitales.",
        img_url: "/",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
=======
        description:
          "Los televisores son dispositivos electrónicos diseñados para recibir señales de televisión y mostrar imágenes y sonidos en la pantalla mediante la conversión de señales analógicas o digitales.",
        img_url:
          "https://res.cloudinary.com/dlrdlubmf/image/upload/v1680119784/EcoShop/Televisor/TV_CHALLENGER_65_PULGADAS_UHD_LED_Plano_SmartTV_tmu2jc.jpg",
        state: true,
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
