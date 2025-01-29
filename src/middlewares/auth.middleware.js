import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(403).json({ error: "Acceso denegado, token no proporcionado" });
  }

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    req.usuario = verified; // Guarda los datos del usuario en la request
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
};
