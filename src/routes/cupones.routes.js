// src/routes/cupones.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getCupones,
  createCupon,
  updateCupon,
  deleteCupon,
} from '../controllers/cupones.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cupones
 *   description: Endpoints para administrar cupones
 */

/**
 * @swagger
 * /api/cupones:
 *   get:
 *     summary: Obtiene la lista de cupones
 *     tags: [Cupones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cupones obtenidos correctamente.
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
 *                   example: Cupones obtenidos correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getCupones);

/**
 * @swagger
 * /api/cupones:
 *   post:
 *     summary: Crea un nuevo cupón
 *     tags: [Cupones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Codigo:
 *                 type: string
 *               nombre:
 *                 type: string
 *               FechaAplicacion:
 *                 type: string
 *                 format: date-time
 *               FechaInicio:
 *                 type: string
 *                 format: date-time
 *               FechaFin:
 *                 type: string
 *                 format: date-time
 *               Banner:
 *                 type: string
 *               TipoDescuento:
 *                 type: string
 *               Valor:
 *                 type: number
 *               MinCompra:
 *                 type: number
 *               Limite:
 *                 type: integer
 *               Estado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Cupón creado correctamente.
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
 *                   example: Cupón creado correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createCupon);

/**
 * @swagger
 * /api/cupones/{id}:
 *   put:
 *     summary: Actualiza un cupón existente
 *     tags: [Cupones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del cupón a actualizar
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
 *               Codigo:
 *                 type: string
 *               nombre:
 *                 type: string
 *               FechaAplicacion:
 *                 type: string
 *                 format: date-time
 *               FechaInicio:
 *                 type: string
 *                 format: date-time
 *               FechaFin:
 *                 type: string
 *                 format: date-time
 *               Banner:
 *                 type: string
 *               TipoDescuento:
 *                 type: string
 *               Valor:
 *                 type: number
 *               MinCompra:
 *                 type: number
 *               Limite:
 *                 type: integer
 *               Estado:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Cupón actualizado correctamente.
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
 *                   example: Cupón actualizado correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateCupon);

/**
 * @swagger
 * /api/cupones/{id}:
 *   delete:
 *     summary: Elimina un cupón existente
 *     tags: [Cupones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del cupón a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cupón eliminado correctamente.
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
 *                   example: Cupón eliminado correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteCupon);

export default router;
