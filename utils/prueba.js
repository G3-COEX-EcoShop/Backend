const enviarCorreoConfirmacionCompra = require("./sendEmail");

const destinatario = "miguel.inkco@gmail.com";
const numeroPedido = "1234";
const productos = [
  { nombre: "Producto 1", cantidad: 2, precio: 20 },
  { nombre: "Producto 2", cantidad: 1, precio: 30 },
];
const total = 70;
const direccionEnvio = `calle 51a N° 31-133 Bucaranga Santader`;
enviarCorreoConfirmacionCompra(
  destinatario,
  numeroPedido,
  productos,
  total,
  direccionEnvio
);
