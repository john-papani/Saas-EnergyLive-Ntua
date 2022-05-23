const express = require('express');
const router = express.Router();

const findUserController = require('../controllers/findUserController')
router.get('/find/:email?', findUserController.get);

const addUserController = require('../controllers/addUserController')
router.post('/add/:first_name?/:last_name?/:email?', addUserController.post);

const extendUserController = require('../controllers/extendUserController')
router.post('/extend/:email?/:days?', extendUserController.post);

module.exports = router;