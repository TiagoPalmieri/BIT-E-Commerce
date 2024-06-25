const db = require('../dbConfig');
const { v4: uuidv4 } = require('uuid');

exports.getAllPublications = (req, res) => {
    const query = 'SELECT * FROM publication';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo las compañías');
            return;
        }
        res.json(results);
    });
}

exports.getPublicationById = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM company WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo la compañía');
            return;
        }
        if (result.length === 0) {
            res.status(404).send('Compañía no encontrada');
            return;
        }
        res.json(result[0]);
    });
}

exports.setNewPublication = (req, res) => {
    const { date, description, title, sellerId, productSku } = req.body;
    const id = uuidv4();
    const query = 'INSERT INTO publication (id, date, description, title, sellerId, productSku) VALUES (?,?,?,?,?,?)';
    db.query(query, [id, date, description, title, sellerId, productSku], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creando la publicacion');
            return;
        }
        res.status(201).send('publicacion creada');
    });
}

exports.updatePublication = (req, res) => {
    const id = req.params.id;
    const { date, description, title, productSku } = req.body;
    const query = 'UPDATE publication SET date = ?, description = ?, title = ?,  productSku =? WHERE id = ?';
    db.query(query, { date, description, title, productSku, id }, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error actualizando la publicacion');
            return;
        }
        if (resultaffectedRows === 0) {
            res.status(404).send('publicacion no encontradda');
            return;
        }
        res.status(200).send('publicacion actualizada');
    });
}

exports.deletePublication = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM publication WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando la publicacion');
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('publicacion no encontrada');
            return;
        }
        res.status(200).send('publicacion eliminada');
    });
}

