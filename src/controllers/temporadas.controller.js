import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las temporadas
export const getTemporadas = async (req, res) => {
    try {
        const temporadas = await prisma.temporadas.findMany();
        res.json({
            success: true,
            message: "Temporadas obtenidas correctamente.",
            data: temporadas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las temporadas.",
            error: error.message
        });
    }
};

// Obtener una temporada por ID
export const getTemporadaById = async (req, res) => {
    try {
        const { id } = req.params;
        const temporada = await prisma.temporadas.findUnique({ where: { id } });
        if (!temporada) {
            return res.status(404).json({
                success: false,
                message: "Temporada no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Temporada obtenida correctamente.",
            data: temporada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la temporada.",
            error: error.message
        });
    }
};

// Crear una nueva temporada
export const createTemporada = async (req, res) => {
    try {
        const { nombre, fechaInicio, fechaFin, estado } = req.body;
        const nuevaTemporada = await prisma.temporadas.create({ data: { nombre, fechaInicio, fechaFin, estado } });
        res.status(201).json({
            success: true,
            message: "Temporada creada exitosamente.",
            data: nuevaTemporada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la temporada.",
            error: error.message
        });
    }
};

// Actualizar una temporada por ID
export const updateTemporada = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, fechaInicio, fechaFin, estado } = req.body;
        const temporadaActualizada = await prisma.temporadas.update({ where: { id }, data: { nombre, fechaInicio, fechaFin, estado } });
        res.json({
            success: true,
            message: "Temporada actualizada correctamente.",
            data: temporadaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la temporada.",
            error: error.message
        });
    }
};

// Eliminar una temporada por ID
export const deleteTemporada = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.temporadas.delete({ where: { id } });
        res.json({
            success: true,
            message: "Temporada eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la temporada.",
            error: error.message
        });
    }
};
