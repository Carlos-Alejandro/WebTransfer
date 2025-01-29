import express from "express";
import cors from "cors";
import rolesRoutes from "./routes/roles.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

// Configurar CORS correctamente
const corsOptions = {
  origin: "*", // Puedes cambiarlo por el dominio de tu frontend
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/roles", rolesRoutes);
app.use("/api/usuarios", usuariosRoutes);


app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API de Reservas",
        version: "1.0.0",
        description: "Documentación de la API con Swagger",
      },
      servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./src/routes/*.js"], // Busca documentación en las rutas
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
  console.log("Swagger UI disponible en http://localhost:3000/api-docs");
