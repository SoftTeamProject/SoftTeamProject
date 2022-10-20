const express = require("express");
const app = express();

app.use(express.json());

//Se importan las rutas
const rutas = require("./routes/rutas")

app.use("/api", rutas) //Decidir si cambiar

module.exports = app