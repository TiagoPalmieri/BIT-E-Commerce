const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllSellers = (req, res) => {
    const query = 'SELECT * FROM seller';
    db.query(query, (err, results) => {
        if (err) {
            console.error('err');
            res.status(500).send('Error obteniendo contactos');
            return;
        }
    });
}

exports.getSellerById = (req, res) => {
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
}

exports.setNewSeller = (req, res) => {
    const sellerId = uuidv4();
    const {userId} = req.params
    const query = 'INSERT INTO seller (id, userId, sells, publications, gains, dni) VALUES (?, ?, ?, ?, ?, ?)'
    const {dni} = req.body
    db.query(query, [sellerId, userId, 0,  0, 0, dni], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
            return;
        }
        res.status(200).send('Usuario creado correctamente');
    });
}

exports.deleteSeller = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM seller WHERE id = ?'
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando el usuario')
            return;
        }
        res.send('Usuario eliminado')
    });
}

exports.updateSeller = (req, res) => {
    const { sellerId } = req.params;
    const id = req.params
    const {sells, publications, gains, dni} = req.body;
    const query = 'UPDATE users SET id = ?, sells = ?, publications = ?, gains = ?, dni = ?'
    db.query(query, [sellerId, sells, publications, gains, dni], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error actualizando el usuario');
                return;
            }
            res.send('Usuario actualizado');
        });
}
