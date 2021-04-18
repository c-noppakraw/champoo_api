const express = require('express');
const router = express.Router();
const auth = require('../../../plugins/passport/index');
const controllers = require('./dashboard.controllers');
const middlewares = require('./dashboard.middlewares');

router.get('/', auth, controllers.showDashboard);
router.post('/', auth, middlewares.validatorCreate, controllers.createDashboard);
router.get('/:id', auth, controllers.setDashboard);
router.put('/:id', auth, middlewares.validatorEdit, controllers.editDashboard);
router.delete('/:id', auth, controllers.deleteDashboard);

module.exports = router;