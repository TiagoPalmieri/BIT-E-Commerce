const express = require('express');
router = express.Router();
const {getAllSellers, getSellerById, setNewSeller, updateSeller, deleteSeller} = require('../controllers/sellerControllers')


// Tabla seller

//Mostrar todo
router.get('/seller', getAllSellers);

router.post('/seller', setNewSeller);

//Mostrar por ID
router.get('/seller/:id', getSellerById);

// Actualizar un vendedor.
router.put('/seller/:id', updateSeller);

// Eliminar un vendedor
router.delete('/seller/:id', deleteSeller);

module.exports = router
