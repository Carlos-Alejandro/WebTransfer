import express from "express";
import {
  getProveedores,
  getProveedorById,
  createProveedor,
  updateProveedor,
  deleteProveedor
} from "../controllers/proveedores.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Endpoints para la gestión de proveedores
 */

/**
 * @swagger
 * /api/proveedores:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *       500:
 *         description: Error interno del servidor
 */
router.get("/", getProveedores);

/**
 * @swagger
 * /api/proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del proveedor
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del proveedor
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get("/:id", getProveedorById);

/**
 * @swagger
 * /api/proveedores:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       description: Datos del nuevo proveedor
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               contacto:
 *                 type: string
 *               telefono:
 *                 type: string
 *               email:
 *                 type: string
 *               direccion:
 *                 type: string
 *               indicaciones:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proveedor creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", createProveedor);

/**
 * @swagger
 * /api/proveedores/{id}:
 *   put:
 *     summary: Actualizar un proveedor
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del proveedor a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Datos a actualizar del proveedor
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               contacto:
 *                 type: string
 *               telefono:
 *                 type: string
 *               email:
 *                 type: string
 *               direccion:
 *                 type: string
 *               indicaciones:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proveedor actualizado correctamente
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", updateProveedor);

/**
 * @swagger
 * /api/proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del proveedor a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Proveedor eliminado correctamente
 *       404:
 *         description: Proveedor no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", deleteProveedor);

export default router;