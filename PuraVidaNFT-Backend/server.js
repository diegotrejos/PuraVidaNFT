const express = require("express"); // Se extrae dependencia de una libreria
const dotenv = require("dotenv"); //Leer lo que esta en el .env
const util = require("util");
const mysql = require("mysql");
const bcrypt = require("bcrypt"); //Encriptador

const saltRounds = 10;
dotenv.config();
const server = express(); //Se levanta el servidor
server.use(express.json());

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

con.connect(async (err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado a la base de datos");
});

const query = util.promisify(con.query).bind(con);

server.get("/", (req, res) => {
  res.send("Bienvenido");
});

server.post("/user", async (req, res) => {
  try {
    const userPayload = req.body;
    const sql = `INSERT INTO puravidanft.User
        (name,
        email,
        password)
        VALUES (
            '${userPayload.name}',
            '${userPayload.email}',
            '${await bcrypt.hash(userPayload.password, saltRounds)}'
            );
    `;
    const result = await query(sql);
    const querySelect = `SELECT id, name, email FROM puravidanft.User WHERE id=${result.insertId}`;
    const user = await query(sqlSelect);
    res.json(user[0]);
  } catch (error) {
    res.status(500).json({
      message: "Error al registrar el usuario",
    });
  }
});

server.post("/user/login", async (req, res) => {
  const userPayload = req.body;
  const sql = `SELECT * FROM puravidanft.User WHERE email = '${userPayload.email}';`;
   
  try {
    const result = await query(sql);
    if (!result[0]){
      res.status(401).send("Credenciales invalidos.");
      return;
    }

    const verifyPassword = await bcrypt.compare(userPayload.password, result[0].password);
    if (!verifyPassword){
      res.status(401).send("Datos invalidos.");
      return;
    }
    const user = result[0];
    delete user.password;
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error al iniciar sesion: " + error,
    });
  }
});


server.listen(process.env.PORT || 7500);

console.log("Sí funciona");
