// src/routes/rolesPermisos.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getRolesPermisos,
  createRolePermiso,
  deleteRolePermiso,
} from '../controllers/rolesPermisos.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: RolesPermisos
 *   description: Endpoints para administrar la asignación de roles y permisos
 */

/**
 * @swagger
 * /api/roles-permisos:
 *   get:
 *     summary: Obtiene todas las asignaciones de roles y permisos
 *     tags: [RolesPermisos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Asignaciones obtenidas correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Roles permisos obtenidos correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getRolesPermisos);

/**
 * @swagger
 * /api/roles-permisos:
 *   post:
 *     summary: Crea una nueva asignación de rol y permiso
 *     tags: [RolesPermisos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
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
 *         description: Asignación creada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Asignación de rol permiso creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createRolePermiso);

/**
 * @swagger
 * /api/roles-permisos/{rolId}/{permisoId}:
 *   delete:
 *     summary: Elimina una asignación de rol y permiso existente
 *     tags: [RolesPermisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rolId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del rol
 *       - in: path
 *         name: permisoId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del permiso
 *     responses:
 *       200:
 *         description: Asignación eliminada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Asignación de rol permiso eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:rolId/:permisoId', verifyToken, deleteRolePermiso);

export default router;
