const dotenv = require("dotenv"); //Leer lo que esta en el .env
dotenv.config();

const util = require("util");
const mysql = require("mysql");

let databaseConnection;
let queryObject;

const query = (() => {
    if (!databaseConnection || !queryObject){
        databaseConnection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
          });

          databaseConnection.connect(async (err) => {
            if (err) {
              throw err;
            }
            console.log("Conectado a la base de datos");
            queryObject = util.promisify(databaseConnection.query).bind(databaseConnection);
            return queryObject;
          });
          
    }
    else {
        return queryObject;
    }
  })();

  module.exports = query;