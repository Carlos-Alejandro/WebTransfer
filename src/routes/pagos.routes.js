// src/routes/pagos.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getPagos,
  createPago,
  updatePago,
  deletePago,
} from '../controllers/pagos.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: Endpoints para administrar pagos
 */

/**
 * @swagger
 * /api/pagos:
 *   get:
 *     summary: Obtiene la lista de pagos
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Pagos obtenidos correctamente.
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
 *                   example: Pagos obtenidos correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getPagos);

/**
 * @swagger
 * /api/pagos:
 *   post:
 *     summary: Crea un nuevo pago
 *     tags: [Pagos]
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
 *               metodoPago:
 *                 type: string
 *               monto:
 *                 type: number
 *               estado:
 *                 type: string
 *               fechaPago:
 *                 type: string
 *                 format: date-time
 *               voucher:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pago creado correctamente.
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
 *                   example: Pago creado correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createPago);

/**
 * @swagger
 * /api/pagos/{id}:
 *   put:
 *     summary: Actualiza un pago existente
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del pago a actualizar
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
 *               metodoPago:
 *                 type: string
 *               monto:
 *                 type: number
 *               estado:
 *                 type: string
 *               fechaPago:
 *                 type: string
 *                 format: date-time
 *               voucher:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pago actualizado correctamente.
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
 *                   example: Pago actualizado correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updatePago);

/**
 * @swagger
 * /api/pagos/{id}:
 *   delete:
 *     summary: Elimina un pago existente
 *     tags: [Pagos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del pago a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pago eliminado correctamente.
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
 *                   example: Pago eliminado correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deletePago);

export default router;
