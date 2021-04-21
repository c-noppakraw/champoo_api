const { check } = require('express-validator');

const validatorCreate = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ หัวข้อเรื่อง'),
    check('content')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่ รายละเอียด'),
];

const validatorEdit = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ หัวข้อเรื่อง'),
    check('content')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่ รายละเอียด'),
];

module.exports = { validatorCreate, validatorEdit };