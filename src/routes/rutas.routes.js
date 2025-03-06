// src/routes/rutas.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getRutas,
  createRuta,
  updateRuta,
  deleteRuta,
} from '../controllers/rutas.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Rutas
 *   description: Endpoints para administrar rutas
 */

/**
 * @swagger
 * /api/rutas:
 *   get:
 *     summary: Obtiene la lista de rutas
 *     tags: [Rutas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Rutas obtenidas correctamente.
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
 *                   example: Rutas obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getRutas);

/**
 * @swagger
 * /api/rutas:
 *   post:
 *     summary: Crea una nueva ruta
 *     tags: [Rutas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Ubicacion1:
 *                 type: string
 *               Ubicacion2:
 *                 type: string
 *               TiempoTraslado:
 *                 type: number
 *               MapUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ruta creada correctamente.
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
 *                   example: Ruta creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createRuta);

/**
 * @swagger
 * /api/rutas/{id}:
 *   put:
 *     summary: Actualiza una ruta existente
 *     tags: [Rutas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ruta a actualizar
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
 *               Ubicacion1:
 *                 type: string
 *               Ubicacion2:
 *                 type: string
 *               TiempoTraslado:
 *                 type: number
 *               MapUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ruta actualizada correctamente.
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
 *                   example: Ruta actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateRuta);

/**
 * @swagger
 * /api/rutas/{id}:
 *   delete:
 *     summary: Elimina una ruta existente
 *     tags: [Rutas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ruta a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ruta eliminada correctamente.
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
 *                   example: Ruta eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteRuta);

export default router;
