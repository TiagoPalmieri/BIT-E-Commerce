const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllTransactions = (req, res) => {
    const query = 'SELECT * FROM transactionHistory';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error obteniendo las transacciones' });
            return;
        }
        res.json(results);
    });
}

exports.getTransactionsById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM transactionHistory WHERE idTransaction = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo la transacción' });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ message: 'Transacción no encontrada' });
            return;
        }
        res.json(results[0]);
    });
}

exports.setNewTransaction = (req, res) => {
    const { idTransaction, buyerId, sellerId, productSku } = req.body;
    const query = 'INSERT INTO transactionHistory (idTransaction, buyerId, sellerId, productSku) VALUES (?, ?, ?, ?)';
    db.query(query, [idTransaction, buyerId, sellerId, productSku], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creando la transacción' });
            return;
        }
        res.status(201).json({ message: 'Transacción creada' });
    });
}

exports.updateTransaction = (req, res) => {
    const { id } = req.params;
    const { buyerId, sellerId, productSku } = req.body;
    const query = 'UPDATE transactionHistory SET buyerId = ?, sellerId = ?, productSku = ? WHERE idTransaction = ?';
    db.query(query, [buyerId, sellerId, productSku, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error acutalizando la transacción' });
            return;
        }
        res.status(200).json({ message: 'Transacción actualizada' });
    });
}

exports.deleteTransaction = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM transactionHistory WHERE idTransaction = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error eliminando la transacción' });
            return;
        }
        res.status(200).json({ message: 'Transacción eliminada' });
    });
};
