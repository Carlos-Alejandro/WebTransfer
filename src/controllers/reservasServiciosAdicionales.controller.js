import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las reservas de servicios adicionales
export const getReservasServiciosAdicionales = async (req, res) => {
    try {
        const reservasServicios = await prisma.reservasServiciosAdicionales.findMany();
        res.json({
            success: true,
            message: "Reservas de servicios adicionales obtenidas correctamente.",
            data: reservasServicios
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener reservas de servicios adicionales.",
            error: error.message
        });
    }
};

// Obtener una reserva de servicio adicional por ID compuesto
export const getReservaServicioAdicionalById = async (req, res) => {
    try {
        const { reservaId, servicioAdicionalId } = req.params;
        // Usamos findFirst para claves compuestas
        const reservaServicio = await prisma.reservasServiciosAdicionales.findFirst({
            where: { reservaId, servicioAdicionalId }
        });
        if (!reservaServicio) {
            return res.status(404).json({
                success: false,
                message: "Reserva de servicio adicional no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Reserva de servicio adicional obtenida correctamente.",
            data: reservaServicio
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la reserva de servicio adicional.",
            error: error.message
        });
    }
};

// Crear una nueva reserva de servicio adicional
export const createReservaServicioAdicional = async (req, res) => {
    try {
        const { reservaId, servicioAdicionalId, cantidad } = req.body;

        // Verificar si la reserva y el servicio adicional existen
        const reserva = await prisma.reservas.findUnique({ where: { id: reservaId } });
        const servicio = await prisma.serviciosAdicionales.findUnique({ where: { id: servicioAdicionalId } });

        if (!reserva || !servicio) {
            return res.status(404).json({
                success: false,
                message: "La reserva o el servicio adicional no existen."
            });
        }

        const nuevaReservaServicio = await prisma.reservasServiciosAdicionales.create({
            data: { reservaId, servicioAdicionalId, cantidad }
        });

        res.status(201).json({
            success: true,
            message: "Reserva de servicio adicional creada exitosamente.",
            data: nuevaReservaServicio
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la reserva de servicio adicional.",
            error: error.message
        });
    }
};

// Actualizar una reserva de servicio adicional
export const updateReservaServicioAdicional = async (req, res) => {
    try {
        const { reservaId, servicioAdicionalId } = req.params;
        const { cantidad } = req.body;

        // Verificar si la reserva de servicio adicional existe
        const reservaServicio = await prisma.reservasServiciosAdicionales.findFirst({
            where: { reservaId, servicioAdicionalId }
        });
        if (!reservaServicio) {
            return res.status(404).json({
                success: false,
                message: "La reserva de servicio adicional no existe."
            });
        }

        const reservaActualizada = await prisma.reservasServiciosAdicionales.update({
            where: { reservaId_servicioAdicionalId: { reservaId, servicioAdicionalId } },
            data: { cantidad }
        });

        res.json({
            success: true,
            message: "Reserva de servicio adicional actualizada correctamente.",
            data: reservaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la reserva de servicio adicional.",
            error: error.message
        });
    }
};

// Eliminar una reserva de servicio adicional
export const deleteReservaServicioAdicional = async (req, res) => {
    try {
        const { reservaId, servicioAdicionalId } = req.params;

        // Verificar si la reserva de servicio adicional existe
        const reservaServicio = await prisma.reservasServiciosAdicionales.findFirst({
            where: { reservaId, servicioAdicionalId }
        });
        if (!reservaServicio) {
            return res.status(404).json({
                success: false,
                message: "La reserva de servicio adicional no existe."
            });
        }

        await prisma.reservasServiciosAdicionales.delete({
            where: { reservaId_servicioAdicionalId: { reservaId, servicioAdicionalId } }
        });

        res.json({
            success: true,
            message: "Reserva de servicio adicional eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la reserva de servicio adicional.",
            error: error.message
        });
    }
};
