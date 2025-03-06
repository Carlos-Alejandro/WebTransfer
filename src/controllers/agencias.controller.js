// src/controllers/agencias.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las agencias
export const getAgencias = async (req, res) => {
  try {
    const agencias = await prisma.agencias.findMany();
    res.status(200).json({
      success: true,
      message: 'Agencias obtenidas correctamente.',
      data: agencias,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las agencias.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva agencia
export const createAgencia = async (req, res) => {
  try {
    const { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo } = req.body;
    const newAgencia = await prisma.agencias.create({
      data: { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo },
    });
    res.status(201).json({
      success: true,
      message: 'Agencia creada correctamente.',
      data: newAgencia,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la agencia.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una agencia
export const updateAgencia = async (req, res) => {
  const { id } = req.params;
  const { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo } = req.body;
  try {
    const updatedAgencia = await prisma.agencias.update({
      where: { id },
      data: { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo },
    });
    res.status(200).json({
      success: true,
      message: 'Agencia actualizada correctamente.',
      data: updatedAgencia,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la agencia.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una agencia
export const deleteAgencia = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.agencias.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Agencia eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la agencia.',
      data: {},
      error: error.message,
    });
  }
};
