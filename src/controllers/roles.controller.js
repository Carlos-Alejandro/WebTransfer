import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRoles = async (req, res) => {
  try {
    const roles = await prisma.roles.findMany();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo roles" });
  }
};

export const getRolById = async (req, res) => {
  const { id } = req.params;
  try {
    const rol = await prisma.roles.findUnique({
      where: { id },
    });

    if (!rol) {
      return res.status(404).json({ error: "Rol no encontrado" });
    }

    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo el rol" });
  }
};

export const createRol = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevoRol = await prisma.roles.create({
      data: { nombre },
    });
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(500).json({ error: "Error creando rol" });
  }
};
export const updateRol = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
  
    try {
      // Verificar si el rol existe
      const rolExistente = await prisma.roles.findUnique({
        where: { id },
      });
  
      if (!rolExistente) {
        return res.status(404).json({ error: "Rol no encontrado" });
      }
  
      // Actualizar el rol
      const rolActualizado = await prisma.roles.update({
        where: { id },
        data: { nombre },
      });
  
      res.json(rolActualizado);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando rol" });
    }
  };
  
export const deleteRol = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.roles.delete({
      where: { id },
    });

    res.json({ message: "Rol eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando rol" });
  }
};
