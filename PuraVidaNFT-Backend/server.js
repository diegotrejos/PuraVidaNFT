const express = require('express'); // Se extrae dependencia de una libreria
const dotenv = require('dotenv'); //Leer lo que esta en el .env
dotenv.config();
const server = express(); //Se levanta el servidor

server.get('/', (req,res)=>{
    res.send("Hola");
});

server.listen(process.env.POR || 7500); //Se selecciona el puerto 

console.log("Sí funciona");
