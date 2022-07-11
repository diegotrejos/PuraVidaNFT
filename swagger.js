const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
    title: "PuraVidaNFT",
    description: "Este es la documentacion del backend de PuraVidaNFT",
    },
        version: "2.0.0", 
        basePath: '/',
        host: 'puravidanft00.herokuapp.com',
         schemes: ["http","https"],
        contact: {
            email: ["diego.trejosecheverria@ucr.ac.cr","jennifer.villalobos@ucr.ac.cr","karon.marin@ucr.ac.cr"]
        }
};


const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);