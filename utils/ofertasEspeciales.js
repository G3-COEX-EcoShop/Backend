const nodemailer = require("nodemailer");
require("dotenv").config();


function ofertaEspecial(email, producto, descuento) {
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
      from: 'ecoshop.coex@gmail.com',
      to: email,
      subject: `Oferta especial en ${producto}`,
      html: `
        <p>¡Hola!</p>
        <p>¡Tenemos una oferta especial en ${producto}! ¡Aprovecha este descuento del ${descuento}% de descuento y obtén este producto a un precio increíble!</p>
        <p>¡No te lo pierdas!</p>
      `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  }

  module.exports = ofertaEspecial;