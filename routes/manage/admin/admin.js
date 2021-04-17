const express = require('express');
const router = express.Router();
const auth = require('../../../plugins/passport/index');
const controllers = require('./admin.controllers');
const middlewares = require('./admin.middlewares');

router.post('/', auth, middlewares.validatorCreate, controllers.createAdmin);
router.get('/:id', auth, controllers.setAdmin);
router.put('/:id', auth, middlewares.validatorEdit, controllers.editAdmin);
router.delete('/:id', auth, controllers.deleteAdmin);

module.exports = router;