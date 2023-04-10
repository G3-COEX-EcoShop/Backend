"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: "computadores",
        name: "Computadores",
        description:"Los computadores son dispositivos electrónicos diseñados para procesar, almacenar y comunicar información mediante la manipulación de datos digitales",
        img_url: "/",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "celulares",
        name: "Celulares",
        description:"Los celulares, también conocidos como teléfonos móviles, son dispositivos electrónicos portátiles diseñados para realizar llamadas, enviar mensajes y acceder a internet a través de redes móviles mediante la utilización de una variedad de aplicaciones y herramientas digitales.",
        img_url: "/",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "televisores",
        name: "Televisores",
        description:"Los televisores son dispositivos electrónicos diseñados para recibir señales de televisión y mostrar imágenes y sonidos en la pantalla mediante la conversión de señales analógicas o digitales.",
        img_url: "/",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
