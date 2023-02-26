//rutas para producto
const express = require('Express');
const router = express.Router();

//llamamos al controller
const {newProducto, getProducto, getProductoById, updateProducto, deleteProducto } = require('../controller/productoController')

//ruta para ver los productos
 router.route('/').get(getProducto);

//ruta para crear producto
router.route('/').post(newProducto);

//ruta para buscar producto por el _id
router.route('/:id').get(getProductoById)

//ruta para actualizar el producto
router.route('/:id').put(updateProducto)

//ruta para eliminar un producto
router.route('/:id').delete(deleteProducto)





module.exports = router;