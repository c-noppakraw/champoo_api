const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./login.service');

const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const payload = await service.checkData(req.body.username, req.body.password);
        if(!payload) res.status(200).json({ Message: 'Username, Password ไม่ถูกต้อง! หรือ ไม่พบผู้ใช้งานในระบบ!' });

        return res.status(200).json({ payload: payload });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login };