import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las zonas
export const getZonas = async (req, res) => {
    try {
        const zonas = await prisma.zonas.findMany();
        res.json({
            success: true,
            message: "Zonas obtenidas correctamente.",
            data: zonas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las zonas.",
            error: error.message
        });
    }
};

// Obtener una zona por ID
export const getZonaById = async (req, res) => {
    try {
        const { id } = req.params;
        const zona = await prisma.zonas.findUnique({ where: { id } });
        if (!zona) {
            return res.status(404).json({
                success: false,
                message: "Zona no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Zona obtenida correctamente.",
            data: zona
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la zona.",
            error: error.message
        });
    }
};

// Crear una nueva zona
export const createZona = async (req, res) => {
    try {
        const { nombre, estado } = req.body;
        const nuevaZona = await prisma.zonas.create({ data: { nombre, estado } });
        res.status(201).json({
            success: true,
            message: "Zona creada exitosamente.",
            data: nuevaZona
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la zona.",
            error: error.message
        });
    }
};

// Actualizar una zona por ID
export const updateZona = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, estado } = req.body;
        const zonaActualizada = await prisma.zonas.update({ where: { id }, data: { nombre, estado } });
        res.json({
            success: true,
            message: "Zona actualizada correctamente.",
            data: zonaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la zona.",
            error: error.message
        });
    }
};

// Eliminar una zona por ID
export const deleteZona = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.zonas.delete({ where: { id } });
        res.json({
            success: true,
            message: "Zona eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la zona.",
            error: error.message
        });
    }
};
