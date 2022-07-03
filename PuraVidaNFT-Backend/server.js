const express = require("express"); // Se extrae dependencia de una libreria
const userRoutes = require("./routes/users");

const server = express(); //Se levanta el servidor
server.use(express.json());

// Rutas
server.use("/user", userRoutes);

server.get("/", (req, res) => {
  res.send("Bienvenido a PuraVidaNFT");
});

server.listen(process.env.PORT || 7500);

console.log("Sí funciona");
