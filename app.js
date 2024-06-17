const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
const db = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexion a la db

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

//Mostrar todo el contenido de la tabla usuarios.

app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users'
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo los usuarios');
            return;
        }
        res.json(results);
    });
});

// Crear un nuevo usuario
app.post('/users', (req, res) => {
    const {mail, password_, name_, lastname, telephone, dni, roles, calification } = req.body;
    const userId = uuidv4(); //Genera un ID unico
    const query = 'INSERT INTO users (id, mail, password_, name_, lastname, telephone, dni, roles, calification) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    db.query(query, [userId, mail, password_, name_, lastname, telephone, dni, roles, calification],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creando el usuario');
                return;
            }
            res.status(201).send('Usuario creado')
        });
});

// Mostrar un usuario por su ID
app.get('/users:userId', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?'
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo el usuario');
            return;
        }
        res.json(results[0]);
    });
});

//Actualizar un usuario.

app.put('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const { mail, password_, name_, lastname, telephone, dni, roles, calification } = req.body;
    const query = 'UPDATE users SET mail = ?, password_ = ?, name_ = ?, lastname = ?, telephone = ?, dni = ?, roles = ?, calification = ? WHERE userId = ?'
    db.query(query, [mail, password_, name_, lastname, telephone, dni, roles, calification, userId] ,
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error actualizando el usuario');
                return;
            }
            res.send('Usuario actualizado');
        });
});

//Eliminar un usuario.

app.delete('/users/:usersId', (req, res) => {
    const { userId } = req.params;
    const query = 'DELETE FROM uses WHERE userId = ?'
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando el usuario')
            return;
        }
        res.send('Usuario eliminado')
    });
});

// Tabla seller

//Mostrar todo
app.get('/seller', (req, res) => {
    const query = 'SELECT * FROM seller';
    db.query(query, (err, results) => {
        if (err) {
            console.error('err');
            res.status(500).send('Error obteniendo contactos');
            return;
        }
    });
});

//Mostrar por ID
app.get('/seller/:id', (req, res) => {
    const sellerId = req.params.id;
    const query = 'SELECT * FROM seller WHERE sellerId = ?';
    db.query(query, [sellerId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo contacto');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('No encontrado')
            return;
        }
        res.status(200).json(result[0]);
    });
});

// Actualizar un vendedor.
app.put('/seller/:id', (req,res)=>{
    const sellerId = req.params.id;
    const query = 'SELECT * FROM seller where sellerId = ?';
    
    db.query(query, [sellerId], (err, result)=>{
        if (err){
            console.error(err);
            res.status(500).send('Error al actualizar los datos del vendedor');
            return;
        }
        if (result.affectedRows === 0){
            res.status(404).send('Vendedor no encontrado');
            return;
        }
        res.status(200).send('Usuario actualizado correctamente');
    });
});

app.get('/transactionHistory', (req, res) => {
    const query = 'SELECT * FROM transactionHistory';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo las transacciones');
            return;
        }
        res.json(results);
    });
});

//crear una nueva transacción
app.post('/transactionHistory', (req, res) => {
    const { idTransaction, buyerId, sellerId, productSku } = req.body;
    const query = 'INSERT INTO transactionHistory (idTransaction, buyerId, sellerId, productSku) VALUES (?, ?, ?, ?)';
    db.query(query, [idTransaction, buyerId, sellerId, productSku], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creando la transacción');
            return;
        }
        res.status(201).send('Transacción creada');
    });
});

//Obtener una transacción por su ID
app.get('/transactionHistory/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM transactionHistory WHERE idTransaction = ?';
    db.query(query, [id], (err, results) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error obteniendo la transacción');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Transacción no encontrada');
            return;
        }
        res.json(results[0]);
    });
});

//actualizar una transacción
app.put('/transactionHistory/;id', (req, res) => {
    const { id } = req.params;
    const { buyerId, sellerId, productSku } = req.body;
    const query = 'UPDATE transactionHistory SET buyerId = ?, sellerId = ?, productSku = ? WHERE idTransaction = ?';
    db.query(query, [buyerId, sellerId, productSku, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error acutalizando la transacción');
            return;
        }
        res.status(200).send('Transacción actualizada');
    });
});

//Eliminar una transacción
app.delete('/transactionHistory/;id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM transactionHistory WHERE idTransaction = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando la transacción');
            return;
        }
        res.status(200).send('Transacción eliminada');
    });
});

//billing

//Obtener todas las facturas
app.get('/billing', (req, res) => {
    const query = 'SELECT * FROM billing';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo las facturas');
            return;
        }
        res.json(results);
    });
});

//Crear una nueva factura
app.post('/billing', (req, res) => {
    const { invoiceId, buyDate, sellerId, buyerId } = req.body;
    const query = 'INSERT INTO billing (invoiceId, buyDate, sellerId, buyerId) VALUES (?, ?, ?, ?)';
    db.query(qquery, [invoiceId, buyDate, sellerId, buyerId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creando la factura');
            return;
        }
        res.status(201).send('Factura creada');
    });
});

//Obtener una factura por su ID:
app.get('/billing/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM billing WHERE invoiceId = ?';
    db.query(query, [id], (err, results) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo la factura');
        return;
        }
        if (results.length === 0) {
            res.status(404).send('Factura no encontrada');
            return;
        }
        res.json(results[0]);
    });
});

//actualizar una factura:
app.put('/billing/:id', (req, res) => {
    const { id } = req.params;
    const { buyDate, sellerId, buyerId } = req.body;
    const query = 'UPDATE billing SET buyDate = ?, sellerId = ?, buyerId = ? WHERE invoiceId = ?';
    db.query(query, [buyDate, sellerId, buyerId, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error actualizando la factura');
            return;
        }
        res.status(200).send('Factura actualizada');
    });
});

//Eliminar una factura
app.delete('/billing/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM billing WHERE invoiceId = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando la factura');
            return;
        }
        res.status(200).send('Factura eliminada');
    });
});

//sell

//Obtener todas las ventas
app.get('/sell', (req, res) => {
    const query = 'SELECT * FROM sell';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo las ventas');
            return;
        }
        res.json(results);
    });
});

//crear una nueva venta:
app.post('/sell', (req, res) => {
    const { id, sellDate, buyerId, sellerId } = req.body;
    const query = 'INSERT INTO sell (id, sellDate, buyerId, sellerId) VALUES (?, ?, ?, ?)';
    db.query(query, [id, sellDate, buyerId, sellerId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creando la venta');
            return;
        }
        res.status(201).send('Venta creada');
    });
});

//obtener una venta por su ID:
app.get('/sell/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM sell WHERE id = ?';
    db.query(query, [id], (err, resutls) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo la venta');
            return;
        }
        if (results.length === 0) {
            res.status(404). send('Venta no encontrada');
            return;
        }
        res.json(results[0]);
    });
});

//Actualizar una venta
app.put('/sell/:id', (req, res) => {
    const { id } = req.params;
    const { sellDate, buyerId, sellerId } = req.body;
    const query = 'UPDATE sell SET sellDate = ?, buyerId = ?, sellerId = ? WHERE id = ?';
    db.query(query, [sellDate, buyerId, sellerId, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error actualizando la venta');
            return;
        }
        res.status(200).send('Venta actualizada');
    });
});

//eliminar una venta
app.delete('/sell/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM sell WHERE id = ?';
    db.query(query, [id], (err, resutls) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error eliminando la venta');
            return;
        }
        res.status(200).send('Venta eliinada')
    });
});