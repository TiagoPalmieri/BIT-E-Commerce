const express = require('express');
router = express.Router();
const {getAllSellers, getSellerById, setNewSeller, updateSeller, deleteSeller} = require('../controllers/sellerControllers')

router.get('/seller', getAllSellers);
router.post('/seller', setNewSeller);
router.get('/seller/:id', getSellerById);
router.put('/seller/:id', updateSeller);
router.delete('/seller/:id', deleteSeller);

module.exports = router
