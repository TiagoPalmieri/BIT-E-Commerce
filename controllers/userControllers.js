const db = require('../config');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo los usuarios');
            return;
        }
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const { userId } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error obteniendo el usuario');
            return;
        }
        res.json(results[0]);
    });
};

exports.setNewUser = (req, res) => {
    const { mail, password_, name_, lastname, telephone, dni, roles, calification } = req.body;
    const userId = uuidv4(); //Genera un ID unico
    const hashedPassword = bcrypt.hashSync(password_, 8);
    const query = 'INSERT INTO users (id, mail, password_, name_, lastname, telephone, dni, roles, calification) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [userId, mail, hashedPassword, name_, lastname, telephone, dni, roles, calification], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error creando el usuario');
            return;
        }
        res.status(201).send('Usuario creado');
    });
};

exports.updateUser = (req, res) => {
    const { userId } = req.params;
    const { mail, password_, name_, lastname, telephone, dni, roles, calification } = req.body;
    const hashedPassword = bcrypt.hashSync(password_, 8);
    const query = 'UPDATE users SET mail = ?, password_ = ?, name_ = ?, lastname = ?, telephone = ?, dni = ?, roles = ?, calification = ? WHERE id = ?';
    db.query(query, [mail, hashedPassword, name_, lastname, telephone, dni, roles, calification, userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error actualizando el usuario');
            return;
        }
        res.send('Usuario actualizado');
    });
};

exports.deleteUser = (req, res) => {
    const { userId } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error eliminando el usuario');
            return;
        }
        res.send('Usuario eliminado');
    });
};

exports.register = (req, res) => {
    const { mail, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const query = 'INSERT INTO users (mail, password_) VALUES (?, ?)';
    db.query(query, [mail, hashedPassword], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
            return;
        }
        res.status(201).send('User registered successfully');
    });
};

exports.login = (req, res) => {
    const { mail, password } = req.body;
    const query = 'SELECT * FROM users WHERE mail = ?';
    db.query(query, [mail], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }

        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password_);

        if (!isValidPassword) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id, name_: user.name_ }, process.env.SECRET_KEY, { expiresIn: 86400 });

        res.cookie('token', token, { httpOnly: true });
        res.status(200).send('Logged in successfully');
    });
};