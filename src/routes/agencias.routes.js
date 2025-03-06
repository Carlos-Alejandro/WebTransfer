// src/routes/agencias.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { getAgencias, createAgencia, updateAgencia, deleteAgencia } from '../controllers/agencias.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Agencias
 *   description: Endpoints para administrar agencias
 */

/**
 * @swagger
 * /api/agencias:
 *   get:
 *     summary: Obtiene la lista de agencias
 *     tags: [Agencias]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Agencias obtenidas correctamente.
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
 *                   example: Agencias obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getAgencias);

/**
 * @swagger
 * /api/agencias:
 *   post:
 *     summary: Crea una nueva agencia
 *     tags: [Agencias]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreComercial:
 *                 type: string
 *               contacto:
 *                 type: string
 *               correo:
 *                 type: string
 *               movil:
 *                 type: string
 *               direccion:
 *                 type: string
 *               descuento:
 *                 type: number
 *               urlLogo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Agencia creada correctamente.
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
 *                   example: Agencia creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createAgencia);

/**
 * @swagger
 * /api/agencias/{id}:
 *   put:
 *     summary: Actualiza una agencia existente
 *     tags: [Agencias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la agencia a actualizar
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
 *               nombreComercial:
 *                 type: string
 *               contacto:
 *                 type: string
 *               correo:
 *                 type: string
 *               movil:
 *                 type: string
 *               direccion:
 *                 type: string
 *               descuento:
 *                 type: number
 *               urlLogo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agencia actualizada correctamente.
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
 *                   example: Agencia actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateAgencia);

/**
 * @swagger
 * /api/agencias/{id}:
 *   delete:
 *     summary: Elimina una agencia existente
 *     tags: [Agencias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la agencia a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agencia eliminada correctamente.
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
 *                   example: Agencia eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteAgencia);

export default router;
