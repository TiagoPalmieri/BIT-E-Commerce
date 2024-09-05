const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM product';

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error en obteniendo los productos' });
            return;
        }
        res.status(200).json(results);
    });
};

exports.getProductById = (req, res) => {
    const sku = req.params.sku
    const query = 'SELECT * FROM product WHERE sku = ?';
    db.query(query, [sku], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error al mostrar education' });
            return;
        }
        res.status(200).json(result[0]);
    });
};

exports.setNewProduct = (req, res) => {
    const query = 'INSERT INTO product (sku, description, type, price, stock) VALUES(?,?,?,?,?)'
    const { sku, description, type, price, stock } = req.body;

    db.query(query, [sku, description, type, price, stock], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'En este momento no pudimos agregar tu producto' });
            return;
        }
        res.json(201).json({ message: 'Usuario creado' });
    });
};

exports.updateProduct = (req, res) => {
    const sku = req.params.sku;
    const { description, type, price, stock } = req.body;
    const query = 'UPDATE product SET description = ?, type = ?, price = ?, stock = ? WHERE sku = ?';

    db.query(query, [description, type, price, stock, sku], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error actualizando el producto' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'producto no encontrado' });
            return;
        }
        res.status(200).json({ message: 'producto actualizado' });
    });
};

exports.deleteProduct = (req, res) => {
    const sku = req.params.sku;
    const query = 'DELETE FROM product where sku = ?';

    db.query(query, [sku], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error eliminando producto' });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'No se pudo encontrar producto' });
            return;
        }
        res.status(200).json({ message: 'producto eliminado correctamente' })
    });
};
