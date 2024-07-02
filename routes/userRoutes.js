const { getAllUsers, getUserById, setNewUser, updateUser, deleteUser, login, register } = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/auth');

router.get('/users', verifyToken, getAllUsers);
router.get('/users/:userId', verifyToken, getUserById);
router.post('/users', verifyToken, setNewUser);
router.put('/users/:userId', verifyToken, updateUser);
router.delete('/users/:userId', verifyToken, deleteUser);
router.post('/auth/register', register);
router.post('/auth/login', login);

module.exports = router;