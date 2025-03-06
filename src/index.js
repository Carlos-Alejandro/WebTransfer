// src/index.js
import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import rolesRoutes from './routes/roles.routes.js';
import permisosRoutes from './routes/permisos.routes.js';
import rolesPermisosRoutes from './routes/rolesPermisos.routes.js';
import opinionesRoutes from './routes/opiniones.routes.js';
import agenciasRoutes from './routes/agencias.routes.js';
import proveedoresRoutes from './routes/proveedores.routes.js';
import tarifasRoutes from './routes/tarifas.routes.js';
import reservasRoutes from './routes/reservas.routes.js';
import reservasServiciosAdicionalesRoutes from './routes/reservasServiciosAdicionales.routes.js';
import serviciosAdicionalesRoutes from './routes/serviciosAdicionales.routes.js';
import pagosRoutes from './routes/pagos.routes.js';
import zonasRoutes from './routes/zonas.routes.js';
import ubicacionesRoutes from './routes/ubicaciones.routes.js';
import rutasRoutes from './routes/rutas.routes.js';
import temporadasRoutes from './routes/temporadas.routes.js';
import cuponesRoutes from './routes/cupones.routes.js';
import rutaCuponRoutes from './routes/rutaCupon.routes.js';
import swaggerDocs from './swagger.js'; // Ajusta la ruta según la ubicación de swagger.js

const app = express();

app.use(express.json());

// Rutas públicas (o protegidas, según tu necesidad)
app.use('/api/roles', rolesRoutes);
app.use('/api/permisos', permisosRoutes);
app.use('/api/roles-permisos', rolesPermisosRoutes);
app.use('/api/agencias', agenciasRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/tarifas', tarifasRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/reservas-servicios-adicionales', reservasServiciosAdicionalesRoutes);
app.use('/api/servicios-adicionales', serviciosAdicionalesRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/zonas', zonasRoutes);
app.use('/api/ubicaciones', ubicacionesRoutes);
app.use('/api/rutas', rutasRoutes);
app.use('/api/temporadas', temporadasRoutes);
app.use('/api/cupones', cuponesRoutes);
app.use('/api/ruta-cupon', rutaCuponRoutes);

// Rutas protegidas para Usuarios, Opiniones, etc. (requieren token)
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/opiniones', opinionesRoutes);

// Inicializa Swagger
swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
