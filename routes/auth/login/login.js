const express = require('express');
const router = express.Router();
const auth = require('../../../plugins/passport/index');
const controllers = require('./login.controllers');
const middlewares = require('./login.middlewares');

router.post('/', middlewares.validator, controllers.login);
router.get('/test', auth, (req, res, next) => {
    return res.send("Welcome to auth routes");
});

module.exports = router;