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
    const { email, userPassword, fullName, telephone, dni, address, rol } = req.body;
    const userId = uuidv4(); // Genera un ID único
    const hashedPassword = bcrypt.hashSync(userPassword, 8);
    const query = 'INSERT INTO users (id, email, userPassword, fullName, telephone, dni, address, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [userId, email, hashedPassword, fullName, telephone, dni, address, rol], (err, results) => {
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
    const { email, userPassword, fullName, telephone, dni, address, rol } = req.body;
    const hashedPassword = bcrypt.hashSync(userPassword, 8);
    const query = 'UPDATE users SET email = ?, userPassword = ?, fullName = ?, telephone = ?, dni = ?, address = ?, rol = ? WHERE id = ?';
    db.query(query, [email, hashedPassword, fullName, telephone, dni, address, rol, userId], (err, result) => {
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
    const { email, userPassword  } = req.body;
    const userId = uuidv4();
    const hashedPassword = bcrypt.hashSync(userPassword , 8);
    const query = 'INSERT INTO users (id, email, userPassword) VALUES (?, ?, ?)';
    db.query(query, [userId, email, hashedPassword], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database error');
            return;
        }
        const token = jwt.sign({ id: userId, email: email }, process.env.SECRET_KEY, { expiresIn: 86400 });

        res.status(201).json({
            message: 'User registered successfully',
            accessToken: token
        });
    });
};

exports.login = (req, res) => {
    const { email, userPassword } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(userPassword, user.userPassword);

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: 86400 });

        res.cookie('token', token, { httpOnly: true });
        
        // Puedes redirigir a una página específica después del inicio de sesión exitoso
        res.status(200).json({ accessToken: token, redirect: '../main-page/index.html' });
    });
};
