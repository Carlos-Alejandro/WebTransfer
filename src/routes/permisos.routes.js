// src/routes/permisos.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getPermisos,
  createPermiso,
  updatePermiso,
  deletePermiso,
} from '../controllers/permisos.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Permisos
 *   description: Endpoints para administrar permisos
 */

/**
 * @swagger
 * /api/permisos:
 *   get:
 *     summary: Obtiene la lista de permisos
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Permisos obtenidos correctamente.
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
 *                   example: Permisos obtenidos correctamente.
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/', verifyToken, getPermisos);

/**
 * @swagger
 * /api/permisos:
 *   post:
 *     summary: Crea un nuevo permiso
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
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
 *         description: Permiso creado correctamente.
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
 *                   example: Permiso creado correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createPermiso);

/**
 * @swagger
 * /api/permisos/{id}:
 *   put:
 *     summary: Actualiza un permiso existente
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del permiso a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
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
 *         description: Permiso actualizado correctamente.
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
 *                   example: Permiso actualizado correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updatePermiso);

/**
 * @swagger
 * /api/permisos/{id}:
 *   delete:
 *     summary: Elimina un permiso existente
 *     tags: [Permisos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del permiso a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Permiso eliminado correctamente.
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
 *                   example: Permiso eliminado correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deletePermiso);

export default router;
