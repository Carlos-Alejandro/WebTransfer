// src/controllers/permisos.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los permisos
export const getPermisos = async (req, res) => {
  try {
    const permisos = await prisma.permisos.findMany();
    res.status(200).json({
      success: true,
      message: 'Permisos obtenidos correctamente.',
      data: permisos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los permisos.',
      data: [],
      error: error.message,
    });
  }
};

// Crear un nuevo permiso
export const createPermiso = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    // Verificar si ya existe un permiso con ese nombre
    const existingPermiso = await prisma.permisos.findUnique({ where: { nombre } });
    if (existingPermiso) {
      return res.status(400).json({
        success: false,
        message: 'El permiso ya existe.',
        data: {},
        error: 'PERMISO_ALREADY_EXISTS',
      });
    }

    const newPermiso = await prisma.permisos.create({
      data: { nombre, descripcion },
    });

    res.status(201).json({
      success: true,
      message: 'Permiso creado correctamente.',
      data: newPermiso,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el permiso.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar un permiso
export const updatePermiso = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const updatedPermiso = await prisma.permisos.update({
      where: { id },
      data: { nombre, descripcion },
    });
    res.status(200).json({
      success: true,
      message: 'Permiso actualizado correctamente.',
      data: updatedPermiso,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el permiso.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar un permiso
export const deletePermiso = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.permisos.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Permiso eliminado correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el permiso.',
      data: {},
      error: error.message,
    });
  }
};
