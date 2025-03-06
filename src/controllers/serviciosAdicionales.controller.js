// src/controllers/serviciosAdicionales.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los servicios adicionales
export const getServiciosAdicionales = async (req, res) => {
  try {
    const servicios = await prisma.serviciosAdicionales.findMany();
    res.status(200).json({
      success: true,
      message: 'Servicios adicionales obtenidos correctamente.',
      data: servicios,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los servicios adicionales.',
      data: [],
      error: error.message,
    });
  }
};

// Crear un nuevo servicio adicional
export const createServicioAdicional = async (req, res) => {
  try {
    const { nombre, precio } = req.body;
    const newServicio = await prisma.serviciosAdicionales.create({
      data: { nombre, precio },
    });
    res.status(201).json({
      success: true,
      message: 'Servicio adicional creado correctamente.',
      data: newServicio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el servicio adicional.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar un servicio adicional
export const updateServicioAdicional = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  try {
    const updatedServicio = await prisma.serviciosAdicionales.update({
      where: { id },
      data: { nombre, precio },
    });
    res.status(200).json({
      success: true,
      message: 'Servicio adicional actualizado correctamente.',
      data: updatedServicio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el servicio adicional.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar un servicio adicional
export const deleteServicioAdicional = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.serviciosAdicionales.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Servicio adicional eliminado correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el servicio adicional.',
      data: {},
      error: error.message,
    });
  }
};
