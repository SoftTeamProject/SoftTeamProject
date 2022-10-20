const express=require("express")
const router=express.Router();

//Traemos la respuesta json desde el controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct}=require("../controllers/productsController")
// Establecemos desde que ruta queremos ver el getProducts
router.route('/productos').get(getProducts)
router.route('/producto/nuevo').post(newProduct)
router.route('/producto/:id').get(getProductById)
router.route('/producto/:id').put(updateProduct)
router.route('/producto/:id').delete(deleteProduct)

module.exports=router;