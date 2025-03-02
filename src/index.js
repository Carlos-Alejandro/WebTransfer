import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import agenciasRoutes from "./routes/agencias.routes.js";
import rolesRoutes from "./routes/roles.routes.js";
import rolesPermisosRoutes from "./routes/rolesPermisos.routes.js";
import permisosRoutes from "./routes/permisos.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import opinionesRoutes from "./routes/opiniones.routes.js";
import tarifasRoutes from "./routes/tarifas.routes.js";
import reservasRoutes from "./routes/reservas.routes.js";
import ubicacionesRoutes from "./routes/ubicaciones.routes.js";
import zonasRoutes from "./routes/zonas.routes.js";
import temporadasRoutes from "./routes/temporadas.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import pagosRoutes from "./routes/pagos.routes.js";
import serviciosAdicionalesRoutes from "./routes/serviciosAdicionales.routes.js";
import reservasServiciosAdicionalesRoutes from "./routes/reservasServiciosAdicionales.routes.js";

// Variables de entorno y configuración de puerto
const PORT = process.env.PORT || 3000;

const app = express();

// Configurar CORS (puedes personalizarlo según tus necesidades)
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// Para poder parsear JSON en las peticiones
app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Agencias, Roles, RolesPermisos, Permisos, Usuarios, Opiniones, Tarifas, Reservas, Ubicaciones, Zonas, Temporadas, Proveedores, Pagos y Servicios Adicionales",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor Local",
      },
    ],
  },
  apis: [
    "./src/routes/agencias.routes.js",
    "./src/routes/roles.routes.js",
    "./src/routes/rolesPermisos.routes.js",
    "./src/routes/permisos.routes.js",
    "./src/routes/usuarios.routes.js",
    "./src/routes/opiniones.routes.js",
    "./src/routes/tarifas.routes.js",
    "./src/routes/reservas.routes.js",
    "./src/routes/ubicaciones.routes.js",
    "./src/routes/zonas.routes.js",
    "./src/routes/temporadas.routes.js",
    "./src/routes/proveedores.routes.js",
    "./src/routes/pagos.routes.js",
    "./src/routes/serviciosAdicionales.routes.js",
    "./src/routes/reservasServiciosAdicionales.routes.js"
  ],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Montar Swagger UI en /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
console.log("📄 Swagger UI disponible en http://localhost:3000/api-docs");

// Montar las rutas con prefijo /api
app.use("/api/agencias", agenciasRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/roles-permisos", rolesPermisosRoutes);
app.use("/api/permisos", permisosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/opiniones", opinionesRoutes);
app.use("/api/tarifas", tarifasRoutes);
app.use("/api/reservas", reservasRoutes);
app.use("/api/ubicaciones", ubicacionesRoutes);
app.use("/api/zonas", zonasRoutes);
app.use("/api/temporadas", temporadasRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/pagos", pagosRoutes);
app.use("/api/servicios-adicionales", serviciosAdicionalesRoutes);
app.use("/api/reservas-servicios", reservasServiciosAdicionalesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
