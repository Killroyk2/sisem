const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const app = express();
const BodyParser = require("body-parser");
const OcupationRoutes = require("./routes/ocupation-routes");
const docs= require('./docs');

const options = {
    swaggerDefinition: {
      info: {
        title: "Porcentaje de Ocupacion de Camas",
        version: "1.0.0",
        description: "Documentacion del sistema Porcentaje de Ocupacion de Camas"
      },
      basePath: "/api",
      securityDefinitions: {
        bearerAuth: {
          type: "apiKey",
          name: "Authorization",
          scheme: "bearer",
          in: "header"
        }
      }
      
    },
    apis: ["./routes/ocupation-routes.js"]
  };
  
  const specs = swaggerJSDoc(options);


// parse application/json
app.use(BodyParser.json());
app.use("/api/userSwagger", swaggerUi.serve, swaggerUi.setup(docs));

app.use("/api/ocupacion", OcupationRoutes);

module.exports = app;
