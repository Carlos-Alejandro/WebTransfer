// src/routes/zonas.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getZonas,
  createZona,
  updateZona,
  deleteZona,
} from '../controllers/zonas.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Zonas
 *   description: Endpoints para administrar zonas
 */

/**
 * @swagger
 * /api/zonas:
 *   get:
 *     summary: Obtiene la lista de zonas
 *     tags: [Zonas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Zonas obtenidas correctamente.
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
 *                   example: Zonas obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getZonas);

/**
 * @swagger
 * /api/zonas:
 *   post:
 *     summary: Crea una nueva zona
 *     tags: [Zonas]
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
 *               estado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Zona creada correctamente.
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
 *                   example: Zona creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createZona);

/**
 * @swagger
 * /api/zonas/{id}:
 *   put:
 *     summary: Actualiza una zona existente
 *     tags: [Zonas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la zona a actualizar
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
 *               estado:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Zona actualizada correctamente.
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
 *                   example: Zona actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateZona);

/**
 * @swagger
 * /api/zonas/{id}:
 *   delete:
 *     summary: Elimina una zona existente
 *     tags: [Zonas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la zona a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Zona eliminada correctamente.
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
 *                   example: Zona eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteZona);

export default router;
