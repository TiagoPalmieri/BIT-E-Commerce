const express = require('express');
router = express.Router();
const {getAllSells, getSellById, setNewSell, updateSell, deleteSell} = require('../controllers/sellController')

router.get('/sell', getAllSells);
router.get('/sell/:id', getSellById);
router.post('/sell', setNewSell);
router.put('/sell/:id', updateSell);
router.delete('/sell/:id', deleteSell);

module.exports = router
