const express = require("express"); // Se extrae dependencia de una libreria
const userRoutes = require("./routes/users");
//const { connect } = require("./services/databaseService");

const server = express(); //Se levanta el servidor
server.use(express.json());
//connect();

// Rutas
server.use("/user", userRoutes);

server.get("/", (req, res) => {
  res.send("Bienvenido a PuraVidaNFT");
});




server.post("/users", async (req, res) => {
  const userPayload = req.body;
 
  const sql = `
        INSERT INTO PuraVidaNFT.User (
            name,
            email,
            password,

        )
        VALUES(
            '${userPayload.name}',
            '${userPayload.email}',
            '${await bcrypt.hash(userPayload.password, saltRounds)}',

    `;
    con.query(sql, (err, result) => {
        if (err) {
            res.statusCode(500).json({
                message: "Ocurrió un error al insertar el usuario.",
                error: err,
            });
            return;
        };
        res.json(result);
    });
});





server.listen(process.env.PORT || 7500);

console.log("Sí funciona");
console.log(
  `The server is running at http://localhost:${process.env.PORT || 7500}`
);
