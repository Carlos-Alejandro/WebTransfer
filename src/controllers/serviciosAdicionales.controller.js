import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los servicios adicionales
export const getServiciosAdicionales = async (req, res) => {
  try {
    const servicios = await prisma.serviciosAdicionales.findMany();
    res.json({
      success: true,
      message: "Servicios adicionales obtenidos correctamente.",
      data: servicios,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener los servicios adicionales.",
      error: error.message,
    });
  }
};

// Obtener un servicio adicional por ID
export const getServicioAdicionalById = async (req, res) => {
  try {
    const { id } = req.params;
    const servicio = await prisma.serviciosAdicionales.findUnique({
      where: { id },
    });
    if (!servicio) {
      return res.status(404).json({
        success: false,
        message: "Servicio adicional no encontrado.",
      });
    }
    res.json({
      success: true,
      message: "Servicio adicional obtenido correctamente.",
      data: servicio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener el servicio adicional.",
      error: error.message,
    });
  }
};

// Crear un nuevo servicio adicional
export const createServicioAdicional = async (req, res) => {
  try {
    const { nombre, precio } = req.body;
    const nuevoServicio = await prisma.serviciosAdicionales.create({
      data: { nombre, precio },
    });
    res.status(201).json({
      success: true,
      message: "Servicio adicional creado correctamente.",
      data: nuevoServicio,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear el servicio adicional.",
      error: error.message,
    });
  }
};

// Actualizar un servicio adicional por ID
export const updateServicioAdicional = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    const servicioActualizado = await prisma.serviciosAdicionales.update({
      where: { id },
      data: { nombre, precio },
    });
    res.json({
      success: true,
      message: "Servicio adicional actualizado correctamente.",
      data: servicioActualizado,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar el servicio adicional.",
      error: error.message,
    });
  }
};

// Eliminar un servicio adicional por ID
export const deleteServicioAdicional = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.serviciosAdicionales.delete({ where: { id } });
    res.json({
      success: true,
      message: "Servicio adicional eliminado correctamente.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar el servicio adicional.",
      error: error.message,
    });
  }
};
