const { v4: uuidv4 } = require('uuid');
const db = require('../config');

exports.getAllSells = (req, res) => {
    const query = 'SELECT * FROM sell';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo las ventas' });
            return;
        }
        res.json(results);
    });
};

exports.getSellById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM sell WHERE id = ?';
    db.query(query, [id], (err, resutls) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo la venta' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: 'Venta no encontrada' });
            return;
        }
        res.json(results[0]);
    });
};

exports.setNewSell = (req, res) => {
    const { id, sellDate, buyerId, sellerId } = req.body;
    const query = 'INSERT INTO sell (id, sellDate, buyerId, sellerId) VALUES (?, ?, ?, ?)';
    db.query(query, [id, sellDate, buyerId, sellerId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creando la venta' });
            return;
        }
        res.status(201).json({ message: 'Venta creada' });
    });
};

exports.updateSell = (req, res) => {
    const { id } = req.params;
    const { sellDate, buyerId, sellerId } = req.body;
    const query = 'UPDATE sell SET sellDate = ?, buyerId = ?, sellerId = ? WHERE id = ?';
    db.query(query, [sellDate, buyerId, sellerId, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error actualizando la venta' });
            return;
        }
        res.status(200).json({ message: 'Venta actualizada' });
    });
};

exports.deleteSell = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM sell WHERE id = ?';
    db.query(query, [id], (err, resutls) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error eliminando la venta' });
            return;
        }
        res.status(200).json({ message: 'Venta eliinada' })
    });
};
