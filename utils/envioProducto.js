const nodemailer = require("nodemailer");
require("dotenv").config();

function enviarNotificacionEnvio(email, producto) {
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
      subject: 'Envío realizado',
      text: `Tu producto ${producto} ha sido enviado. ¡Gracias por tu compra!`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  }

  module.exports = enviarNotificacionEnvio;