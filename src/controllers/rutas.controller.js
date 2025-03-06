// src/controllers/rutas.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las rutas
export const getRutas = async (req, res) => {
  try {
    const rutas = await prisma.rutas.findMany();
    res.status(200).json({
      success: true,
      message: 'Rutas obtenidas correctamente.',
      data: rutas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las rutas.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva ruta
export const createRuta = async (req, res) => {
  try {
    const { Ubicacion1, Ubicacion2, TiempoTraslado, MapUrl } = req.body;
    const newRuta = await prisma.rutas.create({
      data: { Ubicacion1, Ubicacion2, TiempoTraslado, MapUrl },
    });
    res.status(201).json({
      success: true,
      message: 'Ruta creada correctamente.',
      data: newRuta,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la ruta.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una ruta
export const updateRuta = async (req, res) => {
  const { id } = req.params;
  try {
    const { Ubicacion1, Ubicacion2, TiempoTraslado, MapUrl } = req.body;
    const updatedRuta = await prisma.rutas.update({
      where: { id },
      data: { Ubicacion1, Ubicacion2, TiempoTraslado, MapUrl },
    });
    res.status(200).json({
      success: true,
      message: 'Ruta actualizada correctamente.',
      data: updatedRuta,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la ruta.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una ruta
export const deleteRuta = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.rutas.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Ruta eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la ruta.',
      data: {},
      error: error.message,
    });
  }
};
