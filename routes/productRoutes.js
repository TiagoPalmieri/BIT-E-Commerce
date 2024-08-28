const express = require('express');
router = express.Router();
const {getAllProducts, getProductById, setNewProduct, updateProduct, deleteProduct} = require('../controllers/productController')

router.get('/products', getAllProducts);
router.get('/products/:sku', getProductById);
router.post('/products', setNewProduct);
router.put('/products/:sku', updateProduct);
router.delete('/products/:sku', deleteProduct);

module.exports = router
