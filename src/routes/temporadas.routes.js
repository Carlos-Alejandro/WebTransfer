import express from "express";
import {
  getTemporadas,
  getTemporadaById,
  createTemporada,
  updateTemporada,
  deleteTemporada
} from "../controllers/temporadas.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Temporadas
 *   description: Endpoints para la gestión de temporadas
 */

/**
 * @swagger
 * /api/temporadas:
 *   get:
 *     summary: Obtener todas las temporadas
 *     tags: [Temporadas]
 *     responses:
 *       200:
 *         description: Lista de temporadas
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getTemporadas);

/**
 * @swagger
 * /api/temporadas/{id}:
 *   get:
 *     summary: Obtener una temporada por ID
 *     tags: [Temporadas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la temporada
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la temporada
 *       404:
 *         description: Temporada no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getTemporadaById);

/**
 * @swagger
 * /api/temporadas:
 *   post:
 *     summary: Crear una nueva temporada
 *     tags: [Temporadas]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva temporada
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               fechaInicio:
 *                 type: string
 *               fechaFin:
 *                 type: string
 *               estado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Temporada creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createTemporada);

/**
 * @swagger
 * /api/temporadas/{id}:
 *   put:
 *     summary: Actualizar una temporada
 *     tags: [Temporadas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la temporada a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la temporada
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               fechaInicio:
 *                 type: string
 *               fechaFin:
 *                 type: string
 *               estado:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Temporada actualizada correctamente
 *       404:
 *         description: Temporada no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateTemporada);

/**
 * @swagger
 * /api/temporadas/{id}:
 *   delete:
 *     summary: Eliminar una temporada
 *     tags: [Temporadas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la temporada a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Temporada eliminada correctamente
 *       404:
 *         description: Temporada no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteTemporada);

export default router;
