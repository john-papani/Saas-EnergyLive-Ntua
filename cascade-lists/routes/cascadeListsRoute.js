const express = require('express');
const router = express.Router();

// fpt = Filter Production Types according to selected country
const fptController = require('../controllers/fptController')
router.get('/filter-production-type/:country?', fptController.get);

// fc: Filter Countries according to selected quantity type
const fcController = require('../controllers/fcController')
router.get('/filter-countries/:quantity?', fcController.get);

module.exports = router;