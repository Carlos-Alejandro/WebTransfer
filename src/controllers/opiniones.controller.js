// src/controllers/opiniones.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las opiniones
export const getOpiniones = async (req, res) => {
  try {
    const opiniones = await prisma.opiniones.findMany();
    res.status(200).json({
      success: true,
      message: 'Opiniones obtenidas correctamente.',
      data: opiniones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las opiniones.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva opinión
export const createOpinion = async (req, res) => {
  try {
    const { reservaId, usuarioId, puntuacion, comentario } = req.body;
    const newOpinion = await prisma.opiniones.create({
      data: {
        reservaId,
        usuarioId,
        puntuacion,
        comentario,
        fechaCreacion: new Date()
      },
    });
    res.status(201).json({
      success: true,
      message: 'Opinión creada correctamente.',
      data: newOpinion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la opinión.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una opinión
export const updateOpinion = async (req, res) => {
  const { id } = req.params;
  const { reservaId, usuarioId, puntuacion, comentario } = req.body;
  try {
    const updatedOpinion = await prisma.opiniones.update({
      where: { id },
      data: { reservaId, usuarioId, puntuacion, comentario }
    });
    res.status(200).json({
      success: true,
      message: 'Opinión actualizada correctamente.',
      data: updatedOpinion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la opinión.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una opinión
export const deleteOpinion = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.opiniones.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Opinión eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la opinión.',
      data: {},
      error: error.message,
    });
  }
};
