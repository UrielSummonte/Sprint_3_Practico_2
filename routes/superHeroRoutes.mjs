import express from "express";
import { validarSuperheroe } from "../middlewares/validarSuperheroe.mjs";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  insertarSuperheroeController,
  editarSuperheroeController,
  eliminarSuperheroePorIdController,
  eliminarSuperheroePorNombreController,
} from "../controllers/superheroesController.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get(
  "/heroes/buscar/:atributo/:valor",
  buscarSuperheroePorAtributoController
);
router.get(
  "/heroes/consulta/mayores-30",
  obtenerSuperheroesMayoresDe30Controller
);
router.post("/heroes", validarSuperheroe, insertarSuperheroeController);
router.put("/heroes/editar/:nombreSuperheroe", validarSuperheroe, editarSuperheroeController);
router.delete("/heroes/eliminar/:id", eliminarSuperheroePorIdController);
router.delete("/heroes/eliminar-nombre/:nombreSuperheroe", eliminarSuperheroePorNombreController);

export default router;
