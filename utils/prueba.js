const enviarCorreoConfirmacionCompra = require("./sendEmail"); 


async function enviarCorreo (destinatario, numeroPedido, productos, total, direccionEnvio) {
  const response = await enviarCorreoConfirmacionCompra(
    destinatario,
    numeroPedido,
    productos,
    total,
    direccionEnvio
  );

  console.log({response})

  return response;
}

module.exports = enviarCorreo;
