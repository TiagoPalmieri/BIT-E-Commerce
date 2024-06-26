const db = require('../dbConfig');
const { v4: uuidv4 } = require('uuid');

exports.getAllBillings = (req, res) => {
    const query = 'SELECT * FROM billing';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo las facturas');
            return;
        }
        res.json(results);
    });
}

exports.getBillingById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM billing WHERE invoiceId = ?';
    db.query(query, [id], (err, results) => {
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
}

exports.setNewBilling = (req, res) => {
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
}

exports.updateBilling = (req, res) => {
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
}

exports.deleteBilling = (req, res) => {
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
}

