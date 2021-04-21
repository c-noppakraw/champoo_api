const express = require('express');
const router = express.Router();
const controllers = require('./history.controllers');

router.get('/', controllers.showHistory);

module.exports = router;