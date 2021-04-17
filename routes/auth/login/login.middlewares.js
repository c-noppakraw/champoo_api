const { check } = require('express-validator');

const validator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ Username'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่ Password')
];

module.exports = { validator };