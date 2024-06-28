//Product

app.get('/products', getAllProducts);

app.get('/products/:sku', getProductById);

app.post('/products', setNewProduct);

//Actualizar un producto.

app.put('/products/:sku', updateProduct);

//Eliminar por sku

app.delete('/products/:sku', deleteProduct);