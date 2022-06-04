const express = require('express');
const router = express.Router();

const controller = require('../controllers/atlController')
router.get('/:date_from?/:country?/:format?', controller.get);

module.exports = router;
