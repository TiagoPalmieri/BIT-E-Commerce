

app.get('product/:sku/image', getAllImages);

app.get('/product/:sku/image/:id', getImageById);

app.post('/product/:sku/image', setNewImage);

app.put('/product/:sku/image/:id', updateImage);

app.delete('/product/:sku/image/:id', deleteImage);