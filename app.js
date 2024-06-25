const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./config');
const { getAllUsers, setNewUser, getUserById, updateUser, deleteUser } = require('../controllers/userControllers');
const { getAllSellers, getSellerById, updateSeller } = require('../controllers/sellerControllers');
const { getAllTransactions, getTransactionsById, setNewTransactions, updateTransaction, deleteTransaction } = require('../controllers/transactionHistoryController');
const { getAllBillings, setNewBilling, getBillingById, updateBilling, deleteBilling } = require('../controllers/billingController');
const { getAllSells, getSellById, setNewSell, updateSell, deleteSell } = require('../controllers/sellController');
const { getAllProducts, getProductById, setNewProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { getAllPublications, getPublicationById, setNewPublication, updatePublication, deletePublication } = require('../controllers/publicationController');
const { getAllImages, getImageById, setNewImage, updateImage, deleteImage } = require('../controllers/imageController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Mostrar todo el contenido de la tabla usuarios.

app.get('/users', getAllUsers);

// Mostrar un usuario por su ID
app.get('/users:userId',getUserById);

// Crear un nuevo usuario
app.post('/users', setNewUser);

//Actualizar un usuario.

app.put('/users/:userId', updateUser);

//Eliminar un usuario.

app.delete('/users/:usersId', deleteUser);

// Tabla seller

//Mostrar todo
app.get('/seller', getAllSellers);

//Mostrar por ID
app.get('/seller/:id', getSellerById);

// Actualizar un vendedor.
app.put('/seller/:id', updateSeller);

app.get('/transactionHistory', getAllTransactions);

//Obtener una transacción por su ID
app.get('/transactionHistory/:id', getTransactionsById);

//crear una nueva transacción
app.post('/transactionHistory', setNewTransactions);

//actualizar una transacción
app.put('/transactionHistory/;id', updateTransaction);

//Eliminar una transacción
app.delete('/transactionHistory/;id', deleteTransaction);

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

//Product

app.get('/products', getAllProducts);

app.get('/products/:sku', getProductById);

app.post('/products', setNewProduct);

//Actualizar un producto.

app.put('/products/:sku', updateProduct);

//Eliminar por sku

app.delete('/products/:sku', deleteProduct);

//publication

app.get('/publications', getAllPublications);

app.get('/publication/:id', getPublicationById);

app.post('/publications', setNewPublication);

app.put('/publications/:id', updatePublication);

app.delete('/publications/:id', deletePublication);

app.get('product/:sku/image', getAllImages);

app.get('/product/:sku/image/:id', getImageById);

app.post('/product/:sku/image', setNewImage);

app.put('/product/:sku/image/:id', updateImage);

app.delete('/product/:sku/image/:id', deleteImage);