const express = require('express');
const router = express.Router();

const updateController = require('../controllers/agtUpdateController')
router.get('/Update/:date_from?/:country?/:production_type?', updateController.get);

const controller = require('../controllers/agtController')
router.get('/:date_from?/:country?/:production_type?/:format?', controller.get);

module.exports = router;