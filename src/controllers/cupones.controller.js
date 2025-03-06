// src/controllers/cupones.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los cupones
export const getCupones = async (req, res) => {
  try {
    const cupones = await prisma.cupones.findMany();
    res.status(200).json({
      success: true,
      message: 'Cupones obtenidos correctamente.',
      data: cupones,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los cupones.',
      data: [],
      error: error.message,
    });
  }
};

// Crear un nuevo cupón
export const createCupon = async (req, res) => {
  try {
    const {
      Codigo,
      nombre,
      FechaAplicacion,
      FechaInicio,
      FechaFin,
      Banner,
      TipoDescuento,
      Valor,
      MinCompra,
      Limite,
      Estado,
    } = req.body;

    const newCupon = await prisma.cupones.create({
      data: {
        Codigo,
        nombre,
        FechaAplicacion: new Date(FechaAplicacion),
        FechaInicio: new Date(FechaInicio),
        FechaFin: new Date(FechaFin),
        Banner,
        TipoDescuento,
        Valor,
        MinCompra,
        Limite,
        Estado,
      },
    });
    res.status(201).json({
      success: true,
      message: 'Cupón creado correctamente.',
      data: newCupon,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el cupón.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar un cupón existente
export const updateCupon = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      Codigo,
      nombre,
      FechaAplicacion,
      FechaInicio,
      FechaFin,
      Banner,
      TipoDescuento,
      Valor,
      MinCompra,
      Limite,
      Estado,
    } = req.body;
    const updatedCupon = await prisma.cupones.update({
      where: { id },
      data: {
        Codigo,
        nombre,
        FechaAplicacion: new Date(FechaAplicacion),
        FechaInicio: new Date(FechaInicio),
        FechaFin: new Date(FechaFin),
        Banner,
        TipoDescuento,
        Valor,
        MinCompra,
        Limite,
        Estado,
      },
    });
    res.status(200).json({
      success: true,
      message: 'Cupón actualizado correctamente.',
      data: updatedCupon,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el cupón.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar un cupón
export const deleteCupon = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.cupones.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Cupón eliminado correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el cupón.',
      data: {},
      error: error.message,
    });
  }
};
