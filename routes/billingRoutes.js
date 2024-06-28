//billing

//Obtener todas las facturas
app.get('/billing', getAllBillings);

//Obtener una factura por su ID:
app.get('/billing/:id', getBillingById);

//Crear una nueva factura
app.post('/billing', setNewBilling);

//actualizar una factura:
app.put('/billing/:id', updateBilling);

//Eliminar una factura
app.delete('/billing/:id', deleteBilling);