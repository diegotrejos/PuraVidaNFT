const express = require("express"); // Se extrae dependencia de una libreria
const dotenv = require("dotenv"); //Leer lo que esta en el .env
dotenv.config()
const cors = require('cors');

const userRoutes = require("./routes/users");

const server = express(); //Se levanta el servidor
server.use(express.json());
server.use(cors());

// Rutas
server.use("/user", userRoutes);

server.get("/", (req, res) => {
  res.send("Bienvenido a PuraVidaNFT");
});

server.listen(process.env.PORT || 7500);

console.log("Sí funciona");
console.log(
  `The server is running at http://localhost:${process.env.PORT || 7500}`
);
