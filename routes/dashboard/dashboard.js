const express = require('express');
const router = express.Router();
const controllers = require('./dashboard.controllers');

router.get('/', controllers.showDashboard);
router.get('/:id', controllers.setDashboard);

module.exports = router;