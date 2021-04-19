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
    check('dateDebut')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่ วันที่ผลงานออก'),
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
    check('dateDebut')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่ วันที่ผลงานออก'),
];

module.exports = { validatorCreate, validatorEdit };