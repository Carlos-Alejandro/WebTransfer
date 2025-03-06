// src/controllers/pagos.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los pagos
export const getPagos = async (req, res) => {
  try {
    const pagos = await prisma.pagos.findMany();
    res.status(200).json({
      success: true,
      message: 'Pagos obtenidos correctamente.',
      data: pagos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los pagos.',
      data: [],
      error: error.message,
    });
  }
};

// Crear un nuevo pago
export const createPago = async (req, res) => {
  try {
    const { reservaId, metodoPago, monto, estado, fechaPago, voucher } = req.body;
    const newPago = await prisma.pagos.create({
      data: {
        reservaId,
        metodoPago,
        monto,
        estado,
        fechaPago: new Date(fechaPago),
        voucher,
      },
    });
    res.status(201).json({
      success: true,
      message: 'Pago creado correctamente.',
      data: newPago,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el pago.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar un pago
export const updatePago = async (req, res) => {
  const { id } = req.params;
  try {
    const { reservaId, metodoPago, monto, estado, fechaPago, voucher } = req.body;
    const updatedPago = await prisma.pagos.update({
      where: { id },
      data: {
        reservaId,
        metodoPago,
        monto,
        estado,
        fechaPago: new Date(fechaPago),
        voucher,
      },
    });
    res.status(200).json({
      success: true,
      message: 'Pago actualizado correctamente.',
      data: updatedPago,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el pago.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar un pago
export const deletePago = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.pagos.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Pago eliminado correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el pago.',
      data: {},
      error: error.message,
    });
  }
};
