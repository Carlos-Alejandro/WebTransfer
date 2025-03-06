// src/controllers/tarifas.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las tarifas
export const getTarifas = async (req, res) => {
  try {
    const tarifas = await prisma.tarifas.findMany();
    res.status(200).json({
      success: true,
      message: 'Tarifas obtenidas correctamente.',
      data: tarifas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las tarifas.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva tarifa
export const createTarifa = async (req, res) => {
  try {
    const {
      temporadaId,
      proveedorId,
      zona1Id,
      zona2Id,
      SencilloIda1a3,
      SencilloIda4a5,
      SencilloIda6a8,
      SencilloIda9a10,
      SencilloIda11a12,
      SencilloIda13a16,
      SencilloReg1a3,
      SencilloReg4a5,
      SencilloReg6a8,
      SencilloReg9a10,
      SencilloReg11a12,
      SencilloReg13a16,
      Redondo1a3,
      Redondo4a5,
      Redondo6a8,
      Redondo9a10,
      Redondo11a12,
      Redondo13a16
    } = req.body;

    const newTarifa = await prisma.tarifas.create({
      data: {
        temporadaId,
        proveedorId,
        zona1Id,
        zona2Id,
        SencilloIda1a3,
        SencilloIda4a5,
        SencilloIda6a8,
        SencilloIda9a10,
        SencilloIda11a12,
        SencilloIda13a16,
        SencilloReg1a3,
        SencilloReg4a5,
        SencilloReg6a8,
        SencilloReg9a10,
        SencilloReg11a12,
        SencilloReg13a16,
        Redondo1a3,
        Redondo4a5,
        Redondo6a8,
        Redondo9a10,
        Redondo11a12,
        Redondo13a16
      },
    });

    res.status(201).json({
      success: true,
      message: 'Tarifa creada correctamente.',
      data: newTarifa,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la tarifa.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar una tarifa
export const updateTarifa = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      temporadaId,
      proveedorId,
      zona1Id,
      zona2Id,
      SencilloIda1a3,
      SencilloIda4a5,
      SencilloIda6a8,
      SencilloIda9a10,
      SencilloIda11a12,
      SencilloIda13a16,
      SencilloReg1a3,
      SencilloReg4a5,
      SencilloReg6a8,
      SencilloReg9a10,
      SencilloReg11a12,
      SencilloReg13a16,
      Redondo1a3,
      Redondo4a5,
      Redondo6a8,
      Redondo9a10,
      Redondo11a12,
      Redondo13a16
    } = req.body;

    const updatedTarifa = await prisma.tarifas.update({
      where: { id },
      data: {
        temporadaId,
        proveedorId,
        zona1Id,
        zona2Id,
        SencilloIda1a3,
        SencilloIda4a5,
        SencilloIda6a8,
        SencilloIda9a10,
        SencilloIda11a12,
        SencilloIda13a16,
        SencilloReg1a3,
        SencilloReg4a5,
        SencilloReg6a8,
        SencilloReg9a10,
        SencilloReg11a12,
        SencilloReg13a16,
        Redondo1a3,
        Redondo4a5,
        Redondo6a8,
        Redondo9a10,
        Redondo11a12,
        Redondo13a16
      },
    });

    res.status(200).json({
      success: true,
      message: 'Tarifa actualizada correctamente.',
      data: updatedTarifa,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la tarifa.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una tarifa
export const deleteTarifa = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.tarifas.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Tarifa eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la tarifa.',
      data: {},
      error: error.message,
    });
  }
};
