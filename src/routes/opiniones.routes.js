// src/routes/opiniones.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getOpiniones,
  createOpinion,
  updateOpinion,
  deleteOpinion,
} from '../controllers/opiniones.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Opiniones
 *   description: Endpoints para administrar opiniones
 */

/**
 * @swagger
 * /api/opiniones:
 *   get:
 *     summary: Obtiene la lista de opiniones
 *     tags: [Opiniones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Opiniones obtenidas correctamente.
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
 *                   example: Opiniones obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getOpiniones);

/**
 * @swagger
 * /api/opiniones:
 *   post:
 *     summary: Crea una nueva opinión
 *     tags: [Opiniones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reservaId:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *               puntuacion:
 *                 type: integer
 *               comentario:
 *                 type: string
 *     responses:
 *       201:
 *         description: Opinión creada correctamente.
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
 *                   example: Opinión creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createOpinion);

/**
 * @swagger
 * /api/opiniones/{id}:
 *   put:
 *     summary: Actualiza una opinión existente
 *     tags: [Opiniones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la opinión a actualizar
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
 *               reservaId:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *               puntuacion:
 *                 type: integer
 *               comentario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Opinión actualizada correctamente.
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
 *                   example: Opinión actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateOpinion);

/**
 * @swagger
 * /api/opiniones/{id}:
 *   delete:
 *     summary: Elimina una opinión existente
 *     tags: [Opiniones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la opinión a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Opinión eliminada correctamente.
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
 *                   example: Opinión eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteOpinion);

export default router;
