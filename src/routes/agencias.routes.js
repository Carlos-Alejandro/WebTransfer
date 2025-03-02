import express from "express";
import {
  getAgencias,
  getAgenciaById,
  createAgencia,
  updateAgencia,
  deleteAgencia
} from "../controllers/agencias.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Agencias
 *   description: Endpoints para la gestión de agencias
 */

/**
 * @swagger
 * /api/agencias:
 *   get:
 *     summary: Obtener todas las agencias
 *     tags: [Agencias]
 *     responses:
 *       200:
 *         description: Lista de agencias
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getAgencias);

/**
 * @swagger
 * /api/agencias/{id}:
 *   get:
 *     summary: Obtener una agencia por ID
 *     tags: [Agencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la agencia
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos de la agencia
 *       404:
 *         description: Agencia no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getAgenciaById);

/**
 * @swagger
 * /api/agencias:
 *   post:
 *     summary: Crear una nueva agencia
 *     tags: [Agencias]
 *     requestBody:
 *       required: true
 *       description: Datos de la nueva agencia
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreComercial:
 *                 type: string
 *               contacto:
 *                 type: string
 *               correo:
 *                 type: string
 *               movil:
 *                 type: string
 *               direccion:
 *                 type: string
 *               descuento:
 *                 type: number
 *               urlLogo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Agencia creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createAgencia);

/**
 * @swagger
 * /api/agencias/{id}:
 *   put:
 *     summary: Actualizar una agencia
 *     tags: [Agencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la agencia a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar de la agencia
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreComercial:
 *                 type: string
 *               contacto:
 *                 type: string
 *               correo:
 *                 type: string
 *               movil:
 *                 type: string
 *               direccion:
 *                 type: string
 *               descuento:
 *                 type: number
 *               urlLogo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agencia actualizada correctamente
 *       404:
 *         description: Agencia no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateAgencia);

/**
 * @swagger
 * /api/agencias/{id}:
 *   delete:
 *     summary: Eliminar una agencia
 *     tags: [Agencias]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la agencia a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agencia eliminada correctamente
 *       404:
 *         description: Agencia no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteAgencia);

export default router;
