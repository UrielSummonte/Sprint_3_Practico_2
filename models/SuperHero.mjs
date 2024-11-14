import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    nombreSociedad: { type: String, default: "Desconocido" },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: { type: String },
    poderes: { type: [String], default: [] },
    habilidadEspecial: { type: String },
    aliados: { type: [String], default: [] },
    enemigos: { type: [String], default: [] },
    creador: { type: String },
  });
  
  export default mongoose.model("Superhero", superheroSchema, "Grupo-15");