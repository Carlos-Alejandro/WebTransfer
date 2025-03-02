import express from "express";
import {
  getPermisos,
  getPermisoById,
  createPermiso,
  updatePermiso,
  deletePermiso
} from "../controllers/permisos.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Permisos
 *   description: Endpoints para la gestión de permisos
 */

/**
 * @swagger
 * /api/permisos:
 *   get:
 *     summary: Obtener todos los permisos
 *     tags: [Permisos]
 *     responses:
 *       200:
 *         description: Lista de permisos
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getPermisos);

/**
 * @swagger
 * /api/permisos/{id}:
 *   get:
 *     summary: Obtener un permiso por ID
 *     tags: [Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del permiso
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del permiso
 *       404:
 *         description: Permiso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getPermisoById);

/**
 * @swagger
 * /api/permisos:
 *   post:
 *     summary: Crear un nuevo permiso
 *     tags: [Permisos]
 *     requestBody:
 *       required: true
 *       description: Datos del nuevo permiso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Permiso creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createPermiso);

/**
 * @swagger
 * /api/permisos/{id}:
 *   put:
 *     summary: Actualizar un permiso
 *     tags: [Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del permiso a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar del permiso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Permiso actualizado correctamente
 *       404:
 *         description: Permiso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updatePermiso);

/**
 * @swagger
 * /api/permisos/{id}:
 *   delete:
 *     summary: Eliminar un permiso
 *     tags: [Permisos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del permiso a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Permiso eliminado correctamente
 *       404:
 *         description: Permiso no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deletePermiso);

export default router;
