const db = require('../dbConfig');
const { v4: uuidv4 } = require('uuid');

exports.getAllSells = (req, res) => {
    const query = 'SELECT * FROM sell';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo las ventas');
            return;
        }
        res.json(results);
    });
}

exports.getSellById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM sell WHERE id = ?';
    db.query(query, [id], (err, resutls) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo la venta');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Venta no encontrada');
            return;
        }
        res.json(results[0]);
    });
}

exports.setNewSell = (req, res) => {
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
}

exports.updateSell = (req, res) => {
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
}

exports.deleteSell = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM sell WHERE id = ?';
    db.query(query, [id], (err, resutls) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando la venta');
            return;
        }
        res.status(200).send('Venta eliinada')
    });
}

