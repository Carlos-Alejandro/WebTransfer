import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los permisos de roles
export const getRolesPermisos = async (req, res) => {
    try {
        const rolesPermisos = await prisma.rolesPermisos.findMany({
            include: { rol: true, permiso: true }
        });
        res.json({
            success: true,
            message: "Roles y permisos obtenidos correctamente.",
            data: rolesPermisos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener roles y permisos.",
            error: error.message
        });
    }
};

// Obtener un permiso de rol por ID
export const getRolPermisoById = async (req, res) => {
    try {
        const { rolId, permisoId } = req.params;
        const rolPermiso = await prisma.rolesPermisos.findUnique({
            where: { rolId_permisoId: { rolId, permisoId } },
            include: { rol: true, permiso: true }
        });
        if (!rolPermiso) {
            return res.status(404).json({
                success: false,
                message: "Permiso de rol no encontrado."
            });
        }
        res.json({
            success: true,
            message: "Permiso de rol obtenido correctamente.",
            data: rolPermiso
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el permiso de rol.",
            error: error.message
        });
    }
};

// Asignar un permiso a un rol
export const createRolPermiso = async (req, res) => {
    try {
        const { rolId, permisoId } = req.body;
        const nuevoRolPermiso = await prisma.rolesPermisos.create({
            data: { rolId, permisoId }
        });
        res.status(201).json({
            success: true,
            message: "Permiso asignado al rol exitosamente.",
            data: nuevoRolPermiso
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al asignar el permiso al rol.",
            error: error.message
        });
    }
};

// Eliminar un permiso de un rol
export const deleteRolPermiso = async (req, res) => {
    try {
        const { rolId, permisoId } = req.params;
        await prisma.rolesPermisos.delete({
            where: { rolId_permisoId: { rolId, permisoId } }
        });
        res.json({
            success: true,
            message: "Permiso de rol eliminado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el permiso de rol.",
            error: error.message
        });
    }
};
