const express=require("express");
const app=express();

//la aplicacion usa herramientas de express respecto a json
app.use(express.json());

// importar rutas
const productos=require("./routes/products")

//Ruta del navegador por defecto
app.use('/api',productos)

module.exports=app