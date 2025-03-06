// src/controllers/rolesPermisos.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las asignaciones de roles y permisos
export const getRolesPermisos = async (req, res) => {
  try {
    const rolesPermisos = await prisma.rolesPermisos.findMany();
    res.status(200).json({
      success: true,
      message: 'Roles permisos obtenidos correctamente.',
      data: rolesPermisos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener roles permisos.',
      data: [],
      error: error.message,
    });
  }
};

// Crear una nueva asignación de rol y permiso
export const createRolePermiso = async (req, res) => {
  try {
    const { rolId, permisoId } = req.body;

    // Verificar si la asignación ya existe usando la llave compuesta
    const existingAssignment = await prisma.rolesPermisos.findUnique({
      where: {
        rolId_permisoId: { rolId, permisoId },
      },
    });

    if (existingAssignment) {
      return res.status(400).json({
        success: false,
        message: 'La asignación ya existe.',
        data: {},
        error: 'ROLE_PERMISO_ALREADY_EXISTS',
      });
    }

    const newAssignment = await prisma.rolesPermisos.create({
      data: { rolId, permisoId },
    });

    res.status(201).json({
      success: true,
      message: 'Asignación de rol permiso creada correctamente.',
      data: newAssignment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la asignación de rol permiso.',
      data: {},
      error: error.message,
    });
  }
};

// Eliminar una asignación de rol y permiso
export const deleteRolePermiso = async (req, res) => {
  try {
    const { rolId, permisoId } = req.params;
    await prisma.rolesPermisos.delete({
      where: {
        rolId_permisoId: { rolId, permisoId },
      },
    });
    res.status(200).json({
      success: true,
      message: 'Asignación de rol permiso eliminada correctamente.',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la asignación de rol permiso.',
      data: {},
      error: error.message,
    });
  }
};
