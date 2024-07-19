const { getAllUsers, getUserById, setNewUser, updateUser, deleteUser, login, register } = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();
const authHeader = require('../controllers/auth');


router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);
router.post('/users', setNewUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);
router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;
