import express from "express";
import { getRoles, getRolById, createRol, deleteRol, updateRol } from "../controllers/roles.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/roles:
 *   get:
 *     summary: Obtener todos los roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "123e4567-e89b-12d3-a456-426614174000"
 *                   nombre:
 *                     type: string
 *                     example: "Admin"
 */
router.get("/", getRoles);

/**
 * @swagger
 * /api/roles/{id}:
 *   get:
 *     summary: Obtener un rol por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del rol a obtener
 *     responses:
 *       200:
 *         description: Datos del rol
 *       404:
 *         description: Rol no encontrado
 */
router.get("/:id", getRolById);

/**
 * @swagger
 * /api/roles:
 *   post:
 *     summary: Crear un nuevo rol
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Admin"
 *     responses:
 *       201:
 *         description: Rol creado
 *       400:
 *         description: Error en la creación
 */
router.post("/", createRol);



/**
 * @swagger
 * /api/roles/{id}:
 *   put:
 *     summary: Actualizar un rol por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Editor"
 *     responses:
 *       200:
 *         description: Rol actualizado
 *       404:
 *         description: Rol no encontrado
 */
router.put("/:id", updateRol);

/**
 * @swagger
 * /api/roles/{id}:
 *   delete:
 *     summary: Eliminar un rol por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del rol a eliminar
 *     responses:
 *       200:
 *         description: Rol eliminado correctamente
 *       500:
 *         description: Error eliminando rol
 */
router.delete("/:id", deleteRol);

export default router;
