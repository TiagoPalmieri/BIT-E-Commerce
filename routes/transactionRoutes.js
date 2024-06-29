const express = require('express');
router = express.Router();
const {getAllTransactions, getTransactionsById, setNewTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactionHistoryController')

router.get('/transactionHistory', getAllTransactions);

//Obtener una transacción por su ID
router.get('/transactionHistory/:id', getTransactionsById);

//crear una nueva transacción
router.post('/transactionHistory', setNewTransaction);

//actualizar una transacción
router.put('/transactionHistory/;id', updateTransaction);

//Eliminar una transacción
router.delete('/transactionHistory/;id', deleteTransaction);

module.exports = router
