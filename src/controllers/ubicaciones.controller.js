import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las ubicaciones
export const getUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await prisma.ubicaciones.findMany();
        res.json({
            success: true,
            message: "Ubicaciones obtenidas correctamente.",
            data: ubicaciones
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las ubicaciones.",
            error: error.message
        });
    }
};

// Obtener una ubicación por ID
export const getUbicacionById = async (req, res) => {
    try {
        const { id } = req.params;
        const ubicacion = await prisma.ubicaciones.findUnique({ where: { id } });
        if (!ubicacion) {
            return res.status(404).json({
                success: false,
                message: "Ubicación no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Ubicación obtenida correctamente.",
            data: ubicacion
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la ubicación.",
            error: error.message
        });
    }
};

// Crear una nueva ubicación
export const createUbicacion = async (req, res) => {
    try {
        const { nombre, direccion, latitudA, longitudA, latitudB, longitudB, descripcion } = req.body;
        const nuevaUbicacion = await prisma.ubicaciones.create({ data: { nombre, direccion, latitudA, longitudA, latitudB, longitudB, descripcion } });
        res.status(201).json({
            success: true,
            message: "Ubicación creada exitosamente.",
            data: nuevaUbicacion
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la ubicación.",
            error: error.message
        });
    }
};

// Actualizar una ubicación por ID
export const updateUbicacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, latitudA, longitudA, latitudB, longitudB, descripcion } = req.body;
        const ubicacionActualizada = await prisma.ubicaciones.update({ where: { id }, data: { nombre, direccion, latitudA, longitudA, latitudB, longitudB, descripcion } });
        res.json({
            success: true,
            message: "Ubicación actualizada correctamente.",
            data: ubicacionActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la ubicación.",
            error: error.message
        });
    }
};

// Eliminar una ubicación por ID
export const deleteUbicacion = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.ubicaciones.delete({ where: { id } });
        res.json({
            success: true,
            message: "Ubicación eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la ubicación.",
            error: error.message
        });
    }
};
