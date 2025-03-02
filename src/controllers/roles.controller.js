import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los roles
export const getRoles = async (req, res) => {
    try {
        const roles = await prisma.roles.findMany();
        res.json({
            success: true,
            message: "Roles obtenidos correctamente.",
            data: roles
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener roles.",
            error: error.message
        });
    }
};

// Obtener un rol por ID
export const getRolById = async (req, res) => {
    try {
        const { id } = req.params;
        const rol = await prisma.roles.findUnique({ where: { id } });
        if (!rol) {
            return res.status(404).json({
                success: false,
                message: "Rol no encontrado."
            });
        }
        res.json({
            success: true,
            message: "Rol obtenido correctamente.",
            data: rol
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el rol.",
            error: error.message
        });
    }
};

// Crear un nuevo rol
export const createRol = async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevoRol = await prisma.roles.create({
            data: { nombre }
        });
        res.status(201).json({
            success: true,
            message: "Rol creado exitosamente.",
            data: nuevoRol
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear el rol.",
            error: error.message
        });
    }
};

// Actualizar un rol por ID
export const updateRol = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const rolActualizado = await prisma.roles.update({
            where: { id },
            data: { nombre }
        });
        res.json({
            success: true,
            message: "Rol actualizado correctamente.",
            data: rolActualizado
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar el rol.",
            error: error.message
        });
    }
};

// Eliminar un rol por ID
export const deleteRol = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.roles.delete({ where: { id } });
        res.json({
            success: true,
            message: "Rol eliminado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el rol.",
            error: error.message
        });
    }
};
