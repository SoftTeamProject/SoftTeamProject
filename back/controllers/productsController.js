
const producto=require("../models/productos");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));
const { patch } = require("../routes/products");

//Ver la lista de productos
exports.getProducts=async(req,res,next) =>{
    const productos=await producto.find();
    res.status(200).json({
        sucess:true,
        cantidad:productos.length,
        productos
    }

)}

//Ver producto por ID
exports.getProductById=async(req,res,next)=>{
    const product=await producto.findById(req.params.id);
    if(!product){
            return res.status(404).json({
            sucess:false,
            message:"No encontramos ese producto"
        })
    }
    res.status(200).json({
        sucess:true,
        message:"Aqui debajo encuentras informacion sobre tu producto: ",
        product
    })
}

//Update un producto
exports.updateProduct=async(req,res,next)=>{
    let product=await producto.findById(req.params.id);
    if(!product){
            return res.status(404).json({
            sucess:false,
            message:"No encontramos ese producto"
        })
    }

    product=await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        sucess:true,
        message:"Producto actualizado correctamente",
        product
    })
}

//Eliminar un producto
exports.deleteProduct=async(req,res,next)=>{
    const product=await producto.findById(req.params.id)
    if(!product){
        return res.status(404).json({
        sucess:false,
        message:"No encontramos ese producto"
    })
    }
    await product.remove();
    res.status(200).json({
        succes:true,
        message:"Producto eliminado correctamente"
    })
}

// Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product=await producto.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })
}


/// FETCH
// Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

// Ver por id
function verProductoById(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos();

//verProductoById('6345bbaac80d3d329ce84f35');