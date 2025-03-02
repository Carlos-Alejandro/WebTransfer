import express from "express";
import {
  getTarifas,
  getTarifaById,
  createTarifa,
  updateTarifa,
  deleteTarifa
} from "../controllers/tarifas.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tarifas
 *   description: Endpoints para la gestión de tarifas
 */

/**
 * @swagger
 * /api/tarifas:
 *   get:
 *     summary: Obtener todas las tarifas
 *     tags: [Tarifas]
 *     responses:
 *       200:
 *         description: Lista de tarifas
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getTarifas);

/**
 * @swagger
 * /api/tarifas/{id}:
 *   get:
 *     summary: Obtener una tarifa por ID
 *     tags: [Tarifas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarifa
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la tarifa
 *       404:
 *         description: Tarifa no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getTarifaById);

/**
 * @swagger
 * /api/tarifas:
 *   post:
 *     summary: Crear una nueva tarifa
 *     tags: [Tarifas]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva tarifa
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               proveedorId:
 *                 type: string
 *               zonaId:
 *                 type: string
 *               precioPorPersona:
 *                 type: number
 *               precioPrivado:
 *                 type: number
 *               temporadaId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarifa creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createTarifa);

/**
 * @swagger
 * /api/tarifas/{id}:
 *   put:
 *     summary: Actualizar una tarifa
 *     tags: [Tarifas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarifa a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la tarifa
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               proveedorId:
 *                 type: string
 *               zonaId:
 *                 type: string
 *               precioPorPersona:
 *                 type: number
 *               precioPrivado:
 *                 type: number
 *               temporadaId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarifa actualizada correctamente
 *       404:
 *         description: Tarifa no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateTarifa);

/**
 * @swagger
 * /api/tarifas/{id}:
 *   delete:
 *     summary: Eliminar una tarifa
 *     tags: [Tarifas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la tarifa a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarifa eliminada correctamente
 *       404:
 *         description: Tarifa no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteTarifa);

export default router;