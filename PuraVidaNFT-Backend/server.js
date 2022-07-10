
const dotenv = require("dotenv"); //Leer lo que esta en el .env
const express = require("express");
dotenv.config();
const cors = require("cors");
const userRoutes = require("./routes/users");
const nftRoutes = require("./routes/nft");

const server = express(); //Se levanta el servidor
server.use(express.json());

server.use(cors());

//Documentacion
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
// Rutas
server.use("/user", userRoutes);
server.use("/nft", nftRoutes);

server.get("/", (req, res) => {
  res.send("Bienvenido a PuraVidaNFT");
});

server.listen(process.env.PORT || 7500);
console.log("Sí funciona");
console.log(
  `The server is running at http://localhost:${process.env.PORT || 7500} 
You can navigate the documentation at http://localhost:${
    process.env.PORT || 7500
  }/docs`
);
