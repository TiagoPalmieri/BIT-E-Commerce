const db = require('../config');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken')

exports.getAllSellers = (req, res) => {
    const query = 'SELECT * FROM seller s INNER JOIN users u ON s.userId = u.id;';
    db.query(query, (err, results) => {
        if (err) {
            console.error('err');
            res.status(500).send('Error obteniendo contactos');
            return;
        }
        res.status(200).json(results)
    });
}

exports.getSellerById = (req, res) => {
    const token = req.cookies.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(500).send('Internal Server Error');
        }

        const userEmail = decoded.email;

        const query = 'SELECT * FROM seller s INNER JOIN users u ON s.userId = u.id WHERE u.email = ?';
        db.query(query, [userEmail], (err, result) => {
            if (err) {
                console.error('Error obteniendo contacto:', err);
                return res.status(500).send('Error obteniendo contacto');
            }
            if (result.length === 0) {
                return res.status(404).send('No encontrado');
            }
            res.status(200).json(result[0]);
        });
    });
};

exports.setNewSeller = (req, res) => {
    const sellerId = uuidv4();
    const { userId } = req.params
    const query = 'INSERT INTO seller (id, userId, sells, publications, gains, dni) VALUES (?, ?, ?, ?, ?, ?)'
    const { dni } = req.body
    db.query(query, [sellerId, userId, 0, 0, 0, dni], (err, result) => {
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
    const { sells, publications, gains, dni } = req.body;
    const query = 'UPDATE users SET id = ?, sells = ?, publications = ?, gains = ?, dni = ?'
    db.query(query, [sellerId, sells, publications, gains, dni], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error actualizando el usuario');
            return;
        }
        res.send('Usuario actualizado');
    });
};
