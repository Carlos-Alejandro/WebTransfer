// src/controllers/reservasServiciosAdicionales.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las asignaciones de servicios adicionales para reservas
export const getReservasServiciosAdicionales = async (req, res) => {
  try {
    const asignaciones = await prisma.reservasServiciosAdicionales.findMany();
    res.status(200).json({
      success: true,
      message: 'Reservas de servicios adicionales obtenidas correctamente.',
      data: asignaciones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las reservas de servicios adicionales.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva asignación de servicio adicional a una reserva
export const createReservasServiciosAdicionales = async (req, res) => {
  try {
    const { reservaId, servicioAdicionalId, cantidad } = req.body;

    // Verificar si la asignación ya existe (utilizando la llave compuesta)
    const existing = await prisma.reservasServiciosAdicionales.findUnique({
      where: {
        reservaId_servicioAdicionalId: { reservaId, servicioAdicionalId },
      },
    });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'La asignación de servicio adicional ya existe para esta reserva.',
        data: {},
        error: 'ASSIGNMENT_ALREADY_EXISTS',
      });
    }

    const newAssignment = await prisma.reservasServiciosAdicionales.create({
      data: { reservaId, servicioAdicionalId, cantidad },
    });

    res.status(201).json({
      success: true,
      message: 'Asignación de servicio adicional creada correctamente.',
      data: newAssignment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la asignación de servicio adicional.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar la cantidad de una asignación de servicio adicional
export const updateReservasServiciosAdicionales = async (req, res) => {
  const { reservaId, servicioAdicionalId } = req.params;
  const { cantidad } = req.body;
  try {
    const updatedAssignment = await prisma.reservasServiciosAdicionales.update({
      where: {
        reservaId_servicioAdicionalId: { reservaId, servicioAdicionalId },
      },
      data: { cantidad },
    });
    res.status(200).json({
      success: true,
      message: 'Asignación de servicio adicional actualizada correctamente.',
      data: updatedAssignment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la asignación de servicio adicional.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una asignación de servicio adicional de una reserva
export const deleteReservasServiciosAdicionales = async (req, res) => {
  const { reservaId, servicioAdicionalId } = req.params;
  try {
    await prisma.reservasServiciosAdicionales.delete({
      where: {
        reservaId_servicioAdicionalId: { reservaId, servicioAdicionalId },
      },
    });
    res.status(200).json({
      success: true,
      message: 'Asignación de servicio adicional eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la asignación de servicio adicional.',
      data: {},
      error: error.message,
    });
  }
};
