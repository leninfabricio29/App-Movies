const express = require("express"); //framework
const app = express(); //constante general de la aplicacio
const morgan = require("morgan")
const bodyparser = require('body-parser')
const mongoose = require("mongoose"); //Dependencia mongoose, base de datos mongo
const dotenv = require("dotenv"); //Obtener datos externos
const authRutas = require("./routes/auth"); //rutas para el autor
const userRutas = require("./routes/userRoutes"); // rutas para el usuario
const peliculasRutas = require("./routes/peliculasRoutes") //rutas para las peliculas
const listaRutas = require("./routes/listaRutes") //rutas para las listadepeliculas
const cors = require ('cors') //Depndeecnia interpretas las peticiones desde el front



dotenv.config(); //Configurando externamente

//Conexion a bd, archivos env. Direccion de la bd y datos desde ATLAS
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
//Confirmacion
.then(()=>console.log("Bd conectada"))
//Error
.catch((err) => console.log("No se puede acceder a la BD"))


app.use(cors())
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))
app.unsubscribe(bodyparser.json())
app.use(express.json());

//Asignar a la app las distintas rutas
app.use("/api/auth", authRutas);
app.use("/api/user", userRutas);
app.use("/api/pelicula", peliculasRutas);
app.use("/api/lista", listaRutas)


//Confirmacion del puerto
app.listen(4000, ()=>{
    console.log("Servidor del backend ejecutandose")
}); 