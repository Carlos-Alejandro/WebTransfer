// src/routes/rutaCupon.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getRutaCupon,
  createRutaCupon,
  deleteRutaCupon,
} from '../controllers/rutaCupon.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: RutaCupon
 *   description: Endpoints para administrar la asignación entre cupones y rutas
 */

/**
 * @swagger
 * /api/ruta-cupon:
 *   get:
 *     summary: Obtiene todas las asignaciones de cupones y rutas
 *     tags: [RutaCupon]
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
 *                   example: Asignaciones obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getRutaCupon);

/**
 * @swagger
 * /api/ruta-cupon:
 *   post:
 *     summary: Crea una nueva asignación entre cupón y ruta
 *     tags: [RutaCupon]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CuponId:
 *                 type: string
 *               RutaId:
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
 *                   example: Asignación creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createRutaCupon);

/**
 * @swagger
 * /api/ruta-cupon/{CuponId}/{RutaId}:
 *   delete:
 *     summary: Elimina una asignación existente entre cupón y ruta
 *     tags: [RutaCupon]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: CuponId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cupón
 *       - in: path
 *         name: RutaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la ruta
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
 *                   example: Asignación eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:CuponId/:RutaId', verifyToken, deleteRutaCupon);

export default router;
