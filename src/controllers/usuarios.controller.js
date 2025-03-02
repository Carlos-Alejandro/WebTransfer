import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await prisma.usuarios.findMany();
        res.json({
            success: true,
            message: "Usuarios obtenidos correctamente.",
            data: usuarios
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener usuarios.",
            error: error.message
        });
    }
};

// Obtener un usuario por ID
export const getUsuarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await prisma.usuarios.findUnique({ where: { id } });
        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado."
            });
        }
        res.json({
            success: true,
            message: "Usuario obtenido correctamente.",
            data: usuario
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el usuario.",
            error: error.message
        });
    }
};

// Crear un nuevo usuario
export const createUsuario = async (req, res) => {
    try {
        const { nombre, correo, contrasena, telefono, rolId } = req.body;
        const nuevoUsuario = await prisma.usuarios.create({
            data: { nombre, correo, contrasena, telefono, rolId }
        });
        res.status(201).json({
            success: true,
            message: "Usuario creado exitosamente.",
            data: nuevoUsuario
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear el usuario.",
            error: error.message
        });
    }
};

// Actualizar un usuario por ID
export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, correo, telefono, rolId } = req.body;
        const usuarioActualizado = await prisma.usuarios.update({
            where: { id },
            data: { nombre, correo, telefono, rolId }
        });
        res.json({
            success: true,
            message: "Usuario actualizado correctamente.",
            data: usuarioActualizado
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar el usuario.",
            error: error.message
        });
    }
};

// Eliminar un usuario por ID
export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.usuarios.delete({ where: { id } });
        res.json({
            success: true,
            message: "Usuario eliminado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el usuario.",
            error: error.message
        });
    }
};
