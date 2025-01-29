import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

// Obtener todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo usuarios" });
  }
};

// Obtener usuario por ID
export const getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { id },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo usuario" });
  }
};

// Crear usuario con contraseña encriptada
export const createUsuario = async (req, res) => {
  const { nombre, correo, contraseña, telefono, rolId } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const nuevoUsuario = await prisma.usuarios.create({
      data: { nombre, correo, contraseña: hashedPassword, telefono, rolId },
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error creando usuario" });
  }
};

// Login de usuario con JWT
export const loginUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;
  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { correo },
    });

    if (!usuario) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const passwordMatch = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign({ id: usuario.id, rolId: usuario.rolId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ token, usuario });
  } catch (error) {
    res.status(500).json({ error: "Error en login" });
  }
};

// Actualizar usuario
export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono } = req.body;

  try {
    const usuarioExistente = await prisma.usuarios.findUnique({ where: { id } });

    if (!usuarioExistente) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const usuarioActualizado = await prisma.usuarios.update({
      where: { id },
      data: { nombre, telefono },
    });

    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error actualizando usuario" });
  }
};

// Eliminar usuario
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.usuarios.delete({
      where: { id },
    });

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando usuario" });
  }
};
