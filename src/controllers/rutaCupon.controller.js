// src/controllers/rutaCupon.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las asignaciones de RutaCupon
export const getRutaCupon = async (req, res) => {
  try {
    const asignaciones = await prisma.rutaCupon.findMany();
    res.status(200).json({
      success: true,
      message: 'Asignaciones de RutaCupon obtenidas correctamente.',
      data: asignaciones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las asignaciones de RutaCupon.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva asignación de RutaCupon
export const createRutaCupon = async (req, res) => {
  try {
    const { CuponId, RutaId } = req.body;
    
    // Verificar si ya existe la asignación usando la llave compuesta
    const existing = await prisma.rutaCupon.findUnique({
      where: {
        CuponId_RutaId: { CuponId, RutaId },
      },
    });
    
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'La asignación de RutaCupon ya existe.',
        data: {},
        error: 'ASSIGNMENT_ALREADY_EXISTS',
      });
    }
    
    const newAssignment = await prisma.rutaCupon.create({
      data: { CuponId, RutaId },
    });
    
    res.status(201).json({
      success: true,
      message: 'Asignación de RutaCupon creada correctamente.',
      data: newAssignment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la asignación de RutaCupon.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una asignación de RutaCupon
export const deleteRutaCupon = async (req, res) => {
  try {
    const { CuponId, RutaId } = req.params;
    await prisma.rutaCupon.delete({
      where: {
        CuponId_RutaId: { CuponId, RutaId },
      },
    });
    res.status(200).json({
      success: true,
      message: 'Asignación de RutaCupon eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la asignación de RutaCupon.',
      data: {},
      error: error.message,
    });
  }
};
