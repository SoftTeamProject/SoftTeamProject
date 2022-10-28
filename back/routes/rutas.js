const express = require("express")
const router = express.Router();

const {getSaludo, newProduct} = require("../controller/productsController")

//Nota, antes de cada ruta se debe escribir "api" ej:
//localhost:4000/api/saludo
router.route("/saludo").get(getSaludo) //Ruta inicial para verificar funcionamiento, borrar despues.
router.route("/producto/nuevo").post(newProduct) //Ruta para crear un nuevo producto

module.exports = router;