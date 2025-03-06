// swagger.js (en ESM)
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API-POSTGRES",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor Local",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerUiOptions = {
  swaggerOptions: {
    layout: "StandaloneLayout",
    filter: true,
    deepLinking: true,
    persistAuthorization: true,
  },
  customCss: `
    .swagger-ui .topbar {
      display: flex !important;
    }
  `,
};

function swaggerDocs(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
  console.log("📄 Swagger UI disponible en: http://localhost:3000/api-docs");
}

// Exportamos por defecto (ESM)
export default swaggerDocs;
