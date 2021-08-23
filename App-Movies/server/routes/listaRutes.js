const router = require("express").Router();
const List = require("../models/lista");
const verify = require("../verifeToken");

//Crear pelicula, debe ser admin.
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//Eliminar lista, debe ser admin. Se realiza por medio de id
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(201).json("La lista ha sido eliminada");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("No tienes permitido realizar esta accion!");
  }
});

//Obtiene todas las lista de peliculas, debe ser admin
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.tipo;
  const genreQuery = req.query.genero;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { tipo: typeQuery, genero: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
