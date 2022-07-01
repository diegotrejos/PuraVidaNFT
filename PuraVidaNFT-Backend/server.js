const express = require("express"); // Se extrae dependencia de una libreria
const dotenv = require("dotenv"); //Leer lo que esta en el .env
const mysql = require("mysql");
const bcrypt = require("bcrypt"); //Encriptador
const saltRounds = 10;
dotenv.config();
const server = express(); //Se levanta el servidor
server.use(express.json());

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
});

con.connect((err) => {
  if (err) {
    console.log("Error al conectarse a la base de datos. ", err);
  };
  console.log("Conectado a la base de datos");
});

server.get("/", (req, res) => {
  res.send("Hola");
});

server.post("/user", async (req, res) => {
  const userPayload = req.body;
  const sql = `INSERT into PuraVidaNFT.User(
        name,
        email,
        password)
        VALUES (
            '${userPayload.name}',
            '${userPayload.email}',
            '${await bcrypt.hash(userPayload.password, saltRounds)}'
            );
    `;
  con.query(sql, (err, result) => {
    if (err) {
       res.statusCode(500).json({
         message: "Ocurrió un error al registrar el usuario",
         error: err,
       });
      return;
    }
    res.json(result);
  });
});

server.listen(process.env.PORT || 7500);

console.log("Sí funciona");
