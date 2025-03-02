import express from "express";
import {
  getOpiniones,
  getOpinionById,
  createOpinion,
  updateOpinion,
  deleteOpinion
} from "../controllers/opiniones.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Opiniones
 *   description: Endpoints para la gestión de opiniones
 */

/**
 * @swagger
 * /api/opiniones:
 *   get:
 *     summary: Obtener todas las opiniones
 *     tags: [Opiniones]
 *     responses:
 *       200:
 *         description: Lista de opiniones
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getOpiniones);

/**
 * @swagger
 * /api/opiniones/{id}:
 *   get:
 *     summary: Obtener una opinión por ID
 *     tags: [Opiniones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la opinión
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la opinión
 *       404:
 *         description: Opinión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getOpinionById);

/**
 * @swagger
 * /api/opiniones:
 *   post:
 *     summary: Crear una nueva opinión
 *     tags: [Opiniones]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva opinión
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reservaId:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *               puntuacion:
 *                 type: integer
 *               comentario:
 *                 type: string
 *     responses:
 *       201:
 *         description: Opinión creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createOpinion);

/**
 * @swagger
 * /api/opiniones/{id}:
 *   put:
 *     summary: Actualizar una opinión
 *     tags: [Opiniones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la opinión a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la opinión
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               puntuacion:
 *                 type: integer
 *               comentario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Opinión actualizada correctamente
 *       404:
 *         description: Opinión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateOpinion);

/**
 * @swagger
 * /api/opiniones/{id}:
 *   delete:
 *     summary: Eliminar una opinión
 *     tags: [Opiniones]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la opinión a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Opinión eliminada correctamente
 *       404:
 *         description: Opinión no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteOpinion);

export default router;
