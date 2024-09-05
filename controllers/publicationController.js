const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllPublications = (req, res) => {
    const query = 'SELECT * FROM publication';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo las compañías' });
            return;
        }
        res.json(results);
    });
};

exports.getPublicationById = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM company WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo la compañía' });
            return;
        }
        if (result.length === 0) {
            res.status(404).json({ message: 'Compañía no encontrada' });
            return;
        }
        res.json(result[0]);
    });
};

exports.setNewPublication = (req, res) => {
    const { date, description, title, sellerId, productSku } = req.body;
    const id = uuidv4();
    const query = 'INSERT INTO publication (id, date, description, title, sellerId, productSku) VALUES (?,?,?,?,?,?)';
    db.query(query, [id, date, description, title, sellerId, productSku], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error creando la publicacion' });
            return;
        }
        res.status(201).json({ message: 'publicacion creada' });
    });
};

exports.updatePublication = (req, res) => {
    const id = req.params.id;
    const { date, description, title, productSku } = req.body;
    const query = 'UPDATE publication SET date = ?, description = ?, title = ?,  productSku =? WHERE id = ?';
    db.query(query, { date, description, title, productSku, id }, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error actualizando la publicacion' });
            return;
        }
        if (resultaffectedRows === 0) {
            res.status(404).json({ message: 'publicacion no encontradda' });
            return;
        }
        res.status(200).json({ message: 'publicacion actualizada' });
    });
};

exports.deletePublication = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM publication WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error eliminando la publicacion' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'publicacion no encontrada' });
            return;
        }
        res.status(200).json({ message: 'publicacion eliminada' });
    });
};
