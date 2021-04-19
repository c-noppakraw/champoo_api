const express = require('express');
const router = express.Router();
const auth = require('../../../plugins/passport/index');
const controllers = require('./portfolio.controllers');
const middlewares = require('./portfolio.middlewares');

router.get('/', auth, controllers.showPortfolio);
router.post('/', auth, middlewares.validatorCreate, controllers.createPortfolio);
router.get('/:id', auth, controllers.setPortfolio);
router.put('/:id', auth, middlewares.validatorEdit, controllers.editPortfolio);
router.delete('/:id', auth, controllers.deletePortfolio);

module.exports = router;