const nodemailer = require("nodemailer");
require("dotenv").config();

function iniciosesion(email) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "ecoshop.coex@gmail.com",
      pass: process.env.PASSWORD_EMAIL,
      }
    });
  
    const mailOptions = {
      from: 'tu_correo_electronico@gmail.com',
      to: email,
      subject: 'Bienvenido a nuestra tienda en línea',
      text: '¡Gracias por registrarte en nuestra tienda en línea!'
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  }

  module.exports = iniciosesion;