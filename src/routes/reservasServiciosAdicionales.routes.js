import express from "express";
import {
  getReservasServiciosAdicionales,
  getReservaServicioAdicionalById,
  createReservaServicioAdicional,
  updateReservaServicioAdicional,
  deleteReservaServicioAdicional
} from "../controllers/reservasServiciosAdicionales.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ReservasServiciosAdicionales
 *   description: Endpoints para la gestión de reservas de servicios adicionales
 */

/**
 * @swagger
 * /api/reservas-servicios:
 *   get:
 *     summary: Obtener todas las reservas de servicios adicionales
 *     tags: [ReservasServiciosAdicionales]
 *     responses:
 *       200:
 *         description: Lista de reservas de servicios adicionales
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getReservasServiciosAdicionales);

/**
 * @swagger
 * /api/reservas-servicios/{reservaId}/{servicioAdicionalId}:
 *   get:
 *     summary: Obtener una reserva de servicio adicional por ID compuesto
 *     tags: [ReservasServiciosAdicionales]
 *     parameters:
 *       - in: path
 *         name: reservaId
 *         description: ID de la reserva
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: servicioAdicionalId
 *         description: ID del servicio adicional
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la reserva de servicio adicional
 *       404:
 *         description: Reserva de servicio adicional no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:reservaId/:servicioAdicionalId", getReservaServicioAdicionalById);

/**
 * @swagger
 * /api/reservas-servicios:
 *   post:
 *     summary: Crear una nueva reserva de servicio adicional
 *     tags: [ReservasServiciosAdicionales]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva reserva de servicio adicional
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
 *                 type: number
 *     responses:
 *       201:
 *         description: Reserva de servicio adicional creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createReservaServicioAdicional);

/**
 * @swagger
 * /api/reservas-servicios/{reservaId}/{servicioAdicionalId}:
 *   put:
 *     summary: Actualizar una reserva de servicio adicional
 *     tags: [ReservasServiciosAdicionales]
 *     parameters:
 *       - in: path
 *         name: reservaId
 *         description: ID de la reserva
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: servicioAdicionalId
 *         description: ID del servicio adicional
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la reserva de servicio adicional
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Reserva de servicio adicional actualizada correctamente
 *       404:
 *         description: Reserva de servicio adicional no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:reservaId/:servicioAdicionalId", updateReservaServicioAdicional);

/**
 * @swagger
 * /api/reservas-servicios/{reservaId}/{servicioAdicionalId}:
 *   delete:
 *     summary: Eliminar una reserva de servicio adicional
 *     tags: [ReservasServiciosAdicionales]
 *     parameters:
 *       - in: path
 *         name: reservaId
 *         description: ID de la reserva
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: servicioAdicionalId
 *         description: ID del servicio adicional
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva de servicio adicional eliminada correctamente
 *       404:
 *         description: Reserva de servicio adicional no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:reservaId/:servicioAdicionalId", deleteReservaServicioAdicional);

export default router;
