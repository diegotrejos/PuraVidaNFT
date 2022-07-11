const dotenv = require("dotenv"); //Leer lo que esta en el .env
const express = require("express"); // Se extrae dependencia de una libreria
const cors = require("cors");
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const userRoutes = require("./routes/users");
const nftRoutes = require("./routes/nft");

dotenv.config();

aws.config.update({
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_KEY_SECRET,
  region: "us-east-1",
});

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

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "ci0137",
    key: function (req, file, cb) {
      cb(null, `NFT/nfts/${file.originalname}`);
    },
  }),
});

server.get("/", (req, res) => {
  res.send("Bienvenido a PuraVidaNFT");
});
server.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.send({
    message: "Uploaded!",
    url: file.location,
    name: file.key,
    type: file.mimetype,
    size: file.size,
  });
});
server.listen(process.env.PORT || 7500);
console.log("Sí funciona");
console.log(
  `The server is running at puravidanft00.herokuapp.com 
You can navigate the documentation at puravidanft00.herokuapp.com/docs`
);
