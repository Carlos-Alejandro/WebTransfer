// src/routes/tarifas.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getTarifas,
  createTarifa,
  updateTarifa,
  deleteTarifa,
} from '../controllers/tarifas.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tarifas
 *   description: Endpoints para administrar tarifas
 */

/**
 * @swagger
 * /api/tarifas:
 *   get:
 *     summary: Obtiene la lista de tarifas
 *     tags: [Tarifas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tarifas obtenidas correctamente.
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
 *                   example: Tarifas obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getTarifas);

/**
 * @swagger
 * /api/tarifas:
 *   post:
 *     summary: Crea una nueva tarifa
 *     tags: [Tarifas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temporadaId:
 *                 type: string
 *               proveedorId:
 *                 type: string
 *               zona1Id:
 *                 type: string
 *               zona2Id:
 *                 type: string
 *               SencilloIda1a3:
 *                 type: number
 *               SencilloIda4a5:
 *                 type: number
 *               SencilloIda6a8:
 *                 type: number
 *               SencilloIda9a10:
 *                 type: number
 *               SencilloIda11a12:
 *                 type: number
 *               SencilloIda13a16:
 *                 type: number
 *               SencilloReg1a3:
 *                 type: number
 *               SencilloReg4a5:
 *                 type: number
 *               SencilloReg6a8:
 *                 type: number
 *               SencilloReg9a10:
 *                 type: number
 *               SencilloReg11a12:
 *                 type: number
 *               SencilloReg13a16:
 *                 type: number
 *               Redondo1a3:
 *                 type: number
 *               Redondo4a5:
 *                 type: number
 *               Redondo6a8:
 *                 type: number
 *               Redondo9a10:
 *                 type: number
 *               Redondo11a12:
 *                 type: number
 *               Redondo13a16:
 *                 type: number
 *     responses:
 *       201:
 *         description: Tarifa creada correctamente.
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
 *                   example: Tarifa creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createTarifa);

/**
 * @swagger
 * /api/tarifas/{id}:
 *   put:
 *     summary: Actualiza una tarifa existente
 *     tags: [Tarifas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarifa a actualizar
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
 *               temporadaId:
 *                 type: string
 *               proveedorId:
 *                 type: string
 *               zona1Id:
 *                 type: string
 *               zona2Id:
 *                 type: string
 *               SencilloIda1a3:
 *                 type: number
 *               SencilloIda4a5:
 *                 type: number
 *               SencilloIda6a8:
 *                 type: number
 *               SencilloIda9a10:
 *                 type: number
 *               SencilloIda11a12:
 *                 type: number
 *               SencilloIda13a16:
 *                 type: number
 *               SencilloReg1a3:
 *                 type: number
 *               SencilloReg4a5:
 *                 type: number
 *               SencilloReg6a8:
 *                 type: number
 *               SencilloReg9a10:
 *                 type: number
 *               SencilloReg11a12:
 *                 type: number
 *               SencilloReg13a16:
 *                 type: number
 *               Redondo1a3:
 *                 type: number
 *               Redondo4a5:
 *                 type: number
 *               Redondo6a8:
 *                 type: number
 *               Redondo9a10:
 *                 type: number
 *               Redondo11a12:
 *                 type: number
 *               Redondo13a16:
 *                 type: number
 *     responses:
 *       200:
 *         description: Tarifa actualizada correctamente.
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
 *                   example: Tarifa actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateTarifa);

/**
 * @swagger
 * /api/tarifas/{id}:
 *   delete:
 *     summary: Elimina una tarifa existente
 *     tags: [Tarifas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarifa a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarifa eliminada correctamente.
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
 *                   example: Tarifa eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteTarifa);

export default router;
