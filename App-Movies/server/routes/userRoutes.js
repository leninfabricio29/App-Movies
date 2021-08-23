const router = require("express").Router(); //Uso de espress para las rutas
const User = require("../models/usuarios"); // Modelo Usuarios
const CryptoJS = require("crypto-js"); //Encriptar contraseña
const verify = require("../verifeToken");


//Actualizar por medio de id, el admin solo puede hacer esto. Uso del token(veriy)
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const actualizarUsuario = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(actualizarUsuario);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Solo puedes actualizar tu cuenta");
  }
});

//Eliminar por medio de id el admin solo puede hacer esto, por medio de verify
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Usuario eliminado");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Puedes borrar solo tu cuenta!");
    }
  });
  
//Leer informacion por medio de id, no requiere permisos
router.get("/select/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...info } = user._doc;
      res.status(200).json(info);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//Leer todos , require permisos solo el admin puede ver todo
router.get("/",   async (req, res) => {
    const query = req.query.new;
    //if (req.user.isAdmin) {
      try {
        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err);
      }
   //} else {
    //  res.status(403).json("No tienes permitido realizar esta accion!");
    //}
  });  

//Traer estado usuarios creados numero de cuentas creadas en tal fecha
router.get("/stats", async (req, res) => {
    const today = new Date();
  
    try {
      const data = await User.aggregate([
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });
        
module.exports = router;