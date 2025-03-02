import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los proveedores
export const getProveedores = async (req, res) => {
    try {
        const proveedores = await prisma.proveedores.findMany();
        res.json({
            success: true,
            message: "Proveedores obtenidos correctamente.",
            data: proveedores
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener proveedores.",
            error: error.message
        });
    }
};

// Obtener un proveedor por ID
export const getProveedorById = async (req, res) => {
    try {
        const { id } = req.params;
        const proveedor = await prisma.proveedores.findUnique({ where: { id } });
        if (!proveedor) {
            return res.status(404).json({
                success: false,
                message: "Proveedor no encontrado."
            });
        }
        res.json({
            success: true,
            message: "Proveedor obtenido correctamente.",
            data: proveedor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el proveedor.",
            error: error.message
        });
    }
};

// Crear un nuevo proveedor
export const createProveedor = async (req, res) => {
    try {
        const { nombre, contacto, telefono, email, direccion, indicaciones } = req.body;
        const nuevoProveedor = await prisma.proveedores.create({
            data: { nombre, contacto, telefono, email, direccion, indicaciones }
        });
        res.status(201).json({
            success: true,
            message: "Proveedor creado exitosamente.",
            data: nuevoProveedor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear el proveedor.",
            error: error.message
        });
    }
};

// Actualizar un proveedor por ID
export const updateProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, contacto, telefono, email, direccion, indicaciones } = req.body;
        const proveedorActualizado = await prisma.proveedores.update({
            where: { id },
            data: { nombre, contacto, telefono, email, direccion, indicaciones }
        });
        res.json({
            success: true,
            message: "Proveedor actualizado correctamente.",
            data: proveedorActualizado
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar el proveedor.",
            error: error.message
        });
    }
};

// Eliminar un proveedor por ID
export const deleteProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.proveedores.delete({ where: { id } });
        res.json({
            success: true,
            message: "Proveedor eliminado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el proveedor.",
            error: error.message
        });
    }
};
