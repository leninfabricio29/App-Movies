const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, unique: true },
    descripcion: { type: String },
    img: { type: String },
    imgTitulo: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    anio: { type: String },
    duracion: { type: Number },
    genero: { type: String },
    isSerie: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Peliculas", PeliculaSchema);
