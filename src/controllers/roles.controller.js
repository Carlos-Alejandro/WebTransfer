// src/controllers/roles.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los roles
export const getRoles = async (req, res) => {
  try {
    const roles = await prisma.roles.findMany();
    res.status(200).json({
      success: true,
      message: 'Roles obtenidos correctamente.',
      data: roles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los roles.',
      data: [],
      error: error.message,
    });
  }
};

// Crear un nuevo rol
export const createRole = async (req, res) => {
  try {
    const { nombre } = req.body;
    // Verificar si ya existe un rol con ese nombre
    const existingRole = await prisma.roles.findUnique({ where: { nombre } });
    if (existingRole) {
      return res.status(400).json({
        success: false,
        message: 'El rol ya existe.',
        data: {},
        error: 'ROLE_ALREADY_EXISTS',
      });
    }
    const newRole = await prisma.roles.create({
      data: { nombre },
    });
    res.status(201).json({
      success: true,
      message: 'Rol creado correctamente.',
      data: newRole,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear el rol.',
      data: {},
      error: error.message,
    });
  }
};

// Actualizar un rol
export const updateRole = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const updatedRole = await prisma.roles.update({
      where: { id },
      data: { nombre },
    });
    res.status(200).json({
      success: true,
      message: 'Rol actualizado correctamente.',
      data: updatedRole,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el rol.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar un rol
export const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.roles.delete({
      where: { id },
    });
    res.status(200).json({
      success: true,
      message: 'Rol eliminado correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el rol.',
      data: {},
      error: error.message,
    });
  }
};
