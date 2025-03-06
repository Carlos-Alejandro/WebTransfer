// src/routes/reservasServiciosAdicionales.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getReservasServiciosAdicionales,
  createReservasServiciosAdicionales,
  updateReservasServiciosAdicionales,
  deleteReservasServiciosAdicionales,
} from '../controllers/reservasServiciosAdicionales.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ReservasServiciosAdicionales
 *   description: Endpoints para administrar los servicios adicionales asignados a una reserva
 */

/**
 * @swagger
 * /api/reservas-servicios-adicionales:
 *   get:
 *     summary: Obtiene todas las asignaciones de servicios adicionales en reservas
 *     tags: [ReservasServiciosAdicionales]
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
 *                   example: Reservas de servicios adicionales obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getReservasServiciosAdicionales);

/**
 * @swagger
 * /api/reservas-servicios-adicionales:
 *   post:
 *     summary: Crea una nueva asignación de servicio adicional para una reserva
 *     tags: [ReservasServiciosAdicionales]
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
 *               servicioAdicionalId:
 *                 type: string
 *               cantidad:
 *                 type: integer
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
 *                   example: Asignación de servicio adicional creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createReservasServiciosAdicionales);

/**
 * @swagger
 * /api/reservas-servicios-adicionales/{reservaId}/{servicioAdicionalId}:
 *   put:
 *     summary: Actualiza la cantidad de un servicio adicional en una reserva
 *     tags: [ReservasServiciosAdicionales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reservaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *       - in: path
 *         name: servicioAdicionalId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del servicio adicional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Asignación actualizada correctamente.
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
 *                   example: Asignación de servicio adicional actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:reservaId/:servicioAdicionalId', verifyToken, updateReservasServiciosAdicionales);

/**
 * @swagger
 * /api/reservas-servicios-adicionales/{reservaId}/{servicioAdicionalId}:
 *   delete:
 *     summary: Elimina una asignación de servicio adicional de una reserva
 *     tags: [ReservasServiciosAdicionales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: reservaId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva
 *       - in: path
 *         name: servicioAdicionalId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del servicio adicional
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
 *                   example: Asignación de servicio adicional eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:reservaId/:servicioAdicionalId', verifyToken, deleteReservasServiciosAdicionales);

export default router;
