const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./src/routes/*.js"], // Ajusta la ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJsDoc(options);

// Opciones extras para la interfaz
const swaggerUiOptions = {
  // Opciones de configuración internas de Swagger UI
  swaggerOptions: {
    layout: "StandaloneLayout",   // Asegura el layout estándar con la topbar
    filter: true,                 // Muestra el buscador de endpoints
    deepLinking: true,
    persistAuthorization: true,   // Mantiene el token en la sesión
  },
  // Forzar la visibilidad de la barra superior por si algún CSS la oculta
  customCss: `
    .swagger-ui .topbar {
      display: flex !important;
    }
  `
};

const swaggerDocs = (app) => {
  // Montamos Swagger UI en /api-docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
  console.log("📄 Swagger UI disponible en: http://localhost:3000/api-docs");
};

module.exports = swaggerDocs;
