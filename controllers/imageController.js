const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllImages = (req, res) => {
    const query = 'SELECT * FROM image where productSku = ?';
    const productSku = req.params.sku;
    db.query(query, [productSku], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error dando las imagenes' });
            return;
        }
        res.json(results);
    });
};

exports.getImageById = (req, res) => {
    const { sku, id } = req.params;
    const query = 'SELECT * FROM image where productSku = ? AND id = ?';

    db.query(query, [sku, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Imagenes obtenidas' });
            return;
        }
        res.json(results[0]);
    });
}

exports.setNewImage = (req, res) => {
    const sku = req.params.sku;
    const id = uuidv4();
    const { format, weight, resolution, directory } = req.body;

    const query = 'INSERT INTO image (id, format, weight, resolution, directory, productSku) VALUES (?,?,?,?,?,?)';

    db.query(query, [id, format, weight, resolution, directory, sku], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Hubo un error' });
            return;
        }
        res.status(201).json({ message: 'Producto agregado' });
    });
}

exports.updateImage = (req, res) => {
    const id = req.params.id;
    const { format, weight, resolution, directory, sku } = req.body;
    const query = 'UPDATE image SET format = ?, weight = ?, resolution = ?, directory, productSku =? WHERE id = ?';

    db.query(query, [format, weight, resolution, directory, sku, id], (err, result) => {
        if (err) {
            console.error(error);
            res.status(500).json({ message: 'Error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'No se encontró este recurso' });
            return;
        }
        res.status(200).json({ message: 'imagen actualizada' })
    });
}

exports.deleteImage = (req, res) => {
    const id = req.params.id
    const query = 'DELETE FROM product WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'No se encontro el recurso' });
            return;
        }
        res.status(200).json({ message: 'Todo bien' });
    })
}