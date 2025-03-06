// src/controllers/reservas.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las reservas
export const getReservas = async (req, res) => {
  try {
    const reservas = await prisma.reservas.findMany();
    res.status(200).json({
      success: true,
      message: 'Reservas obtenidas correctamente.',
      data: reservas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las reservas.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva reserva
export const createReserva = async (req, res) => {
  try {
    const {
      folio,
      agenciaId,
      tarifaId,
      OrigenId,
      DestinoId,
      usuarioId,
      numVueloLlegada,
      aerolineaLlegada,
      fechaLlegada,
      horaLlegada,
      numVueloSalida,
      aerolineaSalida,
      fechaSalida,
      horaSalida,
      correoCliente,
      telefonoCliente,
      hotelCliente,
      numPasajeros,
      subTotal,
      perIVA,
      IVA,
      Total,
      tipoServicio,
      CuponId, // opcional
      estado,
      motivoCancelacion, // opcional
      fechaCancelacion,  // opcional
    } = req.body;

    const newReserva = await prisma.reservas.create({
      data: {
        folio,
        agenciaId,
        tarifaId,
        OrigenId,
        DestinoId,
        usuarioId,
        numVueloLlegada,
        aerolineaLlegada,
        fechaLlegada: new Date(fechaLlegada),
        horaLlegada: new Date(horaLlegada),
        numVueloSalida,
        aerolineaSalida,
        fechaSalida: new Date(fechaSalida),
        horaSalida: new Date(horaSalida),
        correoCliente,
        telefonoCliente,
        hotelCliente,
        numPasajeros,
        subTotal,
        perIVA,
        IVA,
        Total,
        tipoServicio,
        CuponId: CuponId || null,
        estado,
        motivoCancelacion: motivoCancelacion || null,
        fechaCancelacion: fechaCancelacion ? new Date(fechaCancelacion) : null,
        fechaCreacion: new Date(),
      },
    });

    res.status(201).json({
      success: true,
      message: 'Reserva creada correctamente.',
      data: newReserva,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la reserva.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una reserva
export const updateReserva = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      folio,
      agenciaId,
      tarifaId,
      OrigenId,
      DestinoId,
      usuarioId,
      numVueloLlegada,
      aerolineaLlegada,
      fechaLlegada,
      horaLlegada,
      numVueloSalida,
      aerolineaSalida,
      fechaSalida,
      horaSalida,
      correoCliente,
      telefonoCliente,
      hotelCliente,
      numPasajeros,
      subTotal,
      perIVA,
      IVA,
      Total,
      tipoServicio,
      CuponId,
      estado,
      motivoCancelacion,
      fechaCancelacion,
    } = req.body;

    const updatedReserva = await prisma.reservas.update({
      where: { id },
      data: {
        folio,
        agenciaId,
        tarifaId,
        OrigenId,
        DestinoId,
        usuarioId,
        numVueloLlegada,
        aerolineaLlegada,
        fechaLlegada: new Date(fechaLlegada),
        horaLlegada: new Date(horaLlegada),
        numVueloSalida,
        aerolineaSalida,
        fechaSalida: new Date(fechaSalida),
        horaSalida: new Date(horaSalida),
        correoCliente,
        telefonoCliente,
        hotelCliente,
        numPasajeros,
        subTotal,
        perIVA,
        IVA,
        Total,
        tipoServicio,
        CuponId: CuponId || null,
        estado,
        motivoCancelacion: motivoCancelacion || null,
        fechaCancelacion: fechaCancelacion ? new Date(fechaCancelacion) : null,
      },
    });
    res.status(200).json({
      success: true,
      message: 'Reserva actualizada correctamente.',
      data: updatedReserva,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la reserva.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una reserva
export const deleteReserva = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reservas.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Reserva eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la reserva.',
      data: {},
      error: error.message,
    });
  }
};
