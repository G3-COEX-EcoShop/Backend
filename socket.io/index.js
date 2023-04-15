const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

// io.of("/asistencias").adapter.on("create-room", (room) => {
//   console.log(`room ${room} was created`);
// });

// io.of("/asistencias").adapter.on("join-room", (room, id) => {
//   console.log(`socket ${id} has joined room ${room}`);
// });

/* 
  SOPORTES
*/
io.of("/soportes").on("connection", (socket) => {
  // 1. unirse al chat
  socket.on("join server", (user) => {
    const userjoined = {
      user,
      id: socket.id,
    };
    socket.broadcast.emit("new user", `${user} acabó de entrar`);
  });
  // 2. unirse a la sala del chat
  socket.on("join room", ({ room, user }) => {
    socket.join(room);
    socket.to(room).emit("new user", `${user} ha entrado a ${room}`);
  });
  // 3. enviar mensaje a la sala
  socket.on("send message", ({ content, to, sender, timestamp }) => {
    let payload = {
      content,
      to,
      sender,
      timestamp,
    };
    socket.to(to).emit("new message", payload);
  });
});
/* 
  ASISTENCIAS
*/


app.get("/soportes", (request, response) => {
  response.sendFile(__dirname + "/modulos/soportes.html");
});



httpServer.listen(3000, () => {
  console.log("conectado en http://localhost:3000/");
});
