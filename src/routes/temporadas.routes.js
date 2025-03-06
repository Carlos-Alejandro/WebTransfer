// src/routes/temporadas.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getTemporadas,
  createTemporada,
  updateTemporada,
  deleteTemporada,
} from '../controllers/temporadas.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Temporadas
 *   description: Endpoints para administrar temporadas
 */

/**
 * @swagger
 * /api/temporadas:
 *   get:
 *     summary: Obtiene la lista de temporadas
 *     tags: [Temporadas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Temporadas obtenidas correctamente.
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
 *                   example: Temporadas obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getTemporadas);

/**
 * @swagger
 * /api/temporadas:
 *   post:
 *     summary: Crea una nueva temporada
 *     tags: [Temporadas]
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
 *               FechaAplicacion:
 *                 type: string
 *                 format: date-time
 *               fechaInicio:
 *                 type: string
 *                 format: date-time
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *               estado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Temporada creada correctamente.
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
 *                   example: Temporada creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createTemporada);

/**
 * @swagger
 * /api/temporadas/{id}:
 *   put:
 *     summary: Actualiza una temporada existente
 *     tags: [Temporadas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la temporada a actualizar
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
 *               FechaAplicacion:
 *                 type: string
 *                 format: date-time
 *               fechaInicio:
 *                 type: string
 *                 format: date-time
 *               fechaFin:
 *                 type: string
 *                 format: date-time
 *               estado:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Temporada actualizada correctamente.
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
 *                   example: Temporada actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateTemporada);

/**
 * @swagger
 * /api/temporadas/{id}:
 *   delete:
 *     summary: Elimina una temporada existente
 *     tags: [Temporadas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la temporada a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Temporada eliminada correctamente.
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
 *                   example: Temporada eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteTemporada);

export default router;
