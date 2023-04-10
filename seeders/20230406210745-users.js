"use strict";
const models = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
<<<<<<< HEAD
    return queryInterface.bulkInsert("Users", [
      {
        name: "administrador",
        email: "admin@gmail.com",
        password:
          "$2a$12$81H.pKL0QGK7yKWXIVvwM.m2BpODolqmULzv4BOrGhAJ/z5ohdhBG", //password: 1234
        rol: "administrador",
        membership: true,
        status:null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
=======
    const info = await models.User.bulkCreate(
      [
        {
          name: "administrador",
          email: "admin@gmail.com",
          password:
            "$2a$12$81H.pKL0QGK7yKWXIVvwM.m2BpODolqmULzv4BOrGhAJ/z5ohdhBG", //password: 1234
          rol: "usuario",
          membership: true,
          Addresses: [
            {
              name: "Casa",
              country: "Colombia",
              city: "Bucaramanga",
              description: "calle ###",
            },
            {
              name: "Trabajo",
              country: "Colombia",
              city: "Bucaramanga",
              description: "Carrera ###",
            },
          ],
          PaymentMethods: [
            {
              name: "bancolombia tarjeta",
              type: "CreditCard",
              info: "Tempor occaecat est mollit ipsum non eiusmod est ea laborum.",
            },
            {
              name: "bancolombia tarjeta",
              type: "CreditCard",
              info: "Tempor occaecat est mollit ipsum non eiusmod est ea laborum.",
            },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "usuario",
          email: "usuario@gmail.com",
          password:
            "$2a$12$81H.pKL0QGK7yKWXIVvwM.m2BpODolqmULzv4BOrGhAJ/z5ohdhBG", //password: 1234
          rol: "usuario",
          membership: false,
          Addresses: [
            {
              name: "Casa",
              country: "Colombia",
              city: "Bucaramanga",
              description: "calle ###",
            },
            {
              name: "Trabajo",
              country: "Colombia",
              city: "Bucaramanga",
              description: "Carrera ###",
            },
          ],
          PaymentMethods: [
            {
              name: "bancolombia tarjeta",
              type: "CreditCard",
              info: "Tempor occaecat est mollit ipsum non eiusmod est ea laborum.",
            },
            {
              name: "bancolombia tarjeta",
              type: "CreditCard",
              info: "Tempor occaecat est mollit ipsum non eiusmod est ea laborum.",
            },
          ],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { include: [models.Address, models.PaymentMethod] }
    );
>>>>>>> 30bcc7d3c4fb7e34b1b6cf901319b0473b0663de
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
    await queryInterface.bulkDelete("PaymentMethods", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
