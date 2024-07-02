const express = require('express');
router = express.Router();
const {getAllBillings, getBillingById, setNewBilling, updateBilling, deleteBilling} = require('../controllers/billingController')


router.get('/billing', getAllBillings);
router.get('/billing/:id', getBillingById);
router.post('/billing', setNewBilling);
router.put('/billing/:id', updateBilling);
router.delete('/billing/:id', deleteBilling);

module.exports = router
