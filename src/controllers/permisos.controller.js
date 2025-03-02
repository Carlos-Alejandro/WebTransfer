import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los permisos
export const getPermisos = async (req, res) => {
    try {
        const permisos = await prisma.permisos.findMany();
        res.json({
            success: true,
            message: "Permisos obtenidos correctamente.",
            data: permisos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener permisos.",
            error: error.message
        });
    }
};

// Obtener un permiso por ID
export const getPermisoById = async (req, res) => {
    try {
        const { id } = req.params;
        const permiso = await prisma.permisos.findUnique({ where: { id } });
        if (!permiso) {
            return res.status(404).json({
                success: false,
                message: "Permiso no encontrado."
            });
        }
        res.json({
            success: true,
            message: "Permiso obtenido correctamente.",
            data: permiso
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el permiso.",
            error: error.message
        });
    }
};

// Crear un nuevo permiso
export const createPermiso = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const nuevoPermiso = await prisma.permisos.create({
            data: { nombre, descripcion }
        });
        res.status(201).json({
            success: true,
            message: "Permiso creado exitosamente.",
            data: nuevoPermiso
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear el permiso.",
            error: error.message
        });
    }
};

// Actualizar un permiso por ID
export const updatePermiso = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const permisoActualizado = await prisma.permisos.update({
            where: { id },
            data: { nombre, descripcion }
        });
        res.json({
            success: true,
            message: "Permiso actualizado correctamente.",
            data: permisoActualizado
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar el permiso.",
            error: error.message
        });
    }
};

// Eliminar un permiso por ID
export const deletePermiso = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.permisos.delete({ where: { id } });
        res.json({
            success: true,
            message: "Permiso eliminado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el permiso.",
            error: error.message
        });
    }
};