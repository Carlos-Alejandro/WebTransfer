// src/routes/ubicaciones.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getUbicaciones,
  createUbicacion,
  updateUbicacion,
  deleteUbicacion,
} from '../controllers/ubicaciones.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Endpoints para administrar ubicaciones
 */

/**
 * @swagger
 * /api/ubicaciones:
 *   get:
 *     summary: Obtiene la lista de ubicaciones
 *     tags: [Ubicaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Ubicaciones obtenidas correctamente.
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
 *                   example: Ubicaciones obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getUbicaciones);

/**
 * @swagger
 * /api/ubicaciones:
 *   post:
 *     summary: Crea una nueva ubicación
 *     tags: [Ubicaciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zonaId:
 *                 type: string
 *               tipoUbicacion:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               latitud:
 *                 type: number
 *               longitud:
 *                 type: number
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ubicación creada correctamente.
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
 *                   example: Ubicación creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createUbicacion);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   put:
 *     summary: Actualiza una ubicación existente
 *     tags: [Ubicaciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ubicación a actualizar
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
 *               zonaId:
 *                 type: string
 *               tipoUbicacion:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               latitud:
 *                 type: number
 *               longitud:
 *                 type: number
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ubicación actualizada correctamente.
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
 *                   example: Ubicación actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateUbicacion);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   delete:
 *     summary: Elimina una ubicación existente
 *     tags: [Ubicaciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ubicación a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ubicación eliminada correctamente.
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
 *                   example: Ubicación eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteUbicacion);

export default router;
