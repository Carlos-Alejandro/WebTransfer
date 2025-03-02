import express from "express";
import {
  getUbicaciones,
  getUbicacionById,
  createUbicacion,
  updateUbicacion,
  deleteUbicacion
} from "../controllers/ubicaciones.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Endpoints para la gestión de ubicaciones
 */

/**
 * @swagger
 * /api/ubicaciones:
 *   get:
 *     summary: Obtener todas las ubicaciones
 *     tags: [Ubicaciones]
 *     responses:
 *       200:
 *         description: Lista de ubicaciones
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getUbicaciones);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   get:
 *     summary: Obtener una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ubicación
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la ubicación
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getUbicacionById);

/**
 * @swagger
 * /api/ubicaciones:
 *   post:
 *     summary: Crear una nueva ubicación
 *     tags: [Ubicaciones]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva ubicación
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               latitudA:
 *                 type: number
 *               longitudA:
 *                 type: number
 *               latitudB:
 *                 type: number
 *               longitudB:
 *                 type: number
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ubicación creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createUbicacion);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   put:
 *     summary: Actualizar una ubicación
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ubicación a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la ubicación
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               latitudA:
 *                 type: number
 *               longitudA:
 *                 type: number
 *               latitudB:
 *                 type: number
 *               longitudB:
 *                 type: number
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ubicación actualizada correctamente
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateUbicacion);

/**
 * @swagger
 * /api/ubicaciones/{id}:
 *   delete:
 *     summary: Eliminar una ubicación
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la ubicación a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ubicación eliminada correctamente
 *       404:
 *         description: Ubicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteUbicacion);

export default router;
