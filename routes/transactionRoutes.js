
app.get('/transactionHistory', getAllTransactions);

//Obtener una transacción por su ID
app.get('/transactionHistory/:id', getTransactionsById);

//crear una nueva transacción
app.post('/transactionHistory', setNewTransactions);

//actualizar una transacción
app.put('/transactionHistory/;id', updateTransaction);

//Eliminar una transacción
app.delete('/transactionHistory/;id', deleteTransaction);
