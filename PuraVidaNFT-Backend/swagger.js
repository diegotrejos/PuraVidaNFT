const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
        description: "Este es la documentacion del backend de PuraVidaNFT",
        version: "2.0.0",
        title: "PuraVidaNFT",
        basePath: '/',
        host: 'localhost:7500',
         schemes: ['http','https'],
        contact: {
            "email": "diego.trejosecheverria@ucr.ac.cr"
        }

    }

};


const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);