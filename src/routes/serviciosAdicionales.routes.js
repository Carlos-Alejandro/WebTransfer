// src/routes/serviciosAdicionales.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getServiciosAdicionales,
  createServicioAdicional,
  updateServicioAdicional,
  deleteServicioAdicional,
} from '../controllers/serviciosAdicionales.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ServiciosAdicionales
 *   description: Endpoints para administrar servicios adicionales
 */

/**
 * @swagger
 * /api/servicios-adicionales:
 *   get:
 *     summary: Obtiene la lista de servicios adicionales
 *     tags: [ServiciosAdicionales]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Servicios adicionales obtenidos correctamente.
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
 *                   example: Servicios adicionales obtenidos correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getServiciosAdicionales);

/**
 * @swagger
 * /api/servicios-adicionales:
 *   post:
 *     summary: Crea un nuevo servicio adicional
 *     tags: [ServiciosAdicionales]
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
 *               precio:
 *                 type: number
 *     responses:
 *       201:
 *         description: Servicio adicional creado correctamente.
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
 *                   example: Servicio adicional creado correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createServicioAdicional);

/**
 * @swagger
 * /api/servicios-adicionales/{id}:
 *   put:
 *     summary: Actualiza un servicio adicional existente
 *     tags: [ServiciosAdicionales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del servicio adicional a actualizar
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
 *               precio:
 *                 type: number
 *     responses:
 *       200:
 *         description: Servicio adicional actualizado correctamente.
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
 *                   example: Servicio adicional actualizado correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateServicioAdicional);

/**
 * @swagger
 * /api/servicios-adicionales/{id}:
 *   delete:
 *     summary: Elimina un servicio adicional existente
 *     tags: [ServiciosAdicionales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del servicio adicional a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Servicio adicional eliminado correctamente.
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
 *                   example: Servicio adicional eliminado correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteServicioAdicional);

export default router;
