const express = require('express');
router = express.Router();
const {getAllSells, getSellById, setNewSell, updateSell, deleteSell} = require('../controllers/sellController')

//sell

//Obtener todas las ventas
router.get('/sell', getAllSells);

//obtener una venta por su ID:
router.get('/sell/:id', getSellById);

//crear una nueva venta:
router.post('/sell', setNewSell);

//Actualizar una venta
router.put('/sell/:id', updateSell);

//eliminar una venta
router.delete('/sell/:id', deleteSell);

module.exports = router
