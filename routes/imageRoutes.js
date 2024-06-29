const express = require('express');
router = express.Router();
const {getAllImages, getImageById, setNewImage, updateImage, deleteImage} = require('../controllers/imageController')

router.get('product/:sku/image', getAllImages);

router.get('/product/:sku/image/:id', getImageById);

router.post('/product/:sku/image', setNewImage);

router.put('/product/:sku/image/:id', updateImage);

router.delete('/product/:sku/image/:id', deleteImage);

module.exports = router