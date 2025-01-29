# 📌 API de Reservas con Express, PostgreSQL y Prisma

Esta es una API REST desarrollada con **Express.js**, **PostgreSQL** y **Prisma ORM**, que permite gestionar reservas de viajes, usuarios y roles con autenticación JWT.

---

## 🚀 Tecnologías Utilizadas

- **Node.js** con **Express.js** 🚀
- **PostgreSQL** como base de datos 🐘
- **Prisma ORM** para la gestión de datos 🔥
- **JWT** para autenticación segura 🔑
- **Swagger** para documentación interactiva 📜
- **Bcrypt.js** para encriptación de contraseñas 🔐

---

## 📌 Características

✅ CRUD de **Usuarios** con autenticación por JWT.  
✅ CRUD de **Roles** para gestionar permisos.  
✅ CRUD de **Reservas** para gestionar servicios.  
✅ Seguridad con **JWT** y **CORS**.  
✅ **Swagger** para documentación interactiva.  

---

## 📁 Estructura del Proyecto

```
📂 tu-proyecto
├── 📁 src
│   ├── 📁 controllers
│   ├── 📁 middlewares
│   ├── 📁 models
│   ├── 📁 routes
│   ├── 📁 services
│   ├── 📄 app.js
│   ├── 📄 server.js
├── 📄 .env
├── 📄 .gitignore
├── 📄 package.json
├── 📄 README.md
```

---

## 📌 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Monocker/API-Postgres
cd TU_REPO
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar el archivo .env
Crea un archivo `.env` con la conexión a la base de datos y claves JWT:
```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_datos?schema=public"
JWT_SECRET="tu_secreto_super_seguro"
JWT_EXPIRES_IN="1h"
```

### 4️⃣ Ejecutar migraciones en PostgreSQL
```bash
npx prisma migrate dev --name init
```

### 5️⃣ Iniciar el servidor
```bash
npm run dev
```

📌 El servidor correrá en [http://localhost:3000](http://localhost:3000) 🚀

---

## 📌 Endpoints Principales

### 📌 Usuarios

- `POST /api/usuarios` → Crear usuario
- `POST /api/usuarios/login` → Iniciar sesión
- `GET /api/usuarios` → Obtener todos los usuarios (🔒 requiere JWT)
- `GET /api/usuarios/{id}` → Obtener un usuario por ID (🔒 requiere JWT)
- `PUT /api/usuarios/{id}` → Actualizar usuario (🔒 requiere JWT)
- `DELETE /api/usuarios/{id}` → Eliminar usuario (🔒 requiere JWT)

### 📌 Roles

- `POST /api/roles` → Crear rol
- `GET /api/roles` → Obtener todos los roles
- `GET /api/roles/{id}` → Obtener un rol por ID
- `PUT /api/roles/{id}` → Actualizar un rol
- `DELETE /api/roles/{id}` → Eliminar un rol

---

## 📷 Esquema de la Base de Datos

Aquí se muestra el esquema de la base de datos utilizada en esta API:


![alt text](image.png)

---

## 📌 Documentación con Swagger

Para ver la documentación interactiva de la API, visita:

👉 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Aquí puedes probar los endpoints directamente desde el navegador.

---

