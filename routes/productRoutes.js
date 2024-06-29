const express = require('express');
router = express.Router();
const {getAllProducts, getProductById, setNewProduct, updateProduct, deleteProduct} = require('../controllers/productController')

//Product

router.get('/products', getAllProducts);

router.get('/products/:sku', getProductById);

router.post('/products', setNewProduct);

//Actualizar un producto.

router.put('/products/:sku', updateProduct);

//Eliminar por sku

router.delete('/products/:sku', deleteProduct);

module.exports = router

