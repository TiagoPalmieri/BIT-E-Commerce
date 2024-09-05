const db = require('../config');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../dto/Users');

exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error obteniendo los usuarios' });
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
            res.status(500).json({ message: 'Error obteniendo el usuario' });
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
            res.status(500).json({ message: 'Error creando el usuario' });
            return;
        }
        res.status(201).json({ message: 'Usuario creado' });
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
            res.status(500).json({ message: 'Error actualizando el usuario' });
            return;
        }
        res.json({ message: 'Usuario actualizado' });
    });
};

exports.deleteUser = (req, res) => {
    const { userId } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error eliminando el usuario' });
            return;
        }
        res.json({ message: 'Usuario eliminado' });
    });
};

exports.register = async (req, res) => {
    const { email, userPassword } = req.body;
    const userId = uuidv4();
    const hashedPassword = bcrypt.hashSync(userPassword, 8);

    try {
        const newUser = await Users.create({
            userId,
            email,
            hashedPassword,
            fullName
        });

        const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.SECRET_KEY, { expiresIn: 86400 })

        return res.status(201).json({ message: 'Registro exitoso', token: token });

    } catch (error) {
        if (error instanceof sequelize.UniqueConstraintError) {
            return res.status(403).json({ message: 'Cuenta ya existente' });
        } else if (error instanceof sequelize.ValidationError) {
            return res.status(400).json({ message: error.errors[0].message });
        } else {
            return res.status(402).json({ message: 'Error desconocido' });
        }
    }
};

exports.login = async (req, res) => {
    const { email, userPassword } = req.body;

    if (result.success) return res.status(404).json({ message: 'User not found' });

    const user = results[0];
    const isValidPassword = bcrypt.compareSync(userPassword, user.userPassword);

    if (!isValidPassword) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: 86400 });

    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ accessToken: token });

}
