
const dotenv = require("dotenv"); //Leer lo que esta en el .env
const express = require("express");
dotenv.config();
const cors = require("cors");
const userRoutes = require("./routes/users");
const nftRoutes = require("./routes/nft");

const server = express(); //Se levanta el servidor
server.use(express.json());


const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");


server.use(cors());

//Documentacion
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
server.use("/user", userRoutes);
server.use("/nft", nftRoutes);

server.get("/", (req, res) => {
  res.send("Bienvenido a PuraVidaNFT");
});

server.listen(process.env.PORT || 7500);
console.log("Sí funciona");
console.log(
  `The server is running at http://localhost:${process.env.PORT || 7500}`
);
