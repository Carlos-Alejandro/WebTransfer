import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las opiniones
export const getOpiniones = async (req, res) => {
    try {
        const opiniones = await prisma.opiniones.findMany();
        res.json({
            success: true,
            message: "Opiniones obtenidas correctamente.",
            data: opiniones
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener opiniones.",
            error: error.message
        });
    }
};

// Obtener una opinión por ID
export const getOpinionById = async (req, res) => {
    try {
        const { id } = req.params;
        const opinion = await prisma.opiniones.findUnique({ where: { id } });
        if (!opinion) {
            return res.status(404).json({
                success: false,
                message: "Opinión no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Opinión obtenida correctamente.",
            data: opinion
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la opinión.",
            error: error.message
        });
    }
};

// Crear una nueva opinión
export const createOpinion = async (req, res) => {
    try {
        const { reservaId, usuarioId, puntuacion, comentario } = req.body;
        const nuevaOpinion = await prisma.opiniones.create({
            data: { reservaId, usuarioId, puntuacion, comentario }
        });
        res.status(201).json({
            success: true,
            message: "Opinión creada exitosamente.",
            data: nuevaOpinion
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la opinión.",
            error: error.message
        });
    }
};

// Actualizar una opinión por ID
export const updateOpinion = async (req, res) => {
    try {
        const { id } = req.params;
        const { puntuacion, comentario } = req.body;
        const opinionActualizada = await prisma.opiniones.update({
            where: { id },
            data: { puntuacion, comentario }
        });
        res.json({
            success: true,
            message: "Opinión actualizada correctamente.",
            data: opinionActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la opinión.",
            error: error.message
        });
    }
};

// Eliminar una opinión por ID
export const deleteOpinion = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.opiniones.delete({ where: { id } });
        res.json({
            success: true,
            message: "Opinión eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la opinión.",
            error: error.message
        });
    }
};
