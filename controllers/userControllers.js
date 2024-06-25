const db = require('../config');
const { v4: uuidv4 } = require('uuid');

exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users'
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo los usuarios');
            return;
        }
        res.json(results);
    });
}

exports.getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?'
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo el usuario');
            return;
        }
        res.json(results[0]);
    });
}

exports.setNewUser = (req, res) => {
    const { mail, password_, name_, lastname, telephone, dni, roles, calification } = req.body;
    const userId = uuidv4(); //Genera un ID unico
    const query = 'INSERT INTO users (id, mail, password_, name_, lastname, telephone, dni, roles, calification) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    db.query(query, [userId, mail, password_, name_, lastname, telephone, dni, roles, calification],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creando el usuario');
                return;
            }
            res.status(201).send('Usuario creado')
        });
}

exports.updateUser = (req, res) => {
    const { userId } = req.params;
    const { mail, password_, name_, lastname, telephone, dni, roles, calification } = req.body;
    const query = 'UPDATE users SET mail = ?, password_ = ?, name_ = ?, lastname = ?, telephone = ?, dni = ?, roles = ?, calification = ? WHERE userId = ?'
    db.query(query, [mail, password_, name_, lastname, telephone, dni, roles, calification, userId],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error actualizando el usuario');
                return;
            }
            res.send('Usuario actualizado');
        });
}

exports.deleteUser = (req, res) => {
    const { userId } = req.params;
    const query = 'DELETE FROM uses WHERE userId = ?'
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando el usuario')
            return;
        }
        res.send('Usuario eliminado')
    });
}

