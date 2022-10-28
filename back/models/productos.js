const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres"]
    },
    precio:{
        type:Number,
        required:[true,"Por favor registre el precio del producto"],
        maxLength:[true,"El precio del poducto no puede estar por encima de 99.999.999"],
        default:0.0
    },
    descripcion:{
        type:String,
        require:[true,"Por favor registre una descripcion para el producto"]
    },
    calificaciones:{
        type:Number,
        default:0
    },
    imagen:[
        {   
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Consola video juegos",
                "Televisores",
                "Accesorios",
                "Computadoras",
                "Electrodomesticos",
                "Tablets",
                "Juguetes"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor de producto"]
    },
    inventario:{
        type:Number,
        required:[true,"Por favaor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99.999"]
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

//Exporte el modelo de mongoose (con el nombre, cual esquema)
module.exports=mongoose.model("Productos",productosSchema)