const producto = require("../models/productos")

exports.getSaludo = (req, res, next) => {
    res.status(200).json({
        success:true,
        message: "Hola muchachos, controlador funcionando :)"
    })
}

//Creando un nuevo producto
exports.newProduct = async(req, res, next) =>{

    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}