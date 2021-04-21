const express = require('express');
const router = express.Router();
const auth = require('../../../plugins/passport/index');
const controllers = require('./history.controllers');
const middlewares = require('./history.middlewares');
const uploadProfile = require('./history.storage');

router.get('/', auth, controllers.showHistory);
router.post('/', auth, middlewares.validatorCreate, uploadProfile.single('profile'), controllers.createHistory);
router.get('/:id', auth, controllers.setHistory);
router.put('/:id', auth, middlewares.validatorEdit, controllers.editHistory);
router.put('/profile/:id', auth, uploadProfile.single('profile'), controllers.editProfile);

module.exports = router;