// src/routes/reservas.routes.js
import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva,
} from '../controllers/reservas.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Endpoints para administrar reservas
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtiene la lista de reservas
 *     tags: [Reservas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Reservas obtenidas correctamente.
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
 *                   example: Reservas obtenidas correctamente.
 *                 data:
 *                   type: array
 */
router.get('/', verifyToken, getReservas);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags: [Reservas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               folio:
 *                 type: string
 *               agenciaId:
 *                 type: string
 *               tarifaId:
 *                 type: string
 *               OrigenId:
 *                 type: string
 *               DestinoId:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *               numVueloLlegada:
 *                 type: string
 *               aerolineaLlegada:
 *                 type: string
 *               fechaLlegada:
 *                 type: string
 *                 format: date-time
 *               horaLlegada:
 *                 type: string
 *                 format: date-time
 *               numVueloSalida:
 *                 type: string
 *               aerolineaSalida:
 *                 type: string
 *               fechaSalida:
 *                 type: string
 *                 format: date-time
 *               horaSalida:
 *                 type: string
 *                 format: date-time
 *               correoCliente:
 *                 type: string
 *               telefonoCliente:
 *                 type: string
 *               hotelCliente:
 *                 type: string
 *               numPasajeros:
 *                 type: integer
 *               subTotal:
 *                 type: number
 *               perIVA:
 *                 type: number
 *               IVA:
 *                 type: number
 *               Total:
 *                 type: number
 *               tipoServicio:
 *                 type: string
 *               CuponId:
 *                 type: string
 *               estado:
 *                 type: string
 *               motivoCancelacion:
 *                 type: string
 *               fechaCancelacion:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Reserva creada correctamente.
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
 *                   example: Reserva creada correctamente.
 *                 data:
 *                   type: object
 */
router.post('/', verifyToken, createReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualiza una reserva existente
 *     tags: [Reservas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la reserva a actualizar
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
 *               folio:
 *                 type: string
 *               agenciaId:
 *                 type: string
 *               tarifaId:
 *                 type: string
 *               OrigenId:
 *                 type: string
 *               DestinoId:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *               numVueloLlegada:
 *                 type: string
 *               aerolineaLlegada:
 *                 type: string
 *               fechaLlegada:
 *                 type: string
 *                 format: date-time
 *               horaLlegada:
 *                 type: string
 *                 format: date-time
 *               numVueloSalida:
 *                 type: string
 *               aerolineaSalida:
 *                 type: string
 *               fechaSalida:
 *                 type: string
 *                 format: date-time
 *               horaSalida:
 *                 type: string
 *                 format: date-time
 *               correoCliente:
 *                 type: string
 *               telefonoCliente:
 *                 type: string
 *               hotelCliente:
 *                 type: string
 *               numPasajeros:
 *                 type: integer
 *               subTotal:
 *                 type: number
 *               perIVA:
 *                 type: number
 *               IVA:
 *                 type: number
 *               Total:
 *                 type: number
 *               tipoServicio:
 *                 type: string
 *               CuponId:
 *                 type: string
 *               estado:
 *                 type: string
 *               motivoCancelacion:
 *                 type: string
 *               fechaCancelacion:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Reserva actualizada correctamente.
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
 *                   example: Reserva actualizada correctamente.
 *                 data:
 *                   type: object
 */
router.put('/:id', verifyToken, updateReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Elimina una reserva existente
 *     tags: [Reservas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la reserva a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva eliminada correctamente.
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
 *                   example: Reserva eliminada correctamente.
 *                 data:
 *                   type: object
 */
router.delete('/:id', verifyToken, deleteReserva);

export default router;
