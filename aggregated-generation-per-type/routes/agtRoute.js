const express = require('express');
const router = express.Router();

const controller = require('../controllers/agtController')
router.get('/:date_from?/:country?/:production_type?/:format?', controller.get);

module.exports = router;