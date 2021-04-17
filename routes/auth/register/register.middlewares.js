const { check } = require('express-validator');
const service = require("../register/register.service");

const validator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุ Username')
        .custom(username => {
            return service.matchUsername(username)
            .then(user => {
                if (user) return Promise.reject('ชื่อผู้ใช้นี้ถูกใช้งานแล้ว');
            });
        }),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password ต้องมีอย่างน้อย 6 ตัว')
        .not()
        .isEmpty()
        .withMessage('กรุณาใส่ Password')
        .custom((value, { req }) => value === req.body.confirm_password)
        .withMessage('รหัสผ่านไม่ตรงกันกรุณาระบุรหัสผ่านใหม่อีกครั้ง'),
    check('name')
        .not()
        .isEmpty()
        .withMessage('กรุณาระบุชื่อ'),
];

module.exports = { validator };