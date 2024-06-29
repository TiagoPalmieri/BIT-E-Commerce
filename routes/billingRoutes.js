const express = require('express');
router = express.Router();
const {getAllBillings, getBillingById, setNewBilling, updateBilling, deleteBilling} = require('../controllers/billingController')

//Obtener todas las facturas
router.get('/billing', getAllBillings);

//Obtener una factura por su ID:
router.get('/billing/:id', getBillingById);

//Crear una nueva factura
router.post('/billing', setNewBilling);

//actualizar una factura:
router.put('/billing/:id', updateBilling);

//Eliminar una factura
router.delete('/billing/:id', deleteBilling);

module.exports = router

