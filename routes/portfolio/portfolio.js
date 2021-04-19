const express = require('express');
const router = express.Router();
const controllers = require('./portfolio.controllers');

router.get('/', controllers.showPortfolio);

module.exports = router;