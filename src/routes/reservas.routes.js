import express from "express";
import {
  getReservas,
  getReservaById,
  createReserva,
  updateReserva,
  deleteReserva
} from "../controllers/reservas.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Endpoints para la gestión de reservas
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     tags: [Reservas]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la reserva
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la reserva
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getReservaById);

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     tags: [Reservas]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva reserva
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
 *               usuarioId:
 *                 type: string
 *               numeroVuelo:
 *                 type: string
 *               aerolinea:
 *                 type: string
 *               horarioLlegada:
 *                 type: string
 *               correoCliente:
 *                 type: string
 *               telefonoCliente:
 *                 type: string
 *               hotelCliente:
 *                 type: string
 *               fechaServicio:
 *                 type: string
 *               numeroPasajeros:
 *                 type: number
 *               precioTotal:
 *                 type: number
 *               tipoServicio:
 *                 type: string
 *               estado:
 *                 type: string
 *               motivoCancelacion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reserva creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la reserva a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la reserva
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
 *               usuarioId:
 *                 type: string
 *               numeroVuelo:
 *                 type: string
 *               aerolinea:
 *                 type: string
 *               horarioLlegada:
 *                 type: string
 *               correoCliente:
 *                 type: string
 *               telefonoCliente:
 *                 type: string
 *               hotelCliente:
 *                 type: string
 *               fechaServicio:
 *                 type: string
 *               numeroPasajeros:
 *                 type: number
 *               precioTotal:
 *                 type: number
 *               tipoServicio:
 *                 type: string
 *               estado:
 *                 type: string
 *               motivoCancelacion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva actualizada correctamente
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     tags: [Reservas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la reserva a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva eliminada correctamente
 *       404:
 *         description: Reserva no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteReserva);

export default router;
