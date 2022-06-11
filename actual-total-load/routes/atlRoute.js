const express = require('express');
const router = express.Router();

const updateController = require('../controllers/atlUpdateController')
router.get('/Update/:date_from?/:country?', updateController.get);

const filterController = require('../controllers/atlFilterController')
router.get('/filter', filterController.get);

const controller = require('../controllers/atlController')
router.get('/:date_from?/:country?/:format?', controller.get);

module.exports = router;
