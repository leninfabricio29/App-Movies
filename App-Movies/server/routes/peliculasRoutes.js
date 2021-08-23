const router = require("express").Router();
const Movie = require("../models/peliculas");
const verify = require("../verifeToken");

//Crear pelilcula , solo permitido para el admin
router.post("/",  verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("No permitido");
  }
});

//Actualizar pelicula debe ser admin, se lo realiza por medio de un id
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("No tienes permitido realizar esta accion");
  }
});

//Eliminar pelicula por medio de id, debe ser admin
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Pelicula eliminada");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("No tienes permitido realizar esta accion!");
  }
});

//Obtener pelicula por medio del id
router.get("/select/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Obtiene peliculas en aleatorio, debe ser admin
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSerie: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSerie: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Obtiene todas las peliculas, debe ser admin
router.get("/", async (req, res) => {
  //if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  //} else {
   // res.status(403).json("No tienes permitido realizar esta accion");
  //}
});

module.exports = router;