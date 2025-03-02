import express from "express";
import {
  getServiciosAdicionales,
  getServicioAdicionalById,
  createServicioAdicional,
  updateServicioAdicional,
  deleteServicioAdicional
} from "../controllers/serviciosAdicionales.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ServiciosAdicionales
 *   description: Endpoints para la gestión de servicios adicionales
 */

/**
 * @swagger
 * /api/servicios-adicionales:
 *   get:
 *     summary: Obtener todos los servicios adicionales
 *     tags: [ServiciosAdicionales]
 *     responses:
 *       200:
 *         description: Lista de servicios adicionales
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getServiciosAdicionales);

/**
 * @swagger
 * /api/servicios-adicionales/{id}:
 *   get:
 *     summary: Obtener un servicio adicional por ID
 *     tags: [ServiciosAdicionales]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del servicio adicional
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del servicio adicional
 *       404:
 *         description: Servicio adicional no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getServicioAdicionalById);

/**
 * @swagger
 * /api/servicios-adicionales:
 *   post:
 *     summary: Crear un nuevo servicio adicional
 *     tags: [ServiciosAdicionales]
 *     requestBody:
 *       required: true
 *       description: Datos del nuevo servicio adicional
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
 *         description: Servicio adicional creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createServicioAdicional);

/**
 * @swagger
 * /api/servicios-adicionales/{id}:
 *   put:
 *     summary: Actualizar un servicio adicional
 *     tags: [ServiciosAdicionales]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del servicio adicional a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar del servicio adicional
 *       content:\n         application/json:\n           schema:\n             type: object\n             properties:\n               nombre:\n                 type: string\n               precio:\n                 type: number\n     responses:\n       200:\n         description: Servicio adicional actualizado correctamente\n       404:\n         description: Servicio adicional no encontrado\n       500:\n         description: Error interno del servidor
 */
router.put("/:id", updateServicioAdicional);

/**
 * @swagger
 * /api/servicios-adicionales/{id}:
 *   delete:
 *     summary: Eliminar un servicio adicional
 *     tags: [ServiciosAdicionales]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del servicio adicional a eliminar
 *         required: true
 *         schema:\n           type: string
 *     responses:\n       200:\n         description: Servicio adicional eliminado correctamente\n       404:\n         description: Servicio adicional no encontrado\n       500:\n         description: Error interno del servidor
 */
router.delete("/:id", deleteServicioAdicional);

export default router;
