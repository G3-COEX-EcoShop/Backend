const nodemailer = require("nodemailer");
require("dotenv").config();

async function enviarCorreoConfirmacionCompra(
  destinatario,
  numeroPedido,
  productos,
  total,
  direccionEnvio
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "miguelcarvajal7.mc@gmail.com",
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  const mailOptions = {
    from: "miguelcarvajal7.mc@gmail.com",
    to: destinatario,
    subject: "Confirmación de compra en tu tienda en línea",
    html: `
    <h1>¡Gracias por tu compra!</h1>
    <p>Fecha y hora del pedido: ${new Date()}</p>
    
          <p>Tu número de pedido es: <strong>${numeroPedido}</strong></p>
          <p>Detalles de la compra:</p>
          <ul>
            ${productos
              .map(
                (producto) =>
                  `<li>${producto.nombre} - ${producto.cantidad} x ${producto.precio}</li>`
              )
              .join("")}
          </ul>
          <p>Total de la compra: <strong>${total}</strong></p>
          <p>El envío será entregado a la siguiente dirección:</p>
          ${direccionEnvio}
          <p>
         Gracias por comprar en nuestra tienda en línea. ¡Esperamos verte pronto!</p>`,
  };
  const response = await transporter.sendMail(mailOptions);
  return response
}
  
module.exports = enviarCorreoConfirmacionCompra;
