// src/controllers/temporadas.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las temporadas
export const getTemporadas = async (req, res) => {
  try {
    const temporadas = await prisma.temporadas.findMany();
    res.status(200).json({
      success: true,
      message: 'Temporadas obtenidas correctamente.',
      data: temporadas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las temporadas.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva temporada
export const createTemporada = async (req, res) => {
  try {
    const { nombre, FechaAplicacion, fechaInicio, fechaFin, estado } = req.body;
    const newTemporada = await prisma.temporadas.create({
      data: {
        nombre,
        FechaAplicacion: new Date(FechaAplicacion),
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
        estado: estado !== undefined ? estado : true,
      },
    });
    res.status(201).json({
      success: true,
      message: 'Temporada creada correctamente.',
      data: newTemporada,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la temporada.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una temporada
export const updateTemporada = async (req, res) => {
  const { id } = req.params;
  try {
    const { nombre, FechaAplicacion, fechaInicio, fechaFin, estado } = req.body;
    const updatedTemporada = await prisma.temporadas.update({
      where: { id },
      data: {
        nombre,
        FechaAplicacion: new Date(FechaAplicacion),
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
        estado,
      },
    });
    res.status(200).json({
      success: true,
      message: 'Temporada actualizada correctamente.',
      data: updatedTemporada,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la temporada.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una temporada
export const deleteTemporada = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.temporadas.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Temporada eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la temporada.',
      data: {},
      error: error.message,
    });
  }
};
