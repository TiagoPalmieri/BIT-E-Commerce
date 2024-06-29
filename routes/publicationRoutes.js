const express = require('express');
router = express.Router();
const {getAllPublications, getPublicationById, setNewPublication, updatePublication, deletePublication} = require('../controllers/publicationController')


//publication

router.get('/publications', getAllPublications);

router.get('/publication/:id', getPublicationById);

router.post('/publications', setNewPublication);

router.put('/publications/:id', updatePublication);

router.delete('/publications/:id', deletePublication);

module.exports = router

