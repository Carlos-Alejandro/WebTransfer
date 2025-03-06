// src/controllers/ubicaciones.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las ubicaciones
export const getUbicaciones = async (req, res) => {
  try {
    const ubicaciones = await prisma.ubicaciones.findMany();
    res.status(200).json({
      success: true,
      message: 'Ubicaciones obtenidas correctamente.',
      data: ubicaciones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las ubicaciones.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva ubicación
export const createUbicacion = async (req, res) => {
  try {
    const { zonaId, tipoUbicacion, nombre, direccion, latitud, longitud, descripcion } = req.body;
    const newUbicacion = await prisma.ubicaciones.create({
      data: {
        zonaId,
        tipoUbicacion,
        nombre,
        direccion,
        latitud,
        longitud,
        descripcion,
      },
    });
    res.status(201).json({
      success: true,
      message: 'Ubicación creada correctamente.',
      data: newUbicacion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la ubicación.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una ubicación
export const updateUbicacion = async (req, res) => {
  const { id } = req.params;
  try {
    const { zonaId, tipoUbicacion, nombre, direccion, latitud, longitud, descripcion } = req.body;
    const updatedUbicacion = await prisma.ubicaciones.update({
      where: { id },
      data: { zonaId, tipoUbicacion, nombre, direccion, latitud, longitud, descripcion },
    });
    res.status(200).json({
      success: true,
      message: 'Ubicación actualizada correctamente.',
      data: updatedUbicacion,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la ubicación.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una ubicación
export const deleteUbicacion = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ubicaciones.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Ubicación eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la ubicación.',
      data: {},
      error: error.message,
    });
  }
};
