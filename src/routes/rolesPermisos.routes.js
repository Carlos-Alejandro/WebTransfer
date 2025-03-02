import express from "express";
import {
  getRolesPermisos,
  getRolPermisoById,
  createRolPermiso,
  deleteRolPermiso
} from "../controllers/rolesPermisos.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: RolesPermisos
 *   description: Endpoints para la gestión de permisos de roles
 */

/**
 * @swagger
 * /api/roles-permisos:
 *   get:
 *     summary: Obtener todos los permisos de roles
 *     tags: [RolesPermisos]
 *     responses:
 *       200:
 *         description: Lista de permisos de roles
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getRolesPermisos);

/**
 * @swagger
 * /api/roles-permisos/{rolId}/{permisoId}:
 *   get:
 *     summary: Obtener un permiso de rol por ID
 *     tags: [RolesPermisos]
 *     parameters:
 *       - in: path
 *         name: rolId
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: permisoId
 *         description: ID del permiso
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del permiso de rol
 *       404:
 *         description: Permiso de rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:rolId/:permisoId", getRolPermisoById);

/**
 * @swagger
 * /api/roles-permisos:
 *   post:
 *     summary: Asignar un permiso a un rol
 *     tags: [RolesPermisos]
 *     requestBody:
 *       required: true
 *       description: Datos del permiso a asignar al rol
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rolId:
 *                 type: string
 *               permisoId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Permiso asignado al rol correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createRolPermiso);

/**
 * @swagger
 * /api/roles-permisos/{rolId}/{permisoId}:
 *   delete:
 *     summary: Eliminar un permiso de un rol
 *     tags: [RolesPermisos]
 *     parameters:
 *       - in: path
 *         name: rolId
 *         description: ID del rol
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: permisoId
 *         description: ID del permiso
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Permiso de rol eliminado correctamente
 *       404:
 *         description: Permiso de rol no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:rolId/:permisoId", deleteRolPermiso);

export default router;
