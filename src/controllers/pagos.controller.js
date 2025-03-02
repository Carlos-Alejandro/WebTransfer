import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los pagos
export const getPagos = async (req, res) => {
    try {
        const pagos = await prisma.pagos.findMany();
        res.json({
            success: true,
            message: "Pagos obtenidos correctamente.",
            data: pagos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los pagos.",
            error: error.message
        });
    }
};

// Obtener un pago por ID
export const getPagoById = async (req, res) => {
    try {
        const { id } = req.params;
        const pago = await prisma.pagos.findUnique({ where: { id } });
        if (!pago) {
            return res.status(404).json({
                success: false,
                message: "Pago no encontrado."
            });
        }
        res.json({
            success: true,
            message: "Pago obtenido correctamente.",
            data: pago
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el pago.",
            error: error.message
        });
    }
};

// Crear un nuevo pago
export const createPago = async (req, res) => {
    try {
        const { reservaId, metodoPago, monto, estado, fechaPago } = req.body;
        const nuevoPago = await prisma.pagos.create({ data: { reservaId, metodoPago, monto, estado, fechaPago } });
        res.status(201).json({
            success: true,
            message: "Pago creado exitosamente.",
            data: nuevoPago
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear el pago.",
            error: error.message
        });
    }
};

// Actualizar un pago por ID
export const updatePago = async (req, res) => {
    try {
        const { id } = req.params;
        const { metodoPago, monto, estado, fechaPago } = req.body;
        const pagoActualizado = await prisma.pagos.update({ where: { id }, data: { metodoPago, monto, estado, fechaPago } });
        res.json({
            success: true,
            message: "Pago actualizado correctamente.",
            data: pagoActualizado
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar el pago.",
            error: error.message
        });
    }
};

// Eliminar un pago por ID
export const deletePago = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.pagos.delete({ where: { id } });
        res.json({
            success: true,
            message: "Pago eliminado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el pago.",
            error: error.message
        });
    }
};
