const express=require("express");
const app=express();
//Agregado por Santiago 8/11
const errorMiddleware = require('./middleware/errors')
const cookieParser = require("cookie-parser")

//la aplicacion usa herramientas de express respecto a json
app.use(express.json());
//Agregado por Santiago 8/11
app.use(cookieParser());

// importar rutas
const productos=require("./routes/products")
const usuarios = require("./routes/auth")

//Ruta del navegador por defecto
app.use('/api',productos)
//Agregado por Santiago 8/11
app.use('/api',usuarios)

//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app