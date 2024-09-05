const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllBillings = (req, res) => {
    const query = 'SELECT * FROM billing';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo las facturas' });
            return;
        }
        res.json(results);
    });
};

exports.getBillingById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM billing WHERE invoiceId = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo la factura' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: 'Factura no encontrada' });
            return;
        }
        res.json(results[0]);
    });
};

exports.setNewBilling = (req, res) => {
    const { invoiceId, buyDate, sellerId, buyerId } = req.body;
    const query = 'INSERT INTO billing (invoiceId, buyDate, sellerId, buyerId) VALUES (?, ?, ?, ?)';
    db.query(query, [invoiceId, buyDate, sellerId, buyerId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creando la factura' });
            return;
        }
        res.status(201).json({ message: 'Factura creada' });
    });
};

exports.updateBilling = (req, res) => {
    const { id } = req.params;
    const { buyDate, sellerId, buyerId } = req.body;
    const query = 'UPDATE billing SET buyDate = ?, sellerId = ?, buyerId = ? WHERE invoiceId = ?';
    db.query(query, [buyDate, sellerId, buyerId, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error actualizando la factura' });
            return;
        }
        res.status(200).json({ message: 'Factura actualizada' });
    });
};

exports.deleteBilling = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM billing WHERE invoiceId = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error eliminando la factura' });
            return;
        }
        res.status(200).json({ message: 'Factura eliminada' });
    });
};
