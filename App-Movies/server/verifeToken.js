const jwt = require("jsonwebtoken");//Dependecia de token, validar roles

function verificar(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token no valido!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Tu no te haz autenticado");
  }
}

module.exports = verificar;
