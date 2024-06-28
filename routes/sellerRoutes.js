

// Tabla seller

//Mostrar todo
app.get('/seller', getAllSellers);

//Mostrar por ID
app.get('/seller/:id', getSellerById);

// Actualizar un vendedor.
app.put('/seller/:id', updateSeller);