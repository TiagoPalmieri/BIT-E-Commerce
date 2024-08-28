const express = require('express');
router = express.Router();
const {getAllTransactions, getTransactionsById, setNewTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactionHistoryController')

router.get('/transactionHistory', getAllTransactions);
router.get('/transactionHistory/:id', getTransactionsById);
router.post('/transactionHistory', setNewTransaction);
router.put('/transactionHistory/;id', updateTransaction);
router.delete('/transactionHistory/;id', deleteTransaction);

module.exports = router
