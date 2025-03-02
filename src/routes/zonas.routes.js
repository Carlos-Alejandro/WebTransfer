import express from "express";
import {
  getZonas,
  getZonaById,
  createZona,
  updateZona,
  deleteZona
} from "../controllers/zonas.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Zonas
 *   description: Endpoints para la gestión de zonas
 */

/**
 * @swagger
 * /api/zonas:
 *   get:
 *     summary: Obtener todas las zonas
 *     tags: [Zonas]
 *     responses:
 *       200:
 *         description: Lista de zonas
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getZonas);

/**
 * @swagger
 * /api/zonas/{id}:
 *   get:
 *     summary: Obtener una zona por ID
 *     tags: [Zonas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la zona
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la zona
 *       404:
 *         description: Zona no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getZonaById);

/**
 * @swagger
 * /api/zonas:
 *   post:
 *     summary: Crear una nueva zona
 *     tags: [Zonas]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva zona
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estado:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Zona creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createZona);

/**
 * @swagger
 * /api/zonas/{id}:
 *   put:
 *     summary: Actualizar una zona
 *     tags: [Zonas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la zona a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la zona
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               estado:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Zona actualizada correctamente
 *       404:
 *         description: Zona no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateZona);

/**
 * @swagger
 * /api/zonas/{id}:
 *   delete:
 *     summary: Eliminar una zona
 *     tags: [Zonas]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la zona a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Zona eliminada correctamente
 *       404:
 *         description: Zona no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteZona);

export default router;
