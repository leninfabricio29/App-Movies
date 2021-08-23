const mongoose = require("mongoose");

const ListaSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, unique: true },
    tipo: { type: String },
    genero: { type: String },
    content:{type:Array}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listas", ListaSchema);
