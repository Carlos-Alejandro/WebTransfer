// src/controllers/zonas.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las zonas
export const getZonas = async (req, res) => {
  try {
    const zonas = await prisma.zonas.findMany();
    res.status(200).json({
      success: true,
      message: 'Zonas obtenidas correctamente.',
      data: zonas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las zonas.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva zona
export const createZona = async (req, res) => {
  try {
    const { nombre, estado } = req.body;
    const newZona = await prisma.zonas.create({
      data: { 
        nombre, 
        estado: estado !== undefined ? estado : true  // valor por defecto true si no se envía
      },
    });
    res.status(201).json({
      success: true,
      message: 'Zona creada correctamente.',
      data: newZona,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la zona.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una zona
export const updateZona = async (req, res) => {
  const { id } = req.params;
  const { nombre, estado } = req.body;
  try {
    const updatedZona = await prisma.zonas.update({
      where: { id },
      data: { nombre, estado },
    });
    res.status(200).json({
      success: true,
      message: 'Zona actualizada correctamente.',
      data: updatedZona,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la zona.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una zona
export const deleteZona = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.zonas.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Zona eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la zona.',
      data: {},
      error: error.message,
    });
  }
};
