import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las reservas
export const getReservas = async (req, res) => {
    try {
        const reservas = await prisma.reservas.findMany();
        res.json({
            success: true,
            message: "Reservas obtenidas correctamente.",
            data: reservas
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener reservas.",
            error: error.message
        });
    }
};

// Obtener una reserva por ID
export const getReservaById = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await prisma.reservas.findUnique({ where: { id } });
        if (!reserva) {
            return res.status(404).json({
                success: false,
                message: "Reserva no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Reserva obtenida correctamente.",
            data: reserva
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la reserva.",
            error: error.message
        });
    }
};

// Crear una nueva reserva
export const createReserva = async (req, res) => {
    try {
        const { folio, agenciaId, tarifaId, usuarioId, numeroVuelo, aerolinea, horarioLlegada, correoCliente, telefonoCliente, hotelCliente, fechaServicio, numeroPasajeros, precioTotal, tipoServicio, estado, motivoCancelacion } = req.body;
        const nuevaReserva = await prisma.reservas.create({
            data: { folio, agenciaId, tarifaId, usuarioId, numeroVuelo, aerolinea, horarioLlegada, correoCliente, telefonoCliente, hotelCliente, fechaServicio, numeroPasajeros, precioTotal, tipoServicio, estado, motivoCancelacion }
        });
        res.status(201).json({
            success: true,
            message: "Reserva creada exitosamente.",
            data: nuevaReserva
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la reserva.",
            error: error.message
        });
    }
};

// Actualizar una reserva por ID
export const updateReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const { folio, agenciaId, tarifaId, usuarioId, numeroVuelo, aerolinea, horarioLlegada, correoCliente, telefonoCliente, hotelCliente, fechaServicio, numeroPasajeros, precioTotal, tipoServicio, estado, motivoCancelacion } = req.body;
        const reservaActualizada = await prisma.reservas.update({
            where: { id },
            data: { folio, agenciaId, tarifaId, usuarioId, numeroVuelo, aerolinea, horarioLlegada, correoCliente, telefonoCliente, hotelCliente, fechaServicio, numeroPasajeros, precioTotal, tipoServicio, estado, motivoCancelacion }
        });
        res.json({
            success: true,
            message: "Reserva actualizada correctamente.",
            data: reservaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la reserva.",
            error: error.message
        });
    }
};

// Eliminar una reserva por ID
export const deleteReserva = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.reservas.delete({ where: { id } });
        res.json({
            success: true,
            message: "Reserva eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la reserva.",
            error: error.message
        });
    }
};
