import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las tarifas
export const getTarifas = async (req, res) => {
    try {
        const tarifas = await prisma.tarifas.findMany();
        res.json({
            success: true,
            message: "Tarifas obtenidas correctamente.",
            data: tarifas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener tarifas.",
            error: error.message
        });
    }
};

// Obtener una tarifa por ID
export const getTarifaById = async (req, res) => {
    try {
        const { id } = req.params;
        const tarifa = await prisma.tarifas.findUnique({ where: { id } });
        if (!tarifa) {
            return res.status(404).json({
                success: false,
                message: "Tarifa no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Tarifa obtenida correctamente.",
            data: tarifa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la tarifa.",
            error: error.message
        });
    }
};

// Crear una nueva tarifa
export const createTarifa = async (req, res) => {
    try {
        const { proveedorId, zonaId, precioPorPersona, precioPrivado, temporadaId } = req.body;
        const nuevaTarifa = await prisma.tarifas.create({
            data: { proveedorId, zonaId, precioPorPersona, precioPrivado, temporadaId }
        });
        res.status(201).json({
            success: true,
            message: "Tarifa creada exitosamente.",
            data: nuevaTarifa
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la tarifa.",
            error: error.message
        });
    }
};

// Actualizar una tarifa por ID
export const updateTarifa = async (req, res) => {
    try {
        const { id } = req.params;
        const { proveedorId, zonaId, precioPorPersona, precioPrivado, temporadaId } = req.body;
        const tarifaActualizada = await prisma.tarifas.update({
            where: { id },
            data: { proveedorId, zonaId, precioPorPersona, precioPrivado, temporadaId }
        });
        res.json({
            success: true,
            message: "Tarifa actualizada correctamente.",
            data: tarifaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la tarifa.",
            error: error.message
        });
    }
};

// Eliminar una tarifa por ID
export const deleteTarifa = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.tarifas.delete({ where: { id } });
        res.json({
            success: true,
            message: "Tarifa eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la tarifa.",
            error: error.message
        });
    }
};
