const app = require("./app")
const connectDatabase = require("./config/database")

//Archivo de configuración
const dotenv = require("dotenv")
dotenv.config({path: "back/config/config.env"}) //Ruta sin el "./ porque desde la consola no reconoce el puerto ni el modo"

//Configurar base de datos
connectDatabase();

//Se llama al server
const server = app.listen(process.env.PORT, () => {

    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})