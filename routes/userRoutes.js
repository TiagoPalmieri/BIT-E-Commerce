const { getAllUsers, getUserById, setNewUser, updateUser, deleteUser } = require('../controllers/userControllers');
const express = require('express');
router = express.Router();

router.get('/users', getAllUsers);

// Mostrar un usuario por su ID
router.get('/users:userId', getUserById);

// Crear un nuevo usuario
router.post('/users', setNewUser);

//Actualizar un usuario.

router.put('/users/:userId', updateUser);

//Eliminar un usuario.

router.delete('/users/:usersId', deleteUser);

module.exports = router