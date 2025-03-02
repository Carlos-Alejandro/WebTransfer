import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las agencias
export const getAgencias = async (req, res) => {
    try {
        const agencias = await prisma.agencias.findMany();
        res.json({
            success: true,
            message: "Agencias obtenidas correctamente.",
            data: agencias
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener agencias.",
            error: error.message
        });
    }
};

// Obtener una agencia por ID
export const getAgenciaById = async (req, res) => {
    try {
        const { id } = req.params;
        const agencia = await prisma.agencias.findUnique({ where: { id } });
        if (!agencia) {
            return res.status(404).json({
                success: false,
                message: "Agencia no encontrada."
            });
        }
        res.json({
            success: true,
            message: "Agencia obtenida correctamente.",
            data: agencia
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener la agencia.",
            error: error.message
        });
    }
};

// Crear una nueva agencia
export const createAgencia = async (req, res) => {
    try {
        const { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo } = req.body;
        const nuevaAgencia = await prisma.agencias.create({
            data: { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo }
        });
        res.status(201).json({
            success: true,
            message: "Agencia creada exitosamente.",
            data: nuevaAgencia
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al crear la agencia.",
            error: error.message
        });
    }
};

// Actualizar una agencia por ID
export const updateAgencia = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo } = req.body;
        const agenciaActualizada = await prisma.agencias.update({
            where: { id },
            data: { nombreComercial, contacto, correo, movil, direccion, descuento, urlLogo }
        });
        res.json({
            success: true,
            message: "Agencia actualizada correctamente.",
            data: agenciaActualizada
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al actualizar la agencia.",
            error: error.message
        });
    }
};

// Eliminar una agencia por ID
export const deleteAgencia = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.agencias.delete({ where: { id } });
        res.json({
            success: true,
            message: "Agencia eliminada correctamente."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la agencia.",
            error: error.message
        });
    }
};