import express from "express";
import conexion from "../db/conexion.js";

const router = express.Router();

router.get("/", (req, res)=>{
    conexion.query("SELECT * FROM alumnos", (error, resultado)=>{
        if(error) throw error;
        res.json(resultado); 
    });
});

router.post("/", (req, res) => {
  const { nombre, apellido, dni, nacionalidad, genero, fecha_nacimiento, direccion, email, contacto_emergencia, telefono } = req.body;
  const sql = `INSERT INTO alumnos 
  (nombre, apellido, dni, nacionalidad, genero, fecha_nacimiento, direccion, email, contacto_emergencia, telefono)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  conexion.query(sql, [nombre, apellido, dni, nacionalidad, genero, fecha_nacimiento, direccion, email, contacto_emergencia, telefono], (error) => {
    if (error) throw error;
    res.json({ mensaje: "Alumno registrado correctamente" });
  });
});

// PUT para actualizar un alumno
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, dni, nacionalidad, genero, fecha_nacimiento, direccion, email, contacto_emergencia, telefono } = req.body;
  const sql = `UPDATE alumnos SET 
  nombre=?, apellido=?, dni=?, nacionalidad=?, genero=?, fecha_nacimiento=?, direccion=?, email=?, contacto_emergencia=?, telefono=?
  WHERE id=?`;

  conexion.query(sql, [nombre, apellido, dni, nacionalidad, genero, fecha_nacimiento, direccion, email, contacto_emergencia, telefono, id], (error) => {
    if (error) throw error;
    res.json({ mensaje: "Alumno actualizado correctamente" });
  });
});

// eliminar un alumno
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  conexion.query("DELETE FROM alumnos WHERE id=?", [id], (error) => {
    if (error) throw error;
    res.json({ mensaje: "Alumno eliminado correctamente" });
  });
});

export default router;
