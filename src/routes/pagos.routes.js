import express from "express";
import {
  getPagos,
  getPagoById,
  createPago,
  updatePago,
  deletePago
} from "../controllers/pagos.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pagos
 *   description: Endpoints para la gestión de pagos
 */

/**
 * @swagger
 * /api/pagos:
 *   get:
 *     summary: Obtener todos los pagos
 *     tags: [Pagos]
 *     responses:
 *       200:
 *         description: Lista de pagos
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getPagos);

/**
 * @swagger
 * /api/pagos/{id}:
 *   get:
 *     summary: Obtener un pago por ID
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del pago
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del pago
 *       404:
 *         description: Pago no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getPagoById);

/**
 * @swagger
 * /api/pagos:
 *   post:
 *     summary: Crear un nuevo pago
 *     tags: [Pagos]
 *     requestBody:
 *       required: true
 *       description: Datos del nuevo pago
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
 *     responses:
 *       201:
 *         description: Pago creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createPago);

/**
 * @swagger
 * /api/pagos/{id}:
 *   put:
 *     summary: Actualizar un pago
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del pago a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar del pago
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               metodoPago:
 *                 type: string
 *               monto:
 *                 type: number
 *               estado:
 *                 type: string
 *               fechaPago:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pago actualizado correctamente
 *       404:
 *         description: Pago no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updatePago);

/**
 * @swagger
 * /api/pagos/{id}:
 *   delete:
 *     summary: Eliminar un pago
 *     tags: [Pagos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del pago a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pago eliminado correctamente
 *       404:
 *         description: Pago no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deletePago);

export default router;
