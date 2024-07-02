
const { getAllUsers, getUserById, setNewUser, updateUser, deleteUser, login, register } = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();
const {verifyToken} = require('../controllers/auth');

const app = express()

router.get('/users', getAllUsers);

// Mostrar un usuario por su ID
router.get('/users:userId', getUserById);

// Crear un nuevo usuario
router.post('/users', setNewUser);

router.post('/auth/register', register)


router.post('/auth/login', login);

//Actualizar un usuario.

router.put('/users/:userId', updateUser);

//Eliminar un usuario.

router.delete('/users/:usersId', deleteUser);

module.exports = router