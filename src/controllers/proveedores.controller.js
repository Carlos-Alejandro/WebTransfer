// src/controllers/proveedores.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los proveedores
export const getProveedores = async (req, res) => {
  try {
    const proveedores = await prisma.proveedores.findMany();
    res.status(200).json({
      success: true,
      message: 'Proveedores obtenidos correctamente.',
      data: proveedores,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los proveedores.',
      data: [],
      error: error.message,
    });
  }
};

// Crear un nuevo proveedor
export const createProveedor = async (req, res) => {
  try {
    const { nombre, contacto, telefono, email, direccion, indicaciones } = req.body;
    const newProveedor = await prisma.proveedores.create({
      data: {
        nombre,
        contacto,
        telefono,
        email,
        direccion,
        indicaciones,
        estado: true,
        fechaRegistro: new Date(),
      },
    });
    res.status(201).json({
      success: true,
      message: 'Proveedor creado correctamente.',
      data: newProveedor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el proveedor.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar un proveedor
export const updateProveedor = async (req, res) => {
  const { id } = req.params;
  const { nombre, contacto, telefono, email, direccion, indicaciones, estado } = req.body;
  try {
    const updatedProveedor = await prisma.proveedores.update({
      where: { id },
      data: { nombre, contacto, telefono, email, direccion, indicaciones, estado },
    });
    res.status(200).json({
      success: true,
      message: 'Proveedor actualizado correctamente.',
      data: updatedProveedor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el proveedor.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar un proveedor
export const deleteProveedor = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.proveedores.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Proveedor eliminado correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el proveedor.',
      data: {},
      error: error.message,
    });
  }
};