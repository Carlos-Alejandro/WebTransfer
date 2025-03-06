import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Asegúrate de tener JWT_SECRET en tu .env

const prisma = new PrismaClient();

// ===========================
//   OBTENER TODOS LOS USUARIOS
// ===========================
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany();
    res.status(200).json({
      message: 'Usuarios obtenidos correctamente',
      data: usuarios,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los usuarios',
      error: error.message,
    });
  }
};

// ===========================
//   REGISTRO DE USUARIO
// ===========================
export const registerUser = async (req, res) => {
  try {
    const { nombre, correo, contrasena, telefono, rolId } = req.body;

    // Verificar si ya existe un usuario con ese correo
    const existingUser = await prisma.usuarios.findUnique({
      where: { correo }
    });
    if (existingUser) {
      return res.status(400).json({
        message: 'El correo ya está registrado',
        error: 'USER_ALREADY_EXISTS'
      });
    }

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(contrasena, salt);

    // Crear el nuevo usuario
    const newUsuario = await prisma.usuarios.create({
      data: {
        nombre,
        correo,
        contrasena: hashedPassword, // Guardamos la contraseña encriptada
        telefono,
        rolId,
        estado: true,
        fechaCreacion: new Date(),
      },
    });

    // Generar un token JWT (por ejemplo, con duración de 1 hora)
    const token = jwt.sign(
      { id: newUsuario.id, correo: newUsuario.correo },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      data: {
        id: newUsuario.id,
        nombre: newUsuario.nombre,
        correo: newUsuario.correo,
        rolId: newUsuario.rolId
      },
      token
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al registrar el usuario',
      error: error.message,
    });
  }
};

// ===========================
//   LOGIN DE USUARIO
// ===========================
export const loginUser = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    // Buscar al usuario por correo
    const user = await prisma.usuarios.findUnique({
      where: { correo }
    });
    if (!user) {
      return res.status(401).json({
        message: 'Credenciales inválidas (usuario no encontrado)',
        error: 'INVALID_CREDENTIALS'
      });
    }

    // Comparar contraseñas
    const isMatch = bcrypt.compareSync(contrasena, user.contrasena);
    if (!isMatch) {
      return res.status(401).json({
        message: 'Credenciales inválidas (contraseña incorrecta)',
        error: 'INVALID_CREDENTIALS'
      });
    }

    // Generar token
    const token = jwt.sign(
      { id: user.id, correo: user.correo },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      data: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        rolId: user.rolId
      },
      token
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al iniciar sesión',
      error: error.message,
    });
  }
};

// ===========================
//   CREAR USUARIO (ADMIN?)
// ===========================
// (Puede ser un endpoint diferente a registerUser,
//  por ejemplo, para uso interno de un administrador)
export const createUsuario = async (req, res) => {
  const { nombre, correo, contrasena, telefono, rolId } = req.body;
  try {
    // Aquí podrías también encriptar la contraseña si quieres
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(contrasena, salt);

    const newUsuario = await prisma.usuarios.create({
      data: {
        nombre,
        correo,
        contrasena: hashedPassword,
        telefono,
        rolId,
        estado: true,
        fechaCreacion: new Date(),
      },
    });
    res.status(201).json({
      message: 'Usuario creado exitosamente',
      data: newUsuario,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear el usuario',
      error: error.message,
    });
  }
};

// ===========================
//   ACTUALIZAR USUARIO
// ===========================
export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contrasena, telefono, rolId, estado } = req.body;
  try {
    let updateData = { nombre, correo, telefono, rolId, estado };

    // Si llega una nueva contraseña, la encriptamos
    if (contrasena) {
      const salt = bcrypt.genSaltSync(10);
      updateData.contrasena = bcrypt.hashSync(contrasena, salt);
    }

    const updatedUsuario = await prisma.usuarios.update({
      where: { id },
      data: updateData,
    });
    res.status(200).json({
      message: 'Usuario actualizado correctamente',
      data: updatedUsuario,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al actualizar el usuario',
      error: error.message,
    });
  }
};

// ===========================
//   ELIMINAR USUARIO
// ===========================
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.usuarios.delete({
      where: { id },
    });
    res.status(200).json({
      message: 'Usuario eliminado correctamente',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al eliminar el usuario',
      error: error.message,
    });
  }
};
