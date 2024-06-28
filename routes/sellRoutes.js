//sell

//Obtener todas las ventas
app.get('/sell', getAllSells);

//obtener una venta por su ID:
app.get('/sell/:id', getSellById);

//crear una nueva venta:
app.post('/sell', setNewSell);

//Actualizar una venta
app.put('/sell/:id', updateSell);

//eliminar una venta
app.delete('/sell/:id', deleteSell);