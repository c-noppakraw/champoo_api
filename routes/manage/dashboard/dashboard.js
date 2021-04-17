const express = require('express');
const router = express.Router();
const auth = require('../../../plugins/passport/index');
const controllers = require('./dashboard.controllers');
const middlewares = require('./dashboard.middlewares');

router.get('/', auth, controllers.showDashboard);
router.post('/', auth, middlewares.validatorCreate, controllers.createDashboard);
router.put('/:id', auth, middlewares.validatorEdit, controllers.editDashboard);

module.exports = router;