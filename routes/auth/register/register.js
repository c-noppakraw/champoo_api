const express = require('express');
const router = express.Router();
const controllers = require('./register.controllers');
const middlewares = require('./register.middlewares');

router.post('/', middlewares.validator, controllers.register);

module.exports = router;